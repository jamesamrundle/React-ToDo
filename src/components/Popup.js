import React from "react";
// import Warper from "./Warper";
import Popup from "reactjs-popup";
//import AddTask from "./AddTask";
import AddDetails from "./AddDetails"

//

export default class ControlledPopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
    }
    openModal = () => {
        this.setState({ open: true });
    };
    closeModal = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <Popup trigger={<button> Trigger</button>} position="right center">
                <div>
                    <AddDetails/>
                </div>
            </Popup>
        );
    }
}