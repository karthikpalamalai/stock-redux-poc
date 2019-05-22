import React from 'react';

const HeaderedList = ({title, children}) => {
    const chld = children.map(ch => <li>{ch}</li>);
    return (
      <div>
          <div>{title}</div>
          <div>
              <ul>{chld}</ul>
          </div>
      </div>);
}

export default HeaderedList;