import { API_BASE_URL } from "src/constants";
import { Filters } from "src/types";

const ReportService = {
  fetchReports: (filters: Filters | null) =>
    fetch(API_BASE_URL + "/report", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(filters ?? {}),
    }).then((res) => res.json()),
};

export default ReportService;
