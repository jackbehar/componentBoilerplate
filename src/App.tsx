import React, { useState, useEffect } from "react";
import "./App.css";
import { IconDometic } from "./constants/imageConstants";
import LocalSwitch from "./components/atoms/LocalSwitch/LocalSwitch";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function App() {
  const [switchState, setSwitchState] = useState(false);

  useEffect(() => {
    console.log("THIS IS THE SWITCH STATE: ", switchState)
  }, [switchState])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={IconDometic} className="App-logo" alt="logo" />
        <h1>Test</h1>
        <LocalSwitch
          value={switchState}
          onPress={() => setSwitchState(!switchState)}
        />
      </header>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "lightblue",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  }
});

export default App;
