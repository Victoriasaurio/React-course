import React from 'react';
import TableList from '../components/TableList';

class Table extends React.Component {
    render() {
        return (
            // <div className="card border-success mx-5 mt-5" style={{maxWidth: "18rem"}}>
            //     <div className="card-header bg-transparent border-success text-center">Table</div>
            //     <div className="card-body text-success">
            //         <h5 className="card-title">Success card title</h5>
            //         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            //     </div>
            //     <div className="card-footer bg-transparent border-success text-center">Footer</div>
            // </div>
            <div className="card border-success mx-5 mt-5" style={{maxWidth: "18rem"}}>
                <div className="card-header bg-transparent border-success text-center">Table</div>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-6">
                            <TableList del="5"/>
                        </div>
                    </div>
                </div>
                <div className="card-footer bg-transparent border-success text-center">Footer</div>
            </div>
        )
    }
}

export default Table;