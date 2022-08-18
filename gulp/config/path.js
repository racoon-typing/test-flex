// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './source';

export const path = {
    build: {
        html: `${buildFolder}/`,
        files: `${buildFolder}/files/`,
    },
    src: {
        html: `${srcFolder}/*.html`, // .pug
        files: `${srcFolder}/files/**/*.*`,
    },
    watch: {
        html: `${srcFolder}/**/*.html`, // .pug
        files: `${srcFolder}/files/**/*.*`, 
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ''
}