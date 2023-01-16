import React from 'react';
import ListItem from './ListItem';

export default function ListContainer() {

  const [inputString, setInputString] = React.useState('');
  const [items, setItems] = React.useState<string[]>(['Thing']);

  const listItems = items.map((elem, index) =>
    <ListItem
      item={elem}
      key={index}
      index={index}
      setItems={setItems}
    />
  );

  const goSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (inputString != '') {
      setItems((prev) => [...prev, inputString]);
      setInputString('');
    }
  }

  return (
    <div className='list-container'>
      <h1>To Do List</h1>
      <form
        className='list-container__form'
        onSubmit={goSubmit}
      >
        <input
          className='list-container__input'
          type="text"
          name="itemName"
          id="itemName"
          value={inputString}
          onChange={(e) => setInputString(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <div className="list-container__list">
        {listItems}
      </div>
    </div>
  );
}