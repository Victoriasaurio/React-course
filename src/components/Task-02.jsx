import React from 'react'
import './styles/Tasks.css'

class Task02 extends React.Component {
    state = {
        name: ''
    }

    onSubmit = e => {
        this.party (this.state.name)
        e.preventDefault()
    }

    onChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    resetForm() {
        document.getElementById('name').value=''
    }

    party (name) {
        const op = document.getElementById('result-party')
        const element = document.createElement('div')
        element.innerHTML = `
            <li id="list">${name}</li>
        `
        op.appendChild(element)
    }

    render() {
        return (
            <div className="row" id="main">
                <div className="col-6">
                    <h1>Invited to my party</h1>
                    <form id="party-form" onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label className="col-form-label">Name</label>
                            <input 
                                id="name" 
                                onChange={this.onChange} 
                                value={this.state.name}
                                className="form-control" 
                                placeholder="What's your name?" 
                                autoFocus />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.resetForm}>Add guest</button>
                    </form>
                </div>
                <div className="col-6">
                    <div id="result-party"></div>
                </div>
            </div>
        )
    }
}

export default Task02