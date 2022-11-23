const params = [
	"system_version",
	"app_version",
	"kdlc",
	"kss",
	"lib_ver",
	"device_model"
	]
var url = $request.url;
if(url.indexOf("system_version") !=-1){
	for(var i in params){
url = removeUrlParameter(url, params[i]);}
$done({ response: { status: 302, headers: { Location: url } } });
}else {
$done({})
}


function removeUrlParameter(url,parameter){var urlParts=url.split('?');if(urlParts.length>=2){var urlBase=urlParts.shift();var queryString=urlParts.join('?');var prefix=encodeURIComponent(parameter)+'=';var parts=queryString.split(/[&;]/g);for(var i=parts.length;i-->0;){if(parts[i].lastIndexOf(prefix,0)!==-1){parts.splice(i,1);}}
url=urlBase+'?'+parts.join('&');}
return url;}

