import axios from "axios";
import url from "url";

function parameterFormater(ressourceLocation, paramsObj) {
  if (process.env.NODE_ENV === "production") {
    const urlObj = new url.URL(process.env.VUE_APP_API_BASEURL);
    urlObj.pathname = ressourceLocation;
    for (const param in paramsObj) {
      urlObj.searchParams.set(param, paramsObj[param]);
    }
    return urlObj.href;
  } else {
    return ressourceLocation;
  }
}

export default {
  statsCurrent: {
    get: function(campaignid, characterid) {
      return axios.get(
        parameterFormater(process.env.VUE_APP_API_STATSCURRENT, {
          campaignid,
          characterid
        })
      );
    }
  },
  statsAvailable: {
    get: function(campaignid, characterid) {
      return axios.get(
        parameterFormater(process.env.VUE_APP_API_STATSAVAILABLE, {
          campaignid,
          characterid
        })
      );
    }
  }
};
