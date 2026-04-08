import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditRam() {
    let { id } = useParams();
    const [ramObject, setRamObject] = useState({});
    const [ramType, setRamType] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3001/rams/${id}`).then((response) => {
            setRamObject(response.data);
        })
    })
    useEffect(() => {
        axios.get(`http://localhost:3001/ramtypes`).then((response) => {
            setRamType(response.data);
        })
    }, [])

    return (
        <>
            <div>
                <div>
                    Brand: <input></input>
                </div>
                <div>
                    Model: <input></input>
                </div>
                <div>
                    <select></select>
                </div>
                <div>
                    Clock Speed: <input></input>
                </div>
                <div>
                    Size: <input></input>
                </div>
                <div>
                    CAS Latency: <input></input>
                </div>
                <div>
                    ECC Status: <input type='checkbox'></input>
                </div>
                <div>
                    Price: <input></input>
                </div>

            </div>
        </>
    )


}

export default EditRam