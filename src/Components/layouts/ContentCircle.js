import icon from "../../images/icons/icon.png";
import React from "react";

export default function ContentCircle() {
    return (
        <div className="content-circle">
            <svg className="circle" viewBox="0 0 100 100" width="120" height="120">
                <defs>
                    <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"></path>
                </defs>
                <text>
                    <textPath xlinkHref="#circle">Robert Web Development
                    </textPath>
                </text>
            </svg>
            <div className="circle-logo">
                <img alt="icon" src={icon} width="40"/>
            </div>
        </div>
    )
}