import React, { useState } from 'react';
import { IState as Props } from '../App';

interface IInput {
  people: Props['people'];
  setPeople: React.Dispatch<React.SetStateAction<Props['people']>>;
}
const AddToList: React.FC<IInput> = ({ setPeople, people }): JSX.Element => {
  const [input, setInput] = useState({
    age: '',
    name: '',
    img: '',
    note: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleClick = (): void => {
    if (!input.age || !input.name || !input.age) {
      return;
    }
    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.img,
        note: input.note,
      },
    ]);
  };
  return (
    <div className="AddToList">
      <input type="text" className="AddToList-input" placeholder="Name" name="name" value={input.name} onChange={handleChange} />
      <input type="text" className="AddToList-input" placeholder="Age" name="age" value={input.age} onChange={handleChange} />
      <input type="text" className="AddToList-input" placeholder="Image Url" name="img" value={input.img} onChange={handleChange} />
      <textarea className="AddToList-input" placeholder="Note" name="note" value={input.note} onChange={handleChange} />
      <button className="AddToList-btn" onClick={handleClick}>
        Add To List
      </button>
    </div>
  );
};

export default AddToList;
