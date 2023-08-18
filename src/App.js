import React from "react";
import Calender from "./class-component";
import { Content, Header, Footer } from "./func-component";
import { Banner } from "./banners";
import { Calculator } from "./calculator";
import { EventData } from "./event-data";

export default function App() {
    return (
        <>
        <Banner/>
        <Calculator/>
        <EventData/>
        </>
    );
}