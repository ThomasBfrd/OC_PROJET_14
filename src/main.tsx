import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Route, Routes} from "react-router";
import {BrowserRouter} from "react-router-dom";
import * as React from "react";
import Loader from "./shared/component/loader/loader.tsx";

const App  = React.lazy(() => import('./App.tsx'));
const EmployeeList = React.lazy(() => import("./pages/employee-list/employee-list.tsx"));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path="/" element={<App />}></Route>
                <Route path="/employee-list" element={<EmployeeList />}></Route>
            </Routes>
        </Suspense>
    </BrowserRouter>
  </StrictMode>,
)
