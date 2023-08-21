import { TbodyOfTableSettingOne } from './Transactions.styled'
import {TbodyOfTableSettingTwo} from './Transactions.styled'
import {TbodyOfTableSettingThree} from './Transactions.styled'



export const TransactionHistoryTable = ({ operationInfo }) => {
  return (
    <tr>
      <TbodyOfTableSettingOne>{operationInfo.type}</TbodyOfTableSettingOne>
      <TbodyOfTableSettingTwo>{operationInfo.amount}</TbodyOfTableSettingTwo>
      <TbodyOfTableSettingThree>{operationInfo.currency}</TbodyOfTableSettingThree>
    </tr>
  );
};