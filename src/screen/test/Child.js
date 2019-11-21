/* eslint-disable react/prop-types */
import React, { memo } from 'react';

const Child = ({ user }) => {
  console.log('Child');
  return <div>{user.name}</div>;
};

export default memo(Child);
