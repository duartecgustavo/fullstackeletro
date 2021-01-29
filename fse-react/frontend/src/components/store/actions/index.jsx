const Add = () => {
    return{
        type:'ADD_TO_CART'
    }
   }
   const Remove = () => {
    return{
        type:'REMOVE_TO_CART'
    }
   }
   
   export default {
       Add,
       Remove
   }