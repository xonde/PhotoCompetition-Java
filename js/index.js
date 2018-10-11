'use strict';
// JavaScript for use with the index page.

var imageId;

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

            var mainImage = $('#main-image');
            mainImage.attr('src', json.url);
            mainImage.attr('alt', 'Photo Competition image, ' + json.name);

            var imageName = $('#image-name');
            imageName.text(json.name);

            var imageAuthor = $('#image-author');
            imageAuthor.text(json.author);

            var imageLicense = $('#image-license');
            imageLicense.text(json.license);

            var imageScore = $('#image-score');
            imageScore.text(json.score);

            imageId = json.id;
        })
        .catch(function (err) {
            console.error('Request to /random failed: ', err);
        });
}


function voteUp(){
    $.post( buildUrl("/id/"+imageId+"/vote/up"), function( data ) {
        $( ".result" ).html( data );
    });
    location.reload();
}

function voteDown(){
    $.post( buildUrl("/id/"+imageId+"/vote/down"), function( data ) {
        $( ".result" ).html( data );
    });
    location.reload();
}

$(function () {
    loadRandomImage();
});
