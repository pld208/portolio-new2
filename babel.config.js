{
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.json'],
        alias: {
          'tests': ['./tests/'],
          '@components': './src/components',
        }
      }
    ]
  ];
}
