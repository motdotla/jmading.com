$(document).ready(function(){
 $('a').click(function(){
  $('html, body').animate({ 
                 scrollTop: $($(this).attr("href"))
                 .offset().top }, 1000);
	return false;
 });

 // uses example jquery plugin
 $('input#login_field').example('username');
 $('input#password_field').example('password');

 // put login form in memory to speed things up
 var login_form = $('#login_form')
 // start with login_form hidden
 login_form.hide();
 // toggle login form
 $('#nav_login').click(function() { 
   login_form.slideToggle(); 
  });
  // catch submit of login form and send incorrect username/password alert out
  login_form.submit(function() {
    alert('Incorrect username and password. Try again.');
  });
  
 
});

