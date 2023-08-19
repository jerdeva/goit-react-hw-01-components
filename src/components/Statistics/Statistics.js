import { StatisticsCard } from "./StatisticsCard";

export const Statistics = ({ dataItems }) => {
  return (
    <ul>
      {dataItems.map(item => {
        return (
          <li key={item.id}>
            <StatisticsCard statistic={ item} />
          </li>
        );
      })}
    </ul>
  );
};
