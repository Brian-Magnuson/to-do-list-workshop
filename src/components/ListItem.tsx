import React from 'react';

export default function ListItem() {

  const [isDone, setIsDone] = React.useState(false);

  const goToggleIsDone = () => {
    setIsDone(isDone => !isDone);
  }

  return (
    <div className='list-container__item' onClick={goToggleIsDone}>
      <p className={isDone ? 'list-container__text--done' : ''}>Thing</p>
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