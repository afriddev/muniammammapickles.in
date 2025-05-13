/* eslint-disable @typescript-eslint/no-explicit-any */
import AppDialog from "@/apputils/AppDialog";
import { useForm } from "react-hook-form";

interface AddProductInterface {
  onClose: () => void;
}
function AddProduct({ onClose }: AddProductInterface) {
  const { handleSubmit } = useForm();

  function handleAddProduct(e: any) {
    console.log(e);
  }

  return (
    <div>
      <AppDialog title="Add product" onClose={onClose} placement="CENTER">
        <form
          onSubmit={handleSubmit(handleAddProduct)}
          className="w-[20vw] flex flex-col gap-3"
        ></form>
      </AppDialog>
    </div>
  );
}

export default AddProduct;
