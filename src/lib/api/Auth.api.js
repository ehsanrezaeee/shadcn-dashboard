import http from "./http.api";

const AuthApi = new http("");

AuthApi.gets = null;
AuthApi.get = null;
AuthApi.post = null;
AuthApi.patch = null;
AuthApi.delete = null;

AuthApi.registerMobile = (authWithCookie, body = {}, config = {}) => {
  AuthApi.authWithCookie = authWithCookie;
  return AuthApi.instance.post(`${AuthApi.baseApisUrl}/registerMobile`, body, {
    params: config,
  });
};

AuthApi.resendOTPCodeRegister = (authWithCookie, body = {}, config = {}) => {
  AuthApi.authWithCookie = authWithCookie;
  return AuthApi.instance.post(`${AuthApi.baseApisUrl}/resendCodeReg`, body, {
    params: config,
  });
};

AuthApi.checkOTP = (authWithCookie, body = {}, config = {}) => {
  AuthApi.authWithCookie = authWithCookie;
  return AuthApi.instance.post(`${AuthApi.baseApisUrl}/checkOtpReg`, body, {
    params: config,
  });
};

AuthApi.setPassword = (authWithCookie, body = {}, config = {}) => {
  AuthApi.authWithCookie = authWithCookie;
  return AuthApi.instance.post(`${AuthApi.baseApisUrl}/setPassword`, body, {
    params: config,
  });
};

AuthApi.generateCaptchaImage = (authWithCookie, config) => {
  AuthApi.authWithCookie = authWithCookie;
  return AuthApi.instance.get(`${AuthApi.baseApisUrl}/generateCaptcha`, {
    params: config,
  });
};

AuthApi.verifyCaptcha = (authWithCookie, body = {}, config = {}) => {
  AuthApi.authWithCookie = authWithCookie;
  return AuthApi.instance.post(`${AuthApi.baseApisUrl}/verifyCaptcha`, body, {
    params: config,
  });
};

AuthApi.sendOTPCodeForgotPassword = (
  authWithCookie,
  body = {},
  config = {}
) => {
  AuthApi.authWithCookie = authWithCookie;
  return AuthApi.instance.post(`${AuthApi.baseApisUrl}/sendOTPForgotPassword`, body, {
    params: config,
  });
};

AuthApi.sendOTPCodeForgotPassword = (
  authWithCookie,
  body = {},
  config = {}
) => {
  AuthApi.authWithCookie = authWithCookie;
  return AuthApi.instance.post(`${AuthApi.baseApisUrl}/refresh`, body, {
    params: config,
  });
};

export { AuthApi };
