import CartItem from "./CartItem";
import { useSelector } from "../hooks/useCustomRedux";
import type { CartState } from "../assets/slices/cartSlice";

const CartList = (): React.ReactElement => {
    const {cartItems} = useSelector((state) : CartState => state.cart);

    return (
        <div className='flex flex-col items-center justify-center'>
            <ul>
                {cartItems.map((item): React.ReactElement => (<CartItem key={item.id} lp={item} />
                ))}
            </ul>
        </div>
    );
};

export default CartList;