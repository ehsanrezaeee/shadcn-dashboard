import http from "./http.api";

const FaqApi = new http("");

FaqApi.gets = null;
FaqApi.get = null;
FaqApi.post = null;
FaqApi.patch = null;
FaqApi.delete = null;

FaqApi.all = (authWithCookie, config = {}) => {
  FaqApi.authWithCookie = authWithCookie;
  return FaqApi.instance.get(`${FaqApi.baseApisUrl}/getAllFaq`, {
    params: config,
  });
};

FaqApi.get = (authWithCookie, id, config = {}) => {
    FaqApi.authWithCookie = authWithCookie;
    return FaqApi.instance.get(`${FaqApi.baseApisUrl}/getFaq?id=${id}`, {
      params: config,
    });
  };

export { FaqApi };
