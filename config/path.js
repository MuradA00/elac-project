import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());
const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
 build: {
  html: `${buildFolder}/`,
  css: `${buildFolder}/css/`,
  js: `${buildFolder}/js/`,
  icons: `${buildFolder}/icons/`,
  img: `${buildFolder}/img/`,
  favicon: `${buildFolder}/favicon/`,
  fonts: `${buildFolder}/fonts/`,
  video: `${buildFolder}/video/`,
  audio: `${buildFolder}/audio/`,
  json: `${buildFolder}/json/`,
  files: `${buildFolder}/files/`,
  php: `${buildFolder}/php/`
 },
 src: {
  html: `${srcFolder}/*.{html, php}`,
  css: `${srcFolder}/css/**/*.css`,
  scss: `${srcFolder}/sass/main.sass`,
  js: `${srcFolder}/js/**/*.js`,
  icons: `${srcFolder}/icons/**/*.{jpg,png,svg,gif,ico,webp,xml,webmanifest,tif}`,
  img: `${srcFolder}/img/**/*.{jpg,png,svg,gif,ico,webp,xml,webmanifest,tif}`,
  favicon: `${srcFolder}/favicon/**/*.{jpg,png,svg,gif,ico,webp,xml,webmanifest,tif}`,
  fonts: `${srcFolder}/fonts/**/*.{woff,woff2,otf,ttf,TTF}`,
  video: `${srcFolder}/video/**/*.{mp4,webm}`,
  audio: `${srcFolder}/audio/**/*.{ogg,mp3}`,
  json: `${srcFolder}/json/**/*.json`,
  files: `${srcFolder}/files/**/*.*`,
  php: `${srcFolder}/php/**/*.*`
 },
 watch: {
  html: `${srcFolder}/**/*.{html, php}`,
  css: `${srcFolder}/css/**/*.css`,
  scss: `${srcFolder}/sass/**/*.sass`,
  js: `${srcFolder}/js/**/*.js`,
  icons: `${srcFolder}/icons/**/*.{jpg,png,svg,gif,ico,webp,xml,webmanifest,tif}`,
  img: `${srcFolder}/img/**/*.{jpg,png,svg,gif,ico,webp,xml,webmanifest,tif}`,
  favicon: `${srcFolder}/favicon/**/*.{jpg,png,svg,gif,ico,webp,xml,webmanifest,tif}`,
  fonts: `${srcFolder}/fonts/**/*.{woff,woff2,otf,ttf,TTF}`,
  video: `${srcFolder}/video/**/*.{mp4,webm}`,
  audio: `${srcFolder}/audio/**/*.{ogg,mp3}`,
  json: `${srcFolder}/json/**/*.json`,
  files: `${srcFolder}/files/**/*.*`,
  php: `${srcFolder}/php/**/*.*`
 },
 clean: buildFolder,
 buildFolder: buildFolder,
 srcFolder: srcFolder,
 rootFolder: rootFolder,
 ftp: ``
}