正直、片手間で node.js / typescript さわってると色々キャッチアップしきれないし忘れるので、環境メモ。

ディレクトリ掘って gulp するところまで。

# まず手でビルド
Lambda が ES6 なので 4.3.2 でいく。
```
$ mkdir typescript-tmpl
$ cd $_
$ nvm use v4.3.2
$ npm init --yes
```

で、typescript と typings。
```
$ npm install --save-dev typescript typings
$ $(npm bin)/tsc --init --target ES2015

$ mkdir -p src/ts
$ cd $_
$ $(npm bin)/typings init
$ $(npm bin)/typings install --global --save dt~es6-promise
```

src/ts/index.ts 書いてビルド。
```
$ $(npm bin)/tsc index.ts
$ node index.js
3秒経ったよ!
```

ok。ビルド成果物は消しておく。
```
$ rm index.js
$ cs ../..
```

# gulpで。

gulp インストール。
```
$ npm install --save-dev gulp gulp-typescript rimraf
```

gulpfile.js つくってビルド。
```
$ gulp
$ node scripts/index.js
3秒経ったよ!
```

ok。
