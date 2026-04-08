import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup'

function EditRam() {
    let { id } = useParams();
    const [ramObject, setRamObject] = useState({});
    const [ramType, setRamType] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3001/rams/${id}`).then((response) => {
            setRamObject(response.data);
        });
        axios.get(`http://localhost:3001/ramtypes`).then((response) => {
            setRamType(response.data);
        })
    }, [])

    return (
        <>
            <div>
                <div>
                    Brand: <input type='text' value={ramObject.brand} ></input>
                </div>
                <div>
                    Model: <input type='text' value={ramObject.model}></input>
                </div>
                <div>
                    Type: <select>{ramType.map((value) => { return <option key={value.id}>{value.name}</option> })}</select>
                </div>
                <div>
                    Clock Speed: <input value={ramObject.clockSpeed}></input>
                </div>
                <div>
                    Size: <input value={ramObject.Size}></input>
                </div>
                <div>
                    CAS Latency: <input value={ramObject.casLatency}></input>
                </div>
                <div>
                    ECC Status: <input type='checkbox'></input>
                </div>
                <div>
                    Price: <input value={ramObject.price}></input>
                </div>

            </div>
            <button>Confirm changes</button>
        </>
    )


}

export default EditRam