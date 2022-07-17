import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import {
  BrowserRouter,
  Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import NoMatch from './pages/error/404Page'
// import Products from './components/Products';

class App extends Component {
  state={
    isLog:false,
  }
  handleLogin=(isLog)=>this.setState({isLog})
  render(){
    const {isLog}=this.state;
    return (
      <div className="App">
        <div className="container">
          
          <Routes>
          {!isLog ?
            <Route exact={true} path="/" element={<Login isLogin={this.handleLogin} />}/>
            :
            <Route exact={true} path="/" element={<Home handleLogged={this.handleLogin}/>}/>
           }
            <Route exact={true} path='*' element={<NoMatch/>}/>

           </Routes>
        </div>
      </div>
    );
  }
}

export default App;
