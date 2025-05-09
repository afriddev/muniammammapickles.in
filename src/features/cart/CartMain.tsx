import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Plus, Minus, Trash2, Edit } from "lucide-react";

const CartDrawer = () => {
  const cartItem = {
    name: "Tomato Pickle",
    detail: "300g / With Garlic",
    price: 110,
    quantity: 1,
    image: "/products/tomato.jpg",
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-pink-600 hover:bg-pink-700 text-white">Open Cart</Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-sm p-4 space-y-4">
        <h2 className="text-lg font-bold border-b pb-2">SHOPPING CART</h2>

        {/* Product Info */}
        <div className="flex gap-3">
          <img
            src={cartItem.image}
            alt={cartItem.name}
            className="w-20 h-20 object-contain border rounded"
          />
          <div className="flex-1">
            <h3 className="font-semibold">{cartItem.name}</h3>
            <p className="text-sm text-gray-500">{cartItem.detail}</p>
            <p className="text-sm mt-1 font-medium">Rs. {cartItem.price}.00</p>

            {/* Quantity Controls */}
            <div className="mt-2 flex items-center gap-2">
              <Button variant="outline" size="icon"><Minus size={16} /></Button>
              <span className="px-3">{cartItem.quantity}</span>
              <Button variant="outline" size="icon"><Plus size={16} /></Button>
            </div>
          </div>
        </div>

        {/* Edit/Delete */}
        <div className="flex justify-end gap-4">
          <Button variant="ghost" size="icon"><Edit size={18} /></Button>
          <Button variant="ghost" size="icon" className="text-red-500 hover:bg-red-50">
            <Trash2 size={18} />
          </Button>
        </div>

        {/* Icons Row */}
        <div className="flex justify-around py-3">
          <div className="bg-gray-100 p-3 rounded-full shadow"><i className="fas fa-receipt"></i></div>
          <div className="bg-gray-100 p-3 rounded-full shadow"><i className="fas fa-truck"></i></div>
          <div className="bg-gray-100 p-3 rounded-full shadow"><i className="fas fa-tags"></i></div>
        </div>

        {/* Subtotal */}
        <div className="border-t pt-4">
          <div className="flex justify-between font-medium mb-2">
            <span>Subtotal:</span>
            <span>Rs. {cartItem.price * cartItem.quantity}.00</span>
          </div>
          <p className="text-xs text-gray-500">
            Taxes and discounts calculated at checkout.
          </p>

          <div className="mt-3 text-sm">
            <label className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>
                I agree with the <a href="#" className="underline">terms and conditions</a>.
                Customers are requested to record and share unboxing videos to claim any missing products.
                Claims must be raised within 24 hours of receipt.
              </span>
            </label>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white">
            VIEW CART
          </Button>
          <div className="text-center text-xs font-semibold bg-red-600 text-white py-2 rounded">
            MINIMUM ORDER VALUE INR 300
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
