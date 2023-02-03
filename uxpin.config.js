module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/components/atoms/LocalText/LocalText.tsx',
          'src/components/atoms/LocalSwitch/LocalSwitch.tsx',
          'src/components/atoms/CheckBox/CheckBox.tsx',
          'src/components/atoms/Dash/Dash.tsx',
          'src/components/atoms/Spacer/Spacer.tsx',
          'src/components/atoms/Layout/BaseLayout.tsx',
          'src/components/atoms/LocalTextInput/LocalTextInput.tsx',
          'src/components/atoms/SVG/AnimatedArc.tsx',
        ],
      },
    ],
    wrapper: 'src/components/UXPinWrapper/UXPinWrapper.jsx',
    webpackConfig: 'uxpin.webpack.config.js',
  },
  name: 'Example Design System'
};
