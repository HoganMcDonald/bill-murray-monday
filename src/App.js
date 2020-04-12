import React from "react";
import Toggle from "react-toggle";
import "./App.css";
import "react-toggle/style.css";

function App() {
  const [on, setOn] = React.useState(false);
  const [tabId, setTabId] = React.useState(null);

  React.useEffect(() => {
    window.chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      setTabId(tabs[0].id);
    });
  }, []);

  const notifyPage = (value) => {
    window.chrome.tabs.sendMessage(tabId, value ? "on" : "off");
  };

  const handleToggle = React.useCallback(() => {
    notifyPage(!on);
    setOn(!on);
  }, [on, tabId]);

  return (
    <div className="App">
      <Toggle checked={on} onChange={handleToggle} />
    </div>
  );
}

export default App;
