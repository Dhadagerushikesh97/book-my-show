import React from "react";
import { Route } from "react-router-dom";

import DeafultLayout from "../layouts/Deafult.layout";

const DefaultHOC = ({component, ...rest}) => {
    const Component=component;
    return (
        <>
        <Route {...rest} 
        component={(props)=>(
        <DeafultLayout>
            <Component { ...props}/>
        </DeafultLayout>
        )}
        />
        </>
    );
};

export default DefaultHOC;