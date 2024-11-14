

export interface SubmitData {
    fileDate: string; // Dạng "DD-MMM-YY" (ví dụ: "13-NOV-24")
    issueDate: string; // Dạng "DD-MMM-YY" (ví dụ: "13-NOV-24")
    empName: string; // Tên nhân viên
    donVi: string; // Đơn vị
    empEmail?: string | null; // Email nhân viên (tùy chọn)
    touchCompanyInfo?: string | null; // Thông tin công ty liên lạc (tùy chọn)
    touchCompanyContact?: string | null; // Liên hệ công ty (tùy chọn)
    touchCompanyPhone?: string | null; // Số điện thoại công ty liên lạc (tùy chọn)
    solutionName?: string | null; // Tên giải pháp (tùy chọn)
    companyName?: string | null; // Tên công ty (tùy chọn)
    contractRevenue?: number | null; // Doanh thu hợp đồng (tùy chọn)
    fiberCode?: string | null; // Mã cáp quang (tùy chọn)
    fiberCompanyName?: string | null; // Tên công ty cáp quang (tùy chọn)
    fiberRevenue?: number | null; // Doanh thu cáp quang (tùy chọn)
    prepaidPhoneNumber?: string | null; // Số điện thoại thuê bao trả trước (tùy chọn)
    prepaidSubscriptionPackage?: string | null; // Gói cước thuê bao trả trước (tùy chọn)
    prepaidRevenue?: number | null; // Doanh thu thuê bao trả trước (tùy chọn)
    postpaidPhoneNumber?: string | null; // Số điện thoại thuê bao trả sau (tùy chọn)
    postpaidSubscriptionPackage?: string | null; // Gói cước thuê bao trả sau (tùy chọn)
    postpaidRevenue?: number | null; // Doanh thu thuê bao trả sau (tùy chọn)
    otherServiceName?: string | null; // Tên dịch vụ khác (tùy chọn)
    otherServiceRevenue?: number | null; // Doanh thu dịch vụ khác (tùy chọn)
  }
  