import { Signin_validation } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
//Components or form
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
import Loader from "@/components/ui/shared/loader";
import { Button } from "@/components/ui/button";

const SigninForm = () => {
  const isLoading = false;
  // 1. Define your form.
  const form = useForm<z.infer<typeof Signin_validation>>({
    resolver: zodResolver(Signin_validation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof Signin_validation>) {
    // const newUser = await createUserAccount(values);
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col">
        <form onSubmit={form.handleSubmit(onSubmit)}></form>
        <img
          src="/assets/images/kivik.png"
          alt="kiviklogo"
          width={130}
          height={32}
        />
        <h2 className=" form_signup_in_Title h3-bold text-center pt-5 sm:pt-2">
          Login{" "}
        </h2>
        <p className="text-light-3  small-meduim base-regular mt-2 md:base:regular">
          To use Kivik, please login to your account
        </p>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-full mt-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="form_signup-label">Email</FormLabel>
                <FormControl>
                  <Input className="shad-input" type="email" {...field} />
                </FormControl>
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
              "Signin"
            )}
          </Button>
        </form>
      </div>
    </Form>
  );
};

export default SigninForm;
