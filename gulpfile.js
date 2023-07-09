
import gulp from "gulp";
import { path } from "./config/path.js";
import { plugins } from "./config/plugins.js";
// Передает значения в глобанльную переменную
global.app = {
 path: path,
 gulp: gulp,
 plugins: plugins
}
// Импорт задач
import { copy } from "./tasks/copy.js";
import { reset } from "./tasks/reset.js";
import { html } from "./tasks/html.js";
import { server } from "./tasks/server.js";
import { css } from "./tasks/css.js";
import { scss } from "./tasks/sass.js";
import { js } from "./tasks/js.js";
import { icons } from "./tasks/icons.js";
import { img } from "./tasks/img.js";
import { favicon } from "./tasks/favicon.js";
import { fonts } from "./tasks/fonts.js";
import { video } from "./tasks/video.js";
import { audio } from "./tasks/audio.js";
import { json } from "./tasks/json.js";
import { php } from "./tasks/php.js";
// Наблюдатель за изменениями в файлах
function watcher() {
 gulp.watch(path.watch.files, copy);
 gulp.watch(path.watch.html, html);
 gulp.watch(path.watch.css, css);
 gulp.watch(path.watch.scss, scss);
 gulp.watch(path.watch.js, js);
 gulp.watch(path.watch.icons, icons);
 gulp.watch(path.watch.img, img);
 gulp.watch(path.watch.favicon, favicon);
 gulp.watch(path.watch.fonts, fonts);
 gulp.watch(path.watch.video, video);
 gulp.watch(path.watch.audio, audio);
 gulp.watch(path.watch.json, json);
 gulp.watch(path.watch.php, php);
}

const mainTasks = gulp.parallel(copy, html, css, scss, js, icons, img, favicon, fonts, video, audio, json, php);
// Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
// Выполнение  сценария по умолчанию
gulp.task('default', dev);

