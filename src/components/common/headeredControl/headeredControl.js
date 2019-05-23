import React from 'react';

const HeaderedControl = ({title, children}) => {
    return (
      <div>
          <div>{title}</div>
          <div>
              {children}
          </div>
      </div>);
}

export default HeaderedControl;