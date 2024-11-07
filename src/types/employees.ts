
export interface Employee {
  ID: string;         // Mã nhân viên
  HO_TEN: string;     // Họ và tên
  CHUC_VU: string;    // Chức vụ
  PHONG_BAN: string;  // Phòng ban
  NGAY_SINH: string;  // Ngày sinh dưới dạng ISO string
};

export interface LaData {
  ISSUE_DATE: string;
  TOUCH_COMPANY_INFO: string;
  TOUCH_COMPANY_PHONE: string;
  GPCNTT_SOLUTION_NAME: string;
  GPCNTT_CONTRACT_VALUE: number;
};