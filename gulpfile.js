// Основной модуль
import gulp from "gulp";
// Импорт путей
import { path } from "./gulp/config/path.js";

// Передаем значения в глобальную переменную 
global.app = {
    path: path,
    gulp: gulp
}

// Импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";

// Наблюдатель за изменениями файлов
function watcher() {
    gulp.watch(path.watch.files, copy),
    gulp.watch(path.watch.html, html)
} 

const mainTasks = gulp.parallel(copy, html)

// Построение сценариев выполенения задач 
const dev = gulp.series(reset, mainTasks, watcher);

// Выполнение сценария по умолчанию
gulp.task('default', dev);