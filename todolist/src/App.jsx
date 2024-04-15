import { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([
    {
      task: "giv katten mad",
      completed: false,
      id: 1
    }
  ]);

  function remove(id) {
    setItems(state => state.filter(item => item.id !== id));
  }

  function toggle(id) {
    setItems(state => state.map(item => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    }));
  }

  return (
    <div>
      <Form setItems={setItems} />
      <List remove={remove} toggle={toggle} items={items} />
    </div>
  );
}

function Form({ setItems }) {
  function submit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newItem = {
      task: formData.get('item'),
      completed: false,
      id: Math.random()
    };
    setItems(state => state.concat(newItem));
  }

  return (
    <form onSubmit={submit}>
      <input type="text" name="item" />
      <button type="submit">gem</button>
    </form>
  );
}

function List({ remove, toggle, items }) {
  return (
    <ul>
      {items.map(item => (
        <ListItem
          key={item.id}
          item={item}
          remove={remove}
          toggle={toggle}
        />
      ))}
    </ul>
  );
}

function ListItem({ item, remove, toggle }) {
  return (
    <li>
      {item.task}
      <button onClick={() => remove(item.id)}>slet</button>
    </li>
  );
}

export default App;