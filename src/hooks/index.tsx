import { useQuery } from "react-query";
import GatewayService from "src/services/gateways";
import ProjectService from "src/services/projects";
import ReportService from "src/services/reports";
import { Filters, Gateway, Project, Report } from "src/types";

export const useReports = (filters: Filters | null) =>
  useQuery<any, any, Report[]>(
    "reports",
    () => ReportService.fetchReports(filters),
    { select: ({ data }) => data }
  );

export const useProjects = () =>
  useQuery<any, any, Project[]>("projects", ProjectService.fetchProjects, {
    select: ({ data }) => data,
  });

export const useGateways = () =>
  useQuery<any, any, Gateway[]>("gateways", GatewayService.fetchGateways, {
    select: ({ data }) => data,
  });
