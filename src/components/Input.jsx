import React, {Component} from 'react';

class Input extends Component {
    state = {
        text : ''
    };

    handleAdd = (event) =>{
        event.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({text : ''});
    }

    handleChange = (event) => {
        this.setState({text : event.target.value});
    }

    render() {
        return (
            <form className="habit-form" onSubmit={this.handleAdd}>
                <input 
                    className="habit-input" 
                    type="text" 
                    placeholder="Habbt"
                    onChange={this.handleChange} 
                    value={this.state.text} 
                />
                <button className="habit-button__add" type="submit">Add</button>
            </form>
        );
    }
}

export default Input;