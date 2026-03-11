/* eslint-disable @typescript-eslint/no-explicit-any */
import AuthShell from "@/apputils/AuthShell";
import AppSpinner from "@/apputils/AppSpinner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLogin } from "@/hooks/auth/loginHooks";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type LoginFormData = {
  emailId: string;
  password: string;
  otp?: string;
};

function LoginMain() {
  const [loginStep, setLoginStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const { login, isPending } = useLogin();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormData>();

  function handleLoginSubmit(data: LoginFormData) {
    login(
      {
        emailId: data.emailId,
        password: data.password,
        otp: data.otp ? parseInt(data.otp, 10) : undefined,
      },
      {
        onSuccess(response) {
          if (response?.data === "OTP_SENT") {
            setLoginStep(1);
            return;
          }

          if (response?.data === "SUCCESS") {
            localStorage.setItem("MAPEmailId", data.emailId);
            localStorage.setItem("MAPName", response?.user?.firstName ?? "Customer");
            localStorage.setItem("MAPProfile", response?.user?.profileUrl ?? "");
            localStorage.setItem("MAPAddressFilled", response?.addressFilled?.toString());
            navigate("/profile");
            return;
          }

          reset({ emailId: data.emailId, password: "", otp: "" });
        },
      }
    );
  }

  function handleGoogleLoginSuccess(response: any) {
    const googleAuthResponse: any = jwtDecode(response.credential);

    login(
      {
        emailId: googleAuthResponse?.email,
        password: "",
        googleLogin: true,
        firstName: googleAuthResponse?.name,
        profileUrl: googleAuthResponse?.picture,
      },
      {
        onSuccess(data) {
          if (data?.data === "SUCCESS") {
            localStorage.setItem("MAPEmailId", googleAuthResponse?.email);
            localStorage.setItem("MAPName", googleAuthResponse?.name ?? "Customer");
            localStorage.setItem("MAPProfile", googleAuthResponse?.picture ?? "");
            localStorage.setItem("MAPAddressFilled", data?.addressFilled?.toString());
            navigate("/profile");
          }
        },
      }
    );
  }

  return (
    <AuthShell
      eyebrow="Login"
      title="The account flow should feel as clean as the storefront."
      intro="Sign in to continue with saved address details, order tracking, cart checkout, and repeat purchases without the old broken flow."
      stats={[
        { label: "Cart continuity", value: "Live" },
        { label: "Profile access", value: "Direct" },
        { label: "Checkout path", value: "Faster" },
      ]}
    >
      <AppSpinner isPending={isPending} />
      <p className="text-[11px] uppercase tracking-[0.34em] text-[#8a4027]">
        Welcome back
      </p>
      <h2 className="mt-3 font-fraunces text-[2.4rem] leading-[1.04] tracking-[-0.03em] text-[#201610] lg:text-[3rem]">
        {loginStep === 0 ? "Login to your account" : "Enter the OTP to continue"}
      </h2>
      <p className="mt-3 max-w-[500px] text-sm leading-7 text-[#5f4633]">
        {loginStep === 0
          ? "Use email and password or continue with Google."
          : "We sent a verification code to your email address."}
      </p>

      <div className="mt-6 border-t border-[#b7a189] pt-6">
        <form onSubmit={handleSubmit(handleLoginSubmit)} className="grid gap-5">
          <Input
            mandatory
            label="Email address"
            placeholder="you@example.com"
            errorMessage={errors.emailId?.message}
            className="h-12 border-[#b7a189] bg-[#eee1cf] text-[#201610]"
            {...register("emailId", {
              required: "Please enter your email address",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Enter a valid email address",
              },
            })}
          />

          {loginStep === 0 ? (
            <div className="relative">
              <Input
                mandatory
                label="Password"
                type={showPassword ? "text" : "password"}
                placeholder="Your password"
                errorMessage={errors.password?.message}
                className="h-12 border-[#b7a189] bg-[#eee1cf] pr-12 text-[#201610]"
                {...register("password", {
                  required: "Please enter your password",
                })}
              />
              <button
                type="button"
                onClick={() => setShowPassword((current) => !current)}
                className="absolute right-3 top-[41px] text-[#6a4c37]"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          ) : (
            <Input
              mandatory
              label="OTP"
              placeholder="Enter the code"
              errorMessage={errors.otp?.message}
              className="h-12 border-[#b7a189] bg-[#eee1cf] text-[#201610]"
              {...register("otp", {
                required: "Please enter the OTP",
              })}
            />
          )}

          <div className="flex flex-col gap-3 border-t border-[#b7a189] pt-5 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={() => navigate("/forgot-password")}
              className="text-left text-sm uppercase tracking-[0.18em] text-[#8a4027]"
            >
              Forgot password
            </button>
            <Button className="h-12 border-[#201610] bg-[#201610] px-8 text-xs uppercase tracking-[0.18em] text-[#f5efe4] hover:bg-[#3d1d10]">
              {loginStep === 0 ? "Login now" : "Verify login"}
            </Button>
          </div>
        </form>
      </div>

      {loginStep === 0 ? (
        <div className="mt-6 border-t border-[#b7a189] pt-5">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#8a4027]">
            Or continue with Google
          </p>
          <div className="mt-4 border border-[#b7a189] bg-[#eee1cf] p-5">
            <div className="flex items-center justify-center">
              <GoogleLogin onSuccess={handleGoogleLoginSuccess} onError={() => undefined} />
            </div>
          </div>
        </div>
      ) : null}

      <div className="mt-6 border-t border-[#b7a189] pt-5 text-sm leading-7 text-[#5f4633]">
        Do not have an account yet? {" "}
        <button
          type="button"
          onClick={() => navigate("/signup")}
          className="uppercase tracking-[0.18em] text-[#8a4027]"
        >
          Create one now
        </button>
      </div>
    </AuthShell>
  );
}

export default LoginMain;
