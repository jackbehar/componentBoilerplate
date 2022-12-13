import {TextStyle} from 'react-native';
import {fontWeights} from '../../assets/colors/tokens/globalParsed';
import Typography from '../../assets/colors/tokens/textSize';
import globalFonts from '../../assets/fonts/fonts';

type TypographyType = typeof Typography[keyof typeof Typography];
type FontWeightType = typeof fontWeights[keyof typeof fontWeights];

function getGibsonFont(fontWeight: FontWeightType) {
  if (fontWeight === 'Thin') return globalFonts.light;
  if (fontWeight === 'Light') return globalFonts.light;
  if (fontWeight === 'SemiBold') return globalFonts.semiBold;
  if (fontWeight === 'Medium') return globalFonts.semiBold;
  if (fontWeight === 'Regular') return globalFonts.regular;
  if (fontWeight === 'Bold') return globalFonts.bold;
  if (fontWeight === 'Book') return globalFonts.bold;
  return globalFonts.bold;
}

export function getFontFamily(item: TypographyType): TextStyle {
  let newFontFamily: TextStyle = {...item};
  if (item.fontFamily === 'Gibson')
    newFontFamily = {
      ...newFontFamily,
      fontFamily: getGibsonFont(item.fontWeight),
    };
  newFontFamily = {
    ...newFontFamily,
    fontFamily: getGibsonFont(item.fontWeight),
  };
  newFontFamily.fontWeight = '400';
  return newFontFamily;
}
