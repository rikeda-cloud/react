import { useForm } from "react-hook-form";

type FormValues = {
	name: string;
	email: string;
	gender: string;
	memo: string;
};

export function ReactHookForm() {
	const defaultValues: FormValues = {
		name: "",
		email: "",
		gender: "woman",
		memo: "",
	};

	const { register, handleSubmit, formState: {
		errors, isDirty, isValid, isSubmitting
	} } = useForm<FormValues>({ defaultValues });

	const onsubmit = (data: FormValues) => {
		return new Promise<void>(resolve => {
			setTimeout(() => {
				resolve();
				console.log(data);
			}, 4000);
		});
	};
	const onerror = (err: any) => console.log(err);

	const validateMemo = (value: string) => {
		const ngs = ["rikeda", "cloud"];
		for (const ng of ngs) {
			if (value.includes(ng)) {
				return "Include Ng Word";
			}
		}
		return true;
	}

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
						pattern: {
							value: /[a-z][a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
							message: "Email is not valid"
						}
					})} />
				<div>{errors.email?.message}</div>
			</div>
			<div>
				<label htmlFor="memo">Memo: </label><br />
				<textarea id="memo"
					{...register("memo", {
						required: "Memo is required",
						validate: { ng: validateMemo },
						minLength: {
							value: 10,
							message: "Memo must be at least 10 characters"
						}
					})} />
				<div>{errors.memo?.message}</div>
			</div>
			<div>
				<button type="submit" disabled={!isDirty || !isValid}>
					Send
				</button>
				{isSubmitting && <div>...Send...</div>}
			</div>
		</form>
	)
}
