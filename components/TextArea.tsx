"use client";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { DateSelector } from "./DatePicker";

import { styles } from "../styles";

interface DateConstructor {
  startDate: Date;
}

const TextArea = () => {
  const formRef = useRef();
  const [startDate, setStartDate] = useState(new Date());
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: { target: any }) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <section className="max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="flex h-[1px] items-start justify-start gap-8 overflow-x-auto lg:h-[300px] xl:h-[480px]"></div>

      <motion.div
        initial={{ opacity: 0, y: -70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6"
      >
        <div className="bg-green-50 p-8 lg:max-w-[1000px] xl:max-w-[20000px] xl:rounded-5xl xl:px-16 xl:py-24 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>To access your results</strong> complete the following
            steps:
          </h2>
          <div
            className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
          >
            <div className="flex-[1] bg-black-100 p-0.5 lg:p-4 rounded-2xl">
              <form className="mt-12 flex flex-col gap-8">
                <label className="flex flex-col">
                  <span className="text-white font-medium mb-4">
                    <strong>Step 1: </strong>Enter mobile phone number used by
                    your GP when creating your pathology request.
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Mobile Number"
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                  />
                </label>

                <label className="flex flex-col">
                  <span className="text-white font-medium mb-4">
                    <strong>Step 2: </strong>Enter your date of birth
                    [yyyy-mm-dd eg 1970-03-21]
                  </span>
                  <DateSelector />
                </label>
                <label className="flex flex-col">
                  <span className="text-white font-medium mb-4">
                    <strong>Step 3: </strong>
                  </span>

                  <textarea
                    rows={7}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What you want to say?"
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-gray-90 rounded-lg outline-none border-none font-medium"
                  />
                </label>

                <button
                  type="submit"
                  className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TextArea;
