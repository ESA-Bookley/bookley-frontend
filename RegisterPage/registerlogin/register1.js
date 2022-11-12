$(document).ready(function(){
    const next=$( '.buttonSubmit #btnnext');
    const back=$('.buttonSubmit #btnback');
    const login=$('.buttonGo #btnlogin');
    /*$('.messageErorr').hide();*/
    console.log(login);
    /*console.log(next);
    console.log(back);
    console.log( $('.section').find(".active-square").removeClass("active-square").next().addClass("active-square"));
    console.log( $('.registerInfo').parent().find(".active").removeClass("active").next().addClass("active"));*/
   next.on('click',function(e){
       e.preventDefault();
       const req_field=$('.active :required');
       /*const phone=$('#phonenumber').val();
       console.log(phone);
       console.log(/^\d{8}$/.test(phone)==false||/^\[A-Za-z]$/.test(phone)==true);*/
       /*const email=$('#email').val();
       const missingEmail=/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
       console.log(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email)==true);*/
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
              /*passw.parents('.hold').find('.error-message').show().text('Password must be at least 8 chars and contain at least 1 digit, 1 uppercase character, 1 lowercase character, and 1 special character');
                 missing=true; 
              if( testpass1.test(passw.val())==false){
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
             // passw.parents('.hold').find('.error-message').show().text('Password must be at least 8 chars and contain at least 1 digit, 1 uppercase character, 1 lowercase character, and 1 special character');   
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
           $('.section').find(".active-square").removeClass("active-square").next().addClass("active-square");
           $('.registerInfo').parent().find(".active").removeClass("active").next().addClass("active");
       }
      
   });
   $('input').on('keyup',function(){
          $(this).css({
                    'border-bottom':'0.5px solid black'
          });
          $(this).parents(".hold").find(".error-message").text("");
   });
   $('input').on('change',function(){
    $(this).css({
              'border-bottom':'0.5px solid black'
    });
});
   $('select').on('change',function(){
      $(this).css({
              'border-bottom':'0.5px solid black'
    });
    $(this).parents(".hold").find(".error-message").text("");
});
  $(document).on('click','.eyeOne',function(e){
           e.preventDefault();
            const passw=$('#password');
            passw.attr('type')==='password'? passw.attr('type','text') : passw.attr('type','password')
  });
  $(document).on('click','.eyeTwo',function(e){
    e.preventDefault();
     const comfpassw=$('#confirmpassword');
     comfpassw.attr('type')==='password'? comfpassw.attr('type','text') : comfpassw.attr('type','password')
});
   back.on('click',function(e){
    e.preventDefault();
     if(this.id == 'btnback'){  
       $('.section').find(".active-square").removeClass("active-square").prev().addClass("active-square");
       $('.registerInfo').parent().find(".active").removeClass("active").prev().addClass("active");
          }
   });
   
  /*$('.signIn').on('click',function(e){
    e.preventDefault();
    $('.registerContainer').fadeOut(100);
   $('.containerLogin').fadeIn(100);
});
$('.signUp').on('click',function(e){
  e.preventDefault();
  $('.containerLogin').fadeOut(100);
 $('.registerContainer').fadeIn(100);
});
 /*login.on('click',function(e){
  e.preventDefault();
  $('.registerContainer').fadeOut(100);
 $('.containerLogin').fadeIn(100);
});*/ 
});
