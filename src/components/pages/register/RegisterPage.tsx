import { useForm } from "react-hook-form";
const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      nickname: "",
      email: "",
      password: "",
    },
  });
  return (
    <div className=" back bg-center bg-cover flex justify-center items-center  px-[5%] h-[calc(100vh_-_74px)] text-text mobileReg">
      <div className="  p-[1rem_2rem] border bg-hoverBg rounded-2xl bg-opacity-20 customBlur">
        <form
          onSubmit={handleSubmit(() => reset())}
          className="flex flex-col gap-[2rem]"
        >
          <p className="text-center text-[1.3rem] font-bold">Sign In</p>
          <div className="outline-none ">
            <input
              {...register("nickname", {
                required: "Name is required",
                minLength: {
                  value: 4,
                  message: "Name must be at least 4 characters",
                },
              })}
              className=" p-[0.7rem_2rem] rounded-xl outline-none placeholder:text-text"
              type="text"
              id="Text"
              placeholder="Name"
            />
            <p className=" text-[0.8rem] p-1 text-error ">
              {errors.nickname?.message}
            </p>
          </div>
          <div className="">
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email format",
                },
              })}
              className=" p-[0.7rem_2rem] rounded-xl outline-none placeholder:text-text"
              type="email"
              id="Email"
              placeholder="Email"
            />
            <p className=" text-[0.8rem] p-1 text-error">
              {errors.email?.message}
            </p>
          </div>
          <div className="">
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Must be at least 6 characters",
                },
              })}
              className="p-[0.7rem_2rem] rounded-xl outline-none placeholder:text-text"
              type="password"
              placeholder="Password"
            />

            <p className=" text-[0.8rem] p-1 text-error ">
              {errors.password?.message}
            </p>
          </div>

          <button
            disabled={!isValid}
            className="p-[0.5rem_1rem] border rounded-xl text-hoverText hover:ease-in hover:text-hoverText transition disabled:opacity-50 disabled:text-gray-500"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
