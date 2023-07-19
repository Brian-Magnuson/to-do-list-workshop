import React from 'react';

type ListItemProps = {
  item: Item,
  updateItem: (item: Item) => void
  deleteItem: () => void
}

export default function ListItem(props: ListItemProps) {

  const [isEditing, setIsEditing] = React.useState(false);
  const [inputString, setInputString] = React.useState('');
  // EXERCISE (4) -- Create an 'isCrossedOut' state
  // Write an event handler to toggle state

  const handleItemChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputString(event.target.value);
  }

  const handleEdit = () => {
    setInputString(props.item.content);
    setIsEditing(true);
  }

  const handleSave = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (inputString !== '') {
      props.updateItem({ ...props.item, content: inputString });
    }
    setIsEditing(false);
  }

  const handleDelete = () => {
    props.deleteItem();
  }

  // EXERCISE (5) -- Set up conditional rendering to render the input box
  // If isEditing is true, render the edit form; else render the normal box
  const inputBox = () => <form className='list-item__form' onSubmit={handleSave}>
    <input
      type="text"
      name="itemName"
      id="itemName"
      className="list-item__input"
      value={inputString}
      onChange={handleItemChange}
      autoFocus
      onFocus={(e) => e.target.select()}
      onBlur={handleSave}
    />
    <button
      className="material-symbols-outlined list-item__button done"
      onClick={handleSave}
    >
      done
    </button>
  </form>

  const itemDisplay = () => <>
    <div
      className={false
        ? 'list-item__text list-item__text--done'
        : 'list-item__text'}
    >
      {props.item.content}
    </div>
    <button
      className="material-symbols-outlined list-item__button edit"
      onClick={handleEdit}
    >
      edit
    </button>
    <button
      className="material-symbols-outlined list-item__button delete"
      onClick={handleDelete}
    >
      delete
    </button>
  </>

  return (
    <div className='list-item'>
      {itemDisplay()}
    </div>
  );
}