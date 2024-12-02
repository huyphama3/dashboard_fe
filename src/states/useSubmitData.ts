import { useState } from "react";
import axios from "axios";
import { SubmitData } from "../types/submitData"; // Import interface SubmitData

const useSubmitData = () => {
  const [loading, setLoading] = useState<boolean>(false); // Trạng thái loading
  const [error, setError] = useState<string | null>(null); // Trạng thái lỗi
  const [success, setSuccess] = useState<boolean>(false); // Trạng thái thành công

  const submitData = async (data: SubmitData) => {
    setLoading(true); // Bắt đầu tải
    setError(null); // Xóa lỗi cũ
    setSuccess(false); // Đặt trạng thái thành công là false

    try {
      const response = await axios.post(
        `${process.env.NEXTAUTH_URL}/api/v1/submit/guidulieu`, // API endpoint mà bạn đã cung cấp
        data, // Dữ liệu sẽ được gửi
      );

      if (response.status === 200) {
        setSuccess(true); // Nếu thành công, cập nhật trạng thái
      }
    } catch (err) {
      setError("Lỗi khi gửi dữ liệu."); // Nếu có lỗi, cập nhật lỗi
    } finally {
      setLoading(false); // Kết thúc tải
    }
  };

  return { submitData, loading, error, success };
};

export default useSubmitData;
