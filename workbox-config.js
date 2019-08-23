module.exports = {
  "globDirectory": "./",
  "globPatterns": [
    "**/*.{html,eot,svg,ttf,woff}"
  ],
  "maximumFileSizeToCacheInBytes": 2097152,
  "globIgnores":["category/**/*.*"],
  "swDest": "assets\\sw.js",
  "swSrc": "service-worker.js"
};