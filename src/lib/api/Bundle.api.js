import http from "./http.api";

const BundleApi = new http("");

BundleApi.gets = null;
BundleApi.get = null;
BundleApi.post = null;
BundleApi.patch = null;
BundleApi.delete = null;

BundleApi.get = (authWithCookie, id, config = {}) => {
  BundleApi.authWithCookie = authWithCookie;
  return BundleApi.instance.get(
    `${BundleApi.baseApisUrl}/getCurrencyBundles?currencyId=${id}`,
    body,
    {
      params: config,
    }
  );
};

export { BundleApi };