import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { format, parseISO } from "date-fns";
import { useState } from "react";
import { useQuery } from "react-query";
import GatewayService from "src/services/gateways";
import ProjectService from "src/services/projects";
import {
  defaultFilterState,
  Filters as FiltersType,
  Gateway,
  Project,
} from "src/types";

type Props = {
  onFilter: (filters: FiltersType) => void;
};

const Filters: React.FC<Props> = ({ onFilter }) => {
  const { data: projects } = useQuery<any, any, Project[]>(
    "projects",
    ProjectService.fetchProjects,
    { select: ({ data }) => data }
  );

  const { data: gateways } = useQuery<any, any, Gateway[]>(
    "gateways",
    GatewayService.fetchGateways,
    { select: ({ data }) => data }
  );

  const [filters, setFilters] = useState<FiltersType>(defaultFilterState);

  const handleFilterChange = (property: string, value: string | Date | null) =>
    setFilters({ ...filters, [property]: value });

  const handleSubmit = () => onFilter(filters);

  return (
    <>
      {projects && projects.length > 0 && (
        <FormControl size="small" variant="filled" sx={{ minWidth: 140 }}>
          <InputLabel>Project</InputLabel>
          <Select
            value={filters.projectId}
            onChange={(e) => handleFilterChange("projectId", e.target.value)}
          >
            <MenuItem value="">
              <em>Select Project</em>
            </MenuItem>
            {projects.map((project) => (
              <MenuItem key={project.projectId} value={project.projectId}>
                {project.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}

      {gateways && gateways.length > 0 && (
        <FormControl size="small" variant="filled" sx={{ minWidth: 140 }}>
          <InputLabel>Gateway</InputLabel>
          <Select
            value={filters.gatewayId}
            onChange={(e) => handleFilterChange("gatewayId", e.target.value)}
          >
            <MenuItem value="">
              <em>Select Gateway</em>
            </MenuItem>
            {gateways.map((gateway) => (
              <MenuItem key={gateway.gatewayId} value={gateway.gatewayId}>
                {gateway.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}

      <FormControl sx={{ width: 160 }}>
        <DatePicker
          label="From Date"
          openTo="year"
          minDate={parseISO("2021-01-01")}
          maxDate={parseISO("2021-12-31")}
          views={["year", "month", "day"]}
          inputFormat="yyyy-LL-dd"
          value={filters.from}
          onChange={(newDate) =>
            handleFilterChange(
              "from",
              newDate ? format(newDate, "yyyy-LL-dd") : newDate
            )
          }
          renderInput={(params) => (
            <TextField size="small" variant="filled" {...params} />
          )}
        />
      </FormControl>

      <FormControl sx={{ width: 160 }}>
        <DatePicker
          label="To Date"
          openTo="year"
          minDate={parseISO("2021-01-01")}
          maxDate={parseISO("2021-12-31")}
          views={["year", "month", "day"]}
          inputFormat="yyyy-LL-dd"
          value={filters.to}
          onChange={(newDate) =>
            handleFilterChange(
              "to",
              newDate ? format(newDate, "yyyy-LL-dd") : newDate
            )
          }
          renderInput={(params) => (
            <TextField size="small" variant="filled" {...params} />
          )}
        />
      </FormControl>

      <Button sx={{ height: 48 }} onClick={handleSubmit}>
        Generate Report
      </Button>
    </>
  );
};

export default Filters;
