import React from 'react';
import Animated from 'react-native-reanimated';
import {Path, PathProps} from 'react-native-svg';

const APath = Animated.createAnimatedComponent(Path);

function AnimatedPath(props: Animated.AnimateProps<PathProps>) {
  return <APath fill='none' {...props} />;
}

export default AnimatedPath;
