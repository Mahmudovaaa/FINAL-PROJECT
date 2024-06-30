import axios from "axios";
import * as types from "./actionTypes";
const getProduct = (payload = 'products') => (dispatch) => {
    dispatch({ type: types.GET_PRODUCTS_REQUEST });
    return axios
        .get(`https://667734cd145714a1bd7417b5.mockapi.io/basket${payload}`)
        .then((r) => {
           return dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: r.data });
        })
        .catch((e) => {
            dispatch({ type: types.GET_PRODUCTS_FAILURE});
        })
}

const getSingleProduct = (payload) => (dispatch) => {
    dispatch({ type: types.GET_SINGLE_REQUEST });
    return axios
        .get(`https://667734cd145714a1bd7417b5.mockapi.io/basket/products${payload}`)
        .then((r) => {
           return dispatch({ type: types.GET_SINGLE_SUCCESS, payload: r.data });
        })
        .catch((e) => {
            dispatch({ type: types.GET_SINGLE_FAILURE});
        })
}

const postCart = (payload) => (dispatch) => {
    dispatch({ type: types.POST_CART_REQUEST });
    return axios
        .post("https://667734cd145714a1bd7417b5.mockapi.io/basket", payload)
        .then((r) => {
            return dispatch({ type: types.POST_CART_SUCCESS });
        })
        .catch((e) => {
            dispatch({ type: types.POST_CART_FAILURE });
        })
}

const getCart = (payload) => (dispatch) => {
    dispatch({ type: types.GET_CART_REQUEST });
    return axios
        .get("https://667734cd145714a1bd7417b5.mockapi.io/basket")
        .then((r) => {
            return dispatch({ type: types.GET_CART_SUCCESS, payload: r.data });
        })
        .catch((e) => {
            dispatch({ type: types.GET_CART_FAILURE});
        })
}

const deleteCart = (id) => (dispatch) => {
    dispatch({ type: types.DELETE_CART_REQUEST });

    return axios
        .delete(`https://667734cd145714a1bd7417b5.mockapi.io/basket${id}`)
        .then((r) => {
            return dispatch({ type: types.DELETE_CART_SUCCESS });
        })
        .catch((e) => {
            dispatch({ type: types.DELETE_CART_FAILURE });
        })
}
const patchcart = ({qnty,id}) => (dispatch) => {
    dispatch({ type: types.PATCH_CART_REQUEST });

    return axios
        .patch(`https://667734cd145714a1bd7417b5.mockapi.io/basket${id}`,{
            quantity : qnty
        })
        .then((r) => {
            return dispatch({ type: types.PATCH_CART_SUCCESS}
            );
        })
        .catch((e) => {
            dispatch({ type: types.PATCH_CART_FAILURE });
        })
}
export { getProduct, getCart, postCart, deleteCart,getSingleProduct,patchcart }

