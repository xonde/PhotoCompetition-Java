'use strict';
// JavaScript containing shared constants, for use in all pages.

var backendIp = '18.202.128.247';
var token = '9ad6037a-092e-4fad-a135-c07f43adf09e';

function buildUrl(path) {
    return 'http://' + backendIp + '/images' + path + '?token=' + token;
}
