// file.js
(function (exports) {
    let x = "Likhilesh";
    console.log(x);
    exports.name = "hello";
})();

// file2.js
(function () {
    let x = 1;
    x++;
    console.log(x);
})();

// app.js imported (file, file2)
