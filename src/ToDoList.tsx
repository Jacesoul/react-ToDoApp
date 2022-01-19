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

interface IForm {
  Email: string;
  firstName: string;
  lastName: string;
  Password: string;
  passwordConfirmation: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: { Email: "@naver.com" },
  });
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("Email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails  allowed",
            },
          })}
          placeholder="Email"
        ></input>
        <span>{errors?.Email?.message}</span>
        <input
          {...register("firstName", {
            required: "Your first name is required",
            minLength: { value: 10, message: "Your first name is too short" },
          })}
          placeholder="First Name"
        ></input>
        <span>{errors?.firstName?.message}</span>
        <input
          {...register("lastName", {
            required: "Your last name is required",
            minLength: { value: 10, message: "Your last name is too short" },
          })}
          placeholder="Last Name"
        ></input>
        <span>{errors?.lastName?.message}</span>
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
        <span>{errors?.Password?.message}</span>
        <input
          {...register("passwordConfirmation", {
            required: "Password Confirmation is required",
            minLength: {
              value: 5,
              message: "Your password confirmation is too short.",
            },
          })}
          placeholder="Password Confirmation"
        ></input>
        <span>{errors?.passwordConfirmation?.message}</span>
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
