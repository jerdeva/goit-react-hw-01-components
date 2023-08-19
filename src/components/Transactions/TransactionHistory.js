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
        <tbody>
            <tr>{transaction.map(operation => {
                return (<td key={operation.id}>
                    <TransactionHistoryTable operationInfo={operation } />
        </td>

        );
    })}</tr></tbody></table>
};