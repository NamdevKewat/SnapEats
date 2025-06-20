import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);
const StoreContextProvider = (props) =>{
    const [cartItems , setCartItems] = useState({});
    let url = "http://localhost:4000";
    const [token,setToken] = useState("");
    let [food_list,setFood_list] = useState([]);

    const addToCart = (itemId)=>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart =(itemId) =>{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
    }

    const getTotalCartAmount =() =>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] >0){
                let itemInfo = food_list.find((product)=>product._id === item);
                totalAmount +=itemInfo.price * cartItems[item]; 
            }
        }
        return totalAmount;
    }

    const fetchFoodList = async() =>{
        const response = await axios.get("http://localhost:4000/api/food/list");
        console.log("response=",response.data);
        setFood_list(response.data.data);
    }

    useEffect(()=>{
        async function loadData() {
            await fetchFoodList();
            if(localStorage.getItem("token")){
            setToken(localStorage.getItem("token"));
        }
        }
        loadData();
    },[])
    
    const contextValue = {
        food_list,
        removeFromCart,
        setCartItems,
        cartItems,
        addToCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }
    
  
    
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;