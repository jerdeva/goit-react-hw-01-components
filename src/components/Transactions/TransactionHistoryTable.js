export const TransactionHistoryTable = ({ operationInfo }) => {
  return (
    <tr>

      <td >{operationInfo.type}</td>
      <td>{operationInfo.amount}</td>
      <td>{operationInfo.currency}</td>
    </tr>
  );
};