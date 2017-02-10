(function() {

    // settings
    var range_sq_sliders = {
        'min': [1],
        '25': [25],
        '50': [50],
        '75': [75],
        'max': [99]
    };


    var slider = document.getElementById('sq_1');

    noUiSlider.create(slider, {
        start: [25, 75],
        connect: true,
        range: range_sq_sliders,
        pips: {
                mode: 'range',
                density: 1
            },
        tooltips: true,
        format: wNumb({
                decimals: 0
            })
    });

    slider.noUiSlider.on('update', function(values){
        //console.log(slider.noUiSlider.get());
        console.log(values[0]);
        console.log(values[1]);
    });

})();