const storage = (cartItems)=>{
    sessionStorage.setItem('cart',JSON.stringify(cartItems.length >0? cartItems: []));
}

export const CartReducer = (state, action)=>{
    let index = -1;
    //buscamos si el index ya esta en nuestra variable initialState
    if (action.payLoad) index = state.cartItems.findIndex(e => e.id === action.payLoad.id)
    // no es recomendado mutar e array sino mas bien retornar un nuevo array
    let newItems = [...state.cartItems]
    switch(action.type){
        case "ADD":
            //si no esta la agregamos
            if (index ===-1) {
                // state.cartItems.push({...action.payLoad, quantity : 1})
                newItems.push({...action.payLoad, quantity:1})
            }
            //sino incremetamos la cantidad de productos
            else {
                // state.cartItems[index].quantity++;
                newItems[index].quantity++;
            }
            break;
        case "INCQTY":
            //si no esta la agregamos
            if (index ===-1) {
                // state.cartItems.push({...action.payLoad, quantity : 1})
                newItems.push({...action.payLoad, quantity:1})
            }
            //sino incremetamos la cantidad de productos
            else {
                // state.cartItems[index].quantity++;
                newItems[index].quantity++;
            }
            break;
        
        case "REMOVE":{
            if(index > -1) {
                // state.cartItems.splice(index,1)
                newItems = state.cartItems.filter(e=> e.id!== action.payLoad.id)
            }
            break;
        }
        case "DECQTY":{
            if(index > -1 && newItems[index].quantity >=1) {
                // state.cartItems[index].quantity--;
                newItems[index].quantity--;
            }
            break;
        }
        case "CLEAR":{
            // state.cartItems= [];
            newItems=[]
            break;
        }
        default:{
            console.log("no ocrrio nada en el Reducer")
        }
    }
    state.cartItems = newItems;
    storage(newItems);
    return state
}