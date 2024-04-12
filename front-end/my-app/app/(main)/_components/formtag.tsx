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

const formSchemaTag = z.object({
  name: z.string(),
  sticker: z.string(),
});

const FormTag = ({ dataTags }: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const formTag = useForm<z.infer<typeof formSchemaTag>>({
    resolver: zodResolver(formSchemaTag),
    defaultValues: {
      name: "",
      sticker: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchemaTag>) {
    console.log(values);
  }

  console.log(dataTags);

  return (
    <Form {...formTag}>
      <form
        onSubmit={formTag.handleSubmit(onSubmit)}
        className="space-y-4 flex flex-col"
      >
        <FormField
          control={formTag.control}
          name="sticker"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Email</FormLabel> */}
              <FormControl>
                <Input placeholder="(Sticker)" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={formTag.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>rent (name)</FormLabel> */}
              <FormControl>
                <Input placeholder="rent (name)" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Confirm</Button>
      </form>
    </Form>
  );
};

export default FormTag;
