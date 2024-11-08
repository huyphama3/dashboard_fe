// src/hooks/useSalesData.ts
import { useState, useEffect } from "react";
import axios from "axios";

const useSalesData = () => {
  const [salesData, setSalesData] = useState<number[]>([]); // State lưu dữ liệu doanh số
  const [loading, setLoading] = useState<boolean>(true); // State kiểm tra trạng thái loading
  const [error, setError] = useState<string | null>(null); // State lưu lỗi nếu có

  useEffect(() => {
    const fetchSalesData = async () => {
      console.log(`${process.env.NEXTAUTH_APP_API_URL}`)
      try {
        setLoading(true); // Đang tải dữ liệu
        const response = await axios.get(
          `${process.env.NEXTAUTH_APP_API_URL}/api/v1/doanhso/get`,
        ); // Gọi API lấy doanh số
        setSalesData(response.data.data); // Lưu dữ liệu vào state salesData
      } catch (error) {
        setError("Lỗi khi tải dữ liệu doanh số.");
      } finally {
        setLoading(false); // Kết thúc việc tải dữ liệu
      }
    };

    fetchSalesData(); // Gọi API khi component được render
  }, []);

  return { salesData, loading, error };
};

export default useSalesData;
