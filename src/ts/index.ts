/// <reference path="typings/index.d.ts" />

"use strict";

new Promise((resolve: Function) => {
	setTimeout(() => {
		console.log("3秒経ったよ!");
		resolve();
	}, 3000);
});
