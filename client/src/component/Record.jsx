import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import RecordCard from "./RecordCard";

const Record = () => {
    let count = 1;
    const footerFixed = count > 6 ? false : true;

    return (
        <div>
            <Header />
            <div className="wrapper">
                <RecordCard />
            </div>
            <Footer positionFixed={footerFixed}/>
        </div>
    );
}

export default Record;