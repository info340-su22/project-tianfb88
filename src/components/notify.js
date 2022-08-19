import React from "react";
import { Link } from "react-router-dom";

export default function Notify(props) {
    return(
        <div className="justify-content-center">
            <div className="detailCard">
                <div className="alert alert-success" role="alert">
                    <h4 className="alert-heading">Thank you for your rating!</h4>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <Link to="/crowd"> <span aria-hidden="true">&times;</span></Link>
                    </button>
                </div>
            </div>
        </div>
    )
}