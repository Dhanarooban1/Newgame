window.onload = function() {
    var pre = document.querySelector('pre');
    var text = pre.getAttribute('data-text');
    var lines = text.split('');
    pre.textContent = '';
    var i = 0;
    var interval = setInterval(function() {
        if (i < lines.length) {
            pre.textContent += lines[i] ;
            i++;
        } else {
            clearInterval(interval);
        }
    },50); // Change this value to speed up or slow down the t
};