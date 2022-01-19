import React, { useState } from "react";
import { useForm } from "react-hook-form";

/*
function ToDoList() {
  const [toDo, setToDo] = useState("");
  const [toDoError, setToDoError] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setToDo(value);
    setToDoError("");
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(toDo);
    if (toDo.length < 10) {
      return setToDoError("To do should be longer");
    }
  };
  return (
    <div>
    <form onSubmit={onSubmit}>
    <input
    onChange={onChange}
    value={toDo}
    placeholder="Write a to do"
    ></input>
    <button>Add ToDo</button>
    {toDoError !== "" ? toDoError : null}
    </form>
    </div>
    );
  }
  */

function ToDoList() {
  const { register, watch } = useForm();
  console.log(watch());
  return (
    <div>
      <form>
        <input {...register("Email")} placeholder="Email"></input>
        <input {...register("First Name")} placeholder="First Name"></input>
        <input {...register("Last Name")} placeholder="Last Name"></input>
        <input {...register("Password")} placeholder="Password"></input>
        <input
          {...register("Password Confirmation")}
          placeholder="Password Confirmation"
        ></input>
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
