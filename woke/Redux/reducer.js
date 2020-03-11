let initialState = {
    selectedComponent:0
    }
    
    const reducer = (state = initialState, action) => {
      switch (action.type) {
        case "buttonSelection":
            
            return{...state,selectedComponent:action.payload}




        default:
          return state;
      }
    }
    
    export default reducer
    