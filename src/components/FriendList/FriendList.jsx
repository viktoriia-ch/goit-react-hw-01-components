import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem/FriendListItem';
import styles from './friendList.module.css';

const FriendList = ({ friends }) => {
  const allFriends = friends.map(friend => (
    <FriendListItem key={friend.id} {...friend} />
  ));

  return <ul className={styles.list}>{allFriends}</ul>;
};

export default FriendList;

FriendList.defaultProps = {
  friends: [],
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
