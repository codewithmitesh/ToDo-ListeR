import React, { useEffect, useState } from "react";


import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function EditTask({ modal, toggle,updateTask,save,taskobj }) {
  const [taskName, setTaskName] = useState("");
  const [desc, setDescription] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "taskName") {
      setTaskName(value);
    } else {
      setDescription(value);
    }
  };
  const handleUpdate = (e)=>{
   e.preventDefault();
   
  }
  

 useEffect(()=>{
setTaskName(taskobj.Name) 
setTaskName(taskobj.description)
 },[])


  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Update Task!</ModalHeader>
        <ModalBody>
          <form action="">
            <div className="form-group form-floating mb-3">
              <label for="floatingTextarea">Task Title</label>
              <input
                type="text"
                id="floatingInput"
                class="form-control"
                placeholder="Edit Title"
                value={taskName}
                onChange={handleChange}
                name="taskName"
              />
            </div>
            <div class="form-floating">
              <label for="floatingTextarea">Description</label>
              <textarea
                class="form-control"
                placeholder="Add Precise Description here:"
                id="floatingTextarea"
                value={desc}
                onChange={handleChange}
                name="description"
              ></textarea>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleUpdate}>
            Update
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
