import {ListItemFormat} from './Statistics.styled'

export const StatisticsCard = ({ statistic: { label, percentage } }) => {
  return (
    <ListItemFormat>
      <div>
      <div>{label}</div>
      <div>{percentage}</div>
        </div>
    </ListItemFormat>
  );
};

        
