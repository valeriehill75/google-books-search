import React from "react";
import "./List.css";

export function List({ children }) {
    return (
        <div className="list-flow-container">
            <ul className="list-grp">{children}</ul>
        </div>
    );
}