import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import Button from 'react-bootstrap/Button';

const RecordCard = (props) => {
    const deleteRecord = () => {
        const deleteId = props.id;
        props.onDelete(deleteId);
    }

    return (
        <div className="record-container">
            <img src={props.image} alt={"Record"} />
            <div className="time-text">{String(props.time) + "分鐘"}</div>
            <Button onClick={deleteRecord} className="delete-btn" variant="outline-light">
                <FaRegTrashAlt />
            </Button>
        </div>
    );
}

export default RecordCard;