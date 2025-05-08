import AppDialog from "@/apputils/AppDialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import { useForm } from "react-hook-form";

interface ManageUsersInterface {
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
}

function ManageUsers({ setOpenDialog }: ManageUsersInterface) {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  return (
    <div>
      <AppDialog
        placement="RIGHT"
        title="Manage Users"
        onClose={() => {
          setOpenDialog(false);
        }}
      >
        <div className="w-fit p-3 min-w-[20vw]">
          <Select >
            <SelectTrigger  className="w-full">
              <SelectValue placeholder="Select Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="ADMIN">Admin</SelectItem>
                <SelectItem value="SUPER_ADMIN">Super Admin</SelectItem>
                <SelectItem value="SUPPORT">Support</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </AppDialog>
    </div>
  );
}

export default ManageUsers;
