import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer VFY1o_GKGaJi9Q5j9Y20aKSZeGDtVSJEKW_PQuGMhzeBvY3DbqyQoeei7kL7_RCmVuxPtXWMGogOn6-GXD8nqfkvjs4N_CtKfAXxrjG-iPgP56sPT9U06czCrqp4YXYx",
  },
});
