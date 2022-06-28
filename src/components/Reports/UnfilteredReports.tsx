import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { groupBy } from "lodash";
import { useMemo } from "react";
import { useGateways, useProjects } from "src/hooks";
import { Report } from "src/types";
import {
  amountSumOfReports,
  formatCurrency,
  getGatewayName,
  getProjectName,
} from "src/utils";

type Props = {
  reports: Report[];
};

const UnfilteredReports: React.FC<Props> = ({ reports }) => {
  const { data: projects } = useProjects();

  const { data: gateways } = useGateways();

  const groupedByProjects = useMemo(
    () => groupBy(reports, "projectId"),
    [reports]
  );

  if (!projects || !gateways) return null;

  return (
    <>
      {Object.entries(groupedByProjects).map(([projectId, reports]) => (
        <Accordion key={projectId}>
          <AccordionSummary
            sx={{
              paddingX: 4,
              paddingY: 1,
              borderRadius: 1,
            }}
          >
            <Typography variant="subtitle2">
              {getProjectName(projects, projectId)}
            </Typography>
            <Box flexGrow={1} />
            <Typography variant="subtitle2">
              Total: {formatCurrency(amountSumOfReports(reports))}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer component={Paper} elevation={0}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Gateway</TableCell>
                    <TableCell>Transaction ID</TableCell>
                    <TableCell align="right">Amount</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {reports.map((report) => (
                    <TableRow key={report.paymentId}>
                      <TableCell>{report.created}</TableCell>
                      <TableCell>
                        {getGatewayName(gateways, report.gatewayId)}
                      </TableCell>
                      <TableCell>{report.paymentId}</TableCell>
                      <TableCell align="right">
                        {formatCurrency(report.amount)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default UnfilteredReports;
