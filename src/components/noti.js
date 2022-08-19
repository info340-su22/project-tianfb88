import React from "react";
import { Link } from "react-router-dom";

export default function Noti(props) {
    return(
        <div className="justify-content-center">
            <div className="detailCard">
                <div className="alert alert-success" role="alert">
                    <h4 className="alert-heading">Your appointment has been submitted.</h4>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <Link to="/appointment"> <span aria-hidden="true">&times;</span></Link>
                    </button>
                </div>
            </div>
        </div>
    )
}