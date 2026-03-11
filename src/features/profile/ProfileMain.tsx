/* eslint-disable @typescript-eslint/no-explicit-any */
import AppSpinner from "@/apputils/AppSpinner";
import { useGetEmailId, useGetName, useGetProfileUrl } from "@/apputils/AppHooks";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  useGetUserDetails,
  useUpdateAdress,
  useUpdateProfile,
} from "@/hooks/user/userHooks";
import { MapPin, User2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAppContext } from "@/apputils/AppContext";

type ProfileFormData = {
  name: string;
  emailId: string;
  phone: string;
  bio: string;
  ad1: string;
  ad2: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
};

function ProfileMain() {
  const emailId = useGetEmailId() ?? "";
  const name = useGetName() ?? "Customer";
  const profileUrl = useGetProfileUrl();
  const { refresh } = useAppContext();
  const [activeTab, setActiveTab] = useState<"personal" | "address">("personal");
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ProfileFormData>({
    defaultValues: {
      name,
      emailId,
      phone: "",
      bio: "",
      ad1: "",
      ad2: "",
      city: "",
      state: "",
      pincode: "",
      country: "India",
    },
  });
  const { isPending, updateProfile } = useUpdateProfile();
  const { isPending: gettingUserDetails, getUserDetails } = useGetUserDetails();
  const { isPending: updatingAddress, updateAddress } = useUpdateAdress();

  useEffect(() => {
    getUserDetails(
      { emailId },
      {
        onSuccess(data) {
          if (!data?.user) {
            return;
          }

          const user = data.user;
          const address = user.address;
          setValue("name", user.firstName ?? name);
          setValue("phone", user.mobileNumber ?? "");
          setValue("bio", user.bio ?? "");
          setValue("ad1", address?.addressLine1 ?? "");
          setValue("ad2", address?.addressLine2 ?? "");
          setValue("city", address?.city ?? "");
          setValue("state", address?.state ?? "");
          setValue("pincode", address?.pincode ?? "");
          setValue("country", address?.country ?? "India");
        },
      }
    );
  }, [emailId, getUserDetails, name, refresh, setValue]);

  function handleSave(data: ProfileFormData) {
    if (activeTab === "personal") {
      updateProfile({
        emailId,
        name: data.name,
        bio: data.bio || "",
        phoneNumber: data.phone,
      });
      return;
    }

    updateAddress({
      emailId,
      addressLine1: data.ad1,
      addressLine2: data.ad2 || "",
      city: data.city,
      state: data.state,
      pincode: data.pincode,
      country: data.country || "India",
    });
  }

  const addressComplete = Boolean(watch("ad1") && watch("city") && watch("state") && watch("pincode"));

  return (
    <div className="bg-[#eee1cf]">
      <AppSpinner isPending={isPending || gettingUserDetails || updatingAddress} />
      <div className="mx-auto max-w-[1600px] px-6 py-10 lg:px-10 lg:py-14">
        <div className="grid gap-px bg-[#b7a189] lg:grid-cols-[0.34fr_0.66fr]">
          <div className="bg-[#201610] p-6 text-[#f5efe4] lg:p-8">
            <div className="flex items-center gap-4 border-b border-[#5a4332] pb-6">
              <img
                src={profileUrl || "/default_profile.webp"}
                alt={name}
                className="h-20 w-20 border border-[#b7a189] object-cover"
              />
              <div>
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#d79b45]">My account</p>
                <h1 className="mt-3 font-fraunces text-[2.2rem] leading-[1.06] tracking-[-0.03em] text-[#fffaf2]">
                  {watch("name") || name}
                </h1>
                <p className="mt-2 text-sm leading-7 text-[#dcc9b4] break-all">{emailId}</p>
              </div>
            </div>

            <div className="mt-6 grid gap-px bg-[#5a4332]">
              <div className="bg-[#2e1710] p-5">
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#d79b45]">Profile status</p>
                <p className="mt-4 font-fraunces text-[1.8rem] leading-[1.06] tracking-[-0.03em] text-[#fffaf2]">
                  {watch("phone") ? "Ready" : "Needs phone"}
                </p>
              </div>
              <div className="bg-[#2e1710] p-5">
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#d79b45]">Address status</p>
                <p className="mt-4 font-fraunces text-[1.8rem] leading-[1.06] tracking-[-0.03em] text-[#fffaf2]">
                  {addressComplete ? "Saved" : "Incomplete"}
                </p>
              </div>
            </div>

            <div className="mt-6 border-t border-[#5a4332] pt-6 text-sm leading-7 text-[#dcc9b4]">
              Finish both sections so checkout can move without interruption.
            </div>
          </div>

          <div className="bg-[#f7f1e8] p-6 lg:p-8">
            <div className="flex flex-col gap-3 border-b border-[#b7a189] pb-6 sm:flex-row">
              <button
                onClick={() => setActiveTab("personal")}
                className={`h-12 border px-5 text-xs uppercase tracking-[0.18em] ${
                  activeTab === "personal"
                    ? "border-[#201610] bg-[#201610] text-[#f5efe4]"
                    : "border-[#b7a189] bg-[#eee1cf] text-[#201610]"
                }`}
              >
                <User2 className="mr-2 inline h-4 w-4" />
                Personal info
              </button>
              <button
                onClick={() => setActiveTab("address")}
                className={`h-12 border px-5 text-xs uppercase tracking-[0.18em] ${
                  activeTab === "address"
                    ? "border-[#201610] bg-[#201610] text-[#f5efe4]"
                    : "border-[#b7a189] bg-[#eee1cf] text-[#201610]"
                }`}
              >
                <MapPin className="mr-2 inline h-4 w-4" />
                Address
              </button>
            </div>

            <form onSubmit={handleSubmit(handleSave)} className="mt-6 grid gap-5">
              {activeTab === "personal" ? (
                <>
                  <div className="grid gap-5 md:grid-cols-2">
                    <Input
                      mandatory
                      label="Full name"
                      placeholder="Your full name"
                      errorMessage={errors.name?.message}
                      className="h-12 border-[#b7a189] bg-[#eee1cf] text-[#201610]"
                      {...register("name", { required: "Please enter your full name" })}
                    />
                    <Input
                      disabled
                      label="Email address"
                      placeholder="you@example.com"
                      errorMessage={errors.emailId?.message}
                      className="h-12 border-[#b7a189] bg-[#eee1cf] text-[#201610]"
                      {...register("emailId")}
                    />
                  </div>
                  <Input
                    mandatory
                    label="Phone number"
                    placeholder="Phone number"
                    errorMessage={errors.phone?.message}
                    className="h-12 border-[#b7a189] bg-[#eee1cf] text-[#201610]"
                    {...register("phone", { required: "Please enter your phone number" })}
                  />
                  <Textarea
                    label="Bio"
                    placeholder="A short note about your meal preferences or order needs"
                    errorMessage={errors.bio?.message}
                    className="min-h-[140px] rounded-none border-[#b7a189] bg-[#eee1cf] text-[#201610]"
                    {...register("bio")}
                  />
                </>
              ) : (
                <>
                  <Input
                    mandatory
                    label="Address line 1"
                    placeholder="House number, street, area"
                    errorMessage={errors.ad1?.message}
                    className="h-12 border-[#b7a189] bg-[#eee1cf] text-[#201610]"
                    {...register("ad1", { required: "Please enter address line 1" })}
                  />
                  <Input
                    label="Address line 2"
                    placeholder="Landmark, apartment, or optional extra details"
                    errorMessage={errors.ad2?.message}
                    className="h-12 border-[#b7a189] bg-[#eee1cf] text-[#201610]"
                    {...register("ad2")}
                  />
                  <div className="grid gap-5 md:grid-cols-2">
                    <Input
                      mandatory
                      label="City"
                      placeholder="City"
                      errorMessage={errors.city?.message}
                      className="h-12 border-[#b7a189] bg-[#eee1cf] text-[#201610]"
                      {...register("city", { required: "Please enter your city" })}
                    />
                    <Input
                      mandatory
                      label="State"
                      placeholder="State"
                      errorMessage={errors.state?.message}
                      className="h-12 border-[#b7a189] bg-[#eee1cf] text-[#201610]"
                      {...register("state", { required: "Please enter your state" })}
                    />
                  </div>
                  <div className="grid gap-5 md:grid-cols-2">
                    <Input
                      mandatory
                      label="Pincode"
                      placeholder="Pincode"
                      errorMessage={errors.pincode?.message}
                      className="h-12 border-[#b7a189] bg-[#eee1cf] text-[#201610]"
                      {...register("pincode", { required: "Please enter your pincode" })}
                    />
                    <Input
                      disabled
                      label="Country"
                      placeholder="India"
                      errorMessage={errors.country?.message}
                      className="h-12 border-[#b7a189] bg-[#eee1cf] text-[#201610]"
                      {...register("country")}
                    />
                  </div>
                </>
              )}

              <div className="flex flex-col gap-3 border-t border-[#b7a189] pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm leading-7 text-[#5f4633]">
                  {activeTab === "personal"
                    ? "Keep account details current so support and delivery updates stay accurate."
                    : "A complete address is required before placing an order."}
                </p>
                <Button className="h-12 border-[#201610] bg-[#201610] px-8 text-xs uppercase tracking-[0.18em] text-[#f5efe4] hover:bg-[#3d1d10]">
                  Save changes
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileMain;
