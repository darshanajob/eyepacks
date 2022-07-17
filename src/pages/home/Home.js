import React from 'react';
import {Route} from 'react-router-dom'
import Header from '../../components/Header/Header';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

// import Explore from '../../Components/Explore/Explore';
// import Feeds from '../../Components/Feeds/Feeds';
// import Suggestions from '../../Components/Suggestion/Suggestion';
// import Profile from '../Profile/Profile';

import './Home.css';
import Todos from '../../components/Todos/Todos';
const Home = ({handleLogged}) => {
    return(
        <div>
            <Header isLogged={handleLogged}/>

            <div className='div-home'>
                <Todos/>
            </div>
        </div>
    )
}

export default Home;