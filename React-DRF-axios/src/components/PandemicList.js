import React, { Component } from 'react'
import axios from 'axios'

class PandemicList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             pandemics: [],
             errorMsg: ""
        }
    }

    componentDidMount(){
        axios.get("http://localhost:8000/Pandemics/")
             .then(response => {
                 console.log(response)
                 this.setState({
                     pandemics: response.data
                 })
             })
             .catch(error => {
                 console.log(error)
                 this.setState({
                     errorMsg: "Error retrieving data"
                 })
             })
    }
    

    render() {
        const table  = {
            margin: '0 auto',
            padding: '0px 0px 5px 0px',
            width: '80%'
        }

        const td ={
            padding: '0px 0px 20px 0px'
        }

        const align ={
            textAlign: 'justify'
        }

        const {pandemics, errorMsg} = this.state
        return (
            <div>
                List of pandemics
                <br></br><br></br>
                <table style={table}>
                    <thead>
                        <tr>
                            <th style={align}>Name</th>
                            <th>Year</th>
                            <th>Url</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        pandemics.length ? 
                        pandemics.map( pandemics => 
                            <tr key={pandemics.id}>
                                {/* eslint-disable-next-line */}
                                <td style={td, align}>{pandemics.name} </td>
                                <td style={td}>{pandemics.year} </td>
                                <td style={td}><a href={pandemics.url} target="_blank" rel="noopener noreferrer">Click here </a> </td>
                            </tr>
                        ):
                        null
                    }
                    { errorMsg ? <div>{errorMsg}</div> : null}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default PandemicList
