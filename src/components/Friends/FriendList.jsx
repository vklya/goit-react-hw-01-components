import css from './friendsList.module.scss';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
    const elements = friends.map(friend => 
        <FriendListItem key={friend.id} {...friend} />)
    return (
        <ul className={css.friendList}>
            {elements}
        </ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf.isRequired,
}

export default FriendList;