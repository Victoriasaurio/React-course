import React from 'react';

class TableList extends React.Component {
    render() {
        const number = this.props.del
        
        return(
            <table border="1" className="table table-dark mx-5">
                <thead>
                    <tr>
                        <th scope="col">Base</th>
                        <th scope="col">Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>{number} x 2</td><td>{number * 2}</td></tr>
                    <tr><td>{number} x 3</td><td>{number * 3}</td></tr>
                    <tr><td>{number} x 4</td><td>{number * 4}</td></tr>
                    <tr><td>{number} x 5</td><td>{number * 5}</td></tr>
                    <tr><td>{number} x 6</td><td>{number * 6}</td></tr>
                </tbody>
            </table>                          
        )
    }
}

export default TableList;