import React from "react";

export function Container({ fluid, children }) {
    return <div className={`containers${fluid ? "-fluid" : ""}`}>
        {children}
    </div>
}