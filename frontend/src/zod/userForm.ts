import z from "zod";

// 1. Define validation schema with Zod
export const formSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(32, "Password must be less than 32 characters"),
});

// .refine((data) => data.password === data.confirmPassword, {
//     message: "password and confirm password does not match",
//     path: ["confirmPassword"],
//   });

export type UserFormSchema = z.infer<typeof formSchema>;
export type FormErrors = Partial<Record<keyof UserFormSchema, string[]>>;
