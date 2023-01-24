import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const DEGREES_GAP = 8;
const START_OFFSET = -45;
const TOTAL_DEG = 270;

const PADDING_VERTICAL = 6;
const ACTIVE_STROKE = 8;
const DISABLED_STROKE = 4;

function getRangeConsts(
  WIDTH: number,
  HEIGHT: number,
  RADIUS: number,
  CENTER: {x: number; y: number},
) {
  return {
    WIDTH,
    HEIGHT,
    DEGREES_GAP,
    START_OFFSET,
    TOTAL_DEG,
    PADDING_VERTICAL,
    ACTIVE_STROKE,
    DISABLED_STROKE,
    RADIUS,
    CENTER,
  };
}

export function getBigRangeConsts() {
  const WIDTH = width;
  const HEIGHT = 180;
  const RADIUS = (HEIGHT - ACTIVE_STROKE - PADDING_VERTICAL * 2) / 2;
  const CENTER = {x: WIDTH / 2, y: HEIGHT / 2};

  return getRangeConsts(WIDTH, HEIGHT, RADIUS, CENTER);
}

export function getSmallRangeConsts() {
  const WIDTH = 152;
  const HEIGHT = 152;
  const RADIUS = (HEIGHT - ACTIVE_STROKE - PADDING_VERTICAL * 2) / 2;
  const CENTER = {x: WIDTH / 2, y: HEIGHT / 2};

  return getRangeConsts(WIDTH, HEIGHT, RADIUS, CENTER);
}

export default {START_OFFSET};
