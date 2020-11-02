import React from 'react';

function NotFound() {
    return (
       <div className="container my-5 py-5"> 
            <div className="display-4 my-5"><span className="text-danger">Oops!</span> Page not found (404)</div>
            <div className="lead">Sorry! We couldn't find the page you're looking for</div>
       </div>
    )
}

export default NotFound;