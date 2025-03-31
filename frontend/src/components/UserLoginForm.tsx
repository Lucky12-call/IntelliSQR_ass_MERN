import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { formSchema, UserFormSchema } from "../zod/userForm";
import toast from "react-hot-toast";

const UserLoginForm = () => {
  const [serverError, setServerError] = useState<string | null>(null);

  // Initialize react-hook-form with Zod resolver
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<UserFormSchema>({
    resolver: zodResolver(formSchema),
  });

  // Define mutation with TanStack Query
  const loginMutation = useMutation({
    mutationFn: async (data: UserFormSchema) => {
      const response = await axios.post(
        "http://localhost:3000/api/user/login",
        data
      );
      return response.data;
    },

    onSuccess: (data) => {
      toast.success(data?.message || "Login successful");
      reset();
      setServerError(null);
    },

    onError: (error: AxiosError<{ message: string }>) => {
      setServerError(
        error.response?.data.message || "An unknown error occurred"
      );
      toast.error(error.response?.data.message || "Login failed");
    },
  });

  // Form submit handler
  const onSubmit = (data: UserFormSchema) => {
    loginMutation.mutate(data);
  };

  return (
    <div className="w-[320px] h-[314px]">
      <h2 className="text-3xl font-bold tracking-wider text-center mb-13">
        Welcome back!
      </h2>

      {serverError && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
          {serverError}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <input
            id="email"
            type="email"
            placeholder="UID"
            {...register("email")}
            className={`mt-1 block w-full p-3 border-2 text-base ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-[#2B3A67] focus:border-[#2B3A67]`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <input
            id="password"
            type="password"
            placeholder="password"
            {...register("password")}
            className={`mt-1 block w-full p-3 border-2 text-base ${
              errors.password ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-[#2B3A67] focus:border-[#2B3A67]`}
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">
              {errors.password.message}
            </p>
          )}
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-4 px-5 rounded-md text-xl font-medium text-white bg-[#2B3A67] disabled:opacity-50 disabled:cursor-not-allowed mt-12"
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserLoginForm;
