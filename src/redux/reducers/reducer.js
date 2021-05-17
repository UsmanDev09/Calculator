// if action.index === 1 then multiply divide with 1 else (previousNumber previousOperator currentNumver)


function clearScreen() {
    document.getElementById("output").innerHTML = " ";
  
}


function appendSymbolToOutputScreen(char){
    document.getElementById("output").innerHTML = char;
}

function calculate(operator,valueOne,valueTwo){
    let intValueOne = parseInt(valueOne);
    let intValueTwo = parseInt(valueTwo);
    
    let result;
        switch(operator){
            case '+':
               return( intValueOne + intValueTwo)
            
            case '-':
               result = intValueTwo - intValueOne;
               
               return result; 
            case '*':
                console.log("?mul",intValueOne * intValueTwo)
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
    
        appendSymbolToOutputScreen( action.operator);
        action.previousValue && action.currentValue === ""  ? 
        finalResult = 0: 
        finalResult = action.index !== 1 ? calculate(state.operator === "="? action.operator : state.operator, state.operator === "=" ? 0:state.currentValue,state.result):calculate(action.operator,( state.currentValue),0) ;
      
    return(  
            {
                ...state,
                previousValue : state.previousValue ,
                currentValue : state.previousValue && state.currentValue === "" ? action.operator: "",    
                operator : action.operator,
                result: finalResult,
                index : action.index
              
            }
    )

    case "SUBTRACT":
        
        appendSymbolToOutputScreen( action.operator);
        finalResult = action.index !== 1 ? calculate(state.operator === "="? action.operator : state.operator,state.operator === "=" ? 0:state.currentValue,state.result):calculate(action.operator,0,( state.currentValue)) ;
    return(
            {
                ...state,
                previousValue : state.previousValue ,
                currentValue : state.previousValue === "" && state.currentValue === "" ? action.operator: "", 
                result : finalResult,
                operator : action.operator,
                index : state.previousValue === "" && state.currentValue === "" ? 0:action.index
            }
    )

    case "MULTIPLY":
        appendSymbolToOutputScreen(action.operator)
        finalResult = action.index !== 1 ? calculate(state.operator === "="? action.operator : state.operator,state.operator === "=" ? 1:state.currentValue,state.result):calculate(action.operator,1,( state.result)) ;
        console.log("s",calculate(action.operator,( state.currentValue),state.result));
    return(
            {
               ...state,
                previousValue :state.previousValue  ,    
                currentValue : action.previousValue && action.currentValue === "" ? action.operator: "", 
                result : finalResult,
                operator : action.operator,
                index : action.index
            }
        
    )

    case "DIVIDE":
     
        appendSymbolToOutputScreen(action.operator)
        finalResult = action.index !== 1 ? calculate(state.operator === "="? action.operator : state.operator,state.operator === "=" ? 1:state.currentValue,state.result):calculate(action.operator,1,( state.currentValue)) ;
    return(
            {
                ...state,
                previousValue :state.previousValue  ,    // on output screen
                currentValue : action.previousValue && action.currentValue === "" ? action.operator: "", 
                result : finalResult,
                operator : action.operator,
                index : action.index
            }
    )

    case "EQUAL":
       
       
       
        finalResult =  calculate(state.operator,( state.currentValue),state.result) ;
        appendSymbolToOutputScreen(finalResult)
    return(
            {
                ...state,
                operator: '=',
                operatorClicked : true,
                result : finalResult,
                
                currentValue : 0
            }
        
    )

    case "CLEAR":
        clearScreen();
    return(
        {
            ...state,
            previousValue:"",
            currentValue:"",
            operator:"",
            result:0,
            index:0
        }
        
    )

    case "DIGITS":
        console.log("store.result",state.result);
          
            appendSymbolToOutputScreen( state.currentValue + action.cur );

            
        return(
            {
                currentValue : state.currentValue +  action.cur , //on input screen
                
                operator: state.operator,
                operatorClicked: action.operatorClicked,
                result : (state.operator === "" ) ?  (state.currentValue + action.cur)    : state.result,
                
                index:action.index,
                previousValue : action.index> 0? state.result: "" 
            } 
    )

    default:

        return state;
}
}

export default reducer;