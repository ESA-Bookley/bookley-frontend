$(document).ready(function(){
    $(document).on('click','.eyeOne',function(e){
        e.preventDefault();
         const passw=$('#password');
         passw.attr('type')==='password'? passw.attr('type','text') : passw.attr('type','password')
});
});