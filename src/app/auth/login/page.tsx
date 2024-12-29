import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Signin from "@/components/Auth/Signin";

const SignIn: React.FC = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
        <div className="flex flex-wrap items-center">
          <div className="hidden w-full p-7.5 xl:block xl:w-1/2">
            <div className="custom-gradient-1 flex flex-col items-center justify-center overflow-hidden rounded-2xl px-12.5 pt-12.5 text-center dark:!bg-dark-2 dark:bg-none">
              <Link className="mb-10 inline-block" href="/"></Link>
              <Image
                className="hidden dark:block"
                src={"/images/logo/logo-mobi.png"}
                alt="Logo"
                width={976}
                height={82}
              />
              <Image
                className="dark:hidden"
                src={"/images/logo/logo-mobi.png"}
                alt="Logo"
                width={976}
                height={82}
              />
              <p className=" mb-3 mt-10 text-xl font-medium text-dark dark:text-white">
                Chào Mừng Bạn Đến Với Chúng Tôi
              </p>

              <h1 className="mb-4 text-2xl font-bold text-dark dark:text-white sm:text-heading-3">
                Welcome Back!
              </h1>

              <p className="w-full max-w-[375px] font-medium text-dark-4 dark:text-dark-6">
                Sử dụng email MobiFone để login vào hệ thống
              </p>

              <div className="mt-31">
                <Image
                  src={"/images/grids/grid-02.svg"}
                  alt="Logo"
                  width={405}
                  height={325}
                  className="mx-auto dark:opacity-30"
                />
              </div>
            </div>
          </div>
          <div className="w-full xl:w-1/2">
            <div className="w-full p-4 sm:p-12.5 xl:p-15">
              <Signin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
