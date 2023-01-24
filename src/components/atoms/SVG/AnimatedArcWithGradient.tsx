import React from 'react';
import {Defs, G, LinearGradient, Stop, StopProps} from 'react-native-svg';
import AnimatedArc, {AnimatedArcProps} from './AnimatedArc';

interface Props extends Omit<AnimatedArcProps, 'strokeColor'> {
  id: string;
  linearGradientColors: Array<StopProps>;
}

function AnimatedArcWithGradient({linearGradientColors, id, ...rest}: Props) {
  return (
    <G>
      <AnimatedArc {...rest} strokeColor={`url(#${id})`} />
      {linearGradientColors.length ? (
        <Defs>
          <LinearGradient id={id}>
            {linearGradientColors.map((item, index) => (
              <Stop {...item} key={index.toString()} />
            ))}
          </LinearGradient>
        </Defs>
      ) : null}
    </G>
  );
}

export default AnimatedArcWithGradient;
