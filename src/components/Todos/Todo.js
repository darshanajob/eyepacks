import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { useNavigate} from 'react-router-dom';
import './Todo.css';
class Todo extends Component { 
    state={
        user:null,      
    }
    async componentDidMount(){
        const {id} = this.props;
        const resp = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        const user = await resp.json()
        this.setState({user})
    }
        render(){
            const {id} = this.props;
            const {user} = this.state;
            
            return(
                
                <div className="popup-box">
                <div className="box">
                  <span className="close-icon" onClick={this.props.handleClose} >x</span>
                  <div>
                      <h1>Todo</h1>
                  </div>
                    <div style={{color:'black', justifyContent:'center', alignContent:'content'}}>
                        <div><span className="badge badge-dark">ID: {user!==null?user.id:null}</span></div>
                        <div><span className="badge badge-dark">User ID: {user!==null?user.userId:null}</span></div>
                        <div><span className="badge badge-dark">Title: {user!==null?user.title:null}</span></div>
                        <div><span className="badge badge-dark">Completed {user!==null?user.completed?'true':'false':null}</span></div>
                    </div>
                </div>
              </div>
                
            )
        }
}

export default  Todo;

Todo.propTypes = {
    id : PropTypes.number.isRequired,
    handleClose: PropTypes.func.isRequired,
  };