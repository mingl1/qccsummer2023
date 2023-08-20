import React from "react";
export default function Place({ name, text }) {
  return (
    <div
      className="ui raised very padded text container segment"
      style={{ marginTop: "3em" }}
    >
      <h1 className="ui header">{name}</h1>
      <p>
        {text
          ? text
          : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis magna vitae metus pretium tempor. Vestibulum in libero a magna molestie vestibulum. Phasellus dolor mi, accumsan quis augue nec, mollis ultricies massa. Maecenas mollis ultricies sem, non porttitor dui scelerisque id. Ut venenatis lacinia tristique. Duis faucibus purus in dolor gravida faucibus. Aenean consequat ex lectus, et pharetra elit laoreet id. Aliquam ac vestibulum purus. Cras vel semper eros. "}
      </p>
    </div>
  );
}
