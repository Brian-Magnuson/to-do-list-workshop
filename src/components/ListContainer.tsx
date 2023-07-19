import React from 'react';
import { nanoid } from 'nanoid';
import ListItem from './ListItem';

// EXERCISE (2) -- Add a required 'title' prop to ListContainer
// Reference it in the return statement below

export default function ListContainer() {

  // EXERCISE (6) -- Add state for the form values
  // Changes to the form should update state, state changes the value of the form
  const [inputString, setInputString] = React.useState('');
  const [items, setItems] = React.useState<Item[]>([]);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (inputString !== '') {
      const newItem = {
        id: nanoid(),
        content: inputString
      }
      setItems((prev) => [...prev, newItem]);
      setInputString('');
    }
  }

  const updateItem = (item: Item) => {
    setItems(items => {
      const newItems = [...items];
      const targetIndex = newItems.findIndex((element) => element.id === item.id);
      newItems[targetIndex].content = item.content;
      return newItems;
    })
  }
  const deleteItem = (index: number) => {
    setItems((items) => {
      const newItems = [...items];
      newItems.splice(index, 1);
      return newItems;
    });
  }

  // EXERCISE (3) -- Render ListItem components from an array
  // Use the map function to map array elements to components
  const schoolItems = [
    { id: '1', content: 'Read textbook chapters 1-2' },
    { id: '2', content: 'Do homework on pages 20-22' },
    { id: '3', content: 'Work on programming project' },
    { id: '4', content: 'Go to office hours' }
  ]

  return (
    <div className='list-container'>
      <h1>To Do</h1>
      <form
        className='list-container__form'
        onSubmit={handleSubmit}
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
          updateItem={item => updateItem(item)}
          deleteItem={() => deleteItem(0)}
        />
        <ListItem
          item={schoolItems[1]}
          updateItem={item => updateItem(item)}
          deleteItem={() => deleteItem(1)}
        />
        <ListItem
          item={schoolItems[2]}
          updateItem={item => updateItem(item)}
          deleteItem={() => deleteItem(2)}
        />
        <ListItem
          item={schoolItems[3]}
          updateItem={item => updateItem(item)}
          deleteItem={() => deleteItem(3)}
        />
      </div>
    </div>
  );
}