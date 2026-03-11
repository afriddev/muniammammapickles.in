/* eslint-disable @typescript-eslint/no-explicit-any */
import AuthShell from "@/apputils/AuthShell";
import AppSpinner from "@/apputils/AppSpinner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForogotPassword } from "@/hooks/auth/forgotPasswordHooks";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const { isPending, forgotPassword } = useForogotPassword();

  function onSubmit(data: any) {
    forgotPassword(
      { emailId: data?.email },
      {
        onSuccess(response) {
          if (response?.data === "SUCCESS") {
            reset();
          }
        },
      }
    );
  }

  return (
    <AuthShell
      eyebrow="Forgot password"
      title="Reset links should be simple, not buried under old UI."
      intro="Enter your email address and we will send the reset instructions needed to secure your account and get you back into checkout."
      stats={[
        { label: "Reset method", value: "Email link" },
        { label: "Account recovery", value: "Direct" },
        { label: "Next step", value: "Reset password" },
      ]}
    >
      <AppSpinner isPending={isPending} />
      <p className="text-[11px] uppercase tracking-[0.34em] text-[#8a4027]">
        Account recovery
      </p>
      <h2 className="mt-4 font-fraunces text-[2.8rem] leading-[1.04] tracking-[-0.03em] text-[#201610]">
        Send a password reset link
      </h2>
      <p className="mt-4 text-sm leading-7 text-[#5f4633]">
        Use the email tied to your account so we can send the recovery link.
      </p>

      <div className="mt-6 border-t border-[#b7a189] pt-6">
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5">
          <Input
            mandatory
            label="Email address"
            type="email"
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

          <div className="flex flex-col gap-3 border-t border-[#b7a189] pt-5 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-left text-sm uppercase tracking-[0.18em] text-[#8a4027]"
            >
              Back to login
            </button>
            <Button
              disabled={isSubmitting}
              className="h-12 border-[#201610] bg-[#201610] px-8 text-xs uppercase tracking-[0.18em] text-[#f5efe4] hover:bg-[#3d1d10]"
            >
              Send reset link
            </Button>
          </div>
        </form>
      </div>
    </AuthShell>
  );
}

export default ForgotPassword;
