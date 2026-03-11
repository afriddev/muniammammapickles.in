/* eslint-disable @typescript-eslint/no-explicit-any */
import AuthShell from "@/apputils/AuthShell";
import AppSpinner from "@/apputils/AppSpinner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useResetPassword } from "@/hooks/auth/resetPasswordHooks";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { isPending, resetPassword } = useResetPassword();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(data: any) {
    resetPassword(
      {
        token: token as string,
        password: data?.password,
      },
      {
        onSuccess(response) {
          if (response?.data === "SUCCESS") {
            navigate("/login");
          }
        },
      }
    );
  }

  return (
    <AuthShell
      eyebrow="Reset password"
      title="New password screens should feel controlled, not fragile."
      intro="Create a fresh password for your account and return to a cleaner login flow once the reset is complete."
      stats={[
        { label: "Security", value: "Updated" },
        { label: "Password rules", value: "8+ strong" },
        { label: "Next stop", value: "Login" },
      ]}
    >
      <AppSpinner isPending={isPending} />
      <p className="text-[11px] uppercase tracking-[0.34em] text-[#8a4027]">
        Reset credentials
      </p>
      <h2 className="mt-4 font-fraunces text-[2.8rem] leading-[1.04] tracking-[-0.03em] text-[#201610]">
        Set a new password
      </h2>
      <p className="mt-4 text-sm leading-7 text-[#5f4633]">
        Use a strong password with uppercase, number, and special character.
      </p>

      <div className="mt-6 border-t border-[#b7a189] pt-6">
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5">
          <div className="relative">
            <Input
              mandatory
              label="New password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter new password"
              errorMessage={errors.password?.message}
              className="h-12 border-[#b7a189] bg-[#eee1cf] pr-12 text-[#201610]"
              {...register("password", {
                required: "Please enter a new password",
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

          <div className="relative">
            <Input
              mandatory
              label="Confirm password"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm password"
              errorMessage={errors.confirmPassword?.message}
              className="h-12 border-[#b7a189] bg-[#eee1cf] pr-12 text-[#201610]"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) => value === watch("password") || "Passwords do not match",
              })}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword((current) => !current)}
              className="absolute right-3 top-[41px] text-[#6a4c37]"
            >
              {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>

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
              Reset password
            </Button>
          </div>
        </form>
      </div>
    </AuthShell>
  );
}

export default ResetPassword;
