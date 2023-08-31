import React from 'react';
const List = (props) => {
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>Нет дат!</p>;
  return (
    <ul>
      <h2 className='list-head'>Available data</h2>
     
      {repos.history.map((history, index) => {
        return (
          <li key={index}>
            <span>{history.data} </span>
          </li>
        );
      })}

    </ul>
  );
};
export default List;