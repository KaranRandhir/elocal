import elocal from "../api/elocal"


export const fetchProduct = (sellerId,productId,variantId) => async dispatch => {
    const response = await elocal.get('/productDetail',{
        params:{
            sellerId,
            productId,
            variantId
        }
    });
    
    dispatch({ type: 'FETCH_PRODUCT', payload: response.data });
};


export const fetchSellers = (productId,variantId) => async dispatch => {
    const response = await elocal.get('/otherSellers',{
        params:{
            
            productId,
            variantId
        }
    });
    
    dispatch({ type: 'FETCH_SELLERS', payload: response.data });
};