import React from 'react';
import ListItem from './ListItem';

// EXERCISE (2) -- Add a required 'title' prop to ListContainer
// Reference it in the return statement below

export default function ListContainer() {

  // EXERCISE (6) -- Add state for the form values
  // Changes to the form should update state, state changes the value of the form
  const [inputString, setInputString] = React.useState('');
  const [items, setItems] = React.useState<string[]>([]);

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (inputString !== '') {
      setItems((prev) => [...prev, inputString]);
      setInputString('');
    }
  }

  const setItem = (index: number, item: string) => {
    setItems(items => {
      let newItems = [...items];
      newItems.splice(index, 1, item);
      return newItems;
    })
  }
  const deleteItem = (index: number) => {
    setItems((items) => {
      let newItems = [...items];
      newItems.splice(index, 1);
      return newItems;
    });
  }

  // EXERCISE (3) -- Render ListItem components from an array
  // Use the map function to map array elements to components
  const schoolItems = [
    'Read textbook chapters 1-2',
    'Do homework on pages 20-22',
    'Work on programming project',
    'Go to office hours'
  ]

  return (
    <div className='list-container'>
      <h1>To Do</h1>
      <form
        className='list-container__form'
        onSubmit={onSubmit}
      >
        <input
          className='list-container__input'
          type="text"
          name="itemName"
          id="itemName"
        />
        <button type="submit">Add</button>
      </form>
      <div className="list-container__list">
        <ListItem
          item={schoolItems[0]}
          setItem={item => setItem(0, item)}
          deleteItem={() => deleteItem(0)}
        />
        <ListItem
          item={schoolItems[1]}
          setItem={item => setItem(1, item)}
          deleteItem={() => deleteItem(1)}
        />
        <ListItem
          item={schoolItems[2]}
          setItem={item => setItem(2, item)}
          deleteItem={() => deleteItem(2)}
        />
        <ListItem
          item={schoolItems[3]}
          setItem={item => setItem(3, item)}
          deleteItem={() => deleteItem(3)}
        />
      </div>
    </div>
  );
}