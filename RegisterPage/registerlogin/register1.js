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
       var req_field=$('.active :required');
       var phone=$('#phonenumber').val();
       console.log(/^\d{8}$/.test(phone)==false||/^\[A-Za-z]$/.test(phone)==true);
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
          'border': '0.5px solid red',

        }); 
        if(/^\d{8}$/.test(phone)==false||/^\[A-Za-z]$/.test(phone)==true){
          
        }
        
        return false;
      }
       else{
         
          $('.section').find(".active-square").removeClass("active-square").next().addClass("active-square");
           $('.registerInfo').parent().find(".active").removeClass("active").next().addClass("active");
       }
   });
   login.on('click',function(e){
       e.preventDefault();
       $('.registerContainer').fadeOut(100);
      $('.containerLogin').fadeIn(100);
        

   });
   back.on('click',function(e){
     e.preventDefault();
      if(this.id == 'btnback'){  
        $('.section').find(".active-square").removeClass("active-square").prev().addClass("active-square");
        $('.registerInfo').parent().find(".active").removeClass("active").prev().addClass("active");
           }
    }); 
});