import React from 'react';
import { Route, Routes } from "react-router";

import { Navbar } from "./components";
import { Home, Details, Error } from "./pages";
import { Url } from "./core/constants";
import { GlobalStyles } from "./components/UI/styles";


function App() {
    return (
        <>
            <GlobalStyles/>
            <Navbar/>
            <Routes>
                <Route index path={Url.home} element={<Home/>}/>
                <Route path={`${Url.details}/:${Url.bookId}`} element={<Details/>}/>
                <Route path={"*"} element={<Error/>}/>
            </Routes>
        </>
    );
}

export default App;
