export default (state, action) => {
    switch(action.type) {
        case'DELETE_TRANSACTION':
        return {
            ...state,
            transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
        }
        case'ADD_TRANSACTION':
        return {
            ...state,
            transactions: [action.payload, ...state.transactions]
        }
        case'CLEAR_TRANSACTIONS':
        return {
            ...state,
            transactions: []
        }
        case'EDITING_TRANSACTION':
        return {
            ...state,
            edit : true
        }
        case'FIND_EDIT':
        const found = state.transactions.find(transaction => transaction.id === action.payload)
        return {
            ...state,
            changeTransaction : found
        }
        // case'FIND_TRANSACTION':
        // return {
        //     ...state,
        //     transactions: state.transactions.map(transaction => transaction.id === action.payload)
        // }
        case'EDIT_TRANSACTION':
        
        const editTrans = state.transactions.map(transaction => 
            transaction.id === action.payload[0] ? {title : action.payload[0], amount : action.payload[2], id: action.payload[1] } : 
            transaction)
        return {
            ...state,
            transactions: [editTrans, ...state.transactions]
        }
        default:
            return state
    }
}