// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './source';

export const path = {
    build: {
        html: `${buildFolder}/`,
        files: `${buildFolder}/`,
    },
    src: {
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/**/*.*`,
    },
    watch: {
        html: `${srcFolder}/**/*.html`,
        files: `${srcFolder}/**/*.*`, 
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ''
}