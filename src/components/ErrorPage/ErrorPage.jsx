import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="">
            <h1 className="text-3xl text-center mt-20">Oopss....!</h1>
            <Link to = '/'>
                <div className="flex justify-center mt-20">
                <button className="btn btn-error">Go Back</button>
                </div>
            </Link>
        </div>
    );
};

export default ErrorPage;