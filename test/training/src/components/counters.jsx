import React, {Component} from 'react';
import Counter from './counter'

class Counters extends Component{
    
    
    render(){

        const {onDelete, onIncrement, onDescrement, counters} = this.props;

        return(
            <div>
                <button onClick={this.props.onReset} className="btn btn-primary btn-sm m-2">Reset</button>

                {counters.map(counter => (
                    <Counter 
                        key={counter.id}
                        counter={counter}
                        onDelete={onDelete} 
                        onIncrement={onIncrement}
                        onDescrement={onDescrement}
                    />
                    ))}
            </div>
        );
    }
    
}
export default Counters;
