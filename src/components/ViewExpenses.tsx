import React from "react";

const ViewExpenses = () => {
  return (
    <>
      <form>
        <div className="mt-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select name="category" id="category" className="form-select">
            <option>All items</option>
            <option>Groceries</option>
            <option>Utilities</option>
            <option>Entertainment</option>
          </select>
        </div>
      </form>
      <div className="mb-3 mt-3">
        <ul className="list-group list-group-horizontal">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">
            <button className="btn  btn-outline-danger">Delete</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ViewExpenses;
