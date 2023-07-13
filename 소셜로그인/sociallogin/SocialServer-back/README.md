# API 명세서

## 실행커맨드 npm run dev

1. **POST /kakaoLogin**
   - Description: Kakao 계정으로 로그인하는 API입니다. 클라이언트에서 제공된 authorization code를 사용하여 사용자의 토큰을 얻고, 해당 토큰으로 사용자 정보를 가져옵니다. 그 후, MongoDB에 사용자를 저장하고 JWT와 JWT refresh 토큰을 생성합니다.
   - Parameters: `code` (query)
   - Response: 200 (OK), 사용자 정보와 JWT를 반환합니다. 
   - Error: 요청이 올바르지 않으면 오류를 반환합니다.

2. **POST /naverLogin**
   - Description: Naver 계정으로 로그인하는 API입니다. 클라이언트에서 제공된 authorization code를 사용하여 사용자의 토큰을 얻고, 해당 토큰으로 사용자 정보를 가져옵니다. 그 후, MongoDB에 사용자를 저장하고 JWT와 JWT refresh 토큰을 생성합니다.
   - Parameters: `code` (query)
   - Response: 200 (OK), 사용자 정보와 JWT를 반환합니다. 
   - Error: 요청이 올바르지 않으면 오류를 반환합니다.

3. **POST /googleLogin**
   - Description: Google 계정으로 로그인하는 API입니다. 클라이언트에서 제공된 authorization code를 사용하여 사용자의 토큰을 얻고, 해당 토큰으로 사용자 정보를 가져옵니다. 그 후, MongoDB에 사용자를 저장하고 JWT와 JWT refresh 토큰을 생성합니다.
   - Parameters: `code` (query)
   - Response: 200 (OK), 사용자 정보와 JWT를 반환합니다. 
   - Error: 요청이 올바르지 않으면 오류를 반환합니다.

4. **GET /usertoken**
   - Description: 사용자의 JWT를 검증하고 해당 사용자를 반환하는 API입니다.
   - Authentication: 필요합니다. JWT가 헤더에 포함되어 있어야 합니다.
   - Response: 200 (OK), 사용자 정보를 반환합니다.
   - Error: 토큰이 유효하지 않거나 사용자를 찾을 수 없는 경우 오류를 반환합니다.

5. **GET /refreshToken**
   - Description: 사용자의 JWT refresh 토큰을 검증하고 새로운 JWT를 생성하는 API입니다.
   - Authentication: 필요합니다. JWT refresh 토큰이 쿠키에 포함되어 있어야 합니다.
   - Response: 200 (OK), 새로운 JWT를 반환합니다.
   - Error: 토큰이 유효하지 않는 경우 오류를 반환합니다.

6. **POST /user/logout**
   - Description: 사용자를 로그아웃하고 JWT refresh 토큰을 무효화하는 API입니다.
   - Response: 쿠키에서 JWT refresh 토큰을 제거하고 'ok'를 반환합니다.

모든 API는 HTTP 프로토콜을 사용하며 JSON 형식으로 데이터를 주고받습니다. 
각 API는 클라이언트와 서버 간의 상호작용에 필요한 최소한의 정보만 제공합니다. 
이 명세서는 각 API의 동작 방식을 기술하며, API를 사용하여 어떤 작업을 수행할 수 있는지를 설명합니다.
