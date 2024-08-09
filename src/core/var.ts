export const DAYS_OF_WEEK = [
  "یکشنبه",
  "دوشنبه",
  "سه شنبه",
  "چهارشنبه",
  "پنج شنبه",
  "جمعه",
  "شنبه",
];

export const ROLES_OF_USERS = {
  admin: "مدیر",
  user: "کاربر عادی",
};

export type TYPE_ROLES_OF_USERS = "admin" | "user";

export const LEVELS_OF_USERS = {
  "1": {
    title: "سطح برنزی",
    color: "orange",
  },
  "2": {
    title: "سطح نقره ای",
    color: "blue",
  },
  "3": {
    title: "سطح طلایی",
    color: "yellow",
  },
};

export type TYPE_LEVELS_OF_USERS = "1" | "2" | "3";

// status of account
export const STATUS_OF_ACCOUNT = [
  {
    name: "disable",
    title: "غیرفعال",
    color: "red",
  },
  {
    name: "enable",
    title: "فعال",
    color: "green",
  },
];

export type TYPE_STATUS_OF_ACCOUNT = "disable" | "enable";

export const TOKEN_LOCAL_KEY = "CTA1";
