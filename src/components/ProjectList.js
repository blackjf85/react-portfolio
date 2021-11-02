import React from "react";

import ProjectCard from "./ProjectCard";

const ProjectList = (props) => {
  return !props.isLoaded ? (
    <p>Loading Projects</p>
  ) : (
    props.data.map((data) => <ProjectCard key={data.project_id} data={data} />)
  );
};

export default ProjectList;
