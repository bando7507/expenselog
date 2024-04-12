"use client";

import React, { useRef, useState } from "react";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

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
import Formlog from "./_components/formlog";
import Image from "next/image";
import { createUser } from "@/api";
import { toast } from "sonner";

const queryClient = new QueryClient();

const formSchemaSign = z.object({
  lastname: z.string(),
  firtsname: z.string(),
  username: z.string(),
  email: z.string().email(),
  password: z.string(),
});

const MainPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MainPageRef />
    </QueryClientProvider>
  );
};

const MainPageRef = () => {
  const divRef = useRef(null);
  const [isSkewed, setIsSkewed] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleEffect = () => {
    setIsSkewed(!isSkewed);
  };

  const formSign = useForm<z.infer<typeof formSchemaSign>>({
    resolver: zodResolver(formSchemaSign),
    defaultValues: {
      firtsname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (variables: any) => {
      return createUser(variables);
    },
  });

  function onSubmitSign(values: z.infer<typeof formSchemaSign>) {
    mutate(values, {
      onSuccess: (data) => {
        if (data) {
          setIsLoading(true);
          setTimeout(() => {
            toast.success("Succes 👌");
            setIsSkewed(!isSkewed);
            setIsLoading(false);
          }, 3000);
        }
      },
      onError: (error) => {
        if (error) {
          toast.error("error");
        }
      },
    });
    // console.log(values);
  }

  return (
    <section className="relative flex ">
      <div
        className={`flex flex-col justify-center items-center bg-black w-[50%] h-screen  transition-transform duration-500 
        ${isSkewed ? "translate-x-[100%]" : "translate-x-0"}
         `}
      >
        {!isSkewed ? (
          <h1 className="text-white">Alredy Signed up ?</h1>
        ) : (
          <h1 className="text-white">Don't Have an Account Yet?</h1>
        )}
        {!isSkewed ? (
          <>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.Voluptates tempora aliquam quia dolore dolor?
            </p>

            <p className="text-white">
              Voluptates tempora aliquam quia dolore dolor?
            </p>
          </>
        ) : (
          <>
            <p className="text-white">
              Lorem1 ipsum dolor sit amet, consectetur adipisicing
              elit.Voluptates tempora aliquam quia dolore dolor?
            </p>

            <p className="text-white">
              Voluptates tempora aliquam quia dolore dolor?
            </p>
          </>
        )}
        s
        {!isSkewed ? (
          <Button onClick={handleEffect} className="">
            LOG IN
          </Button>
        ) : (
          <Button onClick={handleEffect} className="">
            SIGN IN
          </Button>
        )}
      </div>
      <div
        className={`w-[50%] flex justify-center items-center  transition-transform duration-500 transform
                ${isSkewed ? "translate-x-[-100%]" : "translate-x-0"}
                `}
      >
        {!isSkewed ? (
          <div>
            <div className="text-center">
              <h1 className="text-2xl font-bold">Don't Have an Account Yet?</h1>
              <p>Let's get up so you can start creating your first </p>
              <p>onboarding experience.</p>
            </div>

            <Form {...formSign}>
              <form
                onSubmit={formSign.handleSubmit(onSubmitSign)}
                className="space-y-4 flex flex-col"
              >
                <FormField
                  control={formSign.control}
                  name="firtsname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Firstname</FormLabel>
                      <FormControl>
                        <Input placeholder="Firstname" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={formSign.control}
                  name="lastname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Lastname</FormLabel>
                      <FormControl>
                        <Input placeholder="Lastname" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={formSign.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="Username" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={formSign.control}
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
                  control={formSign.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Password"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="mt-3">
                  SIGN UP
                </Button>
              </form>
            </Form>
          </div>
        ) : (
          <div>
            <div className="text-center">
              <h1 className="text-2xl font-bold">Log in Your Account</h1>
              <p>Log in to your account so you can continue building</p>
              <p>and editing your on boarding flows</p>
            </div>
            <Formlog />
          </div>
        )}
      </div>
    </section>
  );
};

export default MainPage;
