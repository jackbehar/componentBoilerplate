import React, { useState, useEffect } from "react";
import "./App.css";
import { IconDometic } from "./constants/imageConstants";
import LocalSwitch from "./components/atoms/LocalSwitch/LocalSwitch";
import { StyleSheet } from "react-native";
import LocalText from "./components/atoms/LocalText/LocalText";
import LocalButton from "./components/atoms/Buttons/LocalButton/LocalButton";
import Spacer from "./components/atoms/Spacer/Spacer";

function App() {
  const [switchState, setSwitchState] = useState(false);

  useEffect(() => {
    console.log("THIS IS THE SWITCH STATE: ", switchState);
  }, [switchState]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={IconDometic} className="App-logo" alt="logo" />
      </header>
      <div className="container">
        <div className="content">
          <h3>Switch</h3>
          <div className="component">
            <LocalSwitch
              value={switchState}
              onPress={() => setSwitchState(!switchState)}
            />
            <div className="textLine">
              <h4>status:</h4>
              <p>{` ${switchState}`}</p>
            </div>
          </div>
          <h3>Text</h3>
          <div className="component">
            <LocalText color="ACCENT_PRIMARY_REGULAR" size="SubheadingL">
              {"TEST TEXT"}
            </LocalText>
          </div>
          <h3>Button</h3>
          <div className="component">
            <LocalButton
              text="TEST ME"
              onPress={() => console.log("BUTTON PRESSED!!")}
            />
          </div>
          <h3>Spacer</h3>
          <div className="component">
            <p>SPACE---</p>
            <Spacer size={50} />
            <p>---SPACE</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "lightblue",
    padding: 10,
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
});

export default App;
