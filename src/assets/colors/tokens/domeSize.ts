import {sizing} from './globalParsed';

const sizes = {
  sizing
} as const;

export default sizes;


export type DomeSize = keyof typeof sizing;
