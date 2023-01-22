import React from 'react';
import ListItem from './ListItem';

// EXERCISE (2) -- Add a required 'title' prop to ListContainer
// Reference it in the return statement below
export default function ListContainer() {

  // EXERCISE (6) -- Add state for the form values
  // Changes to the form should update state, state changes the value of the form
  const [inputString, setInputString] = React.useState('');
  const [items, setItems] = React.useState<string[]>([]);

  const goSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (inputString != '') {
      setItems((prev) => [...prev, inputString]);
      setInputString('');
    }
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
        />
        <button type="submit">Add</button>
      </form>
      <div className="list-container__list">
        <ListItem index={0} item={schoolItems[0]} setItems={setItems} />
        <ListItem index={1} item={schoolItems[1]} setItems={setItems} />
        <ListItem index={2} item={schoolItems[2]} setItems={setItems} />
        <ListItem index={3} item={schoolItems[3]} setItems={setItems} />
      </div>
    </div>
  );
}