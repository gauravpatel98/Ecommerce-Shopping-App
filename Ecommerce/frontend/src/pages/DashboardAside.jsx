import { Routes, Route, Link } from "react-router-dom";
import "./DashboardAside.css";
import ProductList from "../components/Products/ProductList";
import AddCategory from "../components/Category/AddCategory";
import AddProduct from "../components/Products/AddProduct";
import CategoryList from "../components/Category/CategoryList";
import BrandList from "../components/Brand/BrandList";
import AddBrand from "../components/Brand/AddBrand";

const DashboardAside = () => {
  return (
    <>
      <div className="wrapper bg-light bg-gradient text-white">
        <div className="sidebar">
          <ul className="nav text-light">
            <li>
              <Link to="/dashboard/products">Products</Link>
            </li>
            <hr></hr>
            <li>
              <Link to="/dashboard/addProduct">Add Product</Link>
            </li>
            <hr></hr>
            <li>
              <Link to="/dashboard/category">Category</Link>
            </li>
            <hr></hr>
            <li>
              <Link to="/dashboard/addCategory">AddCategory</Link>
            </li>
            <hr></hr>
            <li>
              <Link to="/dashboard/brand">Brand</Link>
            </li>
            <hr></hr>
            <li>
              <Link to="/dashboard/addBrand">AddBrand</Link>
            </li>
          </ul>
        </div>

        <div className="main-content bg-dark bg-gradient">
          <Routes>
            <Route path="/products" element={<ProductList />} />
            <Route path="/category" element={<CategoryList />} />
            <Route path="/cart" element={<h1>cart</h1>} />
            <Route path="/addProduct" exact element={<AddProduct />} />
            <Route path="/addCategory" element={<AddCategory />} />
            <Route path="/brand" element={<BrandList />} />
            <Route path="/addBrand" element={<AddBrand />} />
            <Route path="/" element={<div>Select a link from the sidebar</div>} />
            <Route path="/showProducts" element={<ProductList />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default DashboardAside;