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
import { useGateways, useProjects } from "src/hooks";
import { Report } from "src/types";
import { amountSumOfReports, formatCurrency } from "src/utils";

type Props = {
  reports: Report[];
};

const FilteredReports: React.FC<Props> = ({ reports }) => {
  const { data: projects } = useProjects();

  const { data: gateways } = useGateways();

  if (!projects || !gateways) return null;

  return (
    <Accordion expanded>
      <AccordionSummary
        sx={{
          paddingX: 4,
          paddingY: 1,
          borderRadius: 1,
        }}
      >
        <Typography variant="subtitle2">All Reports</Typography>
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
                <TableCell>Transaction ID</TableCell>
                <TableCell align="right">Amount</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {reports.map((report) => (
                <TableRow key={report.paymentId}>
                  <TableCell>{report.created}</TableCell>
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
  );
};

export default FilteredReports;
