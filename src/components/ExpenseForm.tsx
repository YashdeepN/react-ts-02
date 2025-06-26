const ExpenseForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input type="text" id="description" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input type="number" id="amount" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select name="category" id="category" className="form-select">
          <option></option>
          <option>Groceries</option>
          <option>Utilities</option>
          <option>Entertainment</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
};

export default ExpenseForm;
