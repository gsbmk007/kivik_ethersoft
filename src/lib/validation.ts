import * as z from "zod";

export const Signup_validation = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters."}),
  username: z.string().min(2).max(50),
  email: z.string().email(),
  password: z.string().min(8, { message: "Password must be at least 8 characters." }),
  });

  export const Signin_validation = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: "Password must be at least 8 characters." }),
    });
  
  