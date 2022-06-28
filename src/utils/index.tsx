import { memoize } from "lodash";
import { Gateway, Project, Report } from "src/types";

export const formatCurrency = (number: number) =>
  number.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " USD";

export const amountSumOfReports = memoize((reports: Report[]) =>
  reports.reduce((acc, report) => acc + report.amount, 0)
);

export const getProjectName = (projects: Project[], projectId: string) =>
  projects?.find((x) => x.projectId === projectId)?.name;

export const getGatewayName = (gateways: Gateway[], gatewayId: string) =>
  gateways?.find((x) => x.gatewayId === gatewayId)?.name;
