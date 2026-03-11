/* eslint-disable @typescript-eslint/no-explicit-any */
import AuthShell from "@/apputils/AuthShell";
import AppSpinner from "@/apputils/AppSpinner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSignUp } from "@/hooks/auth/signUpHooks";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type SignUpFormData = {
  firstName: string;
  lastName?: string;
  email: string;
  phone: string;
  password: string;
  otp?: string;
  agree: boolean;
};

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [signUpStep, setSignUpStep] = useState(0);
  const { signUp, isPending } = useSignUp();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpFormData>({
    defaultValues: {
      agree: false,
    },
  });

  function onSubmit(data: SignUpFormData) {
    signUp(
      {
        emailId: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        mobileNumber: data.phone,
        password: data.password,
        otp: data.otp ? parseInt(data.otp, 10) : undefined,
      },
      {
        onSuccess(response) {
          if (response?.data === "OTP_SENT") {
            setSignUpStep(1);
            return;
          }

          if (response?.data === "SUCCESS") {
            navigate("/login");
            return;
          }

          if (response?.data === "USER_EXISTS") {
            navigate("/login");
          }
        },
      }
    );
  }

  function handleGoogleSignInSuccess(response: any) {
    const googleAuthResponse: any = jwtDecode(response?.credential);
    const [firstName, ...restName] = (googleAuthResponse?.name ?? "Customer").split(" ");

    signUp(
      {
        emailId: googleAuthResponse?.email,
        firstName,
        lastName: restName.join(" "),
        googleSignUp: true,
        profileUrl: googleAuthResponse?.picture,
      } as any,
      {
        onSuccess(data) {
          if (data?.data === "SUCCESS") {
            navigate("/login");
          }
        },
      }
    );
  }

  return (
    <AuthShell
      eyebrow="Create account"
      title="A better storefront still needs a better signup flow."
      intro="Create your account to save address details, manage orders, and move into checkout without the old broken experience."
      stats={[
        { label: "Account setup", value: "Quick" },
        { label: "Address save", value: "After login" },
        { label: "Order flow", value: "Cleaner" },
      ]}
    >
      <AppSpinner isPending={isPending} />
      <p className="text-[11px] uppercase tracking-[0.34em] text-[#8a4027]">
        Join the store
      </p>
      <h2 className="mt-3 font-fraunces text-[2.4rem] leading-[1.04] tracking-[-0.03em] text-[#201610] lg:text-[3rem]">
        {signUpStep === 0 ? "Create your account" : "Verify your signup"}
      </h2>
      <p className="mt-3 max-w-[520px] text-sm leading-7 text-[#5f4633]">
        {signUpStep === 0
          ? "Use email signup or continue with Google to start ordering faster."
          : "Enter the OTP sent to your email address to activate the account."}
      </p>

      <div className="mt-6 border-t border-[#b7a189] pt-6">
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5">
          {signUpStep === 0 ? (
            <>
              <div className="grid gap-5 md:grid-cols-2">
                <Input
                  mandatory
                  label="First name"
                  placeholder="First name"
                  errorMessage={errors.firstName?.message}
                  className="h-12 border-[#b7a189] bg-[#eee1cf] text-[#201610]"
                  {...register("firstName", {
                    required: "Please enter your first name",
                  })}
                />
                <Input
                  label="Last name"
                  placeholder="Last name"
                  errorMessage={errors.lastName?.message}
                  className="h-12 border-[#b7a189] bg-[#eee1cf] text-[#201610]"
                  {...register("lastName")}
                />
              </div>

              <Input
                mandatory
                label="Email address"
                placeholder="you@example.com"
                errorMessage={errors.email?.message}
                className="h-12 border-[#b7a189] bg-[#eee1cf] text-[#201610]"
                {...register("email", {
                  required: "Please enter your email address",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Enter a valid email address",
                  },
                })}
              />

              <Input
                mandatory
                label="Phone number"
                placeholder="Phone number"
                errorMessage={errors.phone?.message}
                className="h-12 border-[#b7a189] bg-[#eee1cf] text-[#201610]"
                {...register("phone", {
                  required: "Please enter your phone number",
                })}
              />

              <div className="relative">
                <Input
                  mandatory
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create password"
                  errorMessage={errors.password?.message}
                  className="h-12 border-[#b7a189] bg-[#eee1cf] pr-12 text-[#201610]"
                  {...register("password", {
                    required: "Please create a password",
                    pattern: {
                      value:
                        /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{8,}$/,
                      message:
                        "Use 8+ characters with uppercase, number, and special character",
                    },
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

              <label className="flex items-start gap-3 border border-[#b7a189] bg-[#eee1cf] p-4 text-sm leading-7 text-[#5f4633]">
                <input
                  type="checkbox"
                  className="mt-1"
                  {...register("agree", {
                    validate: (value) => value || "Please accept the store terms to continue",
                  })}
                />
                <span>
                  I agree to the store terms, privacy policy, and account verification process.
                </span>
              </label>
              {errors.agree?.message ? (
                <p className="text-sm text-[#8a4027]">{errors.agree.message}</p>
              ) : null}
            </>
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
              onClick={() => navigate("/login")}
              className="text-left text-sm uppercase tracking-[0.18em] text-[#8a4027]"
            >
              Already have an account
            </button>
            <Button
              disabled={signUpStep === 0 && watch("agree") !== true}
              className="h-12 border-[#201610] bg-[#201610] px-8 text-xs uppercase tracking-[0.18em] text-[#f5efe4] hover:bg-[#3d1d10]"
            >
              {signUpStep === 0 ? "Create account" : "Verify account"}
            </Button>
          </div>
        </form>
      </div>

      {signUpStep === 0 ? (
        <div className="mt-6 border-t border-[#b7a189] pt-5">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#8a4027]">
            Or continue with Google
          </p>
          <div className="mt-4 border border-[#b7a189] bg-[#eee1cf] p-5">
            <div className="flex items-center justify-center">
              <GoogleLogin onSuccess={handleGoogleSignInSuccess} onError={() => undefined} />
            </div>
          </div>
        </div>
      ) : null}
    </AuthShell>
  );
}

export default SignUp;
