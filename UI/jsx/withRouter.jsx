import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";

const withRouter = (WrappedComponent) => {
    return (props) => {
        const params = useParams();
        const location = useLocation();
        const navigate = useNavigate();

        return <WrappedComponent {...props} match={{ params, location, navigate }} />;
    };
};

export default withRouter;