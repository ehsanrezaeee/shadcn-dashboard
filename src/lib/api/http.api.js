/* eslint-disable no-fallthrough */
import axios from "axios";

// token local key for get from cookie
import { TOKEN_LOCAL_KEY } from "@/core/var";

// cookie package
import Cookies from "js-cookie";

class Service {
  constructor(entity) {
    this.authWithCookie = false;
    this.instance = axios.create();
    this.entity = entity;
    this.baseApisUrl = `${process.env.NEXT_PUBLIC_BASE_URL_BACK_END}/${this.entity}`;
    this.instance.interceptors.request.use(
      (config) => {
        const TOKEN = Cookies.get(TOKEN_LOCAL_KEY);

        if (TOKEN && this.authWithCookie) {
          config.headers["Authorization"] = `Bearer ${TOKEN}`;
        }
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    this.instance.interceptors.response.use(
      (res) => {
        const { status } = res;
        if (status >= 400) {
          console.log(res.data);
          window.location.pathname = "/404";
        }
        return res.data;
      },
      (error) => {
        if (
          window.location.pathname !== "/404" &&
          window.location.pathname !== "/auth"
        ) {
          const status = error.response.status;
          console.log("status: ", status);
          if (status === 401) {
            window.location.pathname = "/auth";
          } else if (status === 404) {
            if (error?.response?.url.includes("userInfo"))
              return error?.response?.data;
            window.location.pathname = "/404";
          } else if (status === 403) {
            if (error?.response?.url.includes("userInfo"))
              return error?.response?.data;
            window.location.pathname = "/auth";
          }
          return error?.response?.data;
        }
      }
    );

    this.instance.defaults.timeout = 60000;
    // this.instance.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL_FRONT_END;
  }

  gets = (authWithCookie, config) => {
    this.authWithCookie = authWithCookie;
    return this.instance.get(this.baseApisUrl, config);
  };

  get = (authWithCookie, id, config) => {
    this.authWithCookie = authWithCookie;
    return this.instance.get(`${this.baseApisUrl}/${id}`, config);
  };

  custom = (authWithCookie, url, config) => {
    this.authWithCookie = authWithCookie;
    return this.instance.get(`${this.baseApisUrl}/${url}`, config);
  };

  post = (authWithCookie, body, config, formdata = false) => {
    this.authWithCookie = authWithCookie;

    if (formdata) {
      body = this.formdata(body);
    }
    return this.instance.post(`${this.baseApisUrl}`, body, config);
  };

  patch = (authWithCookie, id, body, config, formdata = false) => {
    this.authWithCookie = authWithCookie;
    if (formdata) {
      body = this.formdata(body);
    }
    return this.instance.patch(`${this.baseApisUrl}/${id}`, body, config);
  };

  delete = (authWithCookie, id, config) => {
    this.authWithCookie = authWithCookie;
    return this.instance.delete(`${this.baseApisUrl}/${id}`, config);
  };

  formdata = (body) => {
    const fd = new FormData();
    Object.keys(body).forEach((k) => {
      if (body[k] instanceof FileList) {
        [...body[k]].forEach((v) => {
          let value = v;
          if (!(value instanceof File) && typeof value === "object")
            value = JSON.stringify(value);
          fd.append(k, value);
        });
      }
      if (body[k] instanceof File) {
        fd.append(k, body[k]);
      } else {
        let value = body[k];
        if (!(value instanceof File) && typeof value === "object") {
          value = JSON.stringify(value);
        }
        fd.append(k, value);
      }
    });
    return fd;
  };
}

export default Service;
