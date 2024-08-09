import http from "./http.api";

const CurrencyNetwork = new http("");

CurrencyNetwork.gets = null;
CurrencyNetwork.get = null;
CurrencyNetwork.post = null;
CurrencyNetwork.patch = null;
CurrencyNetwork.delete = null;

CurrencyNetwork.allCurrencies = (authWithCookie, flag = false, config = {}) => {
  this.authWithCookie = authWithCookie;
  return this.instance.get(
    `${this.baseApisUrl}/getAllCurrencies${flag ? "?networksIncluded=" : ""}`,
    {
      params: config,
    }
  );
};

CurrencyNetwork.getCurrency = (
  authWithCookie,
  id,
  flag = false,
  config = {}
) => {
  this.authWithCookie = authWithCookie;
  return this.instance.get(
    `${this.baseApisUrl}/getCurrencyById?currencyId=${id}${
      flag ? "&networksIncluded=" : ""
    }`,
    {
      params: config,
    }
  );
};

CurrencyNetwork.allNetworks = (authWithCookie, flag = false, config = {}) => {
  this.authWithCookie = authWithCookie;
  return this.instance.get(
    `${this.baseApisUrl}/getAllNetworks${flag ? "?currenciesIncluded=" : ""}`,
    {
      params: config,
    }
  );
};

CurrencyNetwork.getNetwork = (
  authWithCookie,
  id,
  flag = false,
  config = {}
) => {
  this.authWithCookie = authWithCookie;
  return this.instance.get(
    `${this.baseApisUrl}/getNetworkById?networkId=${id}${
      flag ? "&currenciesIncluded=" : ""
    }`,
    {
      params: config,
    }
  );
};

export { CurrencyNetwork };
