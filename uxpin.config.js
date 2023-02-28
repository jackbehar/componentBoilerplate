module.exports = {
  components: {
    categories: [
      {
        name: 'Wrapped Integration',
        include: [
          'src/components/atoms/CheckBox/uxpin-merge/CheckBoxWrapped.tsx',
        ],
      },
      {
        name: 'Clean Integration',
        include: [
          'src/components/atoms/Buttons/LocalButton/LocalButton.tsx',
          'src/components/atoms/LocalText/LocalText.tsx',
          'src/components/atoms/LocalSwitch/LocalSwitch.tsx',
          'src/components/atoms/Dash/Dash.tsx',
          'src/components/atoms/Spacer/Spacer.tsx',
          'src/components/atoms/Layout/BaseLayout.tsx',
          'src/components/atoms/LocalTextInput/LocalTextInput.tsx',
          'src/components/molecules/CardProfileS/index.tsx',
          'src/components/molecules/Parameter/RangeInfo/RangeInfo.tsx',
          'src/components/molecules/ViewItemSubtitle/ViewItemSubtitle.tsx',
          'src/components/molecules/ViewItemHeader/ViewItemHeader.tsx',
        ],
      },
      {
        name: 'Widgets',
        include: [
          'src/components/organisms/Range/TemperatureRange/TemperatureRange.tsx',
          'src/components/organisms/Range/TemperatureWidgetRange/TemperatureWidgetRange.tsx',
        ],
      }
    ],
    wrapper: 'src/components/UXPinWrapper/UXPinWrapper.jsx',
    webpackConfig: 'uxpin.webpack.config.js',
  },
  name: 'Dometic Merge Boilerplate'
};
