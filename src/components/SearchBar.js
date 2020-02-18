import React from 'react';

class SearchBar extends React.Component {
    onInputChange(event) {
        console.log(event.target.value);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" onChange={this.onInputChange} /> {/* do not put parentheses because it is a call back function. Once it has (), that means call the function once render */}
                    </div>
                </form>
            </div>
        ); 
    }
} 

export default SearchBar;