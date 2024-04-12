import PropTypes from 'prop-types';
import css from './FriendList.module.css';


export const FriendItem = ({ avatar, name, isOnline,online,offline}) => {
  return (
    <li
      className={css.item}
    >
      <span className={isOnline ? css.online : css.offline}>
        Status: {isOnline ? 'Online' : 'Offline'}
      </span>
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
