import React, {Component} from "react";
import {connect} from "react-redux";
import {finishTask} from "../actions/index";
import {bindActionCreators} from "redux";
import TodoItem from "./TodoItem"


class TodoList extends Component {


    componentDidMount() {
        setInterval(() => {
            this.setState(() => {
                console.log('setting state');
                return { unseen: "does not display" }
            });
        }, 10000);
    }


    renderTasks() {

        return this.props.items.map((task) => {
                return (
                    <div
                        key={task.task}
                        className="list-group-item">

                        <div  onClick={() => this.props.finishTask(task)}>
                            <TodoItem  task={task} />
                        </div>
                    </div>
                        )}

                )
            }



    render() {
        return (
            <div onClick={this.log}>

                {this.renderTasks()}

            </div>
        )
    }
}

function mapStateToProps(state){
    return (


        {items:state.items}
    )
}

//anything returned from this fctn will end up as props on the booklist container
function mapDispatchToProps(dispatch){
    //whenver selectbook is called, the result should be passed to all reducers
    return bindActionCreators({finishTask: finishTask},dispatch);
}

//promoteBookList from component to container it needs to know about this new dispatch method SelectBook
//make it available as a prop
export default connect(mapStateToProps,mapDispatchToProps)(TodoList)