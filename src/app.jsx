import React from 'react';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

class App extends React.Component{
    render() {
        return <div>
            <Header /> 
            <Main />   
            <Footer />
        </div>;
    }
}

React.render(<App />, document.getElementById('react-content'));