import {ItemValue} from '@react-native-picker/picker/typings/Picker';
import {store} from '../../store/config/store-config';

export enum TemperatureUnit {
  CELSIUS,
  FAHRENHEIT,
}

export const TEMPERATURE_UNITS = {
  [TemperatureUnit.CELSIUS]: '°C',
  [TemperatureUnit.FAHRENHEIT]: '°F',
};

function convertCelsiusToFahrenheit(celsius: number) {
  return Math.round((celsius * 9) / 5 + 32);
}

function convertFahrenheitToCelsius(fahrenheit: number) {
  return Math.round(((fahrenheit - 32) * 5) / 9);
}

export function convertFahrenheitToCelsiusBasedOnStore(
  possibleFahrenheit: number | undefined,
) {
  if (possibleFahrenheit === undefined) return undefined;
  if (store.getState().setting.unit === TemperatureUnit.FAHRENHEIT)
    return convertFahrenheitToCelsius(possibleFahrenheit);
  return possibleFahrenheit;
}

export function convertCelsiusToFahrenheitBasedOnStore(
  possibleCelsius: number | undefined,
) {
  if (possibleCelsius === undefined) return undefined;
  if (store.getState().setting.unit === TemperatureUnit.FAHRENHEIT)
    return convertCelsiusToFahrenheit(possibleCelsius);
  return possibleCelsius;
}

export function convertFromMillidegreesToDegrees(
  degrees: ItemValue | undefined,
): number | undefined {
  if (typeof degrees !== 'number') return undefined;
  return Math.round(degrees / 1000);
}

export function convertFromDegreesToMillidegrees(degrees: ItemValue): number {
  if (typeof degrees === 'string' && isNaN(parseInt(degrees, 10))) return 0;
  return Math.round(Number(degrees) * 1000);
}
