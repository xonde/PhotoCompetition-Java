'use strict';

function loadAllImages() {
    //console.log('AAAAAAAAAAAAAvvvvvvvvv');
    fetch(buildUrl(""))
        .then(function (response) {
            if (response.status !== 200) {
                throw new Error('Request return status code !== 200: ' + response.status + ' - ')
            }
            // var x = response.

            return response.json();
        })
        .then(function (imageList) {
            return imageList.sort(function (a, b) {
                return b.score - a.score;
            });
        })
        .then(function (sortedList) {
            for(var i = 0; i < sortedList.length; i++){
                var image = sortedList[i];
                $('#top-rated-photos').append(
                    "<div class='image-rect'>"+
                    // "<div class='image-rect-inner'>"+
                    "<img class='image-slit' src="+image.url+">"+

                    "<p class='top-image-details'>"+image.name+"</p>"+
                    "<p style='color:#ff7e00' class='top-image-details'>"+image.author+"</p>"+
                    "<p class='top-image-details'>"+image.license+"</p>"+
                    "<p style='color:#ff7e00' class='top-image-details'>SCORE: "+image.score+"</p>"+
                    "<br>"+
                    //"<br>"+
                    // "</div>" +
                    "</div>"
                )
            }

        })
        .catch(function (err) {
            console.error('Request to /random failed: ', err);
        });
}

$(function () {
    loadAllImages();
});