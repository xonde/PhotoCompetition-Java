'use strict';
// JavaScript source file containing shared constants, for use in all pages.

var backendIp = "34.245.255.176";
var token = "fa28372d-44ee-4202-964f-485d41c7c7fd";

function buildUrl(path) {
    return "http://" + backendIp + "/images" + path + "?token=" + token;
}
