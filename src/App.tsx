import React from 'react';
import Header from "./components/header/Header";

import {observer} from "mobx-react-lite";
import {Outlet} from "react-router-dom";


const App: React.FC = () => {

    return (
        <>
            <Header/>
            <Outlet/>
        </>
    );
}

export default observer(App);


