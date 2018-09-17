import React, {Component} from "react"
import {connect} from "react-redux"
import{bindActionCreators} from "redux";
import {addTask} from "../actions/index";

class AddTask extends Component{

    constructor(props){
        super(props)


        this.state = {task:""}
        this.submitTask= this.submitTask.bind(this);
}

    submitTask(){
        this.props.addTask(this.state.task)
    }

    render(){ return(

        <div>
            <div
            className="input-group">
                <input className="form-control"
                    placeholder="Enter a task"
                    value={this.state.task}
                       onChange={event => this.setState({task:event.target.value})}>
                </input>
                <span className="input-group-btn">
                    <button onClick={this.submitTask} className="btn btn-secondary">Add</button>
                </span>
            </div>
            <li>The input : {this.state.task}</li>
        </div>

        )

    }

}

function mapDispatchToProps(dispatch){
    return bindActionCreators({addTask},dispatch)
}

export default connect(null,mapDispatchToProps)(AddTask);