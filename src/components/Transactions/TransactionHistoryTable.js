export const TransactionHistoryTable = ({ operationInfo }) => {
  return (
    <div>
      <td>{operationInfo.type}</td>
      <td>{operationInfo.amount}</td>
      <td>{operationInfo.currency}</td>
    </div>
  );
};