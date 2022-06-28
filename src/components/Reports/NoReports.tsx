import { Box, Typography } from "@mui/material";
import { ReactComponent as NoReportsSvg } from "@assets/no-reports.svg";

const NoReports = () => {
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box textAlign="center" maxWidth={400}>
        <Typography variant="h6">No Reports</Typography>
        <Typography variant="subtitle2" color="gray">
          Currently you have no data for the reports to be generated. Once you
          start generating traffic through the Balance application the reports
          will be shown.
        </Typography>

        <Box marginTop={4}>
          <NoReportsSvg />
        </Box>
      </Box>
    </Box>
  );
};

export default NoReports;
