import React from 'react';

interface ListItemProps {
  item: string,
  index: number,
  setItems: React.Dispatch<React.SetStateAction<string[]>>
}
export default function ListItem(props: ListItemProps) {

  const [isDone, setIsDone] = React.useState(false);

  const goToggleIsDone = () => {
    setIsDone(isDone => !isDone);
  }

  const goDelete = () => {
    props.setItems((prev) => {
      let newItems = [...prev];
      newItems.splice(props.index, 1);
      return newItems;
    });
  }

  return (
    <div className='list-item' onClick={goToggleIsDone}>
      <div className={isDone
        ? 'list-item__text list-item__text--done'
        : 'list-item__text'
      }>{props.item}
      </div>
      <div className="material-symbols-outlined list-item__button edit">
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