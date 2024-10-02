import React, { useRef } from 'react'

function TenthMarkSheet() {

    let firstnameInputRef =useRef();
    let lastnameInputRef =useRef();
    let engInputRef =useRef();
    let telInputRef =useRef();
    let hinInputRef =useRef();
    let matInputRef =useRef();
    let sciInputRef =useRef();
    let sociInputRef =useRef();

   
    let engSpanRef =useRef();
    let telSpanRef =useRef();
    let hinSpanRef =useRef();
    let matSpanRef =useRef();
    let sciSpanRef =useRef();
    let sociSpanRef =useRef();
    let resultLblRef=useRef();

    

    let calculateResult =()=>{


        let firstName = firstnameInputRef.current.value;
        let lastName = lastnameInputRef.current.value;
        let engMarks = Number(engInputRef.current.value);
        let telMarks = Number(telInputRef.current.value);
        let hindMarks =Number(hinInputRef.current.value);
        let mathMarks = Number(matInputRef.current.value);
        let sciMarks = Number(sciInputRef.current.value);
        let sociMarks = Number(sociInputRef.current.value);
           
        let result;


        if(engMarks <35 || telMarks <35 || hindMarks <35 || mathMarks <35 || sciMarks <35 || sociMarks <35 ){
           result ="Failed";
        
        }else{
           result ="Passed";

        }

        if(engMarks >35 || telMarks >35 || hindMarks >35 || mathMarks >35 || sciMarks >35 || sociMarks >35 ){
            result ="Passed";
         
         }else{
            result ="Failed";
 
         }

        let totalMarks=engMarks+telMarks+hindMarks+mathMarks+sciMarks+sociMarks;

        resultLblRef.current.innerHTML = (`${firstName} ${lastName} ${result} in Tenth got total marks of ${totalMarks}`);
        console.log("calcualte the results")
    }
   

    let engOnFocus =()=>{
        console.log("eng OnFocus");
        engInputRef.current.style.backgroundColor = "orange"

    }
    let engOnChange =()=>{
        if(engInputRef.current.value >=0 && engInputRef.current.value <=100){
            if(engInputRef.current.value >=35){
                engSpanRef.current.innerHTML ="pass";
                engSpanRef.current.style.backgroundColor ="green"
            
            }else{
                engSpanRef.current.innerHTML ="fail";
                engSpanRef.current.style.backgroundColor ="red"
            
            }
            
        }else{
            engSpanRef.current.innerHTML = "Invalid";
            engSpanRef.current.style.backgroundColor ="purple"
        }
        

        console.log("eng onChange")
    }

    let engOnBlur =()=>{
        console.log("eng onBlur")
        engInputRef.current.style.backgroundColor = "";
    }

  let telOnFocus=()=>{
         console.log("tel onFocus");
                telInputRef.current.style.backgroundColor = "orange"
    }
    let telOnChange = ()=>{
        if(telInputRef.current.value >=0 && telInputRef.current.value <=100){
                 
            if(telInputRef.current.value >=35){
             telSpanRef.current.innerHTML ="pass"
             telSpanRef.current.style.backgroundColor = "green"
            }else{
              telSpanRef.current.innerHTML ="fail"
              telSpanRef.current.style.backgroundColor="red"
            }
        }else{
          telSpanRef.current.innerHTML="Invalid"
          telSpanRef.current.style.backgroundColor ="purple"
        }  
          console.log("on Change")
    }
    let telOnBlur=()=>{
        console.log("tel onBlur")
                telInputRef.current.style.backgroundColor = "";
    }

    let hinOnFocus = ()=>{
        console.log("hin OnFocus");
        hinInputRef.current.style.backgroundColor = "orange";
        

    }
     let  hinOnChange = ()=>{
      if(hinInputRef.current.value  >=0 && hinInputRef.current.value <=100){
               
          if(hinInputRef.current.value >=35){
           hinSpanRef.current.innerHTML ="pass"
           hinSpanRef.current.style.backgroundColor = "green"
          }else{
            hinSpanRef.current.innerHTML ="fail"
            hinSpanRef.current.style.backgroundColor="red"
          }
      }else{
        hinSpanRef.current.innerHTML="Invalid"
        hinSpanRef.current.style.backgroundColor ="purple"
      }

  
  console.log("hin onChange")

  }

   let  hinOnBlur=()=>{
      console.log("hin onBlur")
      hinInputRef.current.style.backgroundColor = "";
    }

    let matOnFocus = ()=>{
        console.log("mat onFocus");
        matInputRef.current.style.backgroundColor = "orange"

    }
    let matOnChange = ()=>{
        if(matInputRef.current.value >=0 && matInputRef.current.value <=100){
                 
            if(matInputRef.current.value >=35){
             matSpanRef.current.innerHTML ="pass"
             matSpanRef.current.style.backgroundColor = "green"
            }else{
              matSpanRef.current.innerHTML ="fail"
              matSpanRef.current.style.backgroundColor="red"
            }
        }else{
          matSpanRef.current.innerHTML="Invalid"
          matSpanRef.current.style.backgroundColor ="purple"
        }
        console.log("mat onChange")

    }

    let matOnBlur = ()=>{
        console.log("mat onBlur")
        matInputRef.current.style.backgroundColor = "";
    }

    let sciOnFocus = ()=>{
        console.log("sci onFocus");
                sciInputRef.current.style.backgroundColor = "orange"
    }
    let sciOnChange =()=>{
        if(sciInputRef.current.value >=0 && sciInputRef.current.value <=100){
                 
            if(sciInputRef.current.value >=35){
             sciSpanRef.current.innerHTML ="pass"
             sciSpanRef.current.style.backgroundColor = "green"
            }else{
              sciSpanRef.current.innerHTML ="fail"
              sciSpanRef.current.style.backgroundColor="red"
            }
        }else{
          sciSpanRef.current.innerHTML="Invalid"
          sciSpanRef.current.style.backgroundColor ="purple"
        }
        console.log("sci onChange")
    }
    let sciOnBlur = ()=>{
        console.log("sci onBlur")
        sciInputRef.current.style.backgroundColor = "";
    }


    let sociOnFocus = ()=>{
        console.log("soci onFocus");
                sociInputRef.current.style.backgroundColor = "orange"

    }
    let sociOnChange = ()=>{
        if(sociInputRef.current.value >=0 && sociInputRef.current.value <=100){
                 
            if(sociInputRef.current.value >=35){
             sociSpanRef.current.innerHTML ="pass"
             sociSpanRef.current.style.backgroundColor = "green"
            }else{
              sociSpanRef.current.innerHTML ="fail"
              sociSpanRef.current.style.backgroundColor="red"
            }
        }else{
          sociSpanRef.current.innerHTML="Invalid"
          sociSpanRef.current.style.backgroundColor ="purple"
        }
        console.log("soci onChange")

    }

    let sociOnBlur = ()=>{
        console.log("soci onBlur")
        sociInputRef.current.style.backgroundColor = "";}
    

  return(





    <div>
      <form>
        <div>
            <label>First Name</label>
            <input ref={firstnameInputRef}
             
             onFocus={()=>{
                 console.log("firstname onFocus");
                    firstnameInputRef.current.style.backgroundColor = "orange"
                 }}
                 

                onBlur={()=>{
                    console.log("firstname onBlur")
                    firstnameInputRef.current.style.backgroundColor = "";
             
                 }}
           

               
             
                
            ></input>
            <span></span>
        </div>
       
        <div>
            <label>Last Name</label>
            <input ref={lastnameInputRef}
             onFocus={()=>{
                console.log("lastname onFocus");
                lastnameInputRef.current.style.backgroundColor = "orange"
             }}


             onBlur={()=>{
                console.log("lastname onBlur")
                lastnameInputRef.current.style.backgroundColor = "";
            }}
            
            ></input>
            <span></span>
        </div>
        <div>
            <label>English</label>
            <input type='Number' ref={engInputRef}
             onFocus={()=>{
               engOnFocus();

             }}
             onChange={()=>{
               engOnChange();

                }}

                onBlur={()=>{
                   engOnBlur();
                }}
             ></input>
            <span ref={engSpanRef}></span>
        </div>
        
        <div>
            <label>Telugu</label>
            <input type='Number' ref={telInputRef}
             onFocus={()=>{
               telOnFocus();
             }}

             onChange={()=>{
                telOnChange();
               
             }}

             onBlur={()=>{
               telOnBlur();
             
            }}
            ></input>
            <span ref={telSpanRef}></span>
        </div>
        <div>
            <label>Hindi</label>
            <input type='Number' ref={hinInputRef} 
          onFocus={()=>{
           hinOnFocus();
       }}
      onChange={()=>{
       
         hinOnChange();
   

    }}

    onBlur={()=>{
        hinOnBlur();
      }}

       ></input>
            <span ref={hinSpanRef}></span>
        </div>
        <div>
            <label>Maths</label>
            <input type='Number' ref={matInputRef} 
            onFocus={()=>{
                matOnFocus();

             }}
             onChange={()=>{
               matOnChange();
                }}

                onBlur={()=>{
                   matOnBlur();
                }}
            
            ></input>
            <span ref={matSpanRef}></span>
        </div>
        <div>
            <label>Science</label>
            <input type='Number' ref={sciInputRef} 
            
            onFocus={()=>{
                sciOnFocus();

             }}
             onChange={()=>{
                sciOnChange();

                }}

                onBlur={()=>{
                   sciOnBlur();
                }}
            
            ></input>
            <span ref={sciSpanRef}></span>
        </div>
        <div>
            <label>Social</label>
            <input type='Number' ref={sociInputRef} 
            
            onFocus={()=>{
               sociOnFocus();
             }}
             onChange={()=>{
                sociOnChange();
                }}

                onBlur={()=>{
                   sociOnBlur();
                }}
            ></input>
            <span ref={sociSpanRef}></span>
        </div>
     
    
    <button type='button' onClick={()=>{

        calculateResult();

       }}>Calculate Results</button>
    
    </form>
    </div>
    
  )
    }



export default TenthMarkSheet
