import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
    onSearchSubmit(term) {
        console.log(term);
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar whenUserSubmits={this.onSearchSubmit}/> {/*call back function*/}
            </div>
        );
    }
}

export default App;