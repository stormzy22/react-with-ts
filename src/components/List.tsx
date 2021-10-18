import React from 'react';

interface Iprops {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

const List: React.FC<Iprops> = ({ people }): JSX.Element => {
  return (
    <div>
      <h1>I am alist</h1>
      {people.map((p, e) => (
        <div>{p.name}</div>
      ))}
    </div>
  );
};

export default List;
