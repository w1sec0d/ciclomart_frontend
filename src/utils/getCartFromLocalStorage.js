const getCartFromLocalStorage = () => {
    const cart = localStorage.getItem('cart')
    return cart ? JSON.parse(cart) : null
}

export default getCartFromLocalStorage
