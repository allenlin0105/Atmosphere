import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import http from "../service/http-common";
import RecordCard from "./RecordCard";

const GetAllRecords = () => {
    const [records, setRecords] = useState([]);
    const getAll = async () => {
        try {
            const Data = await http.get("/record");
            const data = Data.data;
            for (let i = 0; i < data.length; i++) {
                const imageName = data[i]['title'];
                const imageFile = await import(`../assets/img/${imageName}.jpg`);
                data[i]['image'] = imageFile.default;
            }
            setRecords(data);
        }
        catch (error) {
            alert("Get records with error: " + error);    
        }
    }

    return [records, setRecords, getAll];
}

const Record = () => {
    const [records, setRecords, getAll] = GetAllRecords();
    const footerFixed = records.length > 6 ? false : true;

    const deleteRecord = async (deleteId) => {
        setRecords(records.filter(record => {
            return record.id !== deleteId;
        }));
        try {
            await http.delete(`/record/${deleteId}`);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAll();
    }, []);

    return (
        <div>
            <Header />
            <div className="wrapper">
                {records.reverse().map(record => {
                    return (
                        <RecordCard 
                            key={record.id}
                            id={record.id}
                            image={record.image}
                            time={record.time}
                            onDelete={deleteRecord}
                        />
                    );
                })}
            </div>
            <Footer positionFixed={footerFixed}/>
        </div>
    );
}

export default Record;