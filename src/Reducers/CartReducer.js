export const cartInitalState = []

export const cartReducer = (state, action) =>{

    const {type: actionType, payload: actionPayload} = action

    switch(actionType){
        case 'ADD_TO_CART': {
            const {id} = actionPayload
            const productInCartIndex = state.findIndex(item => item.id === id)
            const newState = [...state]

            if(productInCartIndex >= 0){
                const newState = structuredClone(state)
                newState[productInCartIndex].cantidad ++
                return newState
            }

            const newStateadded = [...newState , actionPayload]

            return newStateadded
        }

        case 'REMOVE_FROM_CART':{
            const {id} = actionPayload
            const newState = state.filter(item => item.id !== id)

            return newState
        }

        case 'RESTART_FROM_CART':{
            const {id} = actionPayload
            const productInCartIndex = state.findIndex(item => item.id === id)
            const newState = [...state]

            if(newState[productInCartIndex].cantidad > 1){
                const newState = structuredClone(state)
                newState[productInCartIndex].cantidad --
                return newState
            }

            if(newState[productInCartIndex].cantidad  <= 1){
                const newState = state.filter(item => item.id !== id)
                return newState
            }

        }

        case 'CLEAR_CART': {
            return cartInitalState
        }
    }

    return state
}