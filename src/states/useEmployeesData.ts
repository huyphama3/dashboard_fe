import { useState, useEffect } from "react";
import axios from "axios";

const useEmployeesData = () => {
  const [employees, setEmployees] = useState<any[]>([]); // Dữ liệu nhân viên
  const [employeeNames, setEmployeeNames] = useState<string[]>([]); // Dữ liệu tên nhân viên
  const [loading, setLoading] = useState<boolean>(true); // Trạng thái tải dữ liệu
  const [error, setError] = useState<string | null>(null); // Thông báo lỗi
  useEffect(() => {
    const fetchEmployeesData = async () => {
      try {
        // Fetch dữ liệu nhân viên, tên nhân viên và dữ liệu getThongTinHopDong đồng thời
        const [employeesResponse, employeeNamesResponse] =
          await Promise.all([
            axios.get(`${process.env.NEXTAUTH_APP_API_URL}/api/v1/employees/getall`), // Lấy danh sách nhân viên
            axios.get(`${process.env.NEXTAUTH_APP_API_URL}/api/v1/employees/getname`), // Lấy tên nhân viên
          ]);

        // Lưu dữ liệu vào state
        setEmployees(employeesResponse.data); // Lưu danh sách nhân viên
        setEmployeeNames(employeeNamesResponse.data); // Lưu tên nhân viên
      } catch (error) {
        setError("Lỗi khi tải dữ liệu."); // Nếu có lỗi khi tải dữ liệu
      } finally {
        setLoading(false); // Đặt loading thành false khi hoàn thành
      }
    };

    fetchEmployeesData();
  }, []); // Chạy một lần khi component mount

  return { employees, employeeNames, loading, error };
};

export default useEmployeesData;
