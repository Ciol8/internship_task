import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {

    const [listOfRams, setListOfRams] = useState([]);
    const [ramType, setRamType] = useState([]);
    let navigate = useNavigate();


    useEffect(() => {
        axios.get("http://localhost:3001/rams").then((response) => {
            setListOfRams(response.data);
        });
        axios.get(`http://localhost:3001/ramtypes`).then((response) => {
            setRamType(response.data);
        })
    }, []);

    return (
        <div>
            <table>
                <thead><tr>
                    <th>id</th>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Price</th>
                </tr></thead>
                <tbody>{listOfRams.map((value) => {
                    return (
                        <tr key={value.id} className="ram" onClick={() => { navigate(`/rams/${value.id}`) }}>
                            <td>{value.id} </td>
                            <td > {value.brand} </td>
                            <td > {value.model} </td>
                            <td>
                                {ramType.find(body => body.id === value.RamTypeId)?.name}
                            </td>
                        </tr>
                    )
                })}</tbody>



            </table>

        </div>
    )
}

export default Home