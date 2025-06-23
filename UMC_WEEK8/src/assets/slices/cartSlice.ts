import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import cartItems from "../../constants/cartItems";
import type { CartItems } from "../Types/cart";

export interface CartState {
    cartItems: CartItems;
    amount: number;
    total: number;
}

// cartItems의 타입이 CartItems와 맞지 않는 경우, cartItems의 각 아이템에 image 속성이 없어서 발생합니다.
// cartItems를 import한 후, CartItems 타입에 맞게 변환해주어야 합니다.

const initialState: CartState = {
    cartItems: cartItems.map(item => ({
        ...item,
        image: item.img // img 필드를 image로 매핑
    })),
    amount: 0,
    total: 0,
};

// carSlice 생성
// createSlice -> reduxToolkit에서 제공
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // 증가
        increase: (state, action: PayloadAction<{id:string}>) : void => {
            const itemId = action.payload.id;
            const item = state.cartItems.find((cartItem) : boolean => cartItem.id === itemId);

            if (item) {
                item.amount += 1;
            }
        },

        // 감소
        decrease: (state, action: PayloadAction<{id:string}>) : void => {
            const itemId = action.payload.id;
            const item = state.cartItems.find((cartItem) : boolean => cartItem.id === itemId);

            if (item) {
                item.amount -= 1;
            }
        },

        // 아이템 제거
        removeItem: (state, action: PayloadAction<{id:string}>) : void => {
            const itemId = action.payload.id;
            state.cartItems = state.cartItems.filter((cartItem) : boolean => cartItem.id !== itemId);
        },

        // 전체 삭제
        clearCart: (state) : void => {
            state.cartItems = [];
        },

        // 총액 계산
        calculateTotals: (state) : void => {
            let amount = 0;
            let total = 0;

            state.cartItems.forEach((item) : void => {
                amount += item.amount;
                total += Number(item.price) * item.amount;
            });

            state.amount = amount;
            state.total = total;
        }
    }
});

export const {increase, decrease, removeItem, clearCart, calculateTotals} = cartSlice.actions;

// duck pattern reducer는 export default로 내보내야 함.
const cartReducer = cartSlice.reducer;

export default cartReducer;