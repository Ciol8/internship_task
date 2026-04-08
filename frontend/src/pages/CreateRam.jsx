import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function CreateRam() {
    let navigate = useNavigate();

    const [newRam, setNewRam] = useState({
        brand: "",
        model: "",
        clockSpeed: "",
        Size: "",
        casLatency: "",
        isEcc: false,
        price: "",
        RamTypeId: ""
    });

    const [ramTypes, setRamTypes] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/ramtypes").then((response) => {
            setRamTypes(response.data);
        });
    }, []);

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setNewRam({
            ...newRam,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await axios.post("http://localhost:3001/rams", newRam);
            navigate("/rams");
        } catch (err) {
            console.error("An error occurred while trying to add new ram:", err);
        }
    };

    return (
        <div>
            <h2>Add new RAM</h2>
            <form onSubmit={handleSubmit} >

                <label>Brand: </label>
                <input type="text" name="brand" value={newRam.brand} onChange={handleChange} required />

                <label>Model: </label>
                <input type="text" name="model" value={newRam.model} onChange={handleChange} required />

                <label>Type: </label>
                <select name="RamTypeId" value={newRam.RamTypeId} onChange={handleChange} required>
                    <option value="" disabled>Select Type</option>
                    {ramTypes.map((type) => (
                        <option key={type.id} value={type.id}>{type.name}</option>
                    ))}
                </select>

                <label>Clock Speed (MHz): </label>
                <input type="number" name="clockSpeed" value={newRam.clockSpeed} onChange={handleChange} min="1" required />

                <label>Size (GB): </label>
                <input type="number" name="Size" value={newRam.Size} onChange={handleChange} min="1" required />

                <label>CAS Latency: </label>
                <input type="number" name="casLatency" value={newRam.casLatency} onChange={handleChange} min="1" required />

                <label>Price (€): </label>
                <input type="number" step="0.01" name="price" value={newRam.price} onChange={handleChange} min="0.01" required />

                <label>
                    <input type="checkbox" name="isEcc" checked={newRam.isEcc} onChange={handleChange} />
                    Has ECC?
                </label>

                <button type="submit" >Add RAM</button>
            </form>
        </div>
    );
}

export default CreateRam;