module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@': './src',
            '@/components': './src/components',
            '@/hooks': './src/hooks',
            '@/services': './src/services',
            '@/store': './src/store',
            '@/lib': './src/lib',
            '@/types': './src/types',
            '@/constants': './src/constants',
            '@/features': './src/features',
          },
        },
      ],
    ],
  };
};
