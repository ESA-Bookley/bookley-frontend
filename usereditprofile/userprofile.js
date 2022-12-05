$(document).ready(function () {
    $('#photo').change(function (e) {
        e.preventDefault();
        const file = this.files[0];
        console.log(file);
        if (file) {
            let reader = new FileReader();
            console.log(reader);
            reader.onload = function (event) {
                $('#image').attr('src', event.target.result);
            };
            reader.readAsDataURL(file);
        }
    });
    $('#save').on('click', function (e) {
        e.preventDefault();
        $('.span').hide().text('');
        let fname = $('#fn');
        let lname = $('#ln');
        let dof = $('#date');
        let gen = $('.gender');
        let ed = $('#eduction');
        let email = $('#email');
        let phone = $('#phonenumber');
        let country = $('.con');
        let gov = $('.gov');
        let city = $('#city');
        let address = $('#address');
        let username = $('#username');
        let password = $('#pssaw');
        let conforimpass = $('#cpssaw');
        const test1 = /([a-z].*[A-Z])|([A-Z].*[a-z])([0-9])+([!,%,&,@,#,$,^,*,?,_,~])/;
        const test2 = /([0-9])/;
        const test3 = /([!,%,&,@,#,$,^,*,?,_,~])/;
        if (fname.val() == "") {
            fname.css({
                'border-bottom': '1px solid  red',
            });
            fname.parents('.hold').find('.span').show().text('this feild is required');
        } else if (fname.val()) {
            if (test2.test(fname.val()) == true || test3.test(fname.val()) == true) {
                fname.css({
                    'border-bottom': '1px solid  red',
                });
                fname.parents('.hold').find('.span').show().text('Name must be letter only');
            }
        }
        if (lname.val() == "") {
            lname.css({
                'border-bottom': '1px solid  red',
            });
            lname.parents('.hold').find('.span').show().text('this feild is required');
        } else if (lname.val()) {
            if (test2.test(lname.val()) == true || test3.test(lname.val()) == true) {
                lname.css({
                    'border-bottom': '1px solid  red',
                });
                lname.parents('.hold').find('.span').show().text('Name must be letter only');
            }
        }
        if (dof.val() == "") {
            dof.css({
                'border-bottom': '1px solid  red',
            });
            dof.parents('.hold').find('.span').show().text('this feild is required');
        }
        if (gen.val() == "") {

            gen.css({
                'border-bottom': '1px solid  red',
            });
            gen.parents('.hold').find('.span').show().text('this feild is required');
        }
        if (ed.val() == "") {

            ed.css({
                'border-bottom': '1px solid  red',
            });
            ed.parents('.hold').find('.span').show().text('this feild is required');
        }
        if (email.val() == "") {

            email.css({
                'border-bottom': '1px solid  red',
            });
            email.parents('.hold').find('.span').show().text('this feild is required');
        }
        else if (email.val()) {
            valid_email = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email.val()) == true;

            if (!valid_email) {
                email.css({
                    'border-bottom': '1px solid  red',
                });
                email.parents('.hold').find('.span').show().text('Email format is invalid');
            }
        }
        if (phone.val() == "") {

            phone.css({
                'border-bottom': '1px solid  red',
            });
            phone.parents('.hold').find('.span').show().text('this feild is required');
        }
        else if (phone.val()) {
            if (/^\d{8}$/.test(phone.val()) == false || /^\[A-Za-z]$/.test(phone.val()) == true) {
                phone.css({
                    'border-bottom': '1px solid  red',
                });
                phone.parents('.hold').find('.span').show().text('Invaild phone number');
            }

        }
        /*if (country.val() == "") {

            country.css({
                'border-bottom': '1px solid  red',
            });
            country.parents('.hold').find('.span').show().text('this feild is required');
        }*/
        if (gov.val() == "") {

            gov.css({
                'border-bottom': '1px solid  red',
            });
            gov.parents('.hold').find('.span').show().text('this feild is required');
        }
        if (city.val() == "") {

            city.css({
                'border-bottom': '1px solid  red',
            });
            city.parents('.hold').find('.span').show().text('this feild is required');
        } else if (city.val()) {
            if (test2.test(city.val()) == true || test3.test(city.val()) == true) {

                city.css({
                    'border-bottom': '1px solid  red',
                });
                city.parents('.hold').find('.span').show().text('this field must be letter only');
            }
        }
        if (address.val() == "") {

            address.css({
                'border-bottom': '1px solid  red',
            });
            address.parents('.hold').find('.span').show().text('this feild is required');
        } else if (address.val()) {
            if (test2.test(address.val()) == true || test3.test(address.val()) == true) {
                address.css({
                    'border-bottom': '1px solid  red',
                });
                address.parents('.hold').find('.span').show().text('this feild must be letter only');
            }
        }
        if (username.val() == "") {

            username.css({
                'border-bottom': '1px solid  red',
            });
            username.parents('.hold').find('.span').show().text('this feild is required');
        }
        if(password.val() == "") {

            password.css({
                'border-bottom': '1px solid  red',
            });
            password.parents('.hold').find('.span').show().text('this feild is required');
        } else if(password.val()) {
            if (password.val().length < '8' || test1.test(password.val()) == false || test2.test(password.val()) == false || test3.test(password.val()) == false) {

                password.css({
                    'border-bottom': '1px solid  red',
                });
                password.parents('.hold').find('.span').show().text('Password must be at least 8 chars and contain at least 1 digit, 1 uppercase character, 1 lowercase character, and 1 special character');
            }
        }
        if (conforimpass.val() == "") {

            conforimpass.css({
                'border-bottom': '1px solid  red',
            });
            conforimpass.parents('.hold').find('.span').show().text('this feild is required');
        }
        if (conforimpass.val() != password.val()) {
            conforimpass.parents('.hold').find('.span').show().text('Password did not match');

        }

    });
    $('input').on('keyup', function (e) {
        e.preventDefault();
        $(this).css({
            'border-bottom': '0.5px solid black'
        });
        $(this).parents(".hold").find(".span").text("");

    });
    $('#date').on('change', function (e) {
        e.preventDefault();
        $(this).css({
            'border-bottom': '0.5px solid black'
        });
        $(this).parents(".hold").find(".span").text("");

    });
    $('select').on('change', function (e) {
        e.preventDefault();
        $(this).css({
            'border-bottom': '0.5px solid black'
        });
        $(this).parents(".hold").find(".span").text("");
    });
});