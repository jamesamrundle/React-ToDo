import React, { Component } from 'react';
import TodoList from "../containers/TodoList";
import AddTask from "./AddTask";
import _ from "lodash";
import ControlledPopup from "./Popup";

export default class App extends Component {
    constructor(props){
        super(props)

        this.state={doAdd:false}
    }


    renderAdd(){
        if (this.state.doAdd) return <AddTask/>
        else return null;
    }



    render() {

    return (
      <div>React simple starter
      <TodoList/>
          <div>
             <AddTask/>
          </div>
            <ControlledPopup/>
      </div>

    );
  }
}
