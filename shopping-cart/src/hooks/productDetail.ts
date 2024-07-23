import { useState } from "react";
import api from "~/services/apis";

const useProductDetail = () => {
    const [productDetail, setProductDetail] = useState<any>(null);

    const getProductDetail = async (productId: any) => {
        const data = await api.get(`/products/${productId}`)
      
            if(data){
                setProductDetail(data?.data)
            }
    }

    return { 
        getProductDetail,
        productDetail
        }

}

export default useProductDetail;