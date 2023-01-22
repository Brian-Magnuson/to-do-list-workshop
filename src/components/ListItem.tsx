import React from 'react';

interface ListItemProps {
  index: number,
  item: string,
  setItems: React.Dispatch<React.SetStateAction<string[]>>
}
export default function ListItem(props: ListItemProps) {

  const [isEditing, setIsEditing] = React.useState(false);
  const [lastStored, setLastStored] = React.useState(props.item);

  // EXERCISE (4) -- Create an 'isCrossedOut' state
  // Write an event handler to toggle state

  const goToggleEdit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setLastStored(props.item);
    if (props.item == '') {
      props.setItems((prev) => {
        let newItems = [...prev];
        newItems[props.index] = lastStored;
        return newItems;
      });
    }
    setIsEditing((prev) => !prev);
  }

  const goChangeItem = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setItems((prev) => {
      let newItems = [...prev];
      newItems[props.index] = event.target.value;
      return newItems;
    });
  }

  const goDelete = () => {
    props.setItems((prev) => {
      let newItems = [...prev];
      newItems.splice(props.index, 1);
      return newItems;
    });
  }

  // EXERCISE (5) -- Set up conditional rendering to render the input box
  // If isEditing is true, render the edit form; else render the normal box

  const inputBox = <form className='list-item__form' onSubmit={goToggleEdit}>
    <input
      type="text"
      name="itemName"
      id="itemName"
      className="list-item__input"
      value={props.item}
      onChange={goChangeItem}
      autoFocus
      onFocus={(e) => e.target.select()}
      onBlur={goToggleEdit}
    />
    <button
      className="material-symbols-outlined list-item__button done"
      type='submit'
    >
      done
    </button>
  </form>

  return (
    <div className='list-item'>
      <div
        className={false
          ? 'list-item__text list-item__text--done'
          : 'list-item__text'}
      >
        {props.item}
      </div>
      <div
        className="material-symbols-outlined list-item__button edit"
        onClick={goToggleEdit}
      >
        edit
      </div>
      <div
        className="material-symbols-outlined list-item__button delete"
        onClick={goDelete}
      >
        delete
      </div>
    </div>
  );
}