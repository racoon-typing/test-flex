export function isWebp() {
    // Проверка поддержки webp
    function testWebp(cb) {
        let webp = new Image();
        webp.onload = webp.onerror = function() {
            cb(webp.height == 2);
        }
        webp.src = "";
    }
    // Добавление класса
    testWebp(function(support){
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
}
