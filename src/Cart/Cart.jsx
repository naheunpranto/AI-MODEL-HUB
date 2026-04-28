import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
  
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)

    const handlePayment = () => {
        setCarts([])
        toast.success("Payment successful!")
    }

    const handleDelete = (item) => {
        const filteredArray = carts.filter(c => c.id !== item.id)
        setCarts(filteredArray)
        toast.success("Item deleted!")
    }

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold text-center mt-8">Your Cart</h1>

      {
        carts.length === 0 ? <p className="text-2xl font-semibold text-center mt-5 mb-5">Your cart is empty</p> :

        <>
            <div className="space-y-5  mb-10 mt-10">
        {carts.map((item) => (
          <div
            className="flex items-center justify-between border overflow-hidden rounded-lg p-3"
            key={item.id}
          >
            <div className="flex items-center gap-3">
              <div>
                <img
                  className="h-20 w-20 object-contain"
                  src={item.image}
                  alt=""
                />
              </div>

              <div>
                <h2 className="text-xl font-bold">{item.title}</h2>
              </div>
            </div>
            
            <div className="flex gap-10">
                <div className="text-3xl font-bold">${item.price}/month</div>
                <button onClick={() => handleDelete(item)} className="btn rounded-2xl btn-error">X</button>
            </div>
          </div>
        ))}
            </div>

            <div className="flex justify-between bg-black text-white p-5 mb-10 rounded-lg text-3xl font-bold">
                <div>Total</div>
                <div>${totalPrice}</div>
            </div>

            <div className="flex justify-center items-center">
                <button onClick={handlePayment} className="btn w-100 mb-10 bg-amber-500 rounded-3xl text-3xl p-10 font-bold">Proceed to Checkout</button>
            </div> 
        </>

      } 
    </div>
  );
};

export default Cart;
