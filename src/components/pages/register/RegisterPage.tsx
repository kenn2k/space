const RegisterPage = () => {
  return (
    <div className=" back bg-center bg-cover flex justify-center items-center  px-[5%] h-[calc(100vh_-_74px)] text-text">
      <div className="  p-[1rem_2rem] border bg-hoverBg rounded-2xl bg-opacity-20 customBlur">
        <form className="flex flex-col gap-[2rem]">
          <p className="text-center text-[1.3rem] font-bold">Sign In</p>
          <div className="outline-none ">
            <input
              className=" p-[0.7rem_2rem] rounded-xl outline-none placeholder:text-text"
              type="text"
              id="Text"
              placeholder="Name"
            />
          </div>
          <div className="">
            <input
              className=" p-[0.7rem_2rem] rounded-xl outline-none placeholder:text-text"
              type="email"
              id="Email"
              placeholder="Email"
            />
          </div>
          <div className="">
            <input
              className=" p-[0.7rem_2rem] rounded-xl outline-none placeholder:text-text"
              type="password"
              id="Password"
              placeholder="Password"
            />
          </div>
          <button className=" p-[0.5rem_1rem] border rounded-xl hover:ease-in  hover:text-hoverText transition">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
