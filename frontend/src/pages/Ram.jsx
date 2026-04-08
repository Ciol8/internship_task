import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Ram() {
    let { id } = useParams();
    const [ramObject, setRamObject] = useState({});
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3001/rams/${id}`).then((response) => {
            setRamObject(response.data);
        })
    })

    return (
        <>
            <div>
                aaddasokjibngsad ioughsda yuboh
                <div>Brand: {ramObject.brand}</div>
                <div>Model: {ramObject.model}</div>
                <div>Clock Speed: {ramObject.clockSpeed} MHz</div>
                <div>Size: {ramObject.Size} GB</div>
                <div>CAS Latency: {ramObject.casLatency}</div>
                <div>ECC status: {ramObject.isEcc}</div>
                <div>Price: {ramObject.price} €</div>
            </div>
            <button onClick={() => { navigate(`/editram/${id}`) }} >Edit</button>
        </>
    )
}

export default Ram