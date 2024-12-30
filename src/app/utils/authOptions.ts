// utils/authOptions.ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Định nghĩa kiểu người dùng (User) cho NextAuth
interface User {
  id: string;          // Thêm thuộc tính id
  accessToken: string;
  username: string;
}

interface JWT {
  accessToken?: string;
  username?: string;
}

const API_URL = process.env.NEXTAUTH_APP_API_URL; // Đảm bảo bạn đang sử dụng đúng URL API
export const LOGIN_URL = `${API_URL}/auth`; // Đảm bảo cập nhật đúng endpoint đăng nhập của bạn

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          console.error("Username or password missing");
          return null;
        }

        // Gửi yêu cầu đăng nhập đến API
        const response = await fetch(LOGIN_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: credentials.username,
            password: credentials.password,
          }),
        });

        // Kiểm tra mã trạng thái phản hồi từ API
        if (!response.ok) {
          console.error("Authentication failed:", response.status);
          return null;
        }

        // Lấy accessToken và username từ phản hồi
        const { accessToken, username } = await response.json();

        // Trả về thông tin người dùng, bao gồm id, accessToken và username
        const user: User = {
          id: username,  // Giả sử sử dụng username làm id, có thể thay bằng một giá trị khác nếu có
          accessToken,
          username,
        };
        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 60 * 60, // Thời gian hết hạn của session (1 giờ)
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    maxAge: 60 * 60, // Thời gian hết hạn của JWT token (1 giờ)
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login", // Trang đăng nhập của bạn
  },
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: User }) {
      if (user) {
        token.accessToken = user.accessToken; // Lưu accessToken vào token JWT
        token.username = user.username; // Lưu username vào token JWT
      }
      return token;
    },
    async session({ session, token }: { session: any; token: JWT }) {
      session.accessToken = token.accessToken; // Lưu accessToken vào session
      session.username = token.username; // Lưu username vào session
      return session;
    },
  },
};

export default authOptions;
