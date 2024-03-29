import TemperatureRange from "../TemperatureRange";
const tempValuesArray = [
  15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
];
export default (
  <TemperatureRange
    uxpId="temp-range-1"
    maxTemperature={tempValuesArray[tempValuesArray.length - 1]}
    minTemperature={tempValuesArray[0]}
    active={true}
    fanMode={0}
    currentTemperature={23}
    ddmCurrentTemperature={"ddmCurrent"}
    targetTemperature={24}
    ddmTargetTemperature={"ddmTarget"}
    onPress={() => {
      console.log("TEMP WIDGET PRESSED");
    }}
    temperatureUnit={"0"}
  />
);
