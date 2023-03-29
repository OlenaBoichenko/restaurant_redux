import { createSlice } from '@reduxjs/toolkit'


export const dishesSlice = createSlice({
    name: 'dishes',
    initialState: {
        selectCategory: 'SEAFOOD'
    },
    reducers: {
        filterCategory: (state, action) => {
            state.selectCategory = action.payload;
        }
    }
})


export const getSelectedCategory = state => state.dishes.selectCategory;
export const { filterCategory } = dishesSlice.actions;
export default dishesSlice.reducer;