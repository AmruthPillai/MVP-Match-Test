import { API_BASE_URL } from "src/constants";

const ProjectService = {
  fetchProjects: () =>
    fetch(API_BASE_URL + "/projects").then((res) => res.json()),
};

export default ProjectService;
