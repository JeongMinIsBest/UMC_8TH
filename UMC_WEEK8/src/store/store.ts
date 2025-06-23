import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../assets/slices/cartSlice';

// 1. ����� ����
function createStore() {
    const store = configureStore({
        // 2. ���༭ ����
        reducer: {
            cart: cartReducer,
        },
    });

    return store;
}

// store�� Ȱ���� �� �ֵ��� �������� ��
// ���⼭ �����ؼ� ���� ���ش�.
// Singletone ����
const store = createStore();

export default store;

// Infer the 'RootState' and 'AppDispatch' types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

