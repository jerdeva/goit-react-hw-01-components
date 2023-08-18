export const StatisticsCard = ({statistic: {label, percentage}}) => {
  return (
    <div>
      <span>{label}</span>
      <span>{percentage}</span>
    </div>
  );
};
