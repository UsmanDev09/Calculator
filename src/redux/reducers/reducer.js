


function clearScreen() {
    document.getElementById("input").innerHTML = " ";
    document.getElementById("output").innerHTML = " ";
}

function appendSymbolToInputScreen(char){
    document.getElementById("input").innerHTML = char;
    
}

function appendSymbolToOutputScreen(char){
    document.getElementById("output").innerHTML = char;
}

function calculate(operator,valueOne,valueTwo){
    let intValueOne = parseInt(valueOne);
    let intValueTwo = parseInt(valueTwo);
    console.log("intValueOne",intValueOne);
    console.log("intValueTwo",intValueTwo);
    let result;
        switch(operator){
            case '+':
               return( intValueOne + intValueTwo)
            
            case '-':
               result = intValueTwo - intValueOne;
               
               return result; 
            case '*':
                result = intValueOne * intValueTwo;
               
                return result; 
            case '/':
                result = intValueTwo / intValueOne;
               
                return result; 
            default:
                return null;
       }
    
    }

const reducer = (state, action) => {
    let finalResult;
    switch(action.type){
     
    case "ADD":
        appendSymbolToInputScreen(action.operator);
        appendSymbolToOutputScreen(state.previousValue + action.operator);
        finalResult = action.index !== 1 ? calculate(state.operator,( state.currentValue),state.result):calculate(action.operator,( state.currentValue),0) ;
        console.log(action.index);
    return(  
            {
                previousValue :state.previousValue + action.operator,
                currentValue : "",    
                operator : action.operator,
                result: finalResult,
                index : action.index
              
            }
    )

    case "SUBTRACT":
        appendSymbolToInputScreen(action.operator);
        appendSymbolToOutputScreen(state.previousValue + action.operator);
        finalResult = action.index !== 1 ? calculate(state.operator,( state.currentValue),state.result):calculate(action.operator,0,( state.currentValue)) ;
    return(
            {
                previousValue :state.previousValue + action.operator ,
                currentValue : "",
                result : finalResult,
                operator : action.operator,
                index : action.index
            }
    )

    case "MULTIPLY":
        appendSymbolToInputScreen('*');
        finalResult = action.index !== 1 ? calculate(state.operator,( state.currentValue),state.result):calculate(action.operator,1,( state.currentValue)) ;
   
    return(
            {
                previousValue :state.previousValue + action.operator ,    // on output screen
                currentValue : "",
                result : finalResult,
                operator : action.operator,
                index : action.index
            }
        
    )

    case "DIVIDE":
     
        appendSymbolToInputScreen('/');
        finalResult = action.index !== 1 ? calculate(state.operator,( state.currentValue),state.result):calculate(action.operator,1,( state.currentValue)) ;
    return(
            {
                previousValue :state.previousValue + action.operator ,    // on output screen
                currentValue : "",
                result : finalResult,
                operator : action.operator,
                index : action.index
            }
    )

    case "EQUAL":
      
        appendSymbolToInputScreen(state.result);
        finalResult = action.index !== 1 ? calculate(state.operator,( state.currentValue),state.result):calculate(action.operator,0,( state.currentValue)) ;
    return(
            {
                operator: '=',
                result : finalResult
            }
        
    )

    case "CLEAR":
        clearScreen();
    return(
        {
            ...state,
        }
        
    )

    case "DIGITS":
        console.log("store.result",state.result);
            appendSymbolToInputScreen( state.previousValue+action.prev );
            appendSymbolToOutputScreen( state.previousValue + action.prev );
            
        return(
            {
                currentValue : state.currentValue +  action.cur , //on input screen
                previousValue : state.previousValue + action.prev ,
                operator: state.operator,
                operatorClicked: action.operatorClicked,
                result : (state.operator === "" ) ?  (state.currentValue + action.cur)    : state.result,
                index:action.index
            } 
    )

    default:

        return state;
}
}

export default reducer;