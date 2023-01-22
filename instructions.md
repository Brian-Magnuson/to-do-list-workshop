
# Workshop Coding Instructions

## Exercise (1)
In App.tsx,
Create a Navbar component from scratch

Create the file /src/components/Navbar.tsx .

Contents of the file should look like this:

Navbar.tsx
```tsx
import React from 'react';

export default function Navbar() {
    return (
        <nav className='navbar'>
            <h3>To Do</h3>
        </nav>
    );
}
```

Add the component to App.tsx.

App.tsx
```tsx
import React from 'react';
import ListContainer from './components/ListContainer';
import Navbar from './components/Navbar';

export default function App() {
  return (
        <>
            <Navbar />
            <ListContainer />
        </>
  );
}
```

## Exercise (2)
In ListContainer.tsx,
Add a required 'title' prop to ListContainer

Initial signature:

ListContainer.tsx
```tsx
export default function ListContainer()
```

Add interface and props parameter:

ListContainer.tsx
```tsx
interface ListContainerProps {
    title: string
}
export default function ListContainer(props: ListContainerProps)
```

Reference props in return statement:

ListContainer.tsx
```tsx
return (
    <div className='list-container'>
        <h1>{props.title}</h1>
    ...
)
```

Add prop value to component in App.tsx:

App.tsx
```tsx
return (
    <>
        <Navbar />
        <ListContainer 
            title="School Work"
        />
    </>
  );
```

## Exercise (3)
In ListContainer.tsx,
Render ListItem components from an array

Initial return:

ListContainer.tsx
```tsx
<div className="list-container__list">
    <ListItem index={0} item={schoolItems[0]} setItems={setItems} />
    <ListItem index={1} item={schoolItems[1]} setItems={setItems} />
    <ListItem index={2} item={schoolItems[2]} setItems={setItems} />
    <ListItem index={3} item={schoolItems[3]} setItems={setItems} />
</div>
```

Add the following above the return statement:

ListContainer.tsx
```tsx
const listItems = schoolItems.map((elem, index) =>
    <ListItem
        key={index}
        index={index}
        item={elem}
        setItems={setItems}
    />
  );
```

Change the return statement to render `listItems` instead of the raw components:

ListContainer.tsx
```tsx
<div className="list-container__list">
    {listItems}
</div>
```

## Exercise (4)
In ListItem.tsx,
Create an `isCrossedOut` state

Add the following hook underneath the existing hooks

ListItem.tsx
```tsx
const [isCrossedOut, setIsCrossedOut] = React.useState(false);
```

Create an event handler to go with it

ListItem.tsx
```tsx
const goToggleIsCrossedOut = () => {
    setIsCrossedOut((prev) => !prev);
}
```

Reference the state ant the event handler in the return statement

ListItem.tsx
```tsx
return (
    <div className='list-item'>
        <div
            className={isCrossedOut
                ? 'list-item__text list-item__text--done'
                : 'list-item__text'}
            onClick={goToggleIsCrossedOut}
        >
)
```

Go back and change the component array to use state:

ListContainer.tsx
```tsx
const listItems = items.map((elem, index) =>
    <ListItem
        key={index}
        index={index}
        item={elem}
        setItems={setItems}
    />
);
```

## Exercise (5)

## Exercise (6)