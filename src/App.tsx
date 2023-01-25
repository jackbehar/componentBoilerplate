import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { useForm } from "react-hook-form";
import "./App.css";
import { IconDometic } from "./constants/imageConstants";
import { rules } from "./core/validation/localValidation";
import colors from "./assets/colors/tokens/colors";
import translations from "./localization/config/translationHelper";
import LocalSwitch from "./components/atoms/LocalSwitch/LocalSwitch";
import LocalText from "./components/atoms/LocalText/LocalText";
import LocalButton from "./components/atoms/Buttons/LocalButton/LocalButton";
import Spacer from "./components/atoms/Spacer/Spacer";
import LocalTextInput from "./components/atoms/LocalTextInput/LocalTextInput";
import ControlledTextInput from "./components/atoms/LocalTextInput/ControlledTextInput";
import i18n from "./localization/config/i18n";
import { useAppSelector } from "./hook/useAppSelector";
import { useAppDispatch } from "./hook/useAppDispatch";
import { setTheme } from "./store/theme/themeRedux";
import TemperatureRange from "./components/organisms/Range/TemperatureRange/TemperatureRange";
import { FanModeTypeShape } from "./types/capabilities/FanMode";
import DownloadIcon from "./assets/icons/SVG/DownloadIcon";
import DometicIcon from "./assets/icons/SVG/DometicIcon";
import AirPurificationIcon from "./assets/icons/SVG/AirPurificationIcon";
import BluetoothIcon from "./assets/icons/SVG/BluetoothIcon";
import { CheckBox } from "./components/atoms/CheckBox/checkBox";
import ViewItemHeader from "./components/molecules/ViewitemHeader/ViewItemHeader";
import ViewItemSubtitle from "./components/molecules/ViewItemSubtitle/ViewItemSubtitle";
import ColdBigIcon from "./assets/icons/SVG/ColdBigIcon";
interface FormState {
  email: string;
  password: string;
}

const initialFormState: Readonly<FormState> = {
  email: "",
  password: "",
};

const tempValuesArray = [
  15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
];

function App() {
  const [switchState, setSwitchState] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [activeTemp, setActiveTemp] = useState(true);
  const [currentTemp, setCurrentTemp] = useState(15);
  const [targetTemp, setTargetTemp] = useState(24);
  const [checkBoxValue, setCheckBoxValue] = useState(false);
  const [fanMode, setFanMode] = useState<FanModeTypeShape>(0);

  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.theme);

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

  const handleThemeChange = (event) => {
    console.log(event.target.value);
    dispatch(setTheme(event.target.value));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={IconDometic} className="App-logo" alt="logo" />
        <Spacer size={20} />
        <select defaultValue={theme} onChange={handleThemeChange}>
          <option value="dark">dark</option>

          <option value="light">light</option>

          <option value="legacy">legacy</option>
        </select>
      </header>
      <div className="container">
        <div
          className="content"
          style={{ backgroundColor: colors[theme].LAYOUT_BACKGROUND }}
        >
          <LocalText color="ACCENT_PRIMARY_REGULAR" size="DisplayS">
            Local Switch
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
            Check Box
          </LocalText>
          <Spacer size={10} />
          <div className="component">
            <CheckBox
              onPress={() => setCheckBoxValue(!checkBoxValue)}
              value={checkBoxValue}
              elementId="checkBox"
            />
          </div>
          <Spacer size={30} />
          <LocalText color="ACCENT_PRIMARY_REGULAR" size="DisplayS">
            Local Text
          </LocalText>
          <Spacer size={10} />
          <div className="component">
            <LocalText color="ACCENT_PRIMARY_REGULAR" size="BodyM">
              {"TEST TEXT"}
            </LocalText>
          </div>
          <Spacer size={30} />
          <LocalText color="ACCENT_PRIMARY_REGULAR" size="DisplayS">
            Local Text Input
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
              containerStyle={{ alignItems: "flex-start" }}
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
              containerStyle={{ alignItems: "flex-start" }}
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
            Local Button
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
          <Spacer size={30} />
          <LocalText color="ACCENT_PRIMARY_REGULAR" size="DisplayS">
            SVG Icons
          </LocalText>
          <Spacer size={10} />
          <div className="component">
            <DownloadIcon
              fillColor="ACCENT_PRIMARY_REGULAR"
              width={40}
              height={40}
            />
            <DometicIcon
              fillColor="ACCENT_PRIMARY_REGULAR"
              width={40}
              height={40}
            />
            <AirPurificationIcon
              fillColor="ACCENT_PRIMARY_REGULAR"
              width={40}
              height={40}
            />
            <BluetoothIcon
              fillColor="ACCENT_PRIMARY_REGULAR"
              width={40}
              height={40}
            />
          </div>
          <Spacer size={30} />
          <LocalText color="ACCENT_PRIMARY_REGULAR" size="DisplayS">
            Temperature Range
          </LocalText>
          <Spacer size={10} />
          <div className="component-column" style={{alignItems: "center"}}>
            <div className="component">
              <LocalText color="ACCENT_PRIMARY_REGULAR" size="BodyS">
                Inside Temperature:
              </LocalText>
              <select
                defaultValue={currentTemp}
                onChange={(e) => setCurrentTemp(parseInt(e.target.value))}
              >
                {tempValuesArray.map((value) => {
                  return <option value={value}>{value}</option>;
                })}
              </select>
            </div>
            <Spacer size={5} />
            <div className="component">
              <LocalText color="ACCENT_PRIMARY_REGULAR" size="BodyS">
                Selected Temperature:
              </LocalText>
              <select
                defaultValue={targetTemp}
                onChange={(e) => setTargetTemp(parseInt(e.target.value))}
              >
                {tempValuesArray.map((value) => {
                  return <option value={value}>{value}</option>;
                })}
              </select>
            </div>
            <Spacer size={5} />
            <div className="component">
              <LocalText color="ACCENT_PRIMARY_REGULAR" size="BodyS">
                Active
              </LocalText>
              <LocalSwitch
                value={activeTemp}
                onPress={() => setActiveTemp(!activeTemp)}
              />
            </div>
            <Spacer size={10} />
            <TemperatureRange
              maxTemperature={tempValuesArray[tempValuesArray.length - 1]}
              minTemperature={tempValuesArray[0]}
              active={activeTemp}
              fanMode={fanMode}
              currentTemperature={currentTemp}
              targetTemperature={targetTemp}
              onPress={() => {
                console.log("TEMP WIDGET PRESSED");
              }}
            />
          </div>
          <Spacer size={30} />
          <LocalText color="ACCENT_PRIMARY_REGULAR" size="DisplayS">
            View Item Header
          </LocalText>
          <Spacer size={10} />
          <div className="component-column">
            <ViewItemHeader title={"Example Item"} />
          </div>
          <Spacer size={30} />
          <LocalText color="ACCENT_PRIMARY_REGULAR" size="DisplayS">
            View Item Subtitle
          </LocalText>
          <Spacer size={10} />
          <div className="component-column">
            <ViewItemSubtitle
              displayValue={i18n.t(translations.landing.common.manage)}
              name={"Item Name"}
              subtitle={"Subtitle"}
              onPress={() => console.log(`viewItemSubtitle PRESSED!!`)}
              Icon={ColdBigIcon}
            />
          </div>
          <Spacer size={30} />
        </div>
      </div>
    </div>
  );
}

export default App;
