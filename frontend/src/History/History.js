import React from 'react'
import { useGlobalContext } from '../context/globalContext';
import { HistoryStyled } from '../styles/historySyle';

function History() {
    const {transactionHistory} = useGlobalContext()

    const [...history] = transactionHistory()

    return (
        <HistoryStyled>
            <h2>Historique</h2>
            {history.map((item,index) =>{
                const {_id, title, amount, type} = item
                const key = _id || index; 
                return (
                    <div key={key} className="history-item">
                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {title}
                        </p>

                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {
                                type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0: amount}`
                            }
                        </p>
                    </div>
                )
            })}
        </HistoryStyled>
    )
}


export default History