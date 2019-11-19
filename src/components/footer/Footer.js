import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';

const Footer = ({ onSelect, select }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', height: 50 }}>
      <Button
        style={{ flex: 1, backgroundColor: select === 'all' ? 'green' : 'red' }}
        onClick={() => onSelect('all')}
      >
        <span>All</span>
      </Button>
      <Button
        style={{ flex: 1, backgroundColor: select === 'pending' ? 'green' : 'red' }}
        onClick={() => onSelect('pending')}
      >
        <span>Pending</span>
      </Button>
      <Button
        style={{ flex: 1, backgroundColor: select === 'completed' ? 'green' : 'red' }}
        onClick={() => onSelect('completed')}
      >
        <span>Completed</span>
      </Button>
    </div>
  );
};

Footer.propTypes = {
  onSelect: PropTypes.func.isRequired,
  select: PropTypes.string.isRequired,
};

export default Footer;
