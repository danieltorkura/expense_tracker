import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ],
    edit : false,
    changeTransaction : []
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    // ACTIONS payload
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    function clearTransactions() {
        dispatch({
            type: 'CLEAR_TRANSACTIONS',
        })
    }

    function editable() {
        dispatch({
            type: 'EDITING_TRANSACTION',
            
        })
    }
    
    function editTransaction(id, text, amount) {
        dispatch({
            type: 'EDIT_TRANSACTION',
            payload: [id, text, amount]
        })
    }

    function findEdit (id) {
        dispatch({
            type: 'FIND_EDIT',
            payload: id
        })
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            changeTransaction : state.changeTransaction,
            edit : state.edit,
            deleteTransaction,
            addTransaction,
            clearTransactions,
            editable,
            findEdit,
            editTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}