export function reducer(state={result:''},action){
    switch(action.type){
        case 'Reset':
            return {
                result:""
            }
        case 'Calculate':
                try {  
                  let  result= (eval(action.result) || "" ) + ""
                    return {
                        result:result
                    }
                } catch (error) {
                        return {
                            result:"error"
                        }
                }
        case 'Click':
            return {
                result: action.result + action.button
            }
            case 'Backspace':
                return {
                    result: action.result.slice(0, -1)
                }
                default:
            return state;
    }

}