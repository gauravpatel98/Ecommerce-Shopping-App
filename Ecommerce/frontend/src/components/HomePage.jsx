import React, { useEffect, useState } from 'react'
import './ecommerce.css'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
const HomePage = () => {

    return (
        <>
            <div className='homepagecontainer'>
                <div className='d-flex bg-dark fs-5 '>
                    <div className='d-inline-block'>
                        <ul className='text-decoration-none'>
                            <li className='mt-3 p-4'><Link className='text-decoration-none p-3 m-4' to="/product">Products</Link></li>
                            <li className='mt-3 p-4'><Link className='text-decoration-none p-3 m-4' to="/category">Category</Link></li>
                            <li className='mt-3 p-4'><Link className='text-decoration-none p-3 m-4' to="/addcategory">AddCategory</Link></li>
                            <li className='mt-3 p-4'><Link className='text-decoration-none p-3 m-2' to="/brand">Brands</Link></li>
                            <li className='mt-3 p-4'><Link className='text-decoration-none p-3 m-2' to="/addbrand">AddBrand</Link></li>
                            <li className='mt-3 p-4'><Link className='text-decoration-none p-3 m-2' to="/updateProduct">updateProduct</Link></li>
                        </ul>
                    </div>
                    <div className='bg-light'>
                        <Outlet>
                        </Outlet>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage