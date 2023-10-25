import { useEffect, useState } from "react";

function Tab({ children, activeTab, setActiveTab }) {
  return (
    <div>
      <nav>
        {children.map((tab, index) => (
          <button
            onClick={() => setActiveTab(index)}
            key={index}
            className={activeTab === index ? "bg-green-100" : "bg-gray-100"}
          >
            {tab.props.title}
          </button>
        ))}
      </nav>
      {children[activeTab]}
    </div>
  );
}

Tab.Panel = function TabPanel({ children, title }) {
  console.log(children);
  return <div>{children}</div>;
};

export default Tab;
