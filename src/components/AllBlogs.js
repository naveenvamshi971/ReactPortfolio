import React from "react";
import { Consumer } from "../context";
import BlogCard from "./BlogCard";

function AllBlogs() {
    return (
        <Consumer>
            {(value) => {
                const {blogs} = value;
                return (
                  <div className="container text-center">
                  <h1 className="font-weight-light mt-5 pt-5">
                    All <span className="text-info">  Blogs</span>
                  </h1>
                   <div className="row my-5 pt-3">
                    {
                      blogs.map((blog) => (
                          <div key={blog.id} className="col-12 col-md-6 my-2">
                            <BlogCard blog={blog} />
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

export default AllBlogs;