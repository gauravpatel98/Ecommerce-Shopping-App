import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const ProductList = () => {
    const [inputValue, setInputValue] = useState("")
    const token = localStorage.getItem('token')
    const [product, setProduct] = useState([])
    const [totalProduct, settotalProduct] = useState([])


    const fetchProduct = async () => {
        await axios.get("http://localhost:7000/product/getAllProduct")
            .then((res) => setProduct(res.data.products))

    }
    useEffect(() => {
        fetchProduct();
    }, [])

    useEffect(() => {
        axios.get("http://localhost:7000/product/totalProducts")
            .then((res) => settotalProduct(res.data.result))
    }, [])
    const filteredProduct = product.filter((prod) => prod.product_name.toLowerCase().includes(inputValue.toLowerCase()))


    return (
        <>
            <div >
                <div className='text-center'>
                    <h1>Products</h1>
                    <div>{totalProduct.map((totalProduct, id) => (
                        <p key={id}>totalProduct = {totalProduct.totalProduct}</p>
                    ))}</div>
                    <div className='text-center'>
                        <input type="text" placeholder='Search for products' value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
                    </div>

                </div>
                <div className='row'>
                    {filteredProduct.map((product, id) => (
                        <div className='col-md-3 col-lg-2 marginProduct' key={id}>
                            <div class="card" style={{ width: "18rem" }} >
                                <img src={product.product_image} class="card-img-top" alt="not showing img"  />
                                <div class="card-body">
                                    <h5 class="card-title">{product.product_id}</h5>
                                    <h5 class="card-title">{product.product_name}</h5>
                                    <h5 class="card-title">{product.stock}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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

export default ProductList