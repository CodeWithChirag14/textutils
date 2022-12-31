
import React from 'react'


export default function About(props) {
  

    // const[myStyle,setMyStyle]=useState(
    //     {

    //         color: 'black',
    //         backgroundColor: 'white'
    //     }
    // )

    // const [btnText,setBtnText] = useState("Enable dark mode")

    // const toggleStyle=()=>
    // {
    //     if(myStyle.color ==='white')
    //     {
            
    //         setMyStyle(
    //             { 
                    
    //                 color: 'black',
    //                 backgroundColor: 'white',
    //                 border: '1px solid white'
                   

    //             }
    //         )
    //         setBtnText('Enable dark mode')
            
    //     }
    //     else
    //     {
           
    //         setMyStyle(
    //             { 
                    
    //                 color: 'white',
    //                 backgroundColor: 'black'

    //             }
    //         )
    //         setBtnText('Enable light mode')
          
             
    //     }   

    // }

    let myStyle={
        color:props.mode==='dark'?'white':'#042743',
        backgroundColor: props.mode==='dark'?'rgb(36 74 104)':'white',
       
    }
    
   return (

   
    <div className="container ">
        <h1 className="my-3" style={{ color:props.mode==='dark'?'white':'#042743'}}>About Us</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze your text</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
               Textutils gives you a way to analyze your text quickly and effectively.Be it word count,character count or 
               converting into UpperCase or LowerCase
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button"  style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              TextUtils is a free character counter tool that provides instant character count & word count statistics for a given
              text.TextUtils reports the number of words and characters.Thus it is suitable for writing text with word/character limit.   
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatible</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                This word counter software works in any browsers such as chrome , safari , microsoft edge , opera.
                It suits to count characters in Facebook, Blogs, Books ,Excel Document, Pdf Document, Essays, etc.
            </div>
            </div>
        </div>
      </div>
      {/* <button className="btn btn-primary my-2" onClick={toggleStyle}>{btnText}</button> */}
      
    </div>
  )
}