import http from "./http.api";

const UserApi = new http("");

UserApi.gets = null;
UserApi.get = null;
UserApi.post = null;
UserApi.patch = null;
UserApi.delete = null;

UserApi.info = function (authWithCookie, id, config = {}) {
  UserApi.authWithCookie = authWithCookie;

  return UserApi.instance.get(`${UserApi.baseApisUrl}api/v2/users/${id}`, {
    params: config,
  });
};

UserApi.sendKYC_Step2 = function (authWithCookie, body, config = {}) {
  UserApi.authWithCookie = authWithCookie;
  return UserApi.instance.post(`${UserApi.baseApisUrl}/kycTwo`, body, {
    params: config,
  });
};

UserApi.sendKYC_Step3 = function (authWithCookie, body, config = {}) {
  UserApi.authWithCookie = authWithCookie;
  return UserApi.instance.post(`${UserApi.baseApisUrl}/kycThree`, body, {
    params: config,
  });
};

export { UserApi };
