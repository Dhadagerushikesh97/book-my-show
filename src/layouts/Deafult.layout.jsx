import React from "react";
import Navbar from "../components/Navbar/navbar.component";
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.Components";

const DeafultLayout = (props) => {
    return (
        <>
            <Navbar/>
            <HeroCarousal/>
            {props.children}

        </>
    );
};

export default DeafultLayout;