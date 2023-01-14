import React from 'react';
import ListItem from './ListItem';

export default function ListContainer() {

  const goSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
  }

  return (
    <div className='list-container'>
      <h1>To Do List</h1>
      <form onSubmit={goSubmit}>
        <input className='list-container__input' type="text" name="itemName" id="itemName" />
        <button type="submit">Add</button>
      </form>
      <div className="list-container__list">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    </div>
  );
}