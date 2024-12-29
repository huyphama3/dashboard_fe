import axios from "axios";


const API_URL = process.env.NEXTAUTH_APP_API_URL; // Đảm bảo rằng bạn đang sử dụng đúng URL API của bạn
export const LOGIN_URL = `${API_URL}/auth`; // Cập nhật URL đăng nhập



axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

// Server should return AuthModel
export async function login(email: string, password: string) {
  console.log('LOGIN_URL', LOGIN_URL, email, password)
  // return postData(LOGIN_URL, {
  //   username: email,
  //   password,
  // });

  const result = await fetch(LOGIN_URL, {
    method: "POST",// *GET, POST, PUT, DELETE, etc
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({
      username: email,
    password,
    }), // body data type must match "Content-Type" header
  });
  return result.json();
}





export function getUserByToken(token: string) {
  // const user: UserModel = {
  //   username: "demo",
  //   password: "123456",
  //   api_token: "sdfsdfsd34sg456trtgfxdg",
  //   created_at: "2022-03-30T12:17:50.000000Z",
  //   email: "admin@admin.com",
  //   email_verified_at: "2022-03-30T12:17:50.000000Z",
  //   first_name: "Maeve",
  //   id: 2,
  //   last_name: "Casper",
  //   updated_at: "2022-03-30T12:17:50.000000Z",
  // } as UserModel;

  return { data: "unknow" };
  //  axios.post<UserModel>(GET_USER_BY_ACCESSTOKEN_URL, {
  //   api_token: token,
  // })
}

