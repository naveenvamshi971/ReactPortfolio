import React from "react";
import { Consumer } from "../context";
import Projectcard from "./Projectcard";

function AllProjects() {
    return (
        <Consumer>
            {(value) => {
                const {projects} = value;
                return (
                  <div className="container text-center">
                  <h1 className="font-weight-light mt-5 pt-5">
                    All <span className="text-info">  Projects</span>
                  </h1>
                   <div className="row my-5 pt-3">
                    {
                      projects.map((project) => (
                          <div key={project.id} className="col-12 col-md-6 my-2">
                            <Projectcard project={project} />
                          </div>
                        ))
                    }      
                  </div>
                </div>
                );
            }}
        </Consumer>
    );
}

export default AllProjects;