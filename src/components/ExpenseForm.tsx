import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const expenseFormSchema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should be at least 3 characters!" }),
  amount: z.number({ invalid_type_error: "Amount is required." }).min(1),
  category: z
    .string({ invalid_type_error: "Category is required." })
    .min(4, { message: "Category is required." }),
});

type FormData = z.infer<typeof expenseFormSchema>;

const ExpenseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(expenseFormSchema) });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          type="text"
          id="description"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          type="number"
          id="amount"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          {...register("category")}
          name="category"
          id="category"
          className="form-select"
        >
          <option value=" "></option>
          <option value="some">Groceries</option>
          <option value="some">Utilities</option>
          <option value="some">Entertainment</option>
        </select>
      </div>
      <button disabled={!true} type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
};

export default ExpenseForm;
