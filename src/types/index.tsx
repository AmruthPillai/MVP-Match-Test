export type Project = {
  description: string;
  gatewayIds: string[];
  image: string;
  industry: string;
  name: string;
  projectId: string;
  rule: string;
  structure: string;
  userIds: string[];
  website: string;
};

export type Gateway = {
  apiKey: string;
  description: string;
  gatewayId: string;
  name: string;
  secondaryApiKey: string;
  type: string;
  userIds: string[];
};

export type Report = {
  amount: number;
  created: string;
  gatewayId: string;
  modified: string;
  paymentId: string;
  projectId: string;
  userIds: string[];
};

export type Filters = {
  projectId: string;
  gatewayId: string;
  from: Date | null;
  to: Date | null;
};

export const defaultFilterState: Filters = {
  projectId: "",
  gatewayId: "",
  from: null,
  to: null,
};
