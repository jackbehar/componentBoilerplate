import accent from './accent';
import layout from './layout';
import semantic from './semantic';
import text from './text';

const light = {
  ...accent.light,
  ...layout.light,
  ...text.light,
  ...semantic.light,
};

export default light;
