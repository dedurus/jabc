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
    var slider_4 = document.getElementById('sq_4');
    var slider_5 = document.getElementById('sq_5');
    var slider_6 = document.getElementById('sq_6');

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
    noUiSlider.create(slider_4, {
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
    noUiSlider.create(slider_5, {
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
    noUiSlider.create(slider_6, {
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
    $('#sq_2 .noUi-connect').css('background', '#068846');
    $('#sq_3 .noUi-connect').css('background', '#069241');
    $('#sq_4 .noUi-connect').css('background', '#069C2D');
    $('#sq_5 .noUi-connect').css('background', '#06A61E');
    $('#sq_6 .noUi-connect').css('background', '#06B00F');




    update_fields('sq_1');
    update_fields('sq_2');
    update_fields('sq_3');
    update_fields('sq_4');
    update_fields('sq_5');
    update_fields('sq_6');




    // functions
    function update_fields(slider_id){
        var current_slider = document.getElementById(slider_id),
            current_field;
        current_slider.noUiSlider.on('update', function( values, handle ) {
            if(values[handle] < 10){
                values[handle] = '0' + values[handle];
            }

            // generate appropriate field name
            var input_field_name = slider_id + '_' + handle,
                current_field = $('#' + input_field_name + '_' + handle),
                input_field = $('#' + input_field_name);
            input_field.val(values[handle]);
            current_field.text(values[handle]);
        });

        current_slider.noUiSlider.on('slide', function(value, handle){
            $('#' + slider_id + '_' + handle + '_' + handle).addClass('redCo');
        });

        // prepare sequence for copying
        current_slider.noUiSlider.on('end', function(vallue, handle){
            $('#' + slider_id + '_' + handle + '_' + handle).removeClass('redCo');
            var sq = slider_id.split('_');
            prepare_sequence(sq[0]);
        });
    }

    function prepare_sequence(seq_wrapper_id){

        var text = $('.' + seq_wrapper_id + '_sequences').text().trim();
            $('#sq_hidden').val(text);
            //$('#' + seq_wrapper_id + '_hidden').val(text);
        /*var btn = $('.' + seq_wrapper_id).closest('.sequences').find('.btn');

        btn.attr('data-clipboard-text', text);*/

    }

    // clipping
    var clipboard = new Clipboard('#btn_sq', {
        text: function() {
            return document.getElementById('sq_hidden').value;
        }
    });
    clipboard.on('success', function(e) {
        console.log(e.trigger);
       showTooltip(e.trigger, 'Copied!');
    });

    clipboard.on('error', function(e) { console.error('Action:', e.action);
        console.error('Trigger:', e.trigger);
        showTooltip(e.trigger, fallbackMessage(e.action));
    });

    function showTooltip(elem, msg) {
        $(elem).addClass('tooltipped tooltipped-s');
        elem.setAttribute('aria-label', msg);
        setTimeout(function(){
            $(elem).removeClass('tooltipped tooltipped-s');
        }, 1000);
    }

    function fallbackMessage(action) {
        var actionMsg = '';
        var actionKey = (action === 'cut' ? 'X' : 'C');
        if (/iPhone|iPad/i.test(navigator.userAgent)) { actionMsg = 'No support :('; } else if (/Mac/i.test(navigator.userAgent)) { actionMsg = 'Press ⌘-' + actionKey + ' to ' + action; } else { actionMsg = 'Press Ctrl-' + actionKey + ' to ' + action; }
        return actionMsg;
    }

})();