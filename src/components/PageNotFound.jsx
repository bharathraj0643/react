import { Link } from "react-router-dom";

function PageNotFound(){
    return (
        <>
            <p>Error 404</p>
            <p>Page Not Found</p>

            <Link className="btn btn-primary" to="/">Home</Link>
            <Link className="btn btn-primary" to="/about">About</Link>
        </>
    )
}

export default PageNotFound;