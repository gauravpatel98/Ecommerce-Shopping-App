import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [product_name, setProductName] = useState('');
  const [description, setProductDescription] = useState('');
  const [stock, setProductStock] = useState('');
  const [price, setProductPrice] = useState('');
  const [category_id, setCategory_id] = useState('');
  const [brand_id, setBrand_id] = useState('');
  const [product_image, setProductImage] = useState(null);

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    if (!token) {
      setError('User is not authenticated.');
      return;
    }

    try {
      await axios.post(
        'http://localhost:7000/product/addProduct',
        { product_name, description,stock,price,category_id,brand_id,product_image },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      setSuccess('Product added successfully!');
      setProductName(''); 
      setProductDescription('');
      setProductStock('');
      setProductPrice('');
      setCategory_id('')
      setBrand_id('')
      setProductImage(null)
      setError(null);
    } catch (err) {
      setError('Error adding Product. Please try again.');
      setSuccess(null);
    }
  };

  const handleDismiss = () => {
    setError(null);
    setSuccess(null);
  };

  return (
    <div className="container">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            className="form-control"
            id="productName"
            value={product_name}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="productDescription">Product Description</label>
          <input
            type="text"
            className="form-control"
            id="productDescription"
            value={description}
            onChange={(e) => setProductDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="productStock">Product Stock</label>
          <input
            type="text"
            className="form-control"
            id="productStock"
            value={stock}
            onChange={(e) => setProductStock(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="productPrice">Product Price</label>
          <input
            type="text"
            className="form-control"
            id="productPrice"
            value={price}
            onChange={(e) => setProductPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="productCategory_id">Product Category_id</label>
          <input
            type="text"
            className="form-control"
            id="productCategory_id"
            value={category_id}
            onChange={(e) => setCategory_id(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="productBrand_id">Product Brand_id</label>
          <input
            type="text"
            className="form-control"
            id="productBrand_id"
            value={brand_id}
            onChange={(e) => setBrand_id(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="productImage">Product Image</label>
          <input
            type="file"
            className="form-control"
            id="productImage"
            onChange={(e) => setProductImage(e.target.files[0])}
          />
        </div>

        {error && (
          <div className="alert alert-danger alert-dismissible fade show" role="alert">
            {error}
            <button
              type="button"
              className="close"
              onClick={handleDismiss}
              aria-label="Close"
              style={{ position: 'absolute', right: '10px', top: '5px' }}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        )}

        {success && (
          <div className="alert alert-success alert-dismissible fade show" role="alert">
            {success}
            <button
              type="button"
              className="close"
              onClick={handleDismiss}
              aria-label="Close"
              style={{ position: 'absolute', right: '10px', top: '5px' }}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        )}

        <button type="submit" className="btn btn-primary mt-3">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;