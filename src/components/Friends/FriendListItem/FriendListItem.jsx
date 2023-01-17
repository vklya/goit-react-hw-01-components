import css from './friendsItem.module.scss';
import PropTypes from 'prop-types';

const FriendListItem = ({isOnline, id, avatar, name }) => {
    const statusClass = isOnline ? `${css.status} ${css.online}` : css.status;
    return (
        <li className={css.item} key={id}>
            <span className={statusClass}>{isOnline}</span>
            <img className={css.avatar} src={avatar} alt={name} width="48" />
            <p className={css.name}>{name}</p>
        </li>);
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
}

export default FriendListItem;