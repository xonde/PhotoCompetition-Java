'use strict';

function setupFormSubmissionBehaviour() {
    $('#image-upload-form').submit(function (event) {
        event.preventDefault();

        var author = $('#author-input');
        var name = $('#name-input');
        var license = $('#license-input');
        var fileInput = $('#file-input');

        if (!validateForm(author, name, license, fileInput)) {
            return;
        }

        var data = constructPostData(
            author.val(),
            name.val(),
            license.val(),
            fileInput[0].files
        );

        uploadDataAndHandleOutcome(data);
    });
}

function validateForm(author, name, license, fileInput) {
    return [
        author[0].checkValidity(),
        name[0].checkValidity(),
        license[0].checkValidity(),
        fileInput[0].checkValidity()
    ].every(function (x) {
        return x;
    });
}

function constructPostData(author, name, license, files) {
    var data = new FormData();

    var metadataContent = JSON.stringify({
        'author': author,
        'name': name,
        'license': license
    });
    var metadataBlob = new Blob([metadataContent], {type: 'application/json'});
    data.append(
        'metadata',
        metadataBlob
    );
    data.append('rawdata', files[0]);

    return data;
}

function setUploadError(message) {
    var detailSpan = $('#banner-image-upload-failure-detail');
    detailSpan.text(message);
    $('#banner-image-upload-failure').removeClass('banner-hidden');
    $('#banner-image-upload-success').addClass('banner-hidden');
}

function uploadDataAndHandleOutcome(data) {
    fetch(buildUrl('/'), {
        method: 'POST',
        body: data
    }).then(function (response) {
        if (response.status === 200) {
            console.log('successfully uploaded file');
            $('#banner-image-upload-failure').addClass('banner-hidden');
            $('#banner-image-upload-success').removeClass('banner-hidden');
        } else {
            return response.json().then(function (json) {
                setUploadError(json.clientVisibleDetail || 'Unknown Error');
            });
        }
    }).catch(function (err) {
        console.error(err);
        setUploadError('Unknown Error')
    });
}

$(function () {
    setupFormSubmissionBehaviour();
});