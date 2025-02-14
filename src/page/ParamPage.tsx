import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const ParamPage = () => {
  const data = useLoaderData();
  return (
    <div>Param id : {data}</div>
  )
}

export default ParamPage

export const paramPageLoader = async ({ params }) => {
  return params.id;
}