import React, { Component } from 'react';
import NavBar from './components/navbar.jsx'
import Counters from './components/counters';
class App extends Component {
    state = {
        counters: [
            {id : 1 , value : 0},
            {id : 2 , value : 0},
            {id : 3 , value : 0},
            {id : 4 , value : 0}
        ]   
    };

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(
            counter => counter.id !== counterId
        )
        this.setState({counters : counters});
    }

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0; 
            return c;
        });
        this.setState({counters : counters})
    }

    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        //counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters : counters});
    }

    handleDescrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        //counters[index] = {...counter};
        if(counters[index].value > 0){
            counters[index].value--;
        }
        else
            counters[index].value += 0;
        
        this.setState({counters : counters});
    }


    render() {
        return(
            <React.Fragment>
                <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onIncrement={this.handleIncrement}
                        onDescrement={this.handleDescrement}
                        onDelete={this.handleDelete}
                        onReset = {this.handleReset}
                    />
                </main>
            </React.Fragment>
        );
    }
}

export default App;