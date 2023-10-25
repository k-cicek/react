import { forwardRef, useRef } from "react";
/* import Button from "./components/Button";
import Tab from "./components/Tab"; */
/* import Test from "./components/Test"; */

function Input(props, ref) {
  return <input ref={ref} type="text" {...props} />;
}

Input = forwardRef(Input);

function App() {
  /* const todos = ["todo1", "todo2", "todo3"];
  const [activeTab, setActiveTab] = useState(1); */
  /* const [show, setShow] = useState(false); */

  const inputRef = useRef();
  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      {/* <div style={{ padding: 20 }}>
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
      </ul> */}

      {/* <button onClick={() => setShow((show) => !show)}>
        {show ? "Gizle" : "Göster"}
      </button>
      {show && <Test />} */}

      <h1>useRef() - forwardRef()</h1>
      <Input ref={inputRef} />
      <button onClick={focusInput}>Focusla</button>
    </>
  );
}

export default App;
