import React from 'react';
import './styles/Home.css';
import Logo from '../assets/logo.svg';

class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <div className="Home__hero">
                    <div className="Home__container">
                        <img className="Home_conf-logo" src={Logo} width="250" height="250" alt="logo" />
                        <h1>welcome to ReactJS</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;