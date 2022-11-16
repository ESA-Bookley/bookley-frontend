$(document).ready(function(){
    $(document).on('click','.eyeOne',function(e){
        e.preventDefault();
        $(this).toggleClass('fa-regular fa-eye-slash').toggleClass('fa-regular fa-eye');
         const passw=$('#password');
         passw.attr('type')==='password'? passw.attr('type','text') : passw.attr('type','password')
});
});