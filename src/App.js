import { createElement, useState } from "react";
import "./tailwind.css";
import Button from "./components/Button";
import Tab from "./components/Tab";

function App() {
  const todos = ["todo1", "todo2", "todo3"];
  const [activeTab, setActiveTab] = useState(1);
  /* const h1 = createElement("h1", null, "Hello World");
  const ul = createElement(
    "ul",
    null,
    todos.map((todo) => createElement("li", null, todo))
  );

  return createElement(
    "main",
    {
      className: "test",
      id: "main",
    },
    h1,
    ul
  ); */

  /* const searchFunction = () => {
    alert("Arama Yapıldı");
  }; */

  return (
    <>
      <div style={{ padding: 20 }}>
        <button onClick={() => setActiveTab(2)}>Aktif Tabı Değiştir</button>
        <Tab activeTab={activeTab} setActiveTab={setActiveTab}>
          <Tab.Panel title="Profil">Tab 1 İçeriği</Tab.Panel>
          <Tab.Panel title="Hakkında">Tab 2 İçeriği</Tab.Panel>
          <Tab.Panel title="Ayarlar">Tab 3 İçeriği</Tab.Panel>
        </Tab>
      </div>

      <div style={{ padding: 20 }}>
        <Button text="Buton Örneği" />
        <Button text="Buton Örneği" variant="success" />
        <Button text="Buton Örneği" variant="danger" />
        <Button text="Buton Örneği" variant="warning" />
      </div>
      <h1 tabIndex={3} style={{ color: "red", backgroundColor: "yellow" }}>
        Kevso
      </h1>
      <label htmlFor="search" tabIndex={2} onClick={() => alert("Hello")}>
        Arama
      </label>
      <input type="text" id="search" tabIndex={1} />
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
