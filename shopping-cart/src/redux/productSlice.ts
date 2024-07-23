import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import api from '~/services/apis';
import { IProduct } from '~/types';

export interface ProductState {
  products: IProduct[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  searchTerm: string;
}

const initialState: ProductState = {
  products: [],
  status: 'idle',
  error: null,
  searchTerm: '',
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await api.get('/products');
  return response.data;
});

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<IProduct[]>) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export const { setSearchTerm } = productSlice.actions;

export const productReducer = productSlice.reducer;
