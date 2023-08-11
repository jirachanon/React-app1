import React from "react";

export function Header() {
  const aStyle = {
    display: "inline-block",
    color: "blue",
    margin: "7px",
    textDecoration: "none"
  };
  return (
    <div style={{ backgroundColor: "#ccc" }}>
      <a href="" style={aStyle}>
        home
      </a>
      |&nbsp;
      <a href="" style={aStyle}>
        React
      </a>
      |&nbsp;
      <a href="" style={aStyle}>
        React Native
      </a>
      |&nbsp;
    </div>
  );
}
export function Test() {
  return <h1>GG</h1>;
}
export const Footer = () => {
  return (
    <div style={{ textAlign: "center" }}>
      &copy;{new Date().getFullYear()} all right reserved
    </div>
  );
};

export function Content() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>
        Hello <br />
        React and React Native
      </h2>
    </div>
  );
}
