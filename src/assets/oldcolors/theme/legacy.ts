import accent from './accent';
import layout from './layout';
import semantic from './semantic';
import text from './text';

const legacy = {
  ...accent.legacy,
  ...layout.legacy,
  ...text.legacy,
  ...semantic.legacy,
};

export default legacy;
