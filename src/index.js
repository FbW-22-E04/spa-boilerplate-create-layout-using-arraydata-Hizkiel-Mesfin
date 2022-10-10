import React from "react"; //Main React.js library
import ReactDOM from "react-dom/client"; //we use ReactDOM to render into the DOM

const linksArr = [
  { hyper: "https://www.google.com", name: " Link to google.com" },
  { hyper: "https://www.facebook.com", name: "Link to facebook.com" },
  { hyper: "https://www.amazon.com", name: " Link to amazon.com" },
];

const navlinkItems = linksArr.map((link, i) => {
  return (
    <li key={i} className="nav-item">
      <a className="nav-link" href={link.hyper}>
        {link.name}
      </a>
    </li>
  );
});

console.log(navlinkItems);

const content = <ul className="nav">{navlinkItems}</ul>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(content);
