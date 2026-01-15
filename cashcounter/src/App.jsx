import { useState } from "react";
import "./App.css";

function App() {
  const [notes, setNotes] = useState({
    500: "",
    200: "",
    100: "",
    50: "",
    20: "",
    10: "",
    5: "",
    2: "",
    1: "",
  });

  const handleChange = (denomination, value) => {
    setNotes({
      ...notes,
      [denomination]: value,
    });
  };

  const totalBalance = Object.keys(notes).reduce(
    (sum, note) => sum + Number(note) * (Number(notes[note]) || 0),
    0
  );

  return (
    <>
      <h1 className="title">
        Cash Counter <span className="sym">₹</span>
      </h1>

      <div className="layout">
        {/* LEFT: TOTAL */}
        <div className="balance">₹ {totalBalance}</div>

        {/* CENTER: NOTES */}
        <div className="amt">
          {Object.keys(notes).map((note) => (
            <div key={note}>
              <h2>{note} *</h2>
              <input
                type="number"
                placeholder="No. of notes"
                value={notes[note]}
                onChange={(e) => handleChange(note, e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
