import { useState, useEffect } from "react";
import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import Footer from "./Footer";
import "../styles/Layout.css";

function App() {
    const savedCart = localStorage.getItem("cart");
    const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // const [isFooterShown, updateIsFooterShown] = useState();

    return (
        <div>
            <Banner />
            <div className="lmj-layout-inner">
                <Cart cart={cart} updateCart={updateCart} />
                <ShoppingList cart={cart} updateCart={updateCart} />
            </div>
            {/* <button onClick={() => updateIsFooterShown(!isFooterShown)}>Cacher !</button>
            {isFooterShown && <Footer cart={cart} />} */}
            <Footer cart={cart} />
        </div>
    );
}

export default App;
