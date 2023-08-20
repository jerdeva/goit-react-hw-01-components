import { TransactionHistoryTable } from "./TransactionHistoryTable";

export const TransactionHistory = ({ transaction }) => {
    return <table>
               <thead>
              <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
              </tr>
        </thead>
        {transaction.map(operation => {
                return (<tbody  key={operation.id}>
                    <TransactionHistoryTable operationInfo={operation} />
                    </tbody>)
    })}</table>
};