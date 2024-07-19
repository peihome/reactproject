import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";

const withRouter = (WrappedComponent) => {

    const WithRouterComponent = (props) => {
        const params = useParams();
        const location = useLocation();
        const navigate = useNavigate();

        return <WrappedComponent {...props} match={{ params, location, navigate }} />;
    };

    WithRouterComponent.displayName = `WithRouter(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

    return WithRouterComponent;
};

export default withRouter;