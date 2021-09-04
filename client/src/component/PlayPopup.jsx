import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import { MdPlayCircleOutline } from "react-icons/md";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const PlayPopup = (props) => {
    const [time, setTime] = useState(30);

    function timeChange(e) {
        setTime(e.target.value);
    }

    return (
        <Popup 
            trigger={
                <Button variant="outline-secondary" className="play-button">
                    <MdPlayCircleOutline />
                </Button>
            } 
            modal
        >
            {close => (
                <div className="popup-info">
                    <h3>請選擇時間</h3>
                    <hr className="hr-line" />
                    <Form.Select 
                        className="time-select" 
                        aria-label="Default select example" 
                        value={time}
                        onChange={timeChange}
                    >
                        <option value="5">5分鐘</option>
                        <option value="10">10分鐘</option>
                        <option value="20">20分鐘</option>
                        <option value="30">30分鐘</option>
                        <option value="40">40分鐘</option>
                        <option value="50">50分鐘</option>
                        <option value="60">60分鐘</option>
                    </Form.Select>
                    <Link to={{
                        pathname: "/play",
                        state: { 
                            title: props.title,
                            time: time
                        }
                    }}>
                        <Button
                            variant="outline-primary"
                            className="absolute-position start-button"
                            size="sm" 
                        >
                            播放
                        </Button>
                    </Link>
                </div>
            )}
        </Popup>
    );
};

export default PlayPopup;