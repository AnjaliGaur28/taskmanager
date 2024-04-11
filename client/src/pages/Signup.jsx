import React from "react";
import Textbox from "../components/Textbox";
import Button from "../components/Button";
import Loader from "../components/Loader";
import { useForm } from "react-hook-form";
import { useRegisterMutation } from "../redux/slices/api/authApiSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setCredentials } from "../redux/slices/authSlice";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [registerUser, { isLoading }] = useRegisterMutation();
  const handleLogin = () => {
    navigate("/log-in");
  };

  const registerHandler = async (data) => {
    try {
      const result = await registerUser(data).unwrap();
      navigate("/log-in");
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.message || error.message);
    }
  };


  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-[#f3f4f6]">
      <div className="w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center">
        {/* left side */}
        <div className="h-full w-full lg:w-2/3 flex flex-col items-center justify-center">
          <div className="w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center justify-center gap-5 md:gap-y-10 2xl:-mt-20">
            <span className="flex gap-1 py-1 px-3 border rounded-full text-sm md:text-base border-gray-300 text-gray-600">
              Manage all your task in one place!
            </span>
            <p className="flex flex-col gap-0 text-4xl md:text-6xl 2xl:text-7xl font-black text-center text-blue-700">
              <span>Cloud-Based</span>
              <span>Task Manager</span>
            </p>
            <div className="cell">
              <div className="circle rotate-in-up-left"></div>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="w-full md:w-1/3 p-4 md:p-1 flex flex-col justify-center items-center">
          <form
            onSubmit={handleSubmit(registerHandler)}
            className="form-container w-full md:w-[400px] flex flex-col gap-y-8 bg-white px-10 pt-10 pb-10"
          >
            <div className="">
              <p className="text-blue-600 text-3xl font-bold text-center">
                Welcome back!
              </p>
              <p className="text-center text-base text-gray-700">
                Keep all your credentials safe.
              </p>
            </div>
            <div className="flex flex-col gap-y-5">
              <Textbox
                placeholder="name"
                type="text"
                name="name"
                label="Name"
                className="w-full rounded-full"
                register={register("name", {
                  required: "Name is required!",
                })}
                error={errors.name ? errors.name.message : ""}
              />
              <Textbox
                placeholder="developer/designer"
                type="text"
                name="title"
                label="Title"
                className="w-full rounded-full"
                register={register("title", {
                  required: "Title is required!",
                })}
                error={errors.title ? errors.title.message : ""}
              />
              <Textbox
                placeholder="role"
                type="text"
                name="role"
                label="Role"
                className="w-full rounded-full"
                register={register("role", {
                  required: "Name is required!",
                })}
                error={errors.role ? errors.role.message : ""}
              />
              <Textbox
                placeholder="email@example.com"
                type="email"
                name="email"
                label="Email Address"
                className="w-full rounded-full"
                register={register("email", {
                  required: "Name is required!",
                })}
                error={errors.email ? errors.email.message : ""}
              />
              <Textbox
                placeholder="your password"
                type="password"
                name="password"
                label="Password"
                className="w-full rounded-full"
                register={register("password", {
                  required: "Password is required!",
                })}
                error={errors.password ? errors.password.message : ""}
              />
              {isLoading ? (
                <Loader />
              ) : (
                <Button
                  type="submit"
                  label="Submit"
                  className="w-full h-10 bg-blue-600 text-white rounded-full"
                />
              )}
            </div>
            <p>
              Already have an account?{" "}
              <a
                className="mx-2 hover:underline cursor-pointer"
                onClick={handleLogin}
              >
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
