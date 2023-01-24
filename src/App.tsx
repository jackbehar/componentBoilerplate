import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { useForm } from "react-hook-form";
import "./App.css";
import { IconDometic } from "./constants/imageConstants";
import { rules } from "./core/validation/localValidation";
import translations from "./localization/config/translationHelper";
import LocalSwitch from "./components/atoms/LocalSwitch/LocalSwitch";
import LocalText from "./components/atoms/LocalText/LocalText";
import LocalButton from "./components/atoms/Buttons/LocalButton/LocalButton";
import Spacer from "./components/atoms/Spacer/Spacer";
import LocalTextInput from "./components/atoms/LocalTextInput/LocalTextInput";
import ControlledTextInput from "./components/atoms/LocalTextInput/ControlledTextInput";
import i18n from "./localization/config/i18n";
interface FormState {
  email: string;
  password: string;
}

const initialFormState: Readonly<FormState> = {
  email: "",
  password: "",
};

function App() {
  const [switchState, setSwitchState] = useState(false);
  const [textInput, setTextInput] = useState("");

  const { control, formState, getValues, handleSubmit } = useForm<FormState>({
    defaultValues: initialFormState,
    mode: "onChange",
  });

  useEffect(() => {
    console.log("THIS IS THE SWITCH STATE: ", switchState);
  }, [switchState]);

  const onSubmit = React.useMemo(
    () =>
      handleSubmit((data) => {
        console.log({
          email: data.email.trim().toLowerCase(),
          password: data.password,
        });
      }),
    [handleSubmit]
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={IconDometic} className="App-logo" alt="logo" />
      </header>
      <div className="container">
        <div className="content">
          <LocalText color="ACCENT_PRIMARY_REGULAR" size="DisplayS">
            Switch
          </LocalText>
          <Spacer size={10} />
          <div className="component">
            <LocalSwitch
              value={switchState}
              onPress={() => setSwitchState(!switchState)}
            />
            <div className="textLine">
              <LocalText
                color="ACCENT_PRIMARY_REGULAR"
                size="BodyM"
              >{` ${switchState}`}</LocalText>
            </div>
          </div>
          <Spacer size={30} />
          <LocalText color="ACCENT_PRIMARY_REGULAR" size="DisplayS">
            Text
          </LocalText>
          <Spacer size={10} />
          <div className="component">
            <LocalText color="ACCENT_PRIMARY_REGULAR" size="BodyM">
              {"TEST TEXT"}
            </LocalText>
          </div>
          <Spacer size={30} />
          <LocalText color="ACCENT_PRIMARY_REGULAR" size="DisplayS">
            Text Input
          </LocalText>
          <Spacer size={10} />
          <div>
            <LocalTextInput
              onChangeText={setTextInput}
              onEndEditing={() => console.log(textInput)}
              value={textInput}
              label="Example text input"
              color="ACCENT_PRIMARY_REGULAR"
              containerStyle={{ alignItems: "flex-start" }}
            />
          </div>
          <Spacer size={30} />
          <LocalText color="ACCENT_PRIMARY_REGULAR" size="DisplayS">
            Controlled Text Input
          </LocalText>
          <Spacer size={10} />
          <div>
            <ControlledTextInput
              onEndEditing={() => console.log(getValues("email"))}
              control={control}
              rules={rules.email}
              error={formState.errors.email?.message}
              name="email"
              color="TEXT_REGULAR"
              label={i18n.t(translations.login.login.email)}
              keyboardType="email-address"
              autoComplete="off"
              autoCapitalize="none"
              autoCorrect={false}
              isValid={
                formState.touchedFields.email &&
                !formState.errors.email &&
                !!getValues("email")
              }
            />
            <ControlledTextInput
              onEndEditing={() => console.log(getValues("password"))}
              control={control}
              name="password"
              color="TEXT_REGULAR"
              label={i18n.t(translations.login.login.password)}
              error={formState.errors.password?.message}
              rules={rules.password}
              secureTextEntry
              autoComplete="off"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <Spacer size={30} />
            <LocalButton
              text={i18n.t(translations.login.login.logIn)}
              onPress={onSubmit}
            />
          </div>
          <Spacer size={30} />
          <LocalText color="ACCENT_PRIMARY_REGULAR" size="DisplayS">
            Button
          </LocalText>
          <Spacer size={10} />
          <div className="component">
            <LocalButton
              text="TEST ME"
              onPress={() => console.log("BUTTON PRESSED!!")}
            />
          </div>
          <Spacer size={30} />
          <LocalText color="ACCENT_PRIMARY_REGULAR" size="DisplayS">
            Spacer
          </LocalText>
          <Spacer size={10} />
          <div className="component-column">
            <LocalText color="ACCENT_PRIMARY_REGULAR" size="BodyS">
              --SPACE---
            </LocalText>
            <Spacer size={60} />
            <LocalText color="ACCENT_PRIMARY_REGULAR" size="BodyS">
              ---SPACE---
            </LocalText>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
