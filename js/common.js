'use strict';
// JavaScript containing shared constants, for use in all pages.

var backendIp = 'backend IP goes here';
var token = 'your token goes here';

function buildUrl(path) {
    return 'http://' + backendIp + '/images' + path + '?token=' + token;
}
