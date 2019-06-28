import React from 'react';
import PropTypes from '../utils/propTypes';

import { Media } from 'reactstrap';

const Notifications = ({ notificationsData }) => {
  return (
    notificationsData &&
    notificationsData.length &&
    notificationsData.map(({ id, avatar, message, date }) => (
      <Media key={id} className="pb-2">
        <Media body middle className="align-self-center">
          {message}
        </Media>
        <Media right className="align-self-center">
          <small className="text-muted">{date}</small>
        </Media>
      </Media>
    ))
  );
};

Notifications.propTypes = {
  notificationsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.ID,
      avatar: PropTypes.string,
      message: PropTypes.node,
      date: PropTypes.date,
    })
  ),
};

Notifications.defaultProps = {
  notificationsData: [],
};

export default Notifications;
