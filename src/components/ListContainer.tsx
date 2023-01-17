import React from 'react';
import ListItem from './ListItem';

export default function ListContainer() {

  const [inputString, setInputString] = React.useState('');
  const [items, setItems] = React.useState<string[]>(() => {
    const stringVal = localStorage.getItem('items');
    if (stringVal) {
      return JSON.parse(stringVal) as string[];
    } else {
      return [];
    }
  });
  const [crossedItems, setCrossedItems] = React.useState<boolean[]>(() => {
    const stringVal = localStorage.getItem('crossedItems');
    if (stringVal) {
      return JSON.parse(stringVal) as boolean[];
    } else {
      return [];
    }
  });

  React.useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);
  React.useEffect(() => {
    localStorage.setItem('crossedItems', JSON.stringify(crossedItems));
  }, [crossedItems]);


  const listItems = items.map((elem, index) =>
    <ListItem
      key={index}
      index={index}
      item={elem}
      setItems={setItems}
      isCrossedOut={crossedItems[index]}
      setCrossedItems={setCrossedItems}
    />
  );

  const goSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (inputString != '') {
      setItems((prev) => [...prev, inputString]);
      setCrossedItems((prev) => [...prev, false]);
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