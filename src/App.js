import { useState } from "react";

function App() {
  const genders = [
    {
      key: "1",
      value: "Erkek",
    },
    {
      key: "2",
      value: "Kadın",
    },
  ];

  const categoryList = [
    {
      key: 1,
      value: "PHP",
    },
    {
      key: 2,
      value: "Javascript",
    },
    {
      key: 3,
      value: "CSS",
    },
    {
      key: 4,
      value: "HTML",
    },
  ];
  const [name, setName] = useState("Kevser");
  const [description, setDescription] = useState("");
  const [gender, setGender] = useState("");
  const [categories, setCategories] = useState([2, 4]);
  const [rule, setRule] = useState(true);
  const [rules, setRules] = useState([
    {
      key: 1,
      value: "1. kuralı kabul ediyorum",
      checked: false,
    },
    {
      key: 2,
      value: "2. kuralı kabul ediyorum",
      checked: false,
    },
    {
      key: 3,
      value: "3. kuralı kabul ediyorum",
      checked: true,
    },
  ]);

  const levels = [
    { key: "beginner", value: "Başlangıç" },
    { key: "Jr_Developer", value: "Jr. Developer" },
    { key: "Sr_Developer", value: "Sr. Developer" },
  ];

  const checkRule = (key, checked) => {
    setRules((rules) =>
      rules.map((rule) => {
        if (key === rule.key) {
          rule.checked = checked;
        }
        return rule;
      })
    );
  };

  const [level, setLevel] = useState("Jr_Developer");
  const selectedGender = genders.find((g) => g.key === gender);
  const selectedLevel = levels.find((g) => g.key === level);
  const selectedCategories =
    categories && categoryList.filter((c) => categories.includes(c.key));

  const enabled = rules.every((r) => r.checked);

  return (
    <>
      <button onClick={() => setName("Ahmet")}>Adı Değiştir</button>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <br />
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="">Seçin</option>
        {genders.map((gender) => (
          <option value={gender.key} key={gender.key}>
            {gender.value}
          </option>
        ))}
      </select>
      <br />

      <button onClick={() => setCategories([2, 3, 4])}>Kategorileri Seç</button>
      <select
        value={categories}
        multiple={true}
        onChange={(e) =>
          setCategories(
            [...e.target.selectedOptions].map((o) => parseInt(o.value))
          )
        }
      >
        <option value="">Seçin</option>
        {categoryList.map((category) => (
          <option value={category.key} key={category.key}>
            {category.value}
          </option>
        ))}
      </select>

      <pre>{JSON.stringify(selectedCategories, null, 2)}</pre>

      <br />

      <label>
        <input
          type="checkbox"
          checked={rule}
          onChange={(e) => setRule(e.target.checked)}
        />
        Kuralları kabul ediyorum
      </label>
      <br />

      {rules.map((rule) => (
        <label key={rule.key}>
          <input
            type="checkbox"
            checked={rule.checked}
            onChange={(e) => checkRule(rule.key, e.target.checked)}
          />
          {rule.value}
        </label>
      ))}
      <br />
      <pre>{JSON.stringify(rules, null, 2)}</pre>
      <br />

      {levels.map((l, index) => (
        <label key={index}>
          <input
            type="radio"
            value={l.key}
            checked={l.key === level}
            onChange={(e) => setLevel(e.target.value)}
          />
          {l.value}
        </label>
      ))}
      <br />
      {JSON.stringify(selectedLevel)}
      <button disabled={!enabled}>Devam et</button>
    </>
  );
}

export default App;
