import React, { useEffect, useState } from "react";
import CreateTasks from "../models/CreateTasks";
import Cards from "../My-Components/Cards";

export const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskLIst] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem("taskList");
    if (arr) {
      let obj = JSON.parse(arr);
      setTaskLIst(obj);
    }
  }, []);

  const deleteTask = (index) => {
    let tempList = taskList;
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskLIst(tempList);
    window.location.reload();
  };

  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskobj) => {
    let tempList = taskList;
    tempList.push(taskobj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskLIst(tempList);
    setModal(false);
  };
  return (
    <>
      <div className="Header text-center">
        <h3>ToDO-Lister</h3>
        <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>
          Create Task
        </button>
      </div>
      <div className="task-Container">
        {taskList &&
          taskList.map((obj, index) => (
            <Cards taskobj={obj} index={index} deleteTask={deleteTask} />
          ))}
      </div>
      <CreateTasks toggle={toggle} modal={modal} save={saveTask} />
    </>
  );
};
