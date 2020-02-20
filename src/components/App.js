import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {
    async onSearchSubmit(term) {
        const response = await axios
        .get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID tKhZF1a2jFHIqiDDq6YN1I2yomYi2s-JLRvjhSuUszc'
            }
        });
        console.log(response.data.results);
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