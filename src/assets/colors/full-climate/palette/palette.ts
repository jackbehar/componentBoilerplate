import {blue} from './blue';
import {glow} from './glow';
import {gray} from './gray';
import {green} from './green';
import {lagune} from './lagune';
import {orchid} from './orchid';
import {red} from './red';
import {sprout} from './sprout';
import {yellow} from './yellow';

const palette = {
  white: '#fff',
  ...blue,
  ...glow,
  ...gray,
  ...green,
  ...lagune,
  ...orchid,
  ...red,
  ...sprout,
  ...yellow,
} as const;

export {palette};
