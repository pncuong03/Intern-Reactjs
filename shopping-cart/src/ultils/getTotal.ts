import { CartState, IProduct } from "~/redux/cartSlice";

export const getTotal = (cartItem: any) => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cartItem.forEach(( item: IProduct) => {
        totalQuantity += item.qty! || 0;
        totalPrice += item.price! * item.qty!;
    })
    return { totalQuantity, totalPrice }
}