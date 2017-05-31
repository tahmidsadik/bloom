/* global FB */

window.fbAsyncInit = function() {
  FB.init({
    appId      : '462014320797541',
    cookie     : true,
    xfbml      : true,
    version    : 'v2.8'
  });
  FB.AppEvents.logPageView();

  FB.getLoginStatus(function (response) {
    // user is logged in but not yet authorized our app. A dialog is shown to
    // the user to authorize the FB app
    if(response.status === 'not_authorized') {
      FB.login();
    }

    console.log(response);
  });
};

(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);

}(document, 'script', 'facebook-jssdk'));
