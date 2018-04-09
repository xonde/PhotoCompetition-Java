'use strict';

function loadWinningImage() {
    fetch(buildUrl('/top'))
        .then(function (response) {
            if (response.status !== 200) {
                throw new Error('Status !== 200: ' + response.status)
            }
            return response.json();
        })
        .then(function (json) {
            console.log('Request to /images/top succeeded: ' + json);
            var mainImage = $('#main-image');
            mainImage.attr('src', json.url);
            mainImage.attr('alt', 'Photo Competition winning image, ' + json.name);

            var license = getLicenseDetails(json.license);
            var licenseElem = $('#a-license');
            licenseElem.text(license[0]);
            licenseElem.attr('href', license[1]);

            $('#span-author-name').text(json.author);
            $('#span-image-name').text(json.name);
            $('#span-score').text(json.score);
        })
        .catch(function (err) {
            console.log('Request to /image/top failed - ' + err);
        });
}

$(function() {
    loadWinningImage();
});
