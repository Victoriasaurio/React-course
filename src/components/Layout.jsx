import React from 'react';
import Navbar from './Navbar';

//Reconoce los hijos que tiene router {props.children}
//React.Fragment --> Hace la misma función que un div, siempre que el div no se este usando.

function Layout(props) {
    return(
        <React.Fragment>
            <Navbar />
            {props.children} 
        </React.Fragment>
    )
}

export default Layout;