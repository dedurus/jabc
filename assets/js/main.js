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
    var slider_2 = document.getElementById('sq_2');
    var slider_3 = document.getElementById('sq_3');

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
    noUiSlider.create(slider_2, {
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
    noUiSlider.create(slider_3, {
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




    update_fields('sq_1');
    update_fields('sq_2');
    update_fields('sq_3');




    // functions
    function update_fields(slider_id){
        var valuesDivs = document.getElementById(slider_id);
        valuesDivs.noUiSlider.on('update', function( values, handle ) {

            // generate appropriate field name
            var input_field_name = slider_id + '_' + handle,
                input_field = $('#' + input_field_name);
            input_field.val(values[handle]).addClass('form-control_focused');
        });
    }

})();