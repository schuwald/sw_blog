const resource = [

  /* --- CSS --- */
  '/sw_blog/assets/css/style.css',

  /* --- PWA --- */
  '/sw_blog/app.js',
  '/sw_blog/sw.js',

  /* --- HTML --- */
  '/sw_blog/index.html',
  '/sw_blog/404.html',
  

  /* --- Favicons & compressed JS --- */
  
  
    '/sw_blog/assets/img/favicons/android-chrome-192x192.png',
    '/sw_blog/assets/img/favicons/android-chrome-512x512.png',
    '/sw_blog/assets/img/favicons/apple-touch-icon.png',
    '/sw_blog/assets/img/favicons/favicon-16x16.png',
    '/sw_blog/assets/img/favicons/favicon-32x32.png',
    '/sw_blog/assets/img/favicons/favicon.ico',
    '/sw_blog/assets/img/favicons/mstile-150x150.png',
    '/sw_blog/assets/img/favicons/safari-pinned-tab.svg',
    '/sw_blog/assets/js/dist/categories.min.js',
    '/sw_blog/assets/js/dist/commons.min.js',
    '/sw_blog/assets/js/dist/home.min.js',
    '/sw_blog/assets/js/dist/misc.min.js',
    '/sw_blog/assets/js/dist/page.min.js',
    '/sw_blog/assets/js/dist/post.min.js',
    '/sw_blog/assets/js/dist/pvreport.min.js'

];

/* The request url with below domain will be cached */
const allowedDomains = [
  

  'localhost:4000',

  

  'fonts.gstatic.com',
  'fonts.googleapis.com',
  'cdn.jsdelivr.net',
  'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [
  
];

