import React, {Component} from 'react';
import Counter from './counter'

class Counters extends Component{
    state = {
        counters: [
            {id : 1 , value : 4},
            {id : 2 , value : 5},
            {id : 3 , value : 6},
            {id : 4 , value : 7}
        ]   
    };

    render(){

        return(
            <div>
                {this.state.counters.map(counter => (
                    <Counter key={counter.id} value={counter.value} id={counter.id}/>))}
            </div>
        );
    }
    
}
export default Counters;
