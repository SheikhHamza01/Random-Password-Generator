import React from 'react'
import {useState} from 'react';



export default function UI() {
  let passhtml;
  let pass;
  // let counter=0;
  let userinput;
  var upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower="abcdefghijklmnopqrstuvwxyz";
  var number="0123456789";
  var symbol="!@#$%^&*()_+";
  var selectedchars;
  let length;
  let [password, setpassword] = useState('');
  // let upperclicked = () => {
  //   console.log("upper clicked");

  //   userinput=document.getElementById('bar').value;
  //   while(counter<parseInt(userinput)){
  //     var upperchar=upper[Math.floor(Math.random()*upper.length)];
  //     console.log(upperchar);
  //     pass+=upperchar;
  //     counter++;
  //   }
  //   console.log(pass);
  //   passhtml=document.getElementById('passtaker').innerHTML=`Your Password is : ${pass}`;
  //  }
  //  const [lowclicked, setlowerclicked] = useState(false);
  //  let lowerclicked = () => {
  //    console.log("lower clicked");
    
  //   userinput=document.getElementById('bar').value;
  //   while(counter<parseInt(userinput)){
  //     var lowerchar=lower[Math.floor(Math.random()*lower.length)];
  //     console.log(lowerchar);
  //     pass+=lowerchar;
  //     counter++;
  //   }
  //   passhtml=document.getElementById('passtaker').innerHTML=`Your Password is : ${pass}`;
  //   console.log(lowerchar);
  //  }
  //   const [numclicked, setnumberclicked] = useState(false);
  //  let numberclicked = () => {
  //    console.log("number clicked");
    
  //   userinput=document.getElementById('bar').value;
  //   while(counter<parseInt(userinput)){
  //     var numberchar=number[Math.floor(Math.random()*number.length)];
  //     console.log(numberchar);
  //     pass+=numberchar;
  //     counter++;
  //   }
  //   passhtml=document.getElementById('passtaker').innerHTML=`Your Password is : ${pass}`;
  //   console.log(numberchar);
  //  }
  //   const [symclicked, setsymbolclicked] = useState(false);
  //    let symbolclicked = () => {
  //    console.log("symbol clicked");
    
  //   userinput=document.getElementById('bar').value;
  //   while(counter<parseInt(userinput)){
  //     var symbolchar=symbol[Math.floor(Math.random()*symbol.length)];
  //     console.log(symbolchar);
  //     pass+=symbolchar;
  //     counter++;
  //   }
  //   passhtml=document.getElementById('passtaker').innerHTML=`Your Password is : ${pass}`;
  //   console.log(symbolchar);
  //   }
  let generatepassword = () => {
    userinput=document.getElementById('bar').value;
    length=parseInt(userinput);
    if(length<1)
    {
      alert("Please enter a valid length");
    }
    else{
      for(let i=0;i<length;i++){
        pass=Math.floor(Math.random()*selectedchars.length);
        password+=selectedchars[pass];
      }
      setpassword(password);
      passhtml=document.getElementById('passtaker').innerHTML=`Your Password is : ${password}`;
    }
  }
  let btnclicked = () => {
    console.log("button clicked");
    let selectedoption;
    if (selectedoption===0){
      alert("Please select atleast one option");
    }
    else{
    if (document.getElementById('uppercase').checked){
      selectedchars+=upper;
      selectedoption++;
      

    }
    if (document.getElementById('lowercase').checked){
      selectedchars+=lower;
      selectedoption++;
      
      
    }
    if (document.getElementById('numbers').checked){
      selectedchars+=number;
      selectedoption++;
      

    }
    if (document.getElementById('symbols').checked){
      selectedchars+=symbol;
      selectedoption++;

    }
    generatepassword(selectedchars);
  }
    
    

  }
  return (
    <div className="main-section">
      <div className="container">
        <h2>Password Generator</h2>
        <p id='passtaker'></p>
        <p>Enter the length of password</p>
        <input type="text" id='bar' />
        <p>Choose your option</p>
        <input type="checkbox" id="uppercase" name="uppercase" value="uppercase" />
        <label HTMLfor="uppercase">Uppercase</label>
        <br/>
        <input type="checkbox" id="lowercase" name="lowercase" value="lowercase" />
        <label HTMLfor="lowercase">Lowercase</label>
        <br/>
        <input type="checkbox" id="numbers" name="numbers" value="numbers" />
        <label HTMLfor="numbers">Numbers</label>
        <br/>
        <input type="checkbox" id="symbols" name="symbols" value="symbols" />
        <label HTMLfor="symbols">Symbols</label>
        <br/>
        <button className="btn" onClick={btnclicked} >Generate Password</button>
        
      </div>

    </div>
  )
}
