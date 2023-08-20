import { Avatar } from "./Profile.styled";
import { UserNameParagrapher } from "./Profile.styled";
import { TagParagrapher } from "./Profile.styled"
import { LocationParagrapher } from "./Profile.styled"
import { StatisticList } from "./Profile.styled"
import { Wrapper } from "./Profile.styled"
import {StatisticListItem} from './Profile.styled'
import { UserCrdInfo } from './Profile.styled'
import {StatisticListItemInfo} from './Profile.styled'

export const Profile = ({
  prof: {
    avatar,
    username,
    tag,
    location,
    stats: { followers },
    stats: { views },
    stats: { likes },
  },
}) => {
  return (
    <Wrapper >
      <UserCrdInfo >
        <Avatar src={avatar} alt="User avatar"  />
        <UserNameParagrapher >{username}</UserNameParagrapher>
        <TagParagrapher >{'@' + tag}</TagParagrapher>
        <LocationParagrapher>{location}</LocationParagrapher>
      </UserCrdInfo>

      <StatisticList >
        <StatisticListItem>
          <div >Followers</div>
          <StatisticListItemInfo >{followers}</StatisticListItemInfo>
        </StatisticListItem>
        <StatisticListItem>
          <div >Views</div>
          <StatisticListItemInfo >{views}</StatisticListItemInfo>
        </StatisticListItem>
        <StatisticListItem>
          <div >Likes</div>
          <StatisticListItemInfo >{likes}</StatisticListItemInfo>
        </StatisticListItem>
      </StatisticList>
    </Wrapper>
  );
};
