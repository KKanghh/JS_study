import React from "react";
import useHttp from "../../hooks/useHttp";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const transformTasks = (taskText, taskObj) => {
    const generatedId = taskObj.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };

  const { isLoading, error, httpHandler } = useHttp();

  const enterTaskHandler = async (taskText) => {
    httpHandler(
      {
        url: "https://react-http-10f07-default-rtdb.firebaseio.com/tasks.json",
        headers: {
          "Content-Type": "application/json",
        },
        body: { text: taskText },
        method: "POST",
      },
      transformTasks.bind(null, taskText)
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
