import React from 'react';
import { IState } from '../App';

const List: React.FC<IState> = ({ people }): JSX.Element => {
  const renderList = (): JSX.Element[] => {
    return people?.map((person, i) => (
      <li className="List" key={i}>
        <div className="List-header">
          <img src={person?.url} alt={person?.name} className="List-img" />
          <h2>{person?.name}</h2>
        </div>
        <p>{person?.age} years old</p>
        <p className="List-note">{person?.note}</p>
      </li>
    ));
  };

  return <ul>{renderList()}</ul>;
};

export default List;
