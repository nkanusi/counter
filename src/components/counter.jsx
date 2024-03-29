import React, { Component } from 'react';

class Counter extends Component {

  
    
 
  

    render() { 
        // console.log("props", this.props)
        return (
          <div>
            {/* {this.props.children} */}
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button 
            onClick={()=> this.props.onIncrement(this.props.counter)} 
            className="btn btn-secondary btn-sm">Increment</button>
           <button className="btn btn-danger btn-sm m-2"
                    onClick={()=>this.props.onDelete(this.props.counter.id)}>Delete</button>
          </div>
        );


    }

   
    renderTags(){
        if(this.state.tags.length === 0) return <p>There are no tags!</p>;

        return  <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)} </ul>;
   }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";

        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value} = this.props.counter;
        return value === 0 ? 'Zero' : value
    }
}
 
export default Counter;