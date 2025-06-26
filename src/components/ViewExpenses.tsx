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
    </>
  );
};

export default ViewExpenses;
