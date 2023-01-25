import {Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

const WIDGET_MARGINS = 21;
const WIDGET_WIDTH = width / 2 - WIDGET_MARGINS * 1.5;
const WIDGET_HEIGHT = WIDGET_WIDTH;

export default {WIDGET_WIDTH, WIDGET_MARGINS, WIDGET_HEIGHT};
