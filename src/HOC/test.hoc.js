/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';

export default WrappedComponent => {
  const hocComponent = ({ ...props }) => {
    const [data, setData] = useState('');
    const onType = dta => {
      setData(dta);
    };

    return (
      <div>
        <h1>Hello from hoc</h1>
        <WrappedComponent data={data} onType={onType} test="I am from HOC" {...props} />
      </div>
    );
  };

  hocComponent.propTypes = {};

  return hocComponent;
};
