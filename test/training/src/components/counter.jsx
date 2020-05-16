import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Counter extends Component{
    // state = {
    //     value : this.props.counter.value, 
    //     //imageUrl : 'https://picsum.photos/200'
    // };

    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    formatCount(){
        return this.props.counter.value === 0 ?  'Zero' : this.props.counter.value; 
    }

    getBadgeClasses(){
        let classes = 'badge m-2 badge-';
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return classes;
    }
 
    render(){
        //console.log('Props : ',this.props)
        
        return(
        <div>
            {/* <img src={this.state.imageUrl} alt=""/>*/}
            {/* {this.state.tags.length === 0 && 'Please create a new tag'}
            {this.renderTags()} */}
            
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

            <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm m-2">
                Increment
            </button>
            <button onClick={() => this.props.onDescrement(this.props.counter)} className= "btn btn-secondary btn-sm m-2">Descrement</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm s-m">Delete</button>
        </div>
        );
    };

    


}

export default Counter;
