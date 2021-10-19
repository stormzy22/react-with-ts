import React, { useState } from 'react';

interface IInput {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}
const AddToList = (): JSX.Element => {
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
    console.log('hi');
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
