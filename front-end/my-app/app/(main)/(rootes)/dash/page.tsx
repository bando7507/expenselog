"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clapperboard, Menu, Pizza, ReceiptText } from "lucide-react";
import React from "react";
import Aside from "../../_components/aside";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  useMutation,
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import ExpensesStats from "../../_components/ExpensesStats";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormTag from "../../_components/formtag";
import { getTags } from "@/api";

const queryClient = new QueryClient();

const formSchema = z.object({
  amount: z.number(),
  userId: z.number(),
  categoryId: z.number(),
  description: z.string(),
});

const DashPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <DashPageRef />
    </QueryClientProvider>
  );
};

const DashPageRef = () => {
  const fictiveExpenses = [
    {
      id: "1",
      date: "2022-01-15",
      description: "Achat de nourriture",
      amount: 50,
      category: "Alimentation",
    },
    {
      id: "2",
      date: "2022-01-20",
      description: "Facture d'électricité",
      amount: 100,
      category: "Factures",
    },
    {
      id: "3",
      date: "2022-02-10",
      description: "Achat de vêtements",
      amount: 70,
      category: "Vêtements",
    },
    {
      id: "4",
      date: "2022-02-20",
      description: "Achat de livres",
      amount: 30,
      category: "Loisirs",
    },
    {
      id: "5",
      date: "2022-03-05",
      description: "Facture d'internet",
      amount: 60,
      category: "Factures",
    },
  ];
  const datwtt = new Date().toLocaleDateString();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: 0,
      userId: 1,
      categoryId: 1,
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const queryTags = useQuery({ queryKey: ["tags"], queryFn: getTags });

  return (
    <section className="h-screen w-full bg-gray-200">
      <header className="flex items-center justify-between p-5 bg-white shadow-xl">
        <div>Expense.io</div>
        <div className="flex items-center gap-5">
          <div className="space-x-4">
            <span className="cursor-pointer">Need Help ?</span>
            <span className="cursor-pointer">Read Our Blog</span>
          </div>
          <div className="flex items-center gap-9">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <Menu />
          </div>
        </div>
      </header>
      <div className="w-full h-[87%] p-3 xl:h-[89%]">
        <div className="w-full h-full flex gap-3">
          <Aside />
          <div className="flex-1">
            <div className="w-full h-full flex gap-3">
              <div className=" flex-1  ">
                <div className="grid grid-cols-3 gap-5 ">
                  {/* {[1, 2, 3].map((el) => ( */}
                  <div className="relative flex gap-3 bg-white p-5 h-32 overflow-hidden">
                    <p className="text-red-500">•</p>
                    <div>
                      <h1>Foods & Drinks</h1>
                      <p className="text-xl">CFA 20 000</p>
                      <Pizza
                        size={110}
                        className="absolute -bottom-4 -right-4"
                        color="#1222"
                      />
                    </div>
                  </div>
                  <div className="relative flex gap-3 bg-white p-5 h-32 overflow-hidden">
                    <p className="text-red-500">•</p>
                    <div>
                      <h1>Bills & Payement</h1>
                      <p className="text-xl">CFA 50 000</p>
                      <ReceiptText
                        size={110}
                        className="absolute -bottom-4 -right-4"
                        color="#1222"
                      />
                    </div>
                  </div>
                  <div className="relative flex gap-3 bg-white p-5 h-32 overflow-hidden">
                    <p className="text-red-500 block">•</p>
                    <div>
                      <h1 className="flex gap-1">Entertainment</h1>
                      <p className="text-xl">CFA 10 000</p>
                      <Clapperboard
                        size={110}
                        className="absolute -bottom-4 -right-4"
                        color="#1222"
                      />
                    </div>
                  </div>
                  {/* ))} */}
                </div>
                {/* {Chart} */}
                <div className="bg-white mt-2">
                  <h1>Tracker d'Expenses</h1>
                  <ExpensesStats expenses={fictiveExpenses} />
                </div>
              </div>
              <div className="bg-white w-96 p-3">
                <div className="w-full h-full flex flex-col justify-between">
                  <div>
                    <header className="flex items-center gap-3 justify-center py-4">
                      <Calendar />
                      <h1>Your Transsaction History</h1>
                    </header>
                    <Separator />

                    <div className="mt-3">
                      {[1, 2, 3].map((el) => (
                        <div key={el} className=" py-3">
                          <h1>sks</h1>

                          <Separator />
                        </div>
                      ))}
                      {/* <Separator /> */}
                    </div>
                  </div>

                  <Drawer>
                    <DrawerTrigger asChild>
                      <Button variant="outline">Open Drawer</Button>
                    </DrawerTrigger>
                    <DrawerContent>
                      <div className="mx-auto w-full h-72 max-w-sm">
                        <DrawerHeader>
                          <DrawerTitle className="text-center">
                            To day at {datwtt}
                          </DrawerTitle>
                          {/* <DrawerDescription>
                            Set your daily activity goal.
                          </DrawerDescription> */}
                        </DrawerHeader>
                        <div className="p-4 pb-0">
                          <Form {...form}>
                            <form
                              onSubmit={form.handleSubmit(onSubmit)}
                              className="space-y-4 flex flex-col"
                            >
                              <div>
                                <FormField
                                  control={form.control}
                                  name="amount"
                                  render={({ field }) => (
                                    <FormItem className="mb-5">
                                      {/* <FormLabel>Email</FormLabel> */}
                                      <FormControl>
                                        <Input
                                          className="text-center focus-visible:border-0 text-7xl border-0 outline-none focus-visible:ring-0 h-16"
                                          placeholder="000"
                                          // type="number"
                                          {...field}
                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />

                                <div className="flex items-center gap-3">
                                  <FormField
                                    control={form.control}
                                    name="categoryId"
                                    render={({ field }) => (
                                      <FormItem className="block flex-1">
                                        {/* <FormLabel>Email</FormLabel> */}
                                        <Select onValueChange={field.onChange}>
                                          <FormControl>
                                            <SelectTrigger>
                                              <SelectValue placeholder="Expenses" />
                                            </SelectTrigger>
                                          </FormControl>
                                          <SelectContent className="text-xl">
                                            {queryTags &&
                                              queryTags.data.map((tag: any) => (
                                                <SelectItem
                                                  className="text-xl"
                                                  key={
                                                    tag.name + " " + tag.sticker
                                                  }
                                                  value={
                                                    tag.name + " " + tag.sticker
                                                  }
                                                >
                                                  {tag.name + " " + tag.sticker}
                                                </SelectItem>
                                              ))}
                                          </SelectContent>
                                        </Select>

                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />

                                  <Dialog>
                                    <DialogTrigger asChild className="block ">
                                      <Button variant="default">+</Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[425px]">
                                      <DialogHeader>
                                        <DialogTitle>New Tag</DialogTitle>
                                      </DialogHeader>
                                      <div className="">
                                        <FormTag
                                          dataTags={queryTags && queryTags.data}
                                        />
                                      </div>
                                    </DialogContent>
                                  </Dialog>
                                </div>
                              </div>

                              <Button type="submit">Confirm</Button>
                            </form>
                          </Form>
                        </div>
                      </div>
                    </DrawerContent>
                  </Drawer>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashPage;
