import React from 'react';
import Svg, {Path, G, SvgProps} from 'react-native-svg';
import colors, {ProjectColorsType} from '../../colors/tokens/colors';
import {useAppSelector} from '../../../hook/useAppSelector';

interface Props extends SvgProps {
  fillColor: ProjectColorsType;
}

function BrightenssSettingDimmerIcon({fillColor, ...rest}: Props) {
  const theme = useAppSelector(state => state.theme.theme);

  return (
    <Svg viewBox="0 0 52 52" {...rest}>
      <Path fill="none" d="M0 0h52v52H0z" />
      <G fill={colors[theme][fillColor]}>
        <Path d="m45.12 40.588-.026-.022-5.879-4.541a.51.51 0 0 0-.823.404v9.09a.512.512 0 0 0 .823.405l5.88-4.54.023-.02a.514.514 0 0 0 .14-.584.508.508 0 0 0-.137-.192ZM13.36 35.97a.51.51 0 0 0-.538.055l-5.88 4.542-.02.016a.505.505 0 0 0-.182.393.51.51 0 0 0 .177.387l.026.02 5.879 4.541a.51.51 0 0 0 .824-.404v-9.09a.512.512 0 0 0-.286-.46ZM13.488 15.545a1.498 1.498 0 1 0 2.121-2.122l-4.365-4.365a1.5 1.5 0 0 0-2.122 2.122l4.366 4.365ZM11.304 25.936a1.5 1.5 0 0 0-1.5-1.5H3.631a1.5 1.5 0 0 0 0 3h6.173a1.5 1.5 0 0 0 1.5-1.5ZM26 11.24a1.5 1.5 0 0 0 1.5-1.5V3.568a1.5 1.5 0 1 0-3 0v6.174a1.5 1.5 0 0 0 1.5 1.5ZM37.452 15.984c.384 0 .768-.146 1.06-.439l4.366-4.365a1.5 1.5 0 1 0-2.122-2.122l-4.365 4.366a1.5 1.5 0 0 0 1.06 2.56ZM48.37 24.436h-6.174a1.5 1.5 0 0 0 0 3h6.173a1.5 1.5 0 1 0 0-3ZM26 13.787c-6.7 0-12.15 5.45-12.15 12.15 0 3.115 1.178 6.078 3.332 8.357a4.177 4.177 0 0 1 1.157 2.435c.006.047.016.119.018.167.003.282 0 7.616 0 7.616 0 .313.099.619.281.874l2.782 3.884a1.5 1.5 0 0 0 1.22.626h6.72a1.5 1.5 0 0 0 1.22-.626l2.782-3.884a1.5 1.5 0 0 0 .28-.874s-.002-7.334 0-7.605c.003-.058.013-.13.022-.198a4.182 4.182 0 0 1 1.17-2.43 12.101 12.101 0 0 0 3.316-8.343c0-6.7-5.45-12.15-12.15-12.15Zm4.642 27.2h-9.284v-1.989h9.284v1.989Zm-2.052 5.91h-5.18l-2.053-2.866v-.044h9.286v.044l-2.053 2.865Zm4.078-14.695c-1.016 1.045-1.659 2.35-1.91 3.796h-9.515c-.246-1.437-.89-2.746-1.896-3.78a9.111 9.111 0 0 1-2.497-6.282c0-5.045 4.105-9.15 9.15-9.15s9.15 4.105 9.15 9.15a9.1 9.1 0 0 1-2.482 6.266Z" />
      </G>
    </Svg>
  );
}

export default BrightenssSettingDimmerIcon;