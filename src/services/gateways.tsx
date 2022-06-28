import { API_BASE_URL } from "src/constants";

const GatewayService = {
  fetchGateways: () =>
    fetch(API_BASE_URL + "/gateways").then((res) => res.json()),
};

export default GatewayService;
