import React from "react";
import "./App.css";
import { DatePicker } from "./components/DatePicker";

function App() {
  const selectedDay = (val) => {
    console.log(val);
  };

  const startDate = new Date(2010, 0, 1);

  return (
    <div className="App">
      <DatePicker
        startDate={startDate}
        days={366 * 25}
        selectDate={new Date()}
        getSelectedDay={selectedDay}
        labelFormat={"MMMM yyyy"}
        color={"#374e8c"}
      />
    </div>
  );
}

export default App;
