import React,{useState} from "react";
const Parent=()=>{
    const [showModal, setShowModal]=useState(false);
    return(
        <div className="parent">
            <h1>Parent Component</h1>
<Child showModal={showModal} setShowModal={setShowModal}/>
        </div>
    )
}
export default Parent;