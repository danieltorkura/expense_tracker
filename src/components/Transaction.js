import React, {useContext} from 'react'
import { GlobalContext } from '../contexts/GlobalState'


const Transaction = ({transaction}) => {
    const sign = transaction.amount < 0 ? '' : '+';

    const {deleteTransaction, findEdit, editable} = useContext(GlobalContext)

   

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
                {transaction.text} <span>{sign}{transaction.amount}</span><button
                onClick={() => deleteTransaction(transaction.id)}
                className="delete-btn">x</button>
                <button className="edit-btn" 
                 onClick={() => findEdit(transaction.id)}
                //  onClick={editable()}
                >!</button>
        </li>
    )
}

export default Transaction