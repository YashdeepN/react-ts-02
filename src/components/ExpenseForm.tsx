import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const expenseFormSchema = z.object({
  description: z
    .string()
    .min(3, { message: "description should at least be 3 characters!" }),
  amount: z.number().min(1),
  category: z.string().min(4),
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
          <option></option>
          <option value="some">Groceries</option>
          <option value="some">Utilities</option>
          <option value="some">Entertainment</option>
        </select>
      </div>
      <button disabled={!isValid} type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
};

export default ExpenseForm;
