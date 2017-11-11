import * as  config from './config';

export  function get_default_checked_language(){
	var result=[];
	config.languages.forEach((item)=>{
		if(item.checked){
			result.push(item);
		}
	});
	return result;
}

export function get(url){

	return fetch(url).then((res)=>res.json());
}

export function post(url,body){
        const options=_.extends(config.header,{
                body:JSON.stringify(body)
        })
        return fetch(url,options).then((response)=>response.json());
}

export function checkIsCache(time){
	// if(time>)
}