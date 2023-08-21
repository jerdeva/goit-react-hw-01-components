import { TransactionHistoryTable } from "./TransactionHistoryTable";
import { TableSetting } from './Transactions.styled'
import {TheadOfTableSetting} from './Transactions.styled'

export const TransactionHistory = ({ transaction }) => {
    return <TableSetting>
               <thead>
              <tr>
                <TheadOfTableSetting>Type</TheadOfTableSetting>
                <TheadOfTableSetting>Amount</TheadOfTableSetting>
                <TheadOfTableSetting>Currency</TheadOfTableSetting>
              </tr>
        </thead>
        {transaction.map(operation => {
                return (<tbody  key={operation.id}>
                    <TransactionHistoryTable operationInfo={operation} />
                    </tbody>)
    })}</TableSetting>
};