/* eslint-disable @typescript-eslint/no-explicit-any */
import LoginForm from "./LoginForm";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useLogin } from "@/hooks/auth/loginHooks";
import AppSpinner from "@/apputils/AppSpinner";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import PageWrapper from "@/apputils/PageWrapper";
import NavBar from "@/apputils/NavBar";
import Footer from "@/apputils/Footer";
import { encodeString } from "@/apputils/appUtils";
import DividerWithText from "@/apputils/DividerWithText";

function Login() {
  const userName = localStorage.getItem("userName");
  const [loginStep, setLoginStep] = useState<number>(0);
  const { login, isPending } = useLogin();
  const navigate = useNavigate();
  const { formState, handleSubmit, register, reset, watch } = useForm();

  useEffect(() => {
    // if (userName) navigate(`/fg/home`);
  }, [userName]);

  function handleLoginSubmit(e: any) {
    login(
      {
        emailId: e?.emailId,
        password: e?.password,
        otp: e?.otp,
        googleLogin: e?.googleLogin ? true : false,
        profileUrl: e?.profileUrl,
        firstName: e?.firstName,
      },
      {
        onSuccess(data) {
          if (data?.data === "OTP_SENT") {
            setLoginStep(1);
          } else if (data?.data === "SUCCESS") {
            console.log(data);
            localStorage.setItem("userName", encodeString(data?.userName));
            localStorage.setItem("isFirstTimeLogin", data?.firstTimeLogin);
            navigate(`/`);
          } else {
            reset();
          }
        },
      }
    );
  }

  function handleGoogleLoginSuccess(response: any) {
    const googleAuthResponse: any = jwtDecode(response.credential);
    handleLoginSubmit({
      emailId: googleAuthResponse?.email,
      googleLogin: true,
      firstName: googleAuthResponse?.name,
      profileUrl: googleAuthResponse?.picture,
    });
  }

  return (
    <PageWrapper>
      <div className="flex flex-col ">
        <div className="flex flex-col gap-10 h-[95vh] justify-between">
          <NavBar />
          <div className=" flex  h-full items-center">
            {<AppSpinner isPending={isPending} />}
            <div className=" w-full  flex items-center flex-col justify-between  ">
              <div className="flex flex-col gap-y-5  justify-center px-2">
                <div className="flex flex-col items-center gap-2">
                  <h2 className=" text-3xl ">Login to your account</h2>
                  <p className="text-xs text-foreground/70">
                    Continue tracking your progress after logging <br /> in to
                    your account
                  </p>
                </div>

                {loginStep === 0 && (
                  <div className="flex flex-col gap-4">
                    <div className="flex w-full items-center justify-center">
                      <GoogleLogin
                        width={360}
                        onSuccess={handleGoogleLoginSuccess}
                        onError={() => {
                          console.log("Login Failed");
                        }}
                      />
                    </div>
                    <DividerWithText title={"OR"} />
                  </div>
                )}
                <LoginForm
                  loginStep={loginStep}
                  handleLoginSubmit={handleLoginSubmit}
                  formState={formState}
                  handleSubmit={handleSubmit}
                  register={register}
                  watch={watch}
                />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </PageWrapper>
  );
}

export default Login;
