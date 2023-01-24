import RangeConsts from './RangeConsts';

function calculateArcRangeOffset(deg: number) {
  return deg + RangeConsts.START_OFFSET;
}

export default {
  calculateArcRangeOffset,
};
