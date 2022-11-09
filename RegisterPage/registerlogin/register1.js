$(document).ready(function(){
    const next=$( '.buttonSubmit #btnnext');
    const back=$('.buttonSubmit #btnback');
    const login=$('.buttonGo #btnlogin');
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
       req_field.css({
           'border-bottom':'initail'
       });
      missing=false;
      const email = $('.active #email');
      if(email.val()) {
        valid_email = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email.val()) == true;
 
        if(!valid_email) {
          email.css({
            'border-bottom': '0.5px solid red',
          });
          missing = true;
        }
 
      }
 
      const phone = $('.active #phonenumber');
      if(phone.val()) {
        if (/^\d{8}$/.test(phone.val()) == false || /^\[A-Za-z]$/.test(phone.val()) == true) {
          phone.css({
              'border-bottom': '0.5px solid red'
          });
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
              missing=true;    
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
               if(comfpassw!=passw){
                alert('not matched');
              }
               missing=true;    
         }
        }
       
      req_field.each(function(){
       if($(this).val()===""){
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
   back.on('click',function(e){
    e.preventDefault();
     if(this.id == 'btnback'){  
       $('.section').find(".active-square").removeClass("active-square").prev().addClass("active-square");
       $('.registerInfo').parent().find(".active").removeClass("active").prev().addClass("active");
          }
   });
   $('.signIn').on('click',function(e){
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
