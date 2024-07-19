import React from "react";

export default class Alert extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div id="alert" className="alert alert-primary" role="alert">
                {this.props.message}
            </div>
        );
    }
}