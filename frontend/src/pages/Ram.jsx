import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Ram() {
    let { id } = useParams();
    const [ramObject, setRamObject] = useState({});
    const [ramType, setRamType] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3001/rams/${id}`).then((response) => {
            setRamObject(response.data);
        })
        axios.get(`http://localhost:3001/ramtypes`).then((response) => {
            setRamType(response.data);
        })
    }, [])

    const deleteRam = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this RAM?");

        if (confirmDelete) {
            try {
                await axios.delete(`http://localhost:3001/rams/${id}`);
                navigate("/rams");
            } catch (error) {
                console.error("An error occurred while trying to delete ram:", error);
            }
        }
    };

    return (
        <>
            <div>
                <h2>RAM details</h2>
                <div>Brand: {ramObject.brand}</div>
                <div>Model: {ramObject.model}</div>
                <div>Type: {ramType.find(body => body.id === ramObject.RamTypeId)?.name}</div>
                <div>Clock Speed: {ramObject.clockSpeed} MHz</div>
                <div>Size: {ramObject.Size} GB</div>
                <div>CAS Latency: {ramObject.casLatency}</div>
                <div>ECC status: {ramObject.isEcc ? "Yes" : "No"}</div>
                <div>Price: {ramObject.price} €</div>
            </div>
            <button onClick={() => { navigate(`/editram/${id}`) }} >Edit</button>
            <button onClick={deleteRam} style={{ backgroundColor: '#e74c3c' }}>Delete</button>
        </>
    )
}

export default Ram