import { useForm } from "react-hook-form";

export function ReactHookForm() {
	const defaultValues = {
		name: "",
		email: "",
		gender: "woman",
		memo: "",
	};

	const { register, handleSubmit, formState: { errors } } = useForm({
		defaultValues
	});

	const onsubmit = (data: any) => console.log(data);
	const onerror = (err: any) => console.log(err);

	return (
		<form onSubmit={handleSubmit(onsubmit, onerror)} noValidate>
			<div>
				<label htmlFor="name">Name: </label><br />
				<input id="name" type="text"
					{...register("name", {
						required: "Name is required",
						maxLength: {
							value: 20,
							message: "Name must be less than 20 characters"
						}
					})} />
				<div>{errors.name?.message}</div>
			</div>
			<div>
				<label htmlFor="gender">Gender: </label><br />
				<label>
					<input type="radio" value="man"
						{...register("gender", {
							required: "Gender is required",
						})} />Man
				</label>
				<label>
					<input type="radio" value="woman"
						{...register("gender", {
							required: "Gender is required",
						})} />Woman
				</label>
				<div>{errors.gender?.message}</div>
			</div>
			<div>
				<label htmlFor="email">Email: </label><br />
				<input id="email" type="email"
					{...register("email", {
						required: "Email is required",
					})} />
				<div>{errors.email?.message}</div>
			</div>
			<div>
				<label htmlFor="memo">Memo: </label><br />
				<textarea id="memo"
					{...register("memo", {
						required: "Memo is required",
						minLength: {
							value: 10,
							message: "Memo must be at least 10 characters"
						}
					})} />
				<div>{errors.memo?.message}</div>
			</div>
			<div>
				<button type="submit">Send</button>
			</div>
		</form>
	)
}
