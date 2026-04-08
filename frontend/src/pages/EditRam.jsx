import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';

function EditRam() {
    let { id } = useParams();
    let navigate = useNavigate();

    const [ramObject, setRamObject] = useState({
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
        axios.get(`http://localhost:3001/rams/${id}`).then((response) => {
            if (response.data) {
                setRamObject(response.data);
            }
        });

        axios.get("http://localhost:3001/ramtypes").then((response) => {
            setRamTypes(response.data);
        });
    }, [id]);

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setRamObject({
            ...ramObject,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (event) => {

        event.preventDefault();

        try {
            await axios.put(`http://localhost:3001/rams/${id}`, ramObject);
            navigate("/rams");
        } catch (err) {
            console.error("An error occurred during save:", err);
        }
    };

    return (
        <div>
            <h2>Edit RAM details</h2>
            <form onSubmit={handleSubmit} >

                <label>Brand: </label>
                <input type="text" name="brand" value={ramObject.brand || ""} onChange={handleChange} required />

                <label>Model: </label>
                <input type="text" name="model" value={ramObject.model || ""} onChange={handleChange} required />

                <label>Type: </label>
                <select name="RamTypeId" value={ramObject.RamTypeId || ""} onChange={handleChange} required>
                    <option value="" disabled>Select Type</option>
                    {ramTypes.map((type) => (
                        <option key={type.id} value={type.id}>{type.name}</option>
                    ))}
                </select>

                <label>Clock Speed (MHz): </label>
                <input type="number" name="clockSpeed" value={ramObject.clockSpeed || ""} onChange={handleChange} min="1" required />

                <label>Size (GB): </label>
                <input type="number" name="Size" value={ramObject.Size || ""} onChange={handleChange} min="1" required />

                <label>CAS Latency: </label>
                <input type="number" name="casLatency" value={ramObject.casLatency || ""} onChange={handleChange} min="1" required />

                <label>Price (€): </label>
                <input type="number" step="0.01" name="price" value={ramObject.price || ""} onChange={handleChange} min="0.01" required />

                <label>
                    <input type="checkbox" name="isEcc" checked={ramObject.isEcc || false} onChange={handleChange} />
                    Has ECC?
                </label>

                <button type="submit" >Confirm changes</button>
            </form>
        </div>
    );
}

export default EditRam;