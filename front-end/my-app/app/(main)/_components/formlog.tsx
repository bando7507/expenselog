"use client";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const formSchemaLog = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password must be at least 2 characters.",
  }),
});

const Formlog = () => {
  const [isLoading, setIsLoading] = useState(false);
  const formLog = useForm<z.infer<typeof formSchemaLog>>({
    resolver: zodResolver(formSchemaLog),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchemaLog>) {
    console.log(values);
    setIsLoading(true);
    setTimeout(() => {
      // localStorage.setItem("userinfo", JSON.stringify(data));
      setIsLoading(false);
    }, 3000);
  }

  return (
    <Form {...formLog}>
      <form
        onSubmit={formLog.handleSubmit(onSubmit)}
        className="space-y-4 flex flex-col"
      >
        <FormField
          control={formLog.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={formLog.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Password" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">LOG IN</Button>
      </form>

      {isLoading && (
        <div className="flex justify-center items-center mt-4">
          <Image src="/tail-spin.svg" alt="loading" width={30} height={30} />
        </div>
      )}
    </Form>
  );
};

export default Formlog;
