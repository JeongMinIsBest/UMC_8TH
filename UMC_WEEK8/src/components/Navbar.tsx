import { FaShoppingCart } from "react-icons/fa"
import { useSelector, useDispatch } from "../hooks/useCustomRedux";
import { useEffect } from "react";
import { calculateTotals } from "../assets/slices/cartSlice";
import type { CartState } from "../assets/slices/cartSlice";


const Navbar = (): React.ReactElement => {
  const { amount, cartItems } = useSelector((state: { cart: CartState }) => state.cart);
  const dispatch = useDispatch();

  useEffect(() : void => {
    dispatch(calculateTotals());
  }, [dispatch, cartItems]);


    return (
      <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
    <h1 onClick={():void => { window.location.href = '/';}} className='text-2xl fon-semibold cursor-pointer'>JeongMin Lim</h1>
    <div className='flex items-center space-x-2'>
        <FaShoppingCart className='text-2xl' />
        <span className='text-xl font-medium'>{amount}</span>
    </div>
    </div>
    );
};

export default Navbar;