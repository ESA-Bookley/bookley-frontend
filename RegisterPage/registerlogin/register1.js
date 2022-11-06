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
       const phone=$('#phonenumber').val();
       const email=$('#email').val();
       console.log(/^\d{8}$/.test(phone)==false||/^\[A-Za-z]$/.test(phone)==true);
       console.log(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email)==true)
       req_field.css({
                  'background':'initail'
       });
      missing=false;
      req_field.each(function(){
       if($(this).val()===""){
         missing=true;
       }
      });
      if(missing==true){
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
