import React from 'react';
import { useDispatch, useSelector } from '../hooks/useCustomRedux';
import { clearCart, type CartState } from '../assets/slices/cartSlice';

const PriceBox = () : React.ReactElement => {
    const { total } = useSelector((state): CartState => state.cart);
    const dispatch = useDispatch();
    const handleInitializeCart = () : void => {
        dispatch(clearCart());
    };

    return (
      <div className='p-12 flex justify-between'>
        <button onClick={handleInitializeCart} className='border p-4 rounded-md cursor-pointer'>장바구니 초기화</button>
        <div>총 가격 : {total} 원</div>
      </div>
    );
};

export default PriceBox;