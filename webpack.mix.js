const mix = require('laravel-mix');

mix
.js('src/scripts/main.js', "dist/index.js")
.sass('src/styles/main.scss', 'dist/index.css');