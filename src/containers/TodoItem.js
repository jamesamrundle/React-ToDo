import React, {Component} from "react";
import {connect} from "react-redux";
import{bindActionCreators} from "redux";
import {finishTask} from "../actions";



 class TodoItem extends Component{
    constructor(props){
        super(props)

    }

x

    render() {

        {console.log("fuk",this.props.task)}
        return (
            <div className="container" >
                <div key={this.props.task.task}
                     id="task-button" >
                    <div className="row">
                    <div className="col-sm-11">{this.props.task.task}</div>
                <div className="label label-default col-sm-1"><span>{this.props.task.status}</span></div>
                    </div>
                </div>

            </div>

        )
    }

}


function mapStateToProps(state){
    return (


        {items:state.items}
    )



}

//promoteBookList from component to container it needs to know about this new dispatch method SelectBook
//make it available as a prop
export default connect(mapStateToProps)(TodoItem)
