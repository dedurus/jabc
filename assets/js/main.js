(function() {

    // settings
    var sq_sliders = {
        'min': [1],
        '25': [25],
        '50': [50],
        '75': [75],
        'max': [99]
    };


    var slider_1 = document.getElementById('sq_1');

    noUiSlider.create(slider_1, {
        start: [25, 75],
        connect: true,
        range: sq_sliders,
        pips: {
                mode: 'range',
                density: 1
            },
        tooltips: true,
        format: wNumb({
                decimals: 0
            })
    });

    $('#sq_1 .noUi-connect').css('background', '#067e55');


    // events
    slider_1.noUiSlider.on('update', function(values){
        //console.log(slider.noUiSlider.get());
        console.log(values[0]);
        console.log(values[1]);
    });

})();