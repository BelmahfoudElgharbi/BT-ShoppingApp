//Initialize the Facebook SDK
//See https://developers.facebook.com/docs/reference/javascript/
window.fbAsyncInit = function() {
  FB.init({ 
    appId: '152206278265753',
    status: true,
    cookie: true,
    xfbml: true,
  });

  FB.getLoginStatus(handleStatusChange);
  authUser();
};

// Load the SDK Asynchronously
(function(d){
 var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
 if (d.getElementById(id)) {return;}
 js = d.createElement('script'); js.id = id; js.async = true;
 js.src = "http://connect.facebook.net/en_US/all.js";
 ref.parentNode.insertBefore(js, ref);
}(document));