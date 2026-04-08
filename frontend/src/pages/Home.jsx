import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {

    const [listOfRams, setListOfRams] = useState([]);
    let navigate = useNavigate();


    useEffect(() => {
        axios.get("http://localhost:3001/rams").then((response) => {
            setListOfRams(response.data);
        });
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
                            <td className='title'>{value.id} </td>
                            <td className='title'> {value.brand} </td>
                            <td className='body'> {value.model} </td>
                            <td className='footer'> {value.price} €</td>
                        </tr>
                    )
                })}</tbody>



            </table>

        </div>
    )
}

export default Home