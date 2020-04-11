import React from "react";
import Toggle from "react-toggle";
import "./App.css";
import "react-toggle/style.css";

function App() {
  const [on, setOn] = React.useState(false);

  const handleToggle = React.useCallback(() => {
    window.chrome.storage.local.set({ bill_murray_monday: !on });
    setOn(!on);
  }, [on]);

  React.useEffect(() => {
    window.chrome.storage.local.get("bill_murray_monday", (res) => {
      setOn(!!res.bill_murray_monday);
    });
  }, []);

  return (
    <div className="App">
      <p className="title">Bill Murray Monday</p>
      <Toggle checked={on} onChange={handleToggle} />
    </div>
  );
}

export default App;
