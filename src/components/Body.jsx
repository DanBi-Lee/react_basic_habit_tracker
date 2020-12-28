import React, {Component} from 'react';
import Habits from './habits';
import Input from './Input';

class Body extends Component {
    render() {
        return (
            <>
                <Input onAdd={this.props.onAdd} />
                <Habits 
                    habits={this.props.habits}
                    onIncrement={this.props.onIncrement} 
                    onDecrement={this.props.onDecrement} 
                    onDelete={this.props.onDelete}  
                />
            </>
        );
    }
}

export default Body;