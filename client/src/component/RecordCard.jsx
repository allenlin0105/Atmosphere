import React from "react";
import campfire from "../assets/img/campfire.jpg";
import { FaRegTrashAlt } from "react-icons/fa";
import Button from 'react-bootstrap/Button'

const RecordCard = (props) => {
    return (
        <div className="record-container">
            <img src={campfire} alt={"Record"} />
            <div className="time-text">50分鐘</div>
            <Button className="delete-btn" variant="outline-light">
                <FaRegTrashAlt />
            </Button>
        </div>
    );
}

export default RecordCard;