import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";

const EditCategory = ({
  show,
  handleClose,
  category,
  handleCategoryUpdate,
}) => {
  const [categoryName, setCategoryName] = useState(category.category_name);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");


  if (!token) {
    alert("User is not authenticated.");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
        console.log(categoryName);
        console.log(token);
      const response = await axios.put(
        `http://localhost:7000/category/updateCategory/${category.category_id}`,
        { categoryName },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      handleCategoryUpdate(response.data);
    } catch (error) {
      console.error("Error updating category:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Category</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formCategoryName">
            <Form.Label>Category Name</Form.Label>
            <Form.Control
              type="text"
              value={category.name}
              onChange={(e) => setCategoryName(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" disabled={loading}>
            {loading ? "Saving..." : "Save Changes"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditCategory;