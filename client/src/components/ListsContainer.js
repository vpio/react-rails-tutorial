import React, { Component } from 'react';
import axios from 'axios';

class ListsContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            lists: []
        }
    }
    componentDidMount() {
      console.log("hello")
        axios.get('http://localhost:3001/api/v1/lists')
        .then(response => {
            console.log("hello", response)
            this.setState({
                lists: response.data
            })
        })
        .catch(error => console.log(error))
    }

    render() {
        return (
            <div className="Lists-container">
                Lists
            </div>
        )
    }
}

export default ListsContainer;
