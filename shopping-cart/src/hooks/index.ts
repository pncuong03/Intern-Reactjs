import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '~/app/store';
import { fetchProducts } from '~/redux/productSlice';


const useProduct = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


};

export default useProduct;
