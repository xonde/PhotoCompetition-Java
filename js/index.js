'use strict';

var imageId = null;

function onClickVoteUp() {
    onClickVote('up');
}

function onClickVoteDown() {
    onClickVote('down');
}

function onClickVote(direction) {
    if (imageId == null) {
        console.log('Unable to vote before image loaded');
        return;
    }

    fetch(buildUrl('/id/' + imageId + '/vote/' + direction), {method: 'POST'})
        .then(function () {
            console.log('Vote successful');
            loadRandomImage();
        })
        .catch(function (resp) {
            console.log('Vote failed? ');
            console.log(resp);
            loadRandomImage();
        });
}

function loadRandomImage() {
    fetch(buildUrl('/random'))
        .then(function (response) {
            if (response.status !== 200) {
                throw new Error('Request return status code !== 200: ' + response.status + ' - ')
            }
            return response.json();
        })
        .then(function (json) {
            console.log('Request to /random succeeded: ');
            console.log(json);
            imageId = json.id;

            var mainImage = $('#main-image');
            mainImage.attr('src', json.url);
            mainImage.attr('alt', 'Photo Competition image, ' + json.name);

            var license = getLicenseDetails(json.license);
            var licenseElem = $('#a-license');
            licenseElem.text(license[0]);
            licenseElem.attr('href', license[1]);

            $('#span-author-name').text(json.author);
            $('#span-image-name').text(json.name);
        })
        .catch(function (err) {
            console.log('Request to /top failed: ' + err);
        });
}

$(function () {
    loadRandomImage();
});
