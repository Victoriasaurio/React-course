import React from 'react'
import './styles/Tasks.css'

class Task01 extends React.Component {
    state = {
        number: ''
    }

    onSubmit = e => {
        this.converter(this.state.number)
        e.preventDefault()
    }

    onChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    resetForm() {
        document.getElementById('number').value=''
    }

    converter(number) {
        let km = 1.60934
        let resp = number * km
        
        const op = document.getElementById('result')
        const element = document.createElement('h2')
        element.innerHTML = `${number} millas = ${resp} km`
        op.appendChild(element)
    }

    render() {
        return (
            <div className="row" id="main">
                <div className="col-6">
                    <h1>Unit converter</h1>
                    <form id="conver-form" onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label className="col-form-label">Miles to kilometers</label>
                            <input
                                onChange={this.onChange} 
                                value={this.state.number}
                                id="number" 
                                className="form-control" 
                                placeholder="Enter" 
                                autoFocus/>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.resetForm}>Convert miles to kilometers</button>
                    </form>

                    <div id="result"></div>
                </div>
            </div>
        )
    }
}

export default Task01