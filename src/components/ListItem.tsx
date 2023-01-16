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

  return (
    <div className='list-container__item' onClick={goToggleIsDone}>
      <p className={isDone ? 'list-container__text--done' : ''}>{props.item}</p>
      <span className="list-container__buttons">
        <span className="material-symbols-outlined edit">
          edit
        </span>
        <span className="material-symbols-outlined delete">
          delete
        </span>
      </span>
    </div>
  );
}