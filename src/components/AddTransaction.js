import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../contexts/GlobalState'
import { v4 as uuidv4 } from 'uuid';


const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState()

    const { addTransaction, changeTransaction, transactions, editTransaction } = useContext(GlobalContext)
    console.log(changeTransaction)

    // const id = transactions.map(transaction => transaction.id)
    // const transaction = transactions.map(transaction => transaction)

    // const editedTransaction = findTransaction(transaction.id)

    const handleSubmit = (e) => {
        e.preventDefault()

        const newTransaction = {
            id: uuidv4(),
            text,
            amount: +amount
        }

        // const editedTransaction = {
        //     id: changeTransaction.id,
        //     text,
        //     amount: +amount
        // }


        if (changeTransaction.length > 0) {
            editTransaction(changeTransaction.id, text, amount )
        } else {
            addTransaction(newTransaction)
            setText('')
            setAmount('')
        }
    }

    useEffect(() => {
        if (changeTransaction) {
            setText(changeTransaction.text)
            setAmount(changeTransaction.amount)
        } else {
            setText('')
            setAmount('')
        }
    }, [changeTransaction])

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={handleSubmit} >
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text"
                        value={text}
                        onChange={(e) => { setText(e.target.value) }}
                        placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
            (negative - expense, positive - income)</label
                    >
                    <input type="number"
                        value={amount}
                        onChange={(e) => { setAmount(e.target.value) }}
                        placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>

            </form>
        </>
    )
}

export default AddTransaction