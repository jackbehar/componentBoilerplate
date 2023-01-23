import * as React from 'react';
import Svg, {SvgProps, Path, G} from 'react-native-svg';
import colors, {ProjectColorsType} from '../../colors/tokens/colors';
import {useAppSelector} from '../../../hook/useAppSelector';

interface Props extends SvgProps {
  fillColor: ProjectColorsType;
}

function NotificationIcon({fillColor, ...rest}: Props) {
  const theme = useAppSelector(state => state.theme.theme);

  return (
    <Svg viewBox="0 0 52 52" width={52} height={52} {...rest}>
      <Path fill="none" d="M0 0h52v52H0z" />
      <G fill={colors[theme][fillColor]}>
        <Path d="M31.886 45.954a1.216 1.216 0 0 0-.638-.104c-.837.033-9.856.03-10.539.016a1.213 1.213 0 0 0-1.254 1.546c.815 2.827 3.505 4.801 6.542 4.801 3.05 0 5.743-1.984 6.549-4.826a1.213 1.213 0 0 0-.66-1.433ZM47.184 37.874a1.51 1.51 0 0 0-.212-.273l-4.483-4.56v-10.99c0-7.878-4.64-14.59-11.434-16.78-.012-1.7-.62-2.826-1.195-3.51C28.937.658 27.576.037 26.026.01h-.052c-1.55.027-2.911.648-3.834 1.75-.574.684-1.183 1.81-1.195 3.51C14.15 7.461 9.51 14.172 9.51 22.051v10.99l-4.482 4.56a1.513 1.513 0 0 0-.213.273c-.081.134-.777 1.342-.36 2.767.205.697.752 1.676 2.197 2.383.205.1.43.152.659.152h37.376c.228 0 .454-.052.66-.152 1.444-.707 1.99-1.686 2.195-2.383.418-1.425-.278-2.633-.359-2.767Zm-2.522 1.931c-.037.113-.166.244-.361.371H7.699c-.195-.127-.325-.258-.361-.37a.53.53 0 0 1 .013-.288l4.73-4.81a1.5 1.5 0 0 0 .43-1.052V22.05c0-6.948 4.26-12.788 10.362-14.202a1.5 1.5 0 0 0 1.142-1.698c-.172-1.075-.025-1.926.425-2.463.47-.56 1.168-.665 1.56-.676.392.01 1.09.115 1.56.676.45.537.597 1.388.425 2.463a1.5 1.5 0 0 0 1.142 1.698C35.228 9.262 39.49 15.102 39.49 22.05v11.606c0 .393.155.771.43 1.051l4.726 4.808c.026.085.047.2.017.29Z" />
      </G>
    </Svg>
  );
}

export default NotificationIcon;
