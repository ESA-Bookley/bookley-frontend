$(document).ready(function(){
    const next=$( '.buttonSubmit #btnnext');
    const back=$('.buttonSubmit #btnback');
   next.on('click',function(e){
       e.preventDefault();
       const req_field=$('.active :required');

       $('.error-message').hide().text('');
       req_field.css({
           'border-bottom': '0.5px solid black' 
       });
      missing=false;
      const email = $('.active #email');
      if(email.val()) {
        valid_email = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email.val()) == true;
 
        if(!valid_email) {
          email.css({
            'border-bottom': '0.5px solid red',
          });
          email.parents('.hold').find('.error-message').show().text('Email format is invalid');
          missing = true;
        }
      }
      const phone = $('.active #phonenumber');
      if(phone.val()) {
        if (/^\d{8}$/.test(phone.val()) == false || /^\[A-Za-z]$/.test(phone.val()) == true) {
          phone.css({
              'border-bottom': '0.5px solid red'
          });
          phone.parents('.hold').find('.error-message').show().text('Phone must be 8 digits');
          missing= true;
        }

      }
      const passw=$('.active #password');
      const testpass1 =/([a-z].*[A-Z])|([A-Z].*[a-z])([0-9])+([!,%,&,@,#,$,^,*,?,_,~])/;
      const testpass2 =/([0-9])/;
      const testpass3 =/([!,%,&,@,#,$,^,*,?,_,~])/;
       if(passw.val()){
        if(passw.val().length<'8' || testpass1.test(passw.val())==false|| testpass2.test(passw.val())==false|| testpass3.test(passw.val())==false){
            
              passw.css({
                'border-bottom':'0.5px solid red',
              }); 
              passw.parents('.hold').find('.error-message').show().text('Password must be at least 8 chars and contain at least 1 digit, 1 uppercase character, 1 lowercase character, and 1 special character');
                 missing=true; 
              /*if( testpass1.test(passw.val())==false){
                passw.parents('.hold').find('.error-message').show().text('password must contain 1 Captail letter and 1 Small letter');
                missing=true;
              }
              if( testpass2.test(passw.val())==false){
                passw.parents('.hold').find('.error-message').show().text('password must contain 1 number');
                missing=true;
              }
              if( testpass3.test(passw.val())==false){
                passw.parents('.hold').find('.error-message').show().text('password must contain 1 Spacial character');
                missing=true;
              }*/
        }
       }
       const comfpassw=$('.active #confirmpassword');
       const testcomfpass1 =/([a-z].*[A-Z])|([A-Z].*[a-z])([0-9])+([!,%,&,@,#,$,^,*,?,_,~])/;
       const testcomfpass2 =/([0-9])/;
       const testcomfpass3 =/([!,%,&,@,#,$,^,*,?,_,~])/;
        if(comfpassw.val()){
         if(comfpassw.val().length<'6' || testcomfpass1.test(comfpassw.val())==false|| testcomfpass2.test(comfpassw.val())==false|| testcomfpass3.test(comfpassw.val())==false){
             
               comfpassw.css({
                 'border-bottom':'0.5px solid red',
               }); 
               phone.parents('.hold').find('.error-message').show().text('Password must be at least 8 chars and contain at least 1 digit, 1 uppercase character, 1 lowercase character, and 1 special character');
               missing=true;    
         }
         if(comfpassw.val()!=passw.val()){
          comfpassw.parents('.hold').find('.error-message').show().text('Password did not match');
          missing=true;
          
        }
        }
        const fn=$('.active #firstname')
        const test1 =/([0-9])/;
        const test2=/([!,%,&,@,#,$,^,*,?,_,~])/
        if(fn.val()){
          if(test1.test(fn.val())==true || test2.test(fn.val())==true){
            fn.css({
              'border-bottom':'0.5px solid red',
            });
            fn.parents('.hold').find('.error-message').show().text('Name must be letter only');
               missing=true; 
        }
      }
      const ln=$('.active #lastname')
      if(ln.val()){
        if(test1.test(ln.val())==true || test2.test(ln.val())==true){
          ln.css({
            'border-bottom':'0.5px solid red',
          });
          ln.parents('.hold').find('.error-message').show().text('Name must be letter only');
             missing=true; 
      }
    }
  const city=$('.active #city')
  if(city.val()){
    if(test1.test(city.val())==true || test2.test(city.val())==true){
      city.css({
        'border-bottom':'0.5px solid red',
      });
      city.parents('.hold').find('.error-message').show().text('must be letter only');
         missing=true; 
  }
}
  
const address=$('.active #address')
if(address.val()){
  if(test1.test(address.val())==true || test2.test(address.val())==true){
    address.css({
      'border-bottom':'0.5px solid red',
    });
    address.parents('.hold').find('.error-message').show().text('must be letter only');
       missing=true; 
}
}
      req_field.each(function(){
       if($(this).val()===""){
        $(this).parents('.hold').find('.error-message').show().text('This field is required'); 
         missing=true;
       }
      });
      if(missing==true ){
        req_field.filter(function(){
          return this.value=='';
        }).css({
          'border-bottom':'0.5px solid red',

        });
        return false;
       }
       else{   
           $('.section').find(".active-circle").removeClass("active-circle").next().addClass("active-circle");
           $('.registerInfo').parent().find(".active").removeClass("active").next().addClass("active");
       }
      
   });
   $('input').on('keyup',function(e){
    e.preventDefault();
          $(this).css({
                    'border-bottom':'0.5px solid black'
          });
          $(this).parents(".hold").find(".error-message").text("");
   });
   $('#dpicker').on('change',function(e){
    e.preventDefault();
    $(this).css({
              'border-bottom':'0.5px solid black'
    });
    $(this).parents(".hold").find(".error-message").text("");

});
   $('select').on('change',function(e){
    e.preventDefault();
      $(this).css({
              'border-bottom':'0.5px solid black'
    });
    $(this).parents(".hold").find(".error-message").text("");
});
  $(document).on('click','.eyeOne',function(e){
           e.preventDefault();
           $(this).toggleClass('fa-regular fa-eye-slash').toggleClass('fa-regular fa-eye');
            
            const passw=$('#password');
            passw.attr('type')==='password'? passw.attr('type','text') : passw.attr('type','password')
  });
  $(document).on('click','.eyeTwo',function(e){
    e.preventDefault();
    $(this).toggleClass('fa-regular fa-eye-slash').toggleClass('fa-regular fa-eye');
    
     const comfpassw=$('#confirmpassword');
     comfpassw.attr('type')==='password'? comfpassw.attr('type','text') : comfpassw.attr('type','password')
});

   back.on('click',function(e){
    e.preventDefault();
     if(this.id == 'btnback'){  
       $('.section').find(".active-circle").removeClass("active-circle").prev().addClass("active-circle");
       $('.registerInfo').parent().find(".active").removeClass("active").prev().addClass("active");
          }
   });
});
