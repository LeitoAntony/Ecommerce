import { configureStore } from '@reduxjs/toolkit'

import productsReducer from '../Features/Products'
import categoriesReducer from '../Features/Categories'
const store = configureStore({
    reducer: {
        products: productsReducer,
        categories: categoriesReducer,
        
    }
})

export default store