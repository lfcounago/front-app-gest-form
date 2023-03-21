import Lang_EN from '../../estaticos/lang/Lang_EN.js'
import Lang_ES from '../../estaticos/lang/Lang_ES.js'
import Lang_GAL from '../../estaticos/lang/Lang_GAL.js'

export function getLangWithCookie(){
    let language = getCookie('lang')

    if(!language){
        const defaultCookie = 'ES'
        setCookie('lang', defaultCookie)
        language = defaultCookie
    }

    return getLangFile(language)
}

export function setCookie(key, value){
    document.cookie = `${key}=${value};path=/`
}

export function getCookie(key){
    const cookies = document.cookie.split(';')

    for(let i=0; i < cookies.length; i++){
        const cookie = cookies[i].split('=')
        /* console.log(cookie[0].trim()) */
        if(cookie[0].trim() === key){
            return cookie[1]
        }
    }

    return null
/*     const defaultCookie = 'ES'
    setCookie('lang', defaultCookie)
    return defaultCookie */
}

export function getLangFile(lang){
    switch(lang){
        case 'ES' :
    	   return Lang_ES
    	break;
        case 'EN' :
    	   return Lang_EN
    	break;
        case 'GAL' :
    	   return Lang_GAL
    	break;
    	default:
    	   return Lang_ES
    }
}