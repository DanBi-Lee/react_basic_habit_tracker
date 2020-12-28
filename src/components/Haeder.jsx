import React, {Component} from 'react';

class Haeder extends Component {
    render() {
        const {habits} = this.props;
        const habitsCount = habits.filter(habit => habit.count > 0).length;

        return (
            <header className="habit-header">
                <h1><i className="fas fa-leaf"></i> Habit Tracker</h1>
                <p className="habit-count__track">{habitsCount}</p>
            </header>
         );
    }
}

export default Haeder;