import React, {Component,useState} from 'react';
import styles from './Main.module.css';
import store from '../../redux/store';
class Main extends Component{
    constructor(props){
        super(props);
        
        this.clickHandler = this.clickHandler.bind(this);
        this.state = {
            inputScreen: ''
        } 
    }
    
    
    clickHandler( char){
        switch(char){
            case '+':
                console.log(store.getState())
             return (store.dispatch({
                     type: "ADD",
                        cur: "",
                        operator : char,
                        index: store.getState().index + 1
                    }))

            case '-':
                    (store.dispatch({
                     type: "SUBTRACT",
                        operator: char,
                        cur : "",
                        index : store.getState().index  +1
                    }))
                    break;
            case '*':
                     (store.dispatch({
                     type: "MULTIPLY",
                        operator: char,
                        cur : "",
                        index: store.getState().index + 1
                    }))
                    break;
            case '/':
                    (store.dispatch({ 
                     type: "DIVIDE",  
                        operator: char,
                        cur : "",
                        index: store.getState().index + 1
                    }))
                    break;
            case '=':
                
                    (store.dispatch({
                        type: "EQUAL",
                        cur: "",
                        operator: char
                       
                    }))
                    break;
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case ".":
                store.dispatch({
                    type: "DIGITS",
                    prev: char,
                    cur : char,
                    operatorClicked: false  ,
                    index : store.getState().index          
                })
            break;
              
            default:
                return null;
            }
           
        }
        
    clearScreen(digit){
       this.setState({
           inputScreen : digit
       })
       store.dispatch(
           {
               type: "CLEAR"
           }
       )
    }
    changeInputScreen(digit){
        if(digit === "="){
        this.setState({
            inputScreen: this.state.inputScreen + digit + store.getState().result
        })
        }else{
        this.setState({
            inputScreen: this.state.inputScreen + digit
        })
        }   
    }
    render() {
        
        return(
            <div id = {styles.cover} >
               <input  value = {this.state.inputScreen} style = {{ backgroundColor: 'black', color: 'white', gridArea: 'output'}}>
                   
               </input>
               <div style = {{ backgroundColor: 'black', color: 'white', gridArea: 'input'}}>
                   <p id = "output"  style = {{direction:"rtl"}}></p>
               </div>
               <button  id = {styles.clear}  onClick = {() => this.clearScreen("")}>AC</button>
               <button id = {styles.zero} onClick = {() => {
                   this.clickHandler('0')
                    this.changeInputScreen('0')
                }}>0</button>
               <button id = {styles.one} onClick = {() => {
                   this.clickHandler('1')
                   this.changeInputScreen('1')   
                }} >1</button>
               <button id = {styles.two} onClick = {() =>{
                    this.clickHandler('2')
                    this.changeInputScreen('2')    
                }}>2</button>
               <button id = {styles.three} onClick = {() => {
                   this.clickHandler('3')
                   this.changeInputScreen('3')
                }}>3</button>
               <button id = {styles.four} onClick = {() => {
                   this.clickHandler('4')
                   this.changeInputScreen('4')
                }}>4</button>
               <button id = {styles.five} onClick = {() =>{
                   this.clickHandler('5')
                   this.changeInputScreen('5')   
                }}>5</button>
               <button id = {styles.six} onClick = {() => {
                   this.clickHandler('6')
                   this.changeInputScreen('6')
                }}>6</button>
               <button id = {styles.seven} onClick = {() => {
                   this.clickHandler('7')
                   this.changeInputScreen('7')
                }}>7</button>
               <button id = {styles.eight} onClick = {() =>{
                    this.clickHandler('8')
                    this.changeInputScreen('8')    
                }}>8</button>
               <button id = {styles.nine} onClick = {() =>{
                   this.clickHandler('9')
                   this.changeInputScreen('9')
               }}>9</button>
               <button id = {styles.decimal} onClick = {() =>{
                   this.clickHandler('.')
                   this.changeInputScreen('.')   
                }}>.</button>
               <button id = {styles.equal} onClick = {() => {
                   this.clickHandler('=')
                   this.changeInputScreen('=')
                }}>=</button>
               <button id = {styles.add} onClick = {() =>{
                   this.clickHandler('+')
                   this.changeInputScreen('+')
                }}>+</button>
               <button id = {styles.subtract} onClick = {() =>{
                   this.clickHandler('-')
                   this.changeInputScreen('-')
                }}>-</button>
               <button id = {styles.multiply} onClick = {() =>{
                   this.clickHandler('*')
                   this.changeInputScreen('*')
                }}>*</button>
               <button id = {styles.divide} onClick = {() =>{
                   this.clickHandler('/')
                   this.changeInputScreen('/')   
                }}>/</button>
               
            </div>
        )
    }
}

export default Main