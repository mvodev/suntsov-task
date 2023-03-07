const isProduction = process.env.NODE_ENV === 'production';

const paths = {
  views: {
    src: './src/views/pages/*.html',
    dist: './dist/',
    watch: [
      './src/views/**/*.html',
      './src/components/**/*.html',
    ],
  },
  styles: {
    src: './src/styles/main.{scss,sass}',
    dist: './dist/assets/styles/',
    watch: [
      './src/components/**/*.{scss,sass}',
      './src/styles/**/*.{scss,sass}',
    ],
  },
  scripts: {
    src: './src/js/index.js',
    dist: './dist/assets/js/',
    watch: [
      './src/js/index.js',
      './src/components/**/*.js',
    ],
  },
  images: {
    src: [
      './src/assets/images/**/*.{jpg,jpeg,png,gif,svg,webp}',
    ],
    dist: './dist/assets/images/',
    watch: './src/assets/images/**/*.{jpg,jpeg,png,gif,svg}',
  },
  fonts: {
    src: './src/assets/fonts/**/*.{ttf,woff,woff2}',
    dist: './dist/assets/fonts/',
    watch: './src/assets/fonts/**/*.{ttf,woff,woff2}',
  },
  favicon: {
    src: './src/assets/favicon/**/*.{ico,png,webmanifest}',
    dist: './dist/assets/favicon/',
    watch: './src/assets/favicon/**/*.{ico,png}',
  },
  sprites: {
    src: './src/sprite/*.svg',
    dist: './dist/assets/images/',
    watch: './src/sprite/*.svg',
  },
};

module.exports = {
  isProduction,
  paths,
};
