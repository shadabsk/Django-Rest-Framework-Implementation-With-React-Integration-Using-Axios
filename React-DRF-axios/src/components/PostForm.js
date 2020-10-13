import React, { Component } from 'react'
import axios from 'axios'


class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
             year: '',
        }
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    } 

    submitHandler = (e) => {
        e.preventDefault()
        axios
            .post("http://localhost:8000/Pandemics/", this.state)
             .then(response => {
                 console.log(response)
             })
             .catch(error =>{
                 console.log(error.response)
             })
    }
    
    // .post("http://localhost:8000/Pandemics/", {
            // name: "111", year: "222"} )

    render() {
        const {name, year} = this.state

        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="name" value={name} placeholder="Name" onChange={ this.changeHandler }/>
                    </div>
                    <div>
                        <input type="text" name="year" value={year} placeholder="Year" onChange={ this.changeHandler }/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm
