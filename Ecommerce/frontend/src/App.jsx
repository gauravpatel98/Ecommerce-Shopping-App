// import './App.css'
// import LayOut from './LayOut/LayOut'
// import { RouterProvider,createBrowserRouter } from 'react-router-dom'
// import AllProduct from './pages/AllProduct'
// import Category from './pages/Category'
// import Brands from './pages/Brands'
// import AddCategory from './pages/AddCategory'

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<LayOut/>,
//     children:[
//       {
//         index: true,
//         element:<div>This is home page</div>
//       },
//       {
//         path:"/product",
//         element:<AllProduct/>
//       },
//       {
//         path:"/category",
//         element:<Category/>
//       },
//       {
//         path:"/brand",
//         element:<Brands/>
//       },
//       {
//         path:"/addcategory",
//         element:<AddCategory/>
//       },
//     ]
//   }
// ])

// function App() {

//   return (
//     <>
//     <RouterProvider router={router}/>
//     </>
//   )
// }

// export default App



import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashboardAside from './pages/DashboardAside'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { UserProvider } from './context/userContext'

function App() {
  return (
    <>
  <BrowserRouter>
  <UserProvider>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard/*" element={<DashboardAside />}></Route>
      </Routes>
      <Footer />
      
      </UserProvider>
    </BrowserRouter>
    </>
  )
}

export default App
