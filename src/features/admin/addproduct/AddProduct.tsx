/* eslint-disable @typescript-eslint/no-explicit-any */
import AppDialog from "@/apputils/AppDialog";
import { Button } from "@/components/ui/button";
import FileUplaod from "@/components/ui/file-upload";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { IoAddSharp } from "react-icons/io5";

interface AddProductInterface {
  onClose: () => void;
}
function AddProduct({ onClose }: AddProductInterface) {
  const { handleSubmit, register, formState } = useForm();
  const { errors } = formState;

  function handleAddProduct(e: any) {
    console.log(e);
  }

  return (
    <div>
      <AppDialog title="Add product" onClose={onClose} placement="CENTER">
        <form
          onSubmit={handleSubmit(handleAddProduct)}
          className="w-[20vw] flex flex-col gap-3"
        >
          <Input
            placeholder="Enter text.."
            label="Product name"
            mandatory
            errorMessage={errors?.productName?.message}
            {...register("productName", {
              required: "Please enter Product name",
            })}
          />

          <Input
            placeholder="Enter text.."
            label="Product name"
            mandatory
            errorMessage={errors?.productName?.message}
            {...register("productName", {
              required: "Please enter Product name",
            })}
          />
          <Input
            placeholder="Enter text.."
            label="Description"
            mandatory
            errorMessage={errors?.description?.message}
            {...register("description", {
              required: "Please enter Description",
            })}
          />

          <Input
            placeholder="Enter text.."
            label="Price"
            mandatory
            type="number"
            errorMessage={errors?.price?.message}
            {...register("price", {
              required: "Please enter Price",
            })}
          />
          <div className="flex flex-col gap-1">
            <label className="font-medium mb-1 flex items-center">
              Select product selling type
            </label>
            <RadioGroup className="flex  items-center" defaultValue="kg">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="kg" id="kg" />
                <label className="cursor-pointer" htmlFor="kg">
                  {`Kilograms (kg)`}
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="ml" id="ml" />
                <label className="cursor-pointer" htmlFor="ml">
                  {`Milliliters (ml)`}
                </label>
              </div>
            </RadioGroup>
          </div>
          <div>
            <FileUplaod mandatory={true} />
          </div>
          <div className="flex gap-2 mt-2">
            <Button
              className="w-1/2 flex items-center gap-1"
              variant={"ghost"}
              onClick={onClose}
            >
              <X className="w-5 h-5" /> Close
            </Button>
            <Button
              className="w-1/2 flex items-center gap-1"
              variant={"constructive"}
            >
              <IoAddSharp className="w-10 h-10" /> Add Product
            </Button>
          </div>
        </form>
      </AppDialog>
    </div>
  );
}

export default AddProduct;
