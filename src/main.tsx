import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import EmployeeList from "./pages/employee-list/employee-list.tsx";
import {Route, Routes} from "react-router";
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="/employee-list" element={<EmployeeList />}></Route>
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
