import React from "react";
import { useLocation, useParams } from "react-router-dom";

const withRouter = (WrappedComponent) => {
    return (props) => {
        const params = useParams();
        const location = useLocation();
        return <WrappedComponent {...props} match={{ params, location }} />;
    };
};

export default withRouter;