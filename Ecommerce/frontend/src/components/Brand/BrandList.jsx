import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const BrandList = () => {
    const [brands, setBrand] = useState([])

    const fetchBrand = async()=>{
        axios.get("http://localhost:7000/brand/getAllBrand")
            .then((res) => setBrand(res.data.brands))
    }
    useEffect(() => {
        fetchBrand()
    }, [])
    return (
        <>
            <div>
                <div className='row'>
                    {brands.map((brand, id) => (
                        <div className='col-md-3 col-lg-2 marginProduct' key={id}>
                            <div class="card" style={{ width: "18rem" }} >
                                <img src={brand.brand_image} class="card-img-top" alt="image not available" />
                                <div class="card-body">
                                    <h5 class="card-title">Brand: {brand.brand_name}</h5>
                                    <Link to="#" class="btn btn-primary">Edit</Link>
                                    <Link to="#" class="btn btn-danger">Delete</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default BrandList