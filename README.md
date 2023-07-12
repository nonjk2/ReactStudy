# TodoServer_Mongo

주어진게 json-server라 LV4 까진 json server를 쓰긴 했는데

솔직히 이걸로 끝까지 가는건 너무 비효율 적인거 같아 몽고db 서버를 하나 팠습니다...

## Todos
1. **addTodo**
    - **URI**: `${process.env.REACT_APP_LOCAL_SERVER}/todos`
    - **Method**: POST
    - **Description**: 새로운 할 일을 추가합니다.
    - **Payload**: `newTodo` - 새로 추가될 할 일의 정보를 담은 객체입니다.

2. **getTodos**
    - **URI**: `${process.env.REACT_APP_LOCAL_SERVER}/todos`
    - **Method**: GET
    - **Description**: 모든 할 일을 가져옵니다.

3. **updateDoneTodo**
    - **URI**: `${process.env.REACT_APP_LOCAL_SERVER}/todos/{id}`
    - **Method**: PATCH
    - **Description**: 할 일의 완료 상태를 업데이트합니다.
    - **Params**: `id` - 업데이트할 할 일의 ID입니다.
    - **Payload**: `{done:!(todo.done)}` - 완료 상태를 반전시키는 객체입니다.

4. **updateTodo**
    - **URI**: `${process.env.REACT_APP_LOCAL_SERVER}/todos/{id}`
    - **Method**: PATCH
    - **Description**: 할 일의 내용을 업데이트합니다.
    - **Params**: `id` - 업데이트할 할 일의 ID입니다.
    - **Payload**: `{content:sendData.content}` - 할 일의 새로운 내용을 담은 객체입니다.

5. **deleteTodo**
    - **URI**: `${process.env.REACT_APP_LOCAL_SERVER}/todos/{id}`
    - **Method**: DELETE
    - **Description**: 특정 할 일을 삭제합니다.
    - **Params**: `id` - 삭제할 할 일의 ID입니다.

## User

1. **GET /user**: 모든 사용자의 정보를 가져옵니다.
   - Response: 사용자 정보 배열(JSON)

2. **GET /usertoken**: 모든 사용자의 정보를 가져오기 전에 JWT 토큰을 통한 인증을 수행합니다.
   - Headers: Authorization: Bearer \<token>
   - Response: 사용자 정보 배열(JSON)

3. **GET /user/:email**: 주어진 이메일에 해당하는 사용자 정보를 가져옵니다.
   - Parameters: email (URL 경로에 포함)
   - Response: 해당 이메일의 사용자 정보(JSON)

4. **POST /user**: 새 사용자를 생성합니다. 이메일, 닉네임, 비밀번호 필요.
   - Body: email, nickName, password
   - Response: 생성된 사용자 정보(JSON)

5. **POST /user/login**: 사용자 로그인을 처리합니다. 이메일, 비밀번호 필요.
   - Body: email, password
   - Response: 로그인된 사용자 정보와 JWT 토큰(JSON)

6. **POST /user/logout**: 로그인된 사용자를 로그아웃시킵니다.
   - Response: "ok" (문자열)

7. **PATCH /user/:email/done**: 주어진 이메일의 사용자의 done 상태를 업데이트합니다.
   - Parameters: email (URL 경로에 포함)
   - Body: done
   - Response: 업데이트된 사용자 정보(JSON)

8. **PATCH /user/:email/nickName**: 주어진 이메일의 사용자의 닉네임을 업데이트합니다.
   - Parameters: email (URL 경로에 포함)
   - Body: nickName
   - Response: 업데이트된 사용자 정보(JSON)

9. **DELETE /user/:email**: 주어진 이메일의 사용자를 삭제합니다.
   - Parameters: email (URL 경로에 포함)
   - Response: "User successfully deleted" (문자열)
   
