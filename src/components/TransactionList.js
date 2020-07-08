import React, { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalState'
import Transaction from './Transaction'


const TransactionList = () => {
    const {transactions, clearTransactions} = useContext(GlobalContext)
    // console.log(transactions)
    // console.log(transactions.length)


    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => 
                    <Transaction key = {transaction.id} transaction = {transaction}/>)}
               
            </ul>
            {transactions.length === 0 ? '' : <button className="btn" onClick={() => {clearTransactions()}}>Clear list</button>}
           
        </>
    )
}

export default TransactionList