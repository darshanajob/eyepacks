import React, {Component, useEffect} from 'react';
import Todo from './Todo';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

const columns = [
    { dataField: 'userId', text: 'User ID', sort: true },
    { dataField: 'id', text: 'ID', sort: true },
    { dataField: 'title', text: 'Title', sort: true },
    { dataField: 'completed', text: 'Completed', sort: true }
];

const defaultSorted = [{
    dataField: 'id',
    order: 'asc'
}];

const pagination= paginationFactory({
    page: 1,
    sizePerPage: 5,
    lastPageText: '>>',
    firstPageText: '<<',
    nextPageText: '>',
    prePageText: '<',
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
        console.log('page', page);
        console.log('sizePerPage', sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
        console.log('page', page);
        console.log('sizePerPage', sizePerPage);
    }
});

class Todos extends Component{

    state={
        users:null,
        isOpen:false,
        selectRow: {
            mode: 'checkbox',
            clickToSelect: true,
            id:0,
            onSelect: (row, isSelect, rowIndex, e) => {
                console.log(row.id)
                this.setState({id:row.id})
                // console.log(selectRow.id)
                this.setState({isOpen:true})
            }
        },
        id:0,      
    }

    togglePopup = () => {
        this.setState({isOpen:!this.state.isOpen});
    }
    
    async componentDidMount(){
        const resp = await fetch(`https://jsonplaceholder.typicode.com/todos`)
        const users = await resp.json()
        this.setState({users})
    }

    render(){
        const {users} = this.state
        return(
            <div>
                {
                    users!==null?<BootstrapTable bootstrap4 keyField='id' data={users} columns={columns} 
                    defaultSorted={defaultSorted} pagination={pagination} selectRow={ this.state.selectRow } />:null
                    
                }
                {
                    (this.state.isOpen && this.state.id!==0)?<Todo id={this.state.id} handleClose={this.togglePopup.bind(this)}/>:null
                }
            </div>
        )
    }
}

export default Todos;