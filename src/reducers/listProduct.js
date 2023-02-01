const initialState = [
    {
        productId: 1,
        productName: "Pizza",
        price: 12,
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
        quantity: 10,
        image: "images/pizza.jpg"
    }, {
        productId: 2,
        productName: "Hamburger",
        price: 15,
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
        quantity: 0,
        image: "images/Hamburger.jpg"
    },
    {
        productId: 3,
        productName: "Bread",
        price: 9,
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
        quantity: 15,
        image: "images/bread.jpg"
    },
    {
        productId: 4,
        productName: "Cake",
        price: 8,
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
        quantity: 20,
        image: "images/Cake.jpg"
    }
];

const listProduct = (state=initialState,action)=>{
    return state;
}

export default listProduct;
