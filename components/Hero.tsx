"use client";

import Image from "next/image";
import Button from "./Button";

import { motion, AnimatePresence } from "framer-motion";
import { slideIn, fadeIn, zoomIn } from "../utils/motion";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <motion.div
          initial={{ opacity: 0, y: -70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/doctor_small.png"
            alt="camp"
            width={50}
            height={50}
            className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
          />

          <h1 className="bold-40 lg:bold-64 sm:bold-52">
            Doctor's Control Panel Results
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="bold-20 mt-6 text-gray-50 xl:max-w-[520px]">
            Welcome to DCP Results!
          </p>

          <p className="bold-16 mt-6 text-gray-30 xl:max-w-[520px]">
            Retrieve results of pathology and radiology direct from your GP
          </p>
        </motion.div>

        <motion.p
          className="regular-12 mt-6 text-gray-30 xl:max-w-[520px]"
          initial={{ opacity: 0, y: -70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          Results are first reviewed by your GP then made available via this
          results portal for you to peruse along with comments from your GP.
        </motion.p>

        <div className="my-6"></div>

        <div className="hidden xl:block">
          <motion.div
            className="flex flex-col w-full gap-3 sm:flex-row "
            initial={{ opacity: 0, y: -70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            <Button
              type="button"
              title="Get your results!"
              variant="btn_green"
            />
            <Button
              type="button"
              title="Have you seen your GP?"
              icon="/play.svg"
              variant="btn_white_text"
            />
          </motion.div>
        </div>
      </div>

      <div className="hidden xl:block relative flex-1 items-start">
        <motion.div
          initial={{ opacity: 0, y: -70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="relative flex flex-1 items-start"
        >
          <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
            <div className="flex flex-col">
              <div className="flexBetween">
                <p className="bold-20 text-white">Please note!:</p>
                <Image src="/close.svg" alt="close" width={24} height={24} />
              </div>
            </div>

            <div className="flexBetween">
              <div className="flex flex-col">
                <p className="regular-16 block text-gray-20">
                  Your GP must enroll you for this results service when creating
                  a request for pathology / radiology
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
