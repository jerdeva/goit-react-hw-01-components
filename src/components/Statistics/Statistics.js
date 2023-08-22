import { StatisticsCard } from "./StatisticsCard";
import { List } from './Statistics.styled'
import { AreaSetting } from './Statistics.styled'
import { StatisticsName } from './Statistics.styled'
import {ListItem} from './Statistics.styled'
 
export const Statistics = ({ dataItems, title }) => {
  return (
    <AreaSetting>      
      <StatisticsName >{ title}</StatisticsName>
    <List>
      {dataItems.map(item => {
        return (
          <ListItem key={item.id}>
            <StatisticsCard statistic={ item} />
          </ListItem>
        );
      })}
      </List>
      </AreaSetting>
  );
};
