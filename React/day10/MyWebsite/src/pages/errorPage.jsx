import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1>Oops... Not Found!</h1>
            <p>The page you are ...</p>
            <Link to="/">Home</Link>
        </div>
    );
};

export default ErrorPage;
