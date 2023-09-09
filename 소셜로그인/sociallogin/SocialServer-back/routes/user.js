const jwt = require("jsonwebtoken");
const auth = require("../jwt/auth");
const refreshauth = require("../jwt/refreshauth");
const axios = require("axios");

module.exports = (app, User) => {
  ///카카오로그이
  ///카카오로그이
  ///카카오로그이
  ///카카오로그인

  app.post("/kakao", async (req, res) => {
    const { code } = req.body; // 클라이언트에서 보낸 code를 받아옵니다.

    /**
     * 인가코드 보내기
     */
    console.log(code);
    const response = await axios({
      method: "POST",
      url: "https://kauth.kakao.com/oauth/token",
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      data: {
        grant_type: "authorization_code",
        client_id: `${process.env.KAKAO_CLIENT_KEY}`,
        redirect_uri: "http://localhost:3000/oauth",
        code: code,
        state: "kakao",
      },
    });

    const { access_token } = response.data;

    /**인가코드를 넘겨서 받아온 토큰으로 유저 인포 받아오기 */
    const userInfoResponse = await axios({
      method: "GET",
      url: "https://kapi.kakao.com/v2/user/me",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    /**
     * db에 저장하기
     */
    let mongoUser = await User.findOne({
      email: userInfoResponse.data.kakao_account.email,
      method: "kakao",
    });
    if (!mongoUser) {
      mongoUser = new User({
        email: userInfoResponse.data.kakao_account.email,
        nickName: userInfoResponse.data.properties.nickname,
        password: userInfoResponse.data.kakao_account.email,
        method: "kakao",
        profileContent: "카카오로 회원가입 하였습니다.",
      });
      await mongoUser.save();
    }

    /**토큰 바디 생성 */
    const payload = {
      email: mongoUser.email,
      exp: Math.floor(Date.now() / 1000) + 60 * 30, //토큰 유효기간 30분
    };

    /**리프레시토큰 바디 생성 */
    const refreshPayload = {
      email: mongoUser.email,
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 1,
    };

    /**토큰  생성 */
    const token = jwt.sign(payload, "jwtSecret");

    /**리프레시 토큰 바디 생성 */
    const refreshToken = jwt.sign(refreshPayload, "jwtRefreshSecret");
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      sameSite: "None",
      secure: true,
    });

    return res
      .status(200)
      .json({ data: userInfoResponse.data, token, Accesstoken: access_token });
  });

  ///네이버로그인
  ///네이버로그인
  ///네이버로그인
  ///네이버로그인
  ///네이버로그인

  app.post("/naver", async (req, res) => {
    const { code } = req.body; // 클라이언트에서 보낸 code를 받아옵니다.

    /**
     * 인가코드 보내기
     */
    const response = await axios({
      method: "POST",
      url: "https://nid.naver.com/oauth2.0/token",
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      data: {
        grant_type: "authorization_code",
        client_id: `${process.env.NAVER_CLIENT_KEY}`,
        client_secret: `${process.env.NAVER_CLIENT_SECRET_KEY}`,
        code: code,
        state: "naver",
      },
    });

    const { access_token } = response.data;

    /**인가코드를 넘겨서 받아온 토큰으로 유저 인포 받아오기 */
    const userInfoResponse = await axios({
      method: "GET",
      url: "https://openapi.naver.com/v1/nid/me",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    /**
     * 몽고 디비 찾고 넣
     */

    let mongoUser = await User.findOne({
      email: userInfoResponse.data.response.email,
      method: "naver",
    });
    if (!mongoUser) {
      mongoUser = new User({
        email: userInfoResponse.data.response.email,
        nickName: userInfoResponse.data.response.nickname,
        method: "naver",
        profileContent: "네이버로 회원가입 하였습니다.",
      });
      await mongoUser.save();
    }

    const payload = {
      email: mongoUser.email,
      exp: Math.floor(Date.now() / 1000) + 60 * 30, //토큰 유효기간 30분
    };

    const refreshPayload = {
      email: mongoUser.email,
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 1,
    };
    /**
     * 토큰생성 리프레시 토큰
     */
    const token = jwt.sign(payload, "jwtSecret");
    const refreshToken = jwt.sign(refreshPayload, "jwtRefreshSecret");
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      sameSite: "None",
      secure: true,
    });

    return res
      .status(200)
      .json({
        data: userInfoResponse.data.response,
        token,
        Accesstoken: access_token,
      });
  });

  //////구글로그인
  //////구글로그인
  //////구글로그인
  //////구글로그인
  //////구글로그인
  //////구글로그인

  app.post("/google", async (req, res) => {
    const { code } = req.body; // 클라이언트에서 보낸 code를 받아옵니다.

    const response = await axios({
      method: "POST",
      url: "https://oauth2.googleapis.com/token",
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      data: {
        grant_type: "authorization_code",
        client_id: `${process.env.GOOGLE_CLIENT_KEY}`,
        client_secret: `${process.env.GOOGLE_CLIENT_SECRET_KEY}`,
        redirect_uri: "http://localhost:3000/oauth/google",
        code,
      },
    });

    const { access_token } = response.data;

    const userInfoResponse = await axios({
      method: "GET",
      url: "https://www.googleapis.com/oauth2/v2/userinfo",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    let mongoUser = await User.findOne({
      email: userInfoResponse.data.email,
      method: "google",
    });
    if (!mongoUser) {
      mongoUser = new User({
        email: userInfoResponse.data.email,
        nickName: userInfoResponse.data.name,
        password: userInfoResponse.data.email,
        method: "google",
        profileContent: "구글로 회원가입 하였습니다.",
      });
      await mongoUser.save();
    }
    const payload = {
      email: mongoUser.email,
      exp: Math.floor(Date.now() / 1000) + 60 * 30, //토큰 유효기간 30분
    };
    const refreshPayload = {
      email: mongoUser.email,
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 1, // Refresh token valid for 1 days
    };
    const token = jwt.sign(payload, "jwtSecret");
    const refreshToken = jwt.sign(refreshPayload, "jwtRefreshSecret");
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      sameSite: "None",
      secure: true,
    });

    return res.status(200).json({ data: userInfoResponse.data, token });
  });
  /** 토큰 확인  */
  app.get("/usertoken", auth, async (req, res) => {
    // auth 미들웨어 적용
    try {
      const user = await User.findOne({ email: req.user.email });
      console.log("액세스토큰", req.user.email);
      if (!user) res.status(404).send("No user found");
      const userResponse = user.toObject();
      delete userResponse.password;
      console.log(userResponse);
      return res.status(200).json({ userResponse });
    } catch (error) {
      res.status(500).send(error);
    }
  });

  app.get("/refreshToken", refreshauth, async (req, res) => {
    // auth 미들웨어 적용
    try {
      console.log("리프레시토큰", req.user.email);
      const payload = {
        email: req.user.email,
        exp: Math.floor(Date.now() / 1000) + 60 * 30, //토큰 유효기간 30분
      };
      const token = jwt.sign(payload, "jwtRefreshSecret");
      return res.status(200).json({ token });
    } catch (error) {
      res.status(500).send(error);
    }
  });

  app.post("/user/logout", (req, res) => {
    res.cookie("refreshToken", "", {
      expires: new Date(0),
      httpOnly: true,
      sameSite: "None",
      secure: true,
    });
    res.send("ok");
  });

  app.post("/user/logout/naver", async (req, res) => {
    const { token } = req.body;

    await axios.get("https://nid.naver.com/oauth2.0/token", {
      params: {
        client_id: `${process.env.NAVER_CLIENT_KEY}`,
        client_secret: `${process.env.NAVER_CLIENT_SECRET_KEY}`,
        access_token: token,
        grant_type: "delete",
      },
    });
    res.send("ok");
  });
};
