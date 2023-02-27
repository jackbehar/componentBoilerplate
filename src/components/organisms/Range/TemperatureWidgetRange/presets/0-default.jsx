import TemperatureWidgetRange from "../TemperatureWidgetRange";
const tempValuesArray = [
  15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
];
export default (
  <TemperatureWidgetRange
    uxpId="temp-range-widget-1"
    maxTemperature={tempValuesArray[tempValuesArray.length - 1]}
    minTemperature={tempValuesArray[0]}
    active={true}
    fanMode={0}
    currentTemperature={23}
    targetTemperature={24}
    onPress={() => {
      console.log("TEMP WIDGET PRESSED");
    }}
    temperatureUnit={"0"}
  />
);
