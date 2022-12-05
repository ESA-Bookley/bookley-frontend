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
    $('#add').on('click',function(){
        const title=$('#title');
        console.log(title);
        const countpage=$('#countpage');
        const lang=$('#lang');
        const neww =$('#new');
        const test1 = /([a-z].*[A-Z])|([A-Z].*[a-z])([0-9])+([!,%,&,@,#,$,^,*,?,_,~])/;
        const test2 = /([!,%,&,@,#,$,^,*,?,_,~])/;
        $('.error-message').hide().text('');
        if(title.val()==""){
            title.parents('.hold').find('.error-message').show().text('please fill out this field');   
        }

        if(countpage.val()==""){
            countpage.parents('.hold').find('.error-message').show().text('please fill out this field');   
        }else if (countpage.val()) {
            if (test1.test(countpage.val()) == true || test2.test(countpage.val()) == true) {
                countpage.parents('.hold').find('.error-message').show().text('this feild must be letter'); 
            }
        }
        if (!(neww.prop("checked"))) {
            neww.parents('.hold').find('.error-message').show().text('please fill out this field');  
         }
    });
});