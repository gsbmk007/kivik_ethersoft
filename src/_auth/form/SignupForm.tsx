import React from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Signup_validation } from "@/lib/validation";
import Loader from "@/components/ui/shared/loader";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const isLoading = true;
  // 1. Define your form.
  const form = useForm<z.infer<typeof Signup_validation>>({
    resolver: zodResolver(Signup_validation),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof Signup_validation>) {
    // const newUser = await createUserAccount(values);
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col">
        <img
          src="/assets/images/kivik.png"
          alt="kiviklogo"
          width={130}
          height={32}
        />
        <h2 className=" form_signup_in_Title h3-bold text-center pt-5 sm:pt-2">
          Create your account
        </h2>
        <p className="text-light-3  small-meduim base-regular mt-2 md:base:regular">
          To use Kivik, please enter your details
        </p>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-full mt-4"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="form_signup-label">Name</FormLabel>
                <FormControl>
                  <Input className="shad-input" type="text" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="form_signup-label">Username</FormLabel>
                <FormControl>
                  <Input className="shad-input" type="text" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="form_signup-label">Email ID</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    className="shad-input"
                    type="email"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="form_signup-label">Password</FormLabel>
                <FormControl>
                  <Input className="shad-input" type="password" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="shad-button_primary">
            {isLoading ? (
              <div className="flex-center gap-2">
                <Loader />
                Loading...
              </div>
            ) : (
              "Signup"
            )}
          </Button>
          <p className="text-small-regular text-dark-4 text-center mt-3">
            <Link to="/sign-in">Already have an account?</Link>
          </p>
        </form>
      </div>
    </Form>
  );
};

export default SignupForm;
