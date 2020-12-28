import React, {Component} from 'react';
import './App.css';
import Body from './components/Body';
import Haeder from './components/Haeder';

class App extends Component{
  state = {
    habits : [
        {id: 1, name: 'Reading', count: 0},
        {id: 2,name: 'Runnig', count: 0},
        {id: 3,name: 'Coding', count: 0},
    ]
};

handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count ++;
    this.setState({ habits });
};

handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0? 0 : count;
    this.setState({ habits });
};

hanedleDelete = (habit) => {
    const filterHabit = this.state.habits.filter(item=>habit.id !== item.id);
    this.setState({habits : filterHabit});
};

handleAdd = (text) => {
  const habit = {
    id : this.state.habits.length + 1,
    name : text,
    count : 0
  }
  const habits = [...this.state.habits, habit];
  this.setState({habits});
}

  render(){
    return (
      <>
        <Haeder 
          habits={this.state.habits}
        />
        <Body 
          habits={this.state.habits} 
          onIncrement={this.handleIncrement} 
          onDecrement={this.handleDecrement} 
          onDelete={this.hanedleDelete}  
          onAdd={this.handleAdd} 
        />
      </>
    );
  }
}

export default App;
