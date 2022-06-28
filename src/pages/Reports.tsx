import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Filters from "src/components/Reports/Filters";
import NoReports from "src/components/Reports/NoReports";
import { defaultFilterState, Filters as FiltersType } from "src/types";
import { useGateways, useProjects, useReports } from "src/hooks";
import UnfilteredReports from "src/components/Reports/UnfilteredReports";
import ProjectReports from "src/components/Reports/ProjectReports";
import GatewayReports from "src/components/Reports/GatewayReports";
import { blue } from "@mui/material/colors";
import { getGatewayName, getProjectName } from "src/utils";
import FilteredReports from "src/components/Reports/FilteredReports";

const Reports = () => {
  const [filters, setFilters] = useState<FiltersType>(defaultFilterState);

  const { data: reports, refetch: refetchReports } = useReports(filters);

  const { data: projects } = useProjects();

  const { data: gateways } = useGateways();

  useEffect(() => {
    refetchReports();
  }, [filters]);

  if (!reports || !projects || !gateways) return null;

  return (
    <Grid container height="100%">
      <Grid item xs={3}>
        <Typography variant="h6">Reports</Typography>
        <Typography variant="subtitle2" color="gray">
          Easily generate a report of your transactions
        </Typography>
      </Grid>

      <Grid
        item
        xs={9}
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        columnGap={2}
      >
        <Filters onFilter={setFilters} />
      </Grid>

      <Grid item xs={12} height="100%" overflow="scroll" paddingBottom={8}>
        {reports.length === 0 && <NoReports />}

        {reports.length > 0 && (
          <Box marginTop={4} padding={3} borderRadius={1} bgcolor={blue[50]}>
            <Typography variant="subtitle2" marginBottom={3}>
              {`${
                getProjectName(projects, filters.projectId) ?? "All Projects"
              } | ${
                getGatewayName(gateways, filters.gatewayId) ?? "All Gateways"
              }`}
            </Typography>

            {!filters.projectId && !filters.gatewayId && (
              <UnfilteredReports reports={reports} />
            )}

            {filters.projectId && !filters.gatewayId && (
              <ProjectReports reports={reports} />
            )}

            {!filters.projectId && filters.gatewayId && (
              <GatewayReports reports={reports} />
            )}

            {filters.projectId && filters.gatewayId && (
              <FilteredReports reports={reports} />
            )}
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

export default Reports;
