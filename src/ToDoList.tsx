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
  const { register, watch, handleSubmit, formState } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(formState.errors);
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("Email", { required: true })}
          placeholder="Email"
        ></input>
        <input
          {...register("First Name", { required: true, minLength: 10 })}
          placeholder="First Name"
        ></input>
        <input
          {...register("Last Name", { required: true })}
          placeholder="Last Name"
        ></input>
        <input
          {...register("Password", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Your password is too short.",
            },
          })}
          placeholder="Password"
        ></input>
        <input
          {...register("Password Confirmation", {
            required: true,
            minLength: 5,
          })}
          placeholder="Password Confirmation"
        ></input>
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
