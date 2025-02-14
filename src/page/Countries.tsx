import axios from 'axios'
import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Countries = () => {
    // by using this hook you can get the data that returns by the loader of this page
    const countriesData = useLoaderData();
    return (
        <>
            <ol>
                {countriesData?.map((data, index) => (
                    <li key={index}>{data?.name?.common}</li>
                ))}
            </ol>
        </>
    )
}

export default Countries

//  this method will be loaded first before the component renders
export const countriesLoader = async () => {
    try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        return response?.data;
    } catch (error) {
    }
}