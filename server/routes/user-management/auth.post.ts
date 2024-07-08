import type {User, ReturnJSONAuth} from "@/interfaces";

export default defineEventHandler(
  async (event): Promise<ReturnJSONAuth> => {
    let resultVal = 0;
    let tokenVal = "";
    let loginUser: User|null = null;
    try {
      const body = await readBody(event);
      resultVal = 1;
      if(body.loginId == "test-user" && body.password == "test-pw") {
        tokenVal = "abcdefghijklmn";
        loginUser = {
          id: 1234,
          name: "テストユーザー",
          loginId: body.loginId,
          password: ""
        }
      }
    }
    catch(err) {
      console.log(err);
    }
    return {
      result: resultVal,
      token: tokenVal,
      user: loginUser
    };
  }
);