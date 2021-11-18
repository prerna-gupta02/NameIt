import React from 'react';
import Header from '../Header/Header';
import ResultContainer from '../ResultsContainer/ResultsContainer';
import SearchBox from '../SearchBox/SearchBox';
import "./App.css";

// Functional component
// function App() {
//     return <h1>This is my functional component</h1>
// }

const name = require('@rstacruz/startup-name-generator');

// class component
class App extends React.Component {
    // state is a keyword
    state = {
        headerText: 'Name It!',
        headerExpanded: true,
        suggestedNames: [],
    };

    // Old way to define state
    // constructor() {
    //     super();

    //     this.state = {
    //         headerText: 'Name It!',
    //     };
    // }

    handleInputChange = (inputText) => {
        console.log('Input text - ', inputText);
        this.setState({
            headerExpanded: !(inputText.length > 0),    //We can also write !inputText because typecasting is possible in javascript
            suggestedNames: inputText ? name(inputText) : [],
        });
    };

    render() {
        return (
            <div>
                <Header headerExpanded={this.state.headerExpanded} headTitle={this.state.headerText} />
                <SearchBox onInputChange={this.handleInputChange}/>
                <ResultContainer suggestedNames={this.state.suggestedNames} />
            </div>
        );
    }

}

export default App;