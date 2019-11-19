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
        All
      </Button>
      <Button
        style={{ flex: 1, backgroundColor: select === 'pending' ? 'green' : 'red' }}
        onClick={() => onSelect('pending')}
      >
        Pending
      </Button>
      <Button
        style={{ flex: 1, backgroundColor: select === 'completed' ? 'green' : 'red' }}
        onClick={() => onSelect('completed')}
      >
        Completed
      </Button>
    </div>
  );
};

Footer.propTypes = {
  onSelect: PropTypes.func.isRequired,
  select: PropTypes.string.isRequired,
};

export default Footer;
