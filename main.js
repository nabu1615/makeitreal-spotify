(function(){
    var templateSrc = $('#results-template').html(),
    template = Handlebars.compile(templateSrc),
    placeResults = $('.songs');

    var searchTrack = function (query) {
        $.ajax({
            url: 'https://api.spotify.com/v1/search',
            data: {
                q: query,
                type: 'track'
            },
            success: function (response) {
                placeResults.html(template(response));
            }
        });
    };

    $('#search').on('keyup', function(e){
        var value = $(this).val();
        placeResults.html("");
        if ( e.which == 13 ) {
            e.preventDefault();
            searchTrack(value);
        }
    })

})();