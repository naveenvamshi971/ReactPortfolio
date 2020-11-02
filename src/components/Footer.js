import React from 'react';
import {Link } from "react-router-dom";

function Footer(){
    return(
        <footer>
        <div className="container-fluid  text-center" style={{backgroundColor : 'black'}}>
                 <div className="col-12 py-3"> 
                
                    <h2 className="font-weight-light text-light py-3">Connect with me</h2>
                    <Link to="/contact">
                        <button className="btn btn-outline-light btn-lg">Connect</button>
                    </Link>
                </div>
 
                <div className="row">
                    <div className="col-12  col-md-4 py-3">
                        <h5 className="text-info">More Links</h5>
                        <a href="/" className="text-light d-block">Blogs</a>
                        <a href="/" className="text-light d-block">Projects</a>
                        <Link to="/" className="text-light d-block">Home</Link>
                        <Link to="/contact" className="text-light d-block">Contact</Link>
                        <Link to="/writeRecommendation" className="text-light d-block">Write a recommendation</Link>

                    </div>
                    <div className="col-12  col-md-4 py-3">
                        <p className="text-light text-justify"> 
                        My career objective is to explore and work for a company or an
organization to learn new technologies and gain knowledge to
growth along with the organization.
                        </p>
                    </div>
                    <div className="col-12  col-md-4">
                        <h5 className="text-info">Social</h5>
                        <a href="/" className="text-light">
                            <i className="fab fa-linkedin text-light h1 d-block"></i>
                        </a>
                        <a href="/" className="text-light">
                            <i className="fab fa-github text-light h1 d-block"></i>
                        </a>
                        <a href="/" className="text-light">
                            <i className="fas fa-envelope text-light h1 d-block"></i>
                        </a>
                        
                    </div>
                </div>
                     <div className="col-12 text-center text-muted py-3">
                        <p>Copyright © 2020 Naveen Vamshi </p>
                    </div>
                   
                 
            </div>
     </footer>
 
    );

}

export default Footer;