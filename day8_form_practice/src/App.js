import React from "react";

const MyForm = () => {
  const [name, setName] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitting Name ${name}`);
  };
  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Form in ReactJS</legend>
        <label for="name">Enter your name: </label>
        <input
          type="text"
          id="name"
          placeholder="type your name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div style={{ marginTop: "1em" }}>
          <input type="submit" className="ui button"></input>
        </div>
      </fieldset>
    </form>
  );
};

export default MyForm;
