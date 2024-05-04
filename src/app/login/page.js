"use client";
import {
  Button,
  Input,
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";

import axios from "axios";
import { useState } from "react";
import { MailIcon, LockIcon } from "../../components/icons";

import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const [isInvalid, setIsInvalid] = useState({
    username: false,
    password: false,
  });
  const [errorMessage, setErrorMessage] = useState({
    username: "",
    password: "",
  });

  const [values, setValues] = useState({
    username: "mmaghsoudi",
    password: "12345678",
  });

  const validation = () => {
    if (values.username === "" && values.password === "")
      setErrorMessage({
        username: "Please enter username",
        password: "Please enter password",
      });
    else if (values.username === "" && values.password !== "")
      setErrorMessage({
        username: "Please enter username",
        password: "",
      });
    else if (values.username !== "" && values.password === "")
      setErrorMessage({
        username: "",
        password: "Please enter password",
      });
    else {
      setIsLoading(true);
      Login();
    }
  };

  const Login = () => {
    var data = JSON.stringify({
      UserName: values.username,
      Password: values.password,
    });
    var config = {
      method: "post",
      url: "/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        const data = JSON.stringify({ token: response.data.token });
        localStorage.setItem("info", data);
        router.push("/", { scroll: false });
        setIsLoading(false);
      })
      .catch(function (error) { });
  };

  return (
    <>
      {/* <div className="bg"></div>
<div className="bg bg2"></div>
<div className="bg bg3"></div> */}
      {/* <main className="bg-gray-10 dark:bg-black"> */}
      <main>
        <div className="flex items-center justify-center h-screen bg-white z-50">
          <Modal isOpen={true} hideCloseButton={true} placement="center">
            <ModalContent>
              <>
                <ModalHeader className="flex flex-col gap-1">
                  <div className="w-48 mb-2">
                    <div>ایز اسمارت</div>
                  </div>
                </ModalHeader>
                <ModalBody>
                  <Input
                    autoFocus
                    endContent={
                      <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="نام کاربری"
                    variant="faded"
                    isInvalid={isInvalid.username}
                    errorMessage={errorMessage.username}
                    className="text-black dark:text-white"
                    value={values.username}
                    onValueChange={(e) => {
                      setValues({ ...values, username: e });
                      setErrorMessage({
                        ...errorMessage,
                        username: "",
                      });
                      setIsInvalid({
                        ...isInvalid,
                        username: false,
                      });
                    }}
                  />
                  <Input
                    endContent={
                      <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    isInvalid={isInvalid.password}
                    errorMessage={errorMessage.password}
                    className="text-black dark:text-white"
                    value={values.password}
                    onValueChange={(e) => {
                      setValues({ ...values, password: e });
                      setErrorMessage({
                        ...errorMessage,
                        password: "",
                      });
                      setIsInvalid({
                        ...isInvalid,
                        password: false,
                      });
                    }}
                    type="password"
                    variant="faded"
                    label="رمز عبور"
                  />
                </ModalBody>
                <ModalFooter>
                  <div className="grid grid-cols-2 w-full">
                    <div className="flex justify-start w-full">
                      <Button
                     
                        onClick={() => router.push("/forgot-verification", { scroll: false })}
                        className="text-[#14b8a6]"
                        variant="light"
                      >
                        فراموشی رمز
                      </Button>
                    </div>
                    <div className="flex justify-end w-full">
                      <Button
                      className="bg-[#14b8a6] dark:bg-[#1e293b] text-white"
                        isLoading={isLoading}
                        onClick={validation}
                     
                      >
                        ورود به برنامه
                      </Button>

                    </div>

                  </div>
                </ModalFooter>
              </>
            </ModalContent>
          </Modal>
        </div>
      </main>
    </>
  );
};

export default LoginPage;