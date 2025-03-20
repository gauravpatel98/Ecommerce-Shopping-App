import db from "../config/db.js";
import path from 'path';

const baseURL = 'http://localhost:7000'

// Helper function for validation
const validateCategoryName = (category_name) => {
  if (
    !category_name ||
    typeof category_name !== "string" ||
    category_name.trim().length === 0
  ) {
    return "Category name is required and should be a valid string.";
  }
  return null;
};

function addCategory(req, res) {
  console.log(req.body);
  try {
    const { category_name } = req.body;
    const validationError = validateCategoryName(category_name);

    if (validationError) {
      return res.status(400).send({ msg: validationError, success: false });
    }

    const category_image = req.file ? req.file.filename : null;
    console.log(category_name, category_image, "***********");
    const q1 = `insert into category (category_name, category_image) values('${category_name}', '${category_image}')`;

    db.query(q1, (err, result) => {
      if (err) throw err;
      res
        .status(200)
        .send({ msg: "Category added successfully", success: true });
    });
  } catch (error) {
    res.status(500).send({ msg: "Server Error" });
  }
}

function getAllCategory(req, res) {
console.log(baseURL);

  try {
    const q2 = "select * from category";

    db.query(q2, (err, result) => {
      if (err) throw err;

      if (result.length === 0) {
        return res
          .status(404)
          .send({ msg: "No categories found", success: false });
      }
      // Convert category_image to an absolute path
      const categories = result.map((category) => ({
        ...category,
        category_image: category.category_image
          ? `${baseURL}/uploads/${category.category_image}`
          : null,
      }));
      res.status(200).send({ categories: categories, success: true });
    });
  } catch (error) {
    res.status(500).send({ msg: "Server Error" });
  }
}

function updateCategory(req, res) {
  try {
    const { category_name } = req.body;
    const id = req.params.id;

    if (!id || isNaN(id)) {
      return res
        .status(400)
        .send({ msg: "Invalid category ID", success: false });
    }

    const validationError = validateCategoryName(category_name);
    if (validationError) {
      return res.status(400).send({ msg: validationError, success: false });
    }

    const q3 = `update category set category_name = ? where category_id = ?;`;

    db.query(q3, [category_name, id], (err, result) => {
      if (err) throw err;

      if (result.affectedRows === 0) {
        return res
          .status(400)
          .send({ msg: "Category not found", success: false });
      }

      res.status(200).send({ msg: "Category name updated", success: true });
    });
  } catch (error) {
    res.status(500).send({ msg: "Server Error" });
  }
}

function deleteCategory(req, res) {
  try {
    const id = req.params.id;

    if (!id || isNaN(id)) {
      return res
        .status(400)
        .send({ msg: "Invalid category ID", success: false });
    }

    const q4 = `delete from category where category_id = ?;`;

    db.query(q4, [id], (err, result) => {
      if (err) throw err;

      if (result.affectedRows === 0) {
        return res
          .status(400)
          .send({ msg: "Category not found", success: false });
      }

      res.status(200).send({ msg: "Category deleted", success: true });
    });
  } catch (error) {
    res.status(500).send({ msg: "Server Error" });
  }
}

export default { addCategory, getAllCategory, deleteCategory, updateCategory };