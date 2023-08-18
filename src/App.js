import React from "react";
import Calender from "./class-component";
import { Content, Header, Footer } from "./func-component";
import { Banner } from "./banners";
import { Calculator } from "./calculator";

export default function App() {
    return (
        <>
         <Header/>
            <p>
            <center >
                <Calender/>
            </center> 
            </p>
        <Content />
        <Footer />
        <Banner/>
        <Calculator/>
        </>
    );
}