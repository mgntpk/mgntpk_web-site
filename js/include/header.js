(function () {
    const text =
    '<h1>'+
        '<a href="./index.html" >メガンテは神</a>'+
    '</h1>'+
    '<nav>'+
        '<ul>'+
            '<li><a href="./index.html" >ホーム</a></li>'+
            '<li><a href="https://twitter.com/mgntia" >ツイッター</a></li>'+
            '<li><a href="./work.html" >作ったもの</a></li>'+
            '<li><a href="./contact.html" >問い合わせ</a></li>'+
        '</ul>'+
    '</nav>';
    document.getElementById("header").insertAdjacentHTML("beforeend",text);
}());