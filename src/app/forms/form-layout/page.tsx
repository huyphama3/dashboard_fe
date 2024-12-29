"use client";
import React, { useState, useEffect } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import SelectGroupOne from "@/components/FormElements/SelectGroup/SelectGroupOne";
import InputGroup from "@/components/FormElements/InputGroup";
import SelectGroupName from "@/components/FormElements/SelectGroup/SelectGroupName";
import DatePickerOne from "@/components/FormElements/DatePicker/DatePickerOne";
import SelectGroupTelecom from "@/components/FormElements/SelectGroup/SelectGroupTelecom";
import SelectGroupIT from "@/components/FormElements/SelectGroup/SelectGroupITSolution";
import SelectGroupDonVi from "@/components/FormElements/SelectGroup/SelectGroupDonVi";
import { useRouter } from "next/router";
import { Modal, Button } from "react-bootstrap";

const FormLayout = () => {
  const [category, setCategory] = useState<string>("");
  const [fileDate, setFileDate] = useState<string>(""); // Dữ liệu ngày nhập hợp đồng
  const [issueDate, setIssueDate] = useState<string>(""); // Dữ liệu ngày ký hợp đồng
  const [empName, setEmpName] = useState<string>(""); // Họ tên
  const [donVi, setDonVi] = useState<string>(""); // Đơn vị
  const [empEmail, setEmpEmail] = useState<string>(""); // Email
  const [modalShow, setModalShow] = useState(false); // Modal thành công
  const [errorModalShow, setErrorModalShow] = useState(false); // Modal lỗi
  const [errorMessage, setErrorMessage] = useState(""); // Thông báo lỗi từ backend

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  // State để lưu dữ liệu từ các trường trong SelectGroupTelecom và SelectGroupIT
  const [telecomData, setTelecomData] = useState({});
  const [itData, setItData] = useState({});

  // State để lưu giá trị đã chọn cho Telecom và IT
  const [selectedTelecom, setSelectedTelecom] = useState<string | null>(null);
  const [selectedIT, setSelectedIT] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    fiberCode: "",
    fiberCompanyName: "",
    fiberRevenue: "",
    prepaidPhoneNumber: "",
    prepaidSubscriptionPackage: "",
    prepaidRevenue: "",
    postpaidPhoneNumber: "",
    postpaidSubscriptionPackage: "",
    postpaidRevenue: "",
    otherServiceName: "",
    otherServiceRevenue: "",
    solutionName: "",
    companyName: "",
    contractRevenue: "",
  });

  const handleCategoryChange = (value: string) => {
    setCategory(value);
  };

  const handleTelecomDataChange = (data: any) => {
    setTelecomData(data); // Update telecomData with values from SelectGroupTelecom
  };

  // Hàm cập nhật dữ liệu từ SelectGroupIT
  const handleITDataChange = (data: any) => {
    setItData(data);
  };
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Kiểm tra nếu các trường bắt buộc chưa được điền
    if (!empName || !empEmail || !donVi) {
      alert("Vui lòng điền đầy đủ thông tin Họ Tên, Đơn Vị, và Email!");
      return;
    }
    const data = {
      fileDate,
      issueDate,
      empName,
      donVi,
      empEmail,
      ...(category === "Telecom" ? telecomData : {}),
      ...(category === "IT_Solution" ? itData : {}),
      // Các dữ liệu khác cần gửi
    };
    setLoading(true); // Bắt đầu gửi dữ liệu
    try {
      const response = await fetch(
        `${process.env.NEXTAUTH_APP_API_URL}/api/v1/submit/guidulieu`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      const result = await response.json();
      if (response.ok) {
        // Hiển thị modal thông báo thành công
        setModalShow(true); // Hiển thị modal thành công
        // Reset tất cả state sau khi gửi thành công
        setFileDate("");
        setIssueDate("");
        setEmpName("");
        setDonVi("");
        setEmpEmail("");
        setTelecomData({});
        setItData({});
        setCategory(""); // Reset category

        // Reset các trường trong SelectGroupTelecom
        setSelectedTelecom(null); // Reset giá trị đã chọn trong SelectGroupTelecom
        setFormData({
          fiberCode: "",
          fiberCompanyName: "",
          fiberRevenue: "",
          prepaidPhoneNumber: "",
          prepaidSubscriptionPackage: "",
          prepaidRevenue: "",
          postpaidPhoneNumber: "",
          postpaidSubscriptionPackage: "",
          postpaidRevenue: "",
          otherServiceName: "",
          otherServiceRevenue: "",
          solutionName: "",
          companyName: "",
          contractRevenue: "",
        }); // Reset formData trong SelectGroupTelecom và SelectGroupIT

        // Reset các trường trong SelectGroupIT
        setSelectedIT(null); // Reset giá trị đã chọn trong SelectGroupIT
      } else if (response.status === 400) {
        // Hiển thị modal thông báo thất bại
        setErrorMessage(result?.msg || "Có lỗi xảy ra!"); // Lấy lỗi từ backend
        setErrorModalShow(true); // Hiển thị modal lỗi
      }
    } catch (error) {
      console.error("Lỗi khi gửi dữ liệu:", error);
      setErrorMessage("Đã xảy ra lỗi khi gửi dữ liệu."); // Thông báo lỗi mặc định
      setErrorModalShow(true); // Hiển thị modal lỗi
    } finally {
      setLoading(false);
    } // Dừng trạng thái loading khi đã có phản hồi
  };

  // Hàm xử lý đóng modal thành công và reload trang
  const handleCloseModal = () => {
    setModalShow(false);
    window.location.reload(); // Reload trang sau khi đóng modal
  };
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Form Điền Thông Tin" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
              <h3 className="font-semibold text-dark dark:text-white">
                Form Điền Thông Tin
              </h3>
            </div>
            <form action="#" onSubmit={handleSubmit}>
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-4.5">
                  <DatePickerOne
                    onFileDateChange={setFileDate}
                    onIssueDateChange={setIssueDate}
                  />
                </div>
                <div className="mb-4.5 flex flex-col gap-4.5">
                  <SelectGroupName
                    label="Họ Tên"
                    options={[
                      {
                        value: "Vũ Hoàng Tuyết Nhung",
                        label: "Vũ Hoàng Tuyết Nhung",
                      },
                      { value: "Phùng Vĩnh Duy", label: "Phùng Vĩnh Duy" },
                      {
                        value: "Huỳnh Thị Lệ Trinh",
                        label: "Huỳnh Thị Lệ Trinh",
                      },
                      { value: "Bùi Đức Hoàng", label: "Bùi Đức Hoàng" },
                      {
                        value: "Nguyễn Thị Thúy Quỳnh",
                        label: "Nguyễn Thị Thúy Quỳnh",
                      },
                      {
                        value: "Nguyễn Trung Vương",
                        label: "Nguyễn Trung Vương",
                      },
                      { value: "Đậu Quang Cường", label: "Đậu Quang Cường" },
                      { value: "Bùi Trọng La", label: "Bùi Trọng La" },
                    ]}
                    value={empName}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      setEmpName(e.target.value)
                    }
                  />
                  <SelectGroupDonVi
                    label="Đơn Vị"
                    options={[
                      { value: "DLA", label: "DLA" },
                      { value: "DNO", label: "DNO" },
                      { value: "KON", label: "KON" },
                      { value: "GLA", label: "GLA" },
                      { value: "PYE", label: "PYE" },
                      { value: "KHO", label: "KHO" },
                      { value: "CNs", label: "CNs" },
                    ]}
                    value={donVi}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      setDonVi(e.target.value)
                    }
                  />
                </div>
                <InputGroup
                  label="Email"
                  type="email"
                  placeholder="Email của bạn"
                  customClasses="mb-4.5"
                  required
                  value={empEmail}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmpEmail(e.target.value)
                  }
                />

                <SelectGroupOne onChange={handleCategoryChange} />

                {/* Render fields conditionally based on category */}
                {category === "Telecom" && (
                  <SelectGroupTelecom onDataChange={handleTelecomDataChange} />
                )}
                {category === "IT_Solution" && (
                  <SelectGroupIT onDataChange={handleITDataChange} />
                )}
                <button
                  className="flex w-full justify-center rounded-[7px] bg-primary p-[13px] font-medium text-white hover:bg-opacity-90"
                  type="submit"
                >
                  Gửi
                </button>
              </div>
            </form>
            {/* Modal hiển thị */}
            {/* Modal thành công */}
            <Modal show={modalShow} onHide={handleCloseModal}>
              <Modal.Header closeButton>
                <Modal.Title>Nhập liệu thành công!</Modal.Title>
              </Modal.Header>
              <Modal.Body>Dữ liệu của bạn đã được gửi thành công.</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                  Đóng
                </Button>
              </Modal.Footer>
            </Modal>

            {/* Modal thông báo lỗi */}
            <Modal
              show={errorModalShow}
              onHide={() => setErrorModalShow(false)}
            >
              <Modal.Header closeButton>
                <Modal.Title>Lỗi khi gửi dữ liệu!</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Đã có lỗi xảy ra khi gửi dữ liệu. Vui lòng thử lại.
                <br />
                <span style={{ color: "red" }}>{errorMessage}</span>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  onClick={() => setErrorModalShow(false)}
                >
                  Đóng
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default FormLayout;
