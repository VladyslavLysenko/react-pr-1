import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import clsx from 'clsx';

export const FriendItem = ({ avatar, name, isOnline,online,offline}) => {
  console.log(online)
  return (
    <li
      className={clsx(css.item, {
     
      })}
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
