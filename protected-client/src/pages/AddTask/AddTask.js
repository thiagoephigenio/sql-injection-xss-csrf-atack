import { useRef, useState } from "react";
import api from "../../services/api";
import "./AddTask.css";

const AddTask = ({ onSubmit, tasksProp }) => {
  const [title, setTitle] = useState("");
  const [desciption, setDescription] = useState("");

  const inputTitleRef = useRef(null);
  const inputDescriptionRef = useRef(null);

  const handleInputTask = () => {
    inputTitleRef.current.value = "";
    inputDescriptionRef.current.value = "";
  };

  const handleGetTasks = () => {
    api
      .get("/tasks", {})
      .then((tasks) => {
        onSubmit(tasks.data);
      })
      .catch((error) => {});
  };

  const handleInputSubmit = (event) => {
    event.preventDefault();

    api
      .post("/create-task", {
        user_id: 1,
        title: title,
        description: desciption,
        is_complete: false,
      })
      .then((response) => {
        handleGetTasks();
      })
      .catch((error) => {});
    setTitle("");
  };

  return (
    <div className="form-task">
      <form>
        <div>
          <label className="label-task" htmlFor="task">
            Tarefa:
          </label>
          <input
            className="inpt-task"
            type="text"
            name="task"
            ref={inputTitleRef}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div>
          <label className="label-task" htmlFor="description">
            Descrição:
          </label>
          <input
            className="inpt-task"
            type="text"
            name="description"
            ref={inputDescriptionRef}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </div>

        <button
          className="btn-add-task"
          type="submit"
          disabled={taskValidator(title)}
          onClick={(event) => {
            handleInputSubmit(event);
            handleInputTask();
            taskValidator(title);
          }}
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

function taskValidator(task) {
  return task.length > 3 ? "" : "Uma tarefa deve ser inserida.";
}

export default AddTask;
