import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Counter extends Component{
    state = {
        value : this.props.value, 
        //imageUrl : 'https://picsum.photos/200'
    };

    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }



    renderTags(){
        if(this.state.tags.length === 0) return <p>There are no tags!</p>
        else return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

    formatCount(){
        return this.state.value === 0 ?  'Zero' : this.state.value; 
    }

    getBadgeClasses(){
        let classes = 'badge m-2 badge-';
        classes += this.state.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    handleIncrement = () =>{
        this.setState({value : this.state.value + 1});
    }

    handleDescrement = () => {
        this.setState({value : this.state.value - 1});
    }

    render(){

        return(
        <div>
            {/* <img src={this.state.imageUrl} alt=""/>*/}
            {/* {this.state.tags.length === 0 && 'Please create a new tag'}
            {this.renderTags()} */}
            <h4>{this.props.id}</h4>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">
                Increment
            </button>
            <button onClick={this.handleDescrement} className= "btn btn-secondary btn-sm">Descrement</button>
        </div>
        );
    };

    


}

export default Counter;
