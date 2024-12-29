// components/ProtectedRoute.tsx
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      // Chuyển hướng về trang đăng nhập nếu không có token
      router.push("/auth/login");
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    // Có thể trả về một loading spinner hoặc một cái gì đó trong khi kiểm tra token
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
