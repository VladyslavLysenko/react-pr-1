import PropTypes from 'prop-types';

export const FriendItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className="item">
      <span className="status">Status: {isOnline ? 'Online' : 'Offline'}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
