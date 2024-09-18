import { useState } from "react";
const Form = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");
  const [error, setError] = useState("");
  const [taskList, settaskList] = useState([]);
  const nameChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const descriptionChange = (event) => {
    event.preventDefault();
    setDescription(event.target.value);
  };
  const dateChange = (event) => {
    event.preventDefault();
    setDate(event.target.value);
  };
  const timeChange = (event) => {
    event.preventDefault();
    setTime(event.target.value);
  };
  const submitForm = () => {
    if (name == "" || date == "" || description == "" || time == "") {
      setError("incomplete Data");
    } else {
      settaskList([...taskList, { name, date, time, description }]);
      console.log(taskList);
      setError("");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
      }}
    >
      <h1>Event Handeler</h1>
      <input
        style={{
          borderRadius: 5,
          margin: 10,
          padding: 10,
          border: "1px solid ",
        }}
        value={name}
        onChange={(event) => nameChange(event)}
        placeholder="enter your event"
      />
      <input
        value={date}
        onChange={(event) => dateChange(event)}
        style={{
          borderRadius: 5,
          margin: 10,
          padding: 10,
          border: "1px solid ",
        }}
        placeholder="enter date of event"
      />
      <input
        value={time}
        onChange={(event) => timeChange(event)}
        style={{
          borderRadius: 5,
          margin: 10,
          padding: 10,
          border: "1px solid ",
        }}
        placeholder="enter time of event"
      />
      <input
        onChange={(event) => descriptionChange(event)}
        style={{
          borderRadius: 5,
          margin: 10,
          padding: 20,
          border: "1px solid ",
        }}
        placeholder="enter event description...."
      />
      <button
        onClick={() => submitForm()}
        style={{
          width: 120,
          padding: 10,
          borderRadius: 10,
          border: "1px solid red",
          backgroundColor: "orange",
          color: "white",
          fontSize: 15,
          fontWeight: "bold",
        }}
      >
        Create Event
      </button>
      <p style={{ color: "red" }}>{error}</p>
      <h1>Event List</h1>
      <div
        style={{
          width: "80vh",
          height: "500",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {taskList.map((each) => (
          <div
            style={{
              height: 200,
              width: 150,
              backgroundColor: "white",
              borderRadius: 10,
              marginBottom: 20,
            }}
          >
            <h3>{each.name}</h3>
            <p>{each.date}</p>
            <p>{each.time}</p>
            <p>{each.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Form;
