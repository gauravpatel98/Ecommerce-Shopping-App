import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Table } from 'react-bootstrap';
import DeleteCategory from './DeleteCategory';
import EditCategory from './EditCategory';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    const token = localStorage.getItem('token');
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);


    const fetchCategories = async () => {
        try {
            const response = await axios.get('http://localhost:7000/category/getAllCategory',
                // {
                //     headers: {
                //       Authorization: `Bearer ${token}`,
                //     },
                //   }
            );
            setCategories(response.data.categories);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    useEffect(() => {

        if (!token) {
          alert('User is not authenticated.');
        }
       
        fetchCategories();
    }, []);

    const handleEditClick = (category)=>{
        setSelectedCategory(category);
        setShowEditModal(true);
    }

    const handleDeleteClick = (category) =>{
        setSelectedCategory(category);
        setShowDeleteModal(true);
    }

    const handleCloseModal=()=>{
        setShowEditModal(false);
        setShowDeleteModal(false);
        setSelectedCategory(null);
    }

    const handleCategoryUpdate = (updatedCategory) => {
        setCategories(categories.map(cat => (cat._id === updatedCategory._id ? updatedCategory : cat)));
        handleCloseModal();
    };

    const handleCategoryDelete = (deletedCategoryId) => {
        setCategories(categories.filter(cat => cat._id !== deletedCategoryId));
        fetchCategories();
        handleCloseModal();
    };


    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Category Name</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category) => (
                        <tr key={category.category_id}>
                            <td>{category.category_name}</td>
                            <td><img src={category.category_image} alt="image not shown" width="100" height="100"/></td>
                            <td>
                                <Button variant="primary" onClick={() => handleEditClick(category)}>
                                    Edit
                                </Button>
                                {' '}
                                <Button variant="danger" onClick={()=>handleDeleteClick(category)}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            {selectedCategory && (
                <>
                <EditCategory
                        show={showEditModal}
                        handleClose={handleCloseModal}
                        category={selectedCategory}
                        handleCategoryUpdate={handleCategoryUpdate}
                    />
                <DeleteCategory
                        show={showDeleteModal}
                        handleClose={handleCloseModal}
                        category={selectedCategory}
                        handleCategoryDelete={handleCategoryDelete}
                    />
                </>
            )}
            
        </>
    );
};

export default CategoryList;