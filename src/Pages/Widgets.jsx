import { Form } from "react-bootstrap";
import { useState } from "react";


import "./Widgets.css";

export const Widgets = () => {
  const [sortValue, setSortValue] = useState("latest");

  const handleSortChange = (event) => {
    setSortValue(event.target.value);
  };

  return (
    <div className="widgets">
      <div className="widgets-widgetContainer">
        <h2>Sort By</h2>
        <Form.Select
          className="dropdown"
          value={sortValue}
          onChange={handleSortChange}
        >
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
        </Form.Select>
      </div>
    </div>
  );
};
