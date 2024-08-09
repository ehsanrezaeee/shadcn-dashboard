"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";

import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";

const dynamicSchema = (fields: string[]) => {
  const schemaFields = fields.reduce((acc: any, field) => {
    if (field == "email" || "ایمیل") {
      acc[field] = z.string().email({ message: "لطفا ایمیل صحیح وارد کنید" });
    } else if (field === "password" || "رمز عبور") {
      acc[field] = z.string().min(8, "حداقل هشت کاراکتر نیاز است");
    } else {
      acc[field] = z.string().min(1, { message: "این ورودی خالی نباید باشد" });
    }
    return acc;
  }, {});

  return z.object(schemaFields);
};

const DynamicForm = ({ fields, url }: { fields: string[]; url: string }) => {
  const token = Cookies.get("Ace1");
  const schema = dynamicSchema(fields);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const postFormDataMutation = useMutation({
    mutationFn: async (data: object) =>
      await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL_BACK_END}/${url}`,
        { ...data },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      ),
    onError: (error, variables, context) => {
      toast.error("عملیات ناموفق بود. دوباره تلاش کنید", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        className: "text-sm",
      });
      reset();
    },
    onSuccess: (data, variables, context) => {
      toast.success("عملیات با موفقیت انجام گردید", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        className: "text-sm w-64",
      });
      reset();
    },
  });

  const onSubmit = (data: any) => {
    postFormDataMutation.mutate(data);
  };

  return (
    <div>
      {postFormDataMutation.isPending ? (
        "در حال ارسال داده ها ..."
      ) : (
        <>
          {postFormDataMutation.isError ? (
            <div>An error occurred: {postFormDataMutation.error.message}</div>
          ) : null}

          {postFormDataMutation.isSuccess ? (
            <div className="bg-emerald-400">عملیات موفقیت آمیز بود</div>
          ) : null}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center bg-white p-3 rounded-lg text-sm my-4"
          >
            <div className="grid grid-cols-2 gap-6 w-full">
              {fields.map((field, index) => (
                <div className="col-span-2 sm:col-span-1" key={index + field}>
                  <div className="relative">
                    <label htmlFor={field}>{field}</label>
                    <input
                      id={field}
                      {...register(field)}
                      placeholder={field}
                      className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
                    />
                  </div>
                  {errors[field] && (
                    <p className="text-red-400 my-1 text-sm">
                      {/* @ts-ignore */}
                      {errors[field].message}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <button
              className={`rounded-[8px] mt-8 mb-4 w-1/2 ${
                isValid ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-400"
              } py-2 px-5 flex-grow flex items-center justify-center`}
              type="submit"
            >
              ارسال
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default DynamicForm;
