import { Box } from 'components/Box';
import PropTypes from 'prop-types';
import * as SC from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Box
      width="300px"
      bg="white"
      borderRadius="8px"
      overflow="hidden"
      boxShadow="0 10px 10px -5px rgba(0, 0, 0, 0.3)"
      mb="6"
    >
      <Box display="flex" flexDirection="column" alignItems="center" py={5}>
        <SC.Avatar src={avatar} alt="User avatar" />
        <SC.UserName>{username}</SC.UserName>
        <SC.Tag>@{tag}</SC.Tag>
        <SC.Location>{location}</SC.Location>
      </Box>
      <Box as="ul" display="flex" p="0" bg="grey" height="90px">
        <SC.Item>
          <span>Followers</span>
          <SC.StatsValue>{stats.followers}</SC.StatsValue>
        </SC.Item>
        <SC.Item>
          <span>Views</span> <SC.StatsValue>{stats.views}</SC.StatsValue>
        </SC.Item>
        <SC.Item>
          <span>Likes</span> <SC.StatsValue>{stats.likes}</SC.StatsValue>
        </SC.Item>
      </Box>
    </Box>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
