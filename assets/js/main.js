(function() {

    'use strict';

    // sliders settings
    var sq_sliders = {
        'min': [1],
        '25': [25],
        '50': [50],
        '75': [75],
        'max': [99]
    };
    var wpp_sliders = {
        'min': [1],
        '20': [20],
        '40': [40],
        '60': [60],
        '80': [80],
        'max': [99]
    };

    // SQ dom elements
    var slider_1 = document.getElementById('sq_1'),
        slider_2 = document.getElementById('sq_2'),
        slider_3 = document.getElementById('sq_3'),
        slider_4 = document.getElementById('sq_4'),
        slider_5 = document.getElementById('sq_5'),
        slider_6 = document.getElementById('sq_6');

    // WPP dom elements
    var wpp_slider_1 = document.getElementById('wpp_1'),
        wpp_slider_2 = document.getElementById('wpp_2'),
        wpp_slider_3 = document.getElementById('wpp_3'),
        wpp_slider_4 = document.getElementById('wpp_4'),
        wpp_slider_5 = document.getElementById('wpp_5'),
        wpp_slider_6 = document.getElementById('wpp_6'),
        wpp_slider_7 = document.getElementById('wpp_7');

    // WVA dom elements
    var wva_slider_1 = document.getElementById('wva_1'),
        wva_slider_2 = document.getElementById('wva_2'),
        wva_slider_3 = document.getElementById('wva_3'),
        wva_slider_4 = document.getElementById('wva_4'),
        wva_slider_5 = document.getElementById('wva_5'),
        wva_slider_6 = document.getElementById('wva_6');

    // SQ Sliders
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


    //WPP Sliders ====
    noUiSlider.create(wpp_slider_1, {
        start: [20, 80],
        connect: true,
        range: wpp_sliders,
        pips: {
                mode: 'range',
                density: 1
        },
        tooltips: true,
        format: wNumb({
                decimals: 0
        })
    });
    noUiSlider.create(wpp_slider_2, {
        start: [20, 80],
        connect: true,
        range: wpp_sliders,
        pips: {
                mode: 'range',
                density: 1
        },
        tooltips: true,
        format: wNumb({
                decimals: 0
        })
    });
    noUiSlider.create(wpp_slider_3, {
        start: [20, 80],
        connect: true,
        range: wpp_sliders,
        pips: {
                mode: 'range',
                density: 1
        },
        tooltips: true,
        format: wNumb({
                decimals: 0
        })
    });
    noUiSlider.create(wpp_slider_4, {
        start: [20, 80],
        connect: true,
        range: wpp_sliders,
        pips: {
                mode: 'range',
                density: 1
        },
        tooltips: true,
        format: wNumb({
                decimals: 0
        })
    });
    noUiSlider.create(wpp_slider_5, {
        start: [20, 80],
        connect: true,
        range: wpp_sliders,
        pips: {
                mode: 'range',
                density: 1
        },
        tooltips: true,
        format: wNumb({
                decimals: 0
        })
    });
    noUiSlider.create(wpp_slider_6, {
        start: [20, 80],
        connect: true,
        range: wpp_sliders,
        pips: {
                mode: 'range',
                density: 1
        },
        tooltips: true,
        format: wNumb({
                decimals: 0
        })
    });
    noUiSlider.create(wpp_slider_7, {
        start: [20, 80],
        connect: true,
        range: wpp_sliders,
        pips: {
                mode: 'range',
                density: 1
        },
        tooltips: true,
        format: wNumb({
                decimals: 0
        })
    });

    // WVA Sliders
    noUiSlider.create(wva_slider_1, {
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
    noUiSlider.create(wva_slider_2, {
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
    noUiSlider.create(wva_slider_3, {
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
    noUiSlider.create(wva_slider_4, {
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
    noUiSlider.create(wva_slider_5, {
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
    noUiSlider.create(wva_slider_6, {
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



    // SQ update
    update_fields('sq_1');
    update_fields('sq_2');
    update_fields('sq_3');
    update_fields('sq_4');
    update_fields('sq_5');
    update_fields('sq_6');


    // WPP update
    update_fields('wpp_1');
    update_fields('wpp_2');
    update_fields('wpp_3');
    update_fields('wpp_4');
    update_fields('wpp_5');
    update_fields('wpp_6');
    update_fields('wpp_7');

    // WVA update
    update_fields('wva_1');
    update_fields('wva_2');
    update_fields('wva_3');
    update_fields('wva_4');
    update_fields('wva_5');
    update_fields('wva_6');

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
            var seq_view = slider_id.split('_')[0];
            $('#' + slider_id + '_' + handle).addClass('form-control_focused_' + handle);
            $('#' + slider_id + '_' + handle + '_' + handle).addClass('redCo');
            $('.' + seq_view + '_sequences').addClass('redBorder');


        });

        // prepare sequence for copying
        // and remove stylings to addded to elements while sliding
        current_slider.noUiSlider.on('end', function(value, handle){
            var seq_view = slider_id.split('_')[0];
            $('#' + slider_id + '_' + handle).removeClass('form-control_focused_' + handle);
            $('#' + slider_id + '_' + handle + '_' + handle).removeClass('redCo');
            $('.' + seq_view + '_sequences').removeClass('redBorder');
            var sq = slider_id.split('_');
            prepare_sequence(sq[0]);
        });
    }

    function prepare_sequence(seq_wrapper_id){
        var text = $('.' + seq_wrapper_id + '_sequences').text().trim();
            //$('#sq_hidden').val(text);
            $('#' + seq_wrapper_id + '_hidden').val(text);
    }

    // onload (default) value
    var default_sq = $('.sq_sequences').text().trim();
    var default_wpp = $('.wpp_sequences').text().trim();
    var default_wva = $('.wva_sequences').text().trim();
    $('#sq_hidden').val(default_sq);
    $('#wpp_hidden').val(default_wpp);
    $('#wva_hidden').val(default_wva);

    // clipping
    var clipboard = new Clipboard('#btn_sq', {
        text: function() {
            return document.getElementById('sq_hidden').value;
        }
    });
    clipboard.on('success', function(e) {
        //console.log(e.trigger);
       showTooltip(e.trigger, 'Copied!');
    });

    clipboard.on('error', function(e) { console.error('Action:', e.action);
        console.error('Trigger:', e.trigger);
        showTooltip(e.trigger, fallbackMessage(e.action));
    });

    // wpp clipboard
    var clipboard_wpp = new Clipboard('#btn_wpp', {
        text: function() {
            return document.getElementById('wpp_hidden').value;
        }
    });
    clipboard_wpp.on('success', function(e) {
        //console.log(e.trigger);
       showTooltip(e.trigger, 'Copied!');
    });

    clipboard_wpp.on('error', function(e) { console.error('Action:', e.action);
        console.error('Trigger:', e.trigger);
        showTooltip(e.trigger, fallbackMessage(e.action));
    });

    // wpp clipboard
    var clipboard_wva = new Clipboard('#btn_wva', {
        text: function() {
            return document.getElementById('wva_hidden').value;
        }
    });
    clipboard_wva.on('success', function(e) {
        //console.log(e.trigger);
       showTooltip(e.trigger, 'Copied!');
    });

    clipboard_wva.on('error', function(e) { console.error('Action:', e.action);
        console.error('Trigger:', e.trigger);
        showTooltip(e.trigger, fallbackMessage(e.action));
    });


    // Clipboard helpers ---

    function showTooltip(elem, msg) {
        $(elem).addClass('tooltipped tooltipped-e');
        elem.setAttribute('aria-label', msg);
        setTimeout(function(){
            $(elem).removeClass('tooltipped tooltipped-e');
        }, 1000);
    }

    function fallbackMessage(action) {
        var actionMsg = '';
        var actionKey = (action === 'cut' ? 'X' : 'C');
        if (/iPhone|iPad/i.test(navigator.userAgent)) { actionMsg = 'No support :('; } else if (/Mac/i.test(navigator.userAgent)) { actionMsg = 'Press ⌘-' + actionKey + ' to ' + action; } else { actionMsg = 'Press Ctrl-' + actionKey + ' to ' + action; }
        return actionMsg;
    }

    $('#footer_btn').on('click', function(e){
        e.preventDefault();
        $('#collapse_footer').toggleClass('footer-collapsed').promise().done(function() {
            if( $('#footer_btn_icon').hasClass('glyphicon-chevron-down') ) {
                $('#footer_btn_icon').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
            }else{
                $('#footer_btn_icon').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
            }
        });
    });

    $('#sq_wrapper_btn').on('click', function(e){
        e.preventDefault();

        $('#sq_wrapper').slideToggle('1200').promise().done(function() {
            if( $('#sq_title_toggle').hasClass('glyphicon-chevron-right') ) {
                $('#sq_title_toggle').removeClass('glyphicon-chevron-right').addClass('glyphicon-chevron-down');
            }else{
                $('#sq_title_toggle').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-right');
            }
        });
        var target = $(this);
         setTimeout(function(){

           if( target.length ) {

               $('html, body').stop().animate({
                   scrollTop: target.offset().top
               }, 1000);
           }
       }, 500);

    });
    $('#wpp_wrapper_btn').on('click', function(e){
        e.preventDefault();

        $('#wpp_wrapper').slideToggle('slow').promise().done(function() {
           if( $('#wpp_title_toggle').hasClass('glyphicon-chevron-right') ) {
               $('#wpp_title_toggle').removeClass('glyphicon-chevron-right').addClass('glyphicon-chevron-down');
           }else{
               $('#wpp_title_toggle').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-right');
           }
       });
         var target = $(this);
          setTimeout(function(){

            if( target.length ) {

                $('html, body').stop().animate({
                    scrollTop: target.offset().top
                }, 1000);
            }
        }, 500);

    });
    $('#wva_wrapper_btn').on('click', function(e){
        e.preventDefault();

        $('#wva_wrapper').slideToggle().promise().done(function() {
           if( $('#wva_title_toggle').hasClass('glyphicon-chevron-right') ) {
               $('#wva_title_toggle').removeClass('glyphicon-chevron-right').addClass('glyphicon-chevron-down');
           }else{
               $('#wva_title_toggle').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-right');
           }
       });
         var target = $(this);
          setTimeout(function(){

            if( target.length ) {

                $('html, body').stop().animate({
                    scrollTop: target.offset().top
                }, 1000);
            }
        }, 500);

    });


     // -----  modal
     $(window).on('load', function(){
         setTimeout(function(){
             $('#seq_modal').modal();
         }, 500);
     });

     $('#seq_modal').on('hidden.bs.modal', function () {
         $('#main, .footer').addClass('not_blurred').removeClass('blurred');
         setTimeout(function(){
             $('.footer').removeClass('not_blurred');
         }, 500);
     });

     $('#second_step').on('click', function(e){
         $('.first').slideUp();
         $('.second').slideDown().addClass('active').addClass('in');
     });

     function check_seqeunce(seq, element){
         var seq_letter = seq.charAt(0),
             sub = seq.substring(1),
             group_1 = [],
             group_2 = [],
             i = 1,
             error_list,
             error_seq = '',
             errors = {};

             if(isNaN(sub)){
                 errors = {
                     seq: '',
                     msg: 'Invalid input for the sequence'
                 }

                  $('.help-block-' + element).html(errors.msg + errors.seq);
                 return;
             }

             group_1 = sub.match(/.{1,4}/g);

             group_1.forEach(function(el){
                 var el_2 = el.match(/.{1,2}/g);
                 if(el_2[0] > el_2[1]){
                     error_list = true;
                     error_seq += '<span class="error_span">' + el_2[0] + el_2[1] + '</span>';
                 console.info('ERROR!');
                 }else{
                     error_seq += el_2[0] + el_2[1];
                 }
                 i++;
             });
             if(error_list){
                  errors = {
                     msg: 'The sequence format is valid but pairs with red color below aren\'t. Please fix those pairs, and press "Generate" button again',
                     seq: error_seq,
                     error_flag: 1
                 }

                 $('.help-block-' + element).html(errors_reporting_2(errors));
                 return;
             }

             $('.help-block-' +  + element).html('');
             var seq_return = {
                 letter: seq_letter,
                 seq: error_seq,
                 error_flag: 0
             }

             return seq_return;
     }

     function isNumeric(num){
         return !isNaN(num)
     }


     function errors_reporting_2(errors){
         return '<p>' + errors.msg + '</p>' + '<p>' + errors.seq + '</p>';
     }


    // S regex: ^[S][0-9]{24}$
    // W regex: ^[W][0-9]{28}$
    // V regex: ^[S][0-9]{24}$
    // $.validator.methods.pattern("AR1004",element,/^AR\d{4}$/)

    function set_slider(slider, sequence){
        slider.noUiSlider.set(sequence);
    }

    function convert_sequence(seq){

        var sub = seq.seq,
            group_1 = sub.match(/.{1,4}/g),
            seq_array = []
            ;


        group_1.forEach(function(el){
            var el_2 = el.match(/.{1,2}/g);
            if(el_2[0] > el_2[1]){

            }else{
                seq_array.push([el_2[0], el_2[1]]);
            }
        });

        return seq_array;
    }

    $('#seq_form').validator({
        //feedback: { success: 'glyphicon-ok', error: 'glyphicon-remove' }
    }).on('submit', function (e) {
        e.preventDefault();
        var sq_val = $('#sq_seq_insert').val().trim(),
            wpp_val = $('#wpp_seq_insert').val().trim(),
            wva_val = $('#wva_seq_insert').val().trim(),
            valid_sq = false,
            valid_wpp = false,
            valid_wva = false;
      if (e.isDefaultPrevented()) {
        // all values are empty
        if((sq_val.length == 0) && (wpp_val.length == 0) && (wva_val.length == 0)){

            $('.error_container').html('<div class="alert alert-warning empty_warning">Please enter at least one sequence. If you want to start with default values, click on the <strong><span class="redCo">Continue with default codes</span></strong> button.</div>');
            setTimeout(function(){
                $('.empty_warning').slideUp();
            },8000);
            return;
        }

        // sq insert loop
        if(sq_val.length != 0){        // sequence check
            var sq_seq_insert = check_seqeunce(sq_val, 'sq'),
                sq_array = [],
                i = 1;

            if(typeof sq_seq_insert == 'undefined'){
                return;
            }

            sq_array = convert_sequence(sq_seq_insert);

            $.each(sq_array, function(index, val){
                var current_slider = document.getElementById('sq_' + i);
                current_slider.noUiSlider.set(val);
                i++;
            });

            valid_sq = true;

           /* $('#sq_wrapper').slideToggle('1200').promise().done(function() {
                if( $('#sq_title_toggle').hasClass('glyphicon-chevron-right') ) {
                    $('#sq_title_toggle').removeClass('glyphicon-chevron-right').addClass('glyphicon-chevron-down');
                }else{
                    $('#sq_title_toggle').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-right');
                }
            });*/
        }

        // wpp insert loop
        if(wpp_val.length != 0){        // sequence check
            var wpp_seq_insert = check_seqeunce(wpp_val, 'wpp'),
                wpp_array = [],
                i = 1;

            if(typeof wpp_seq_insert == 'undefined'){

                return;
            }

            wpp_array = convert_sequence(wpp_seq_insert);

            $.each(wpp_array, function(index, val){
                var current_slider = document.getElementById('wpp_' + i);
                current_slider.noUiSlider.set(val);
                i++;
            });

            valid_wpp = true;

             /*$('#wpp_wrapper').slideToggle('slow').promise().done(function() {
                if( $('#wpp_title_toggle').hasClass('glyphicon-chevron-right') ) {
                    $('#wpp_title_toggle').removeClass('glyphicon-chevron-right').addClass('glyphicon-chevron-down');
                }else{
                    $('#wpp_title_toggle').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-right');
                }
            });*/
        }

        // wva insert loop
        if(wva_val.length != 0){        // sequence check
            var wva_seq_insert = check_seqeunce(wva_val, 'wva'),
                wva_array = [],
                i = 1;

            if(typeof wva_seq_insert == 'undefined'){
                return;
            }

            wva_array = convert_sequence(wva_seq_insert);

            $.each(wva_array, function(index, val){
                var current_slider = document.getElementById('wva_' + i);
                current_slider.noUiSlider.set(val);
                i++;
            });

            valid_wva = true;

             /*$('#wva_wrapper').slideToggle().promise().done(function() {
                if( $('#wva_title_toggle').hasClass('glyphicon-chevron-right') ) {
                    $('#wva_title_toggle').removeClass('glyphicon-chevron-right').addClass('glyphicon-chevron-down');
                }else{
                    $('#wva_title_toggle').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-right');
                }
            });*/
        }


        $('#seq_modal').modal('hide');

        // open containers
        if(valid_sq){
            $('#sq_wrapper').slideToggle('sloq').promise().done(function() {
                if( $('#sq_title_toggle').hasClass('glyphicon-chevron-right') ) {
                    $('#sq_title_toggle').removeClass('glyphicon-chevron-right').addClass('glyphicon-chevron-down');
                }else{
                    $('#sq_title_toggle').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-right');
                }
            });
        }

        if(valid_wpp){
            $('#wpp_wrapper').slideToggle('slow').promise().done(function() {
                if( $('#wpp_title_toggle').hasClass('glyphicon-chevron-right') ) {
                    $('#wpp_title_toggle').removeClass('glyphicon-chevron-right').addClass('glyphicon-chevron-down');
                }else{
                    $('#wpp_title_toggle').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-right');
                }
            });
        }

        if(valid_wva){
            $('#wva_wrapper').slideToggle('slow').promise().done(function() {
                if( $('#wva_title_toggle').hasClass('glyphicon-chevron-right') ) {
                    $('#wva_title_toggle').removeClass('glyphicon-chevron-right').addClass('glyphicon-chevron-down');
                }else{
                    $('#wva_title_toggle').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-right');
                }
            });
        }

      } else {
        // everything looks good!
         $('#seq_modal').modal('hide');
      }

    });

    $('#close_modal, #close_modal_2').on('click', function(e){
        e.preventDefault();

        $('#sq_wrapper').slideToggle('slow').promise().done(function() {
            if( $('#sq_title_toggle').hasClass('glyphicon-chevron-right') ) {
                $('#sq_title_toggle').removeClass('glyphicon-chevron-right').addClass('glyphicon-chevron-down');
            }else{
                $('#sq_title_toggle').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-right');
            }
        });

        $('#wpp_wrapper').slideToggle('slow').promise().done(function() {
            if( $('#wpp_title_toggle').hasClass('glyphicon-chevron-right') ) {
                $('#wpp_title_toggle').removeClass('glyphicon-chevron-right').addClass('glyphicon-chevron-down');
            }else{
                $('#wpp_title_toggle').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-right');
            }
        });

        $('#wva_wrapper').slideToggle('slow').promise().done(function() {
            if( $('#wva_title_toggle').hasClass('glyphicon-chevron-right') ) {
                $('#wva_title_toggle').removeClass('glyphicon-chevron-right').addClass('glyphicon-chevron-down');
            }else{
                $('#wva_title_toggle').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-right');
            }
        });

        $('#seq_modal').modal('hide');
    });

})();

