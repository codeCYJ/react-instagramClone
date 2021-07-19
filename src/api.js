import axios from "axios";
import cookie from "react-cookies";

const api = axios.create({
  baseURL: "https://api.neppplus.com/",
  headers: {
    accept: "application/json",
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
    "X-Http-Token": cookie.load("user_token"),
  },
});
export const SigninApi = {
  signin: (form) => api.post("/admin", form),
};
export const ChangePasswordApi = {
  changepassword: (form) => api.patch("/admin", form),
};

export const ListApi = {
  getConsultingList: (page, start, end) =>
    api.get("/admin_consulting_request", {
      params: {
        page: page,
        start_date: start,
        end_date: end,
      },
    }),
  getLectureList: () => api.get("/admin_lecture"),
  getLectureCategoryList: () => api.get("/admin_lecture_category"),
  getBannerList: () =>
    api.get("/admin_banner", {
      params: {
        category: "HOME",
      },
    }),
  getItBannerList: (it) =>
    api.get("/admin_banner", {
      params: {
        category: it,
      },
    }),
  getDesignBannerList: (design) =>
    api.get("/admin_banner", {
      params: {
        category: design,
      },
    }),
  getHomeBannerList: (home) =>
    api.get("/admin_banner", {
      params: {
        category: home,
      },
    }),
  getPaymentList: (page, start, end) =>
    api.get("/admin_payment", {
      params: {
        page: page,
        start_date: start,
        end_date: end,
        status: "all",
      },
    }),
  getPopupList: (page) =>
    api.get("/admin_popup", {
      params: {
        page: page,
      },
    }),
  getDashboardList: (start, end) =>
    api.get("/admin_dashboard", {
      params: {
        start_date: start,
        end_date: end,
      },
    }),
  getSubjectList: () => api.get("/admin_subject"),
  getSubjectDetail: (id) => api.get(`/admin_subject_detail/${id}`),
  getSubjectCurriculumList: () => api.get("/admin_subject"),
  getSubjectCategoryList: () => api.get("/admin_subject_category"),
  getSchedule: () => api.get("/admin_subject_schedule"),
  getMenuList: () => api.get("/admin_large_menu"),

  deleteLecture: (id) =>
    api.delete("/admin_lecture", {
      params: { lecture_id: id },
    }),
  deleteLectureCategory: (id) =>
    api.delete("/admin_lecture_category", {
      params: { lecture_category_id: id },
    }),
  deleteSubject: (id) =>
    api.delete("/admin_subject", {
      params: { subject_id: id },
    }),
  deleteSubjectCategory: (id) =>
    api.delete("/admin_subject_category", {
      params: { subject_category_id: id },
    }),
  deleteBanner: (id) =>
    api.delete("/admin_banner", {
      params: { banner_id: id },
    }),
  deletePopup: (id) =>
    api.delete("/admin_popup", {
      params: { popup_id: id },
    }),
  deletePayment: (id) =>
    api.delete("/admin_payment", {
      params: { payment_log_id: id },
    }),
  deleteCurriculum: (id) =>
    api.delete("/admin_subject_curriculum", {
      params: { subject_curriculum_id: id },
    }),
  deleteSchedule: (id) =>
    api.delete("/admin_subject_schedule", {
      params: { subject_schedule_id: id },
    }),
  deleteLargeMenu: (form) => api.put("/admin_large_menu", form),
  deleteSmallMenu: (form) => api.put("/admin_small_menu", form),

  addLecture: (form) => api.post("/admin_lecture", form),
  addLectureCategory: (form) => api.post("/admin_lecture_category", form),
  addSubject: (form) => api.post("/admin_subject", form),
  addSubjectCategory: (form) => api.post("/admin_subject_category", form),
  addBanner: (form) => api.post("/admin_banner", form),
  addPopup: (form) => api.post("/admin_popup", form),
  addSchedule: (form) => api.post("/admin_subject_schedule", form),
  addLargeMenu: (form) => api.post("/admin_large_menu", form),
  addSmallMenu: (form) => api.post("/admin_small_menu", form),

  patchLecture: (form) => api.patch("/admin_lecture", form),
  patchLectureCategory: (form) => api.patch("/admin_lecture_category", form),
  patchSubject: (form) => api.patch("/admin_subject", form),
  patchSubjectCategory: (form) => api.patch("/admin_subject_category", form),
  patchPopup: (form) => api.patch("/admin_popup", form),
  patchConsulting: (form) => api.post("/admin_consulting_request", form),
  patchSchedule: (form) => api.patch("/admin_subject_schedule", form),
  patchLargeMenu: (form) => api.patch("/admin_large_menu", form),
  patchSmallMenu: (form) => api.patch("/admin_small_menu", form),
};
