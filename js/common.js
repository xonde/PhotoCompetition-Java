'use strict';

var backendIp = 'backend IP goes here';
var token = 'token goes here';

function buildUrl(path) {
    return 'http://' + backendIp + '/images' + path + '?token=' + token;
}

function getLicenseDetails(licenseId) {
    switch (licenseId) {
        case 'CC_BY':
            return ['Creative Commons Attribution', 'https://creativecommons.org/licenses/by-sa/4.0'];
        case 'CC_BY_SA':
            return ['Creative Commons Attribution-ShareAlike', 'https://creativecommons.org/licenses/by-sa/4.0'];
        case 'CC_BY_ND':
            return ['Creative Commons  Attribution-NoDerivatives', 'https://creativecommons.org/licenses/by-sa/4.0'];
        default:
            return ['Unknown License', '']
    }
}
