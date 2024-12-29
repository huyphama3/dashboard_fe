import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { login } from "@/lib/api";
const API_URL = process.env.NEXTAUTH_APP_API_URL; // Đảm bảo rằng bạn đang sử dụng đúng URL API của bạn
export const LOGIN_URL = `${API_URL}/auth`; // Cập nhật URL đăng nhập

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password, user } = credentials;
        console.log("email + passs", email, password, user);
        return { ...user, email: email }; // Đảm bảo trả về thông tin người dùng hợp lệ

      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 60 * 60,
  },
  jwt: {
    maxAge: 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/login",
  },
};


const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };