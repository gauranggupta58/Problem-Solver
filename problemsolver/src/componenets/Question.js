import React, { useState } from 'react'




export default function Question() {
    
  const [data,setdata] = useState({
        prompt:"",
        answer: ""
    })
    // const [answer, setAnswer] = useState("");

  // var answer ="";
    const handleSubmit = async(e)=>{
     e.preventDefault(); 
     const response =  await fetch("http://localhost:5000/solve?ques="+data.prompt)
     
     const d = await response.json();
     console.log(d.answer);
     setdata({...data, answer: d.answer});
    }

    const onChange =(event)=>{
      setdata({...data,prompt:event.target.value})

    }
    return (
    
    <div>
        
        <div className='container'style={{marginTop:50,marginBottom:50}}>
        <blockquote className="blockquote">
        <p className='h1 text-primary'style={{fontStyle:'italic',fontFamily:'cursive'}}>Enter Your Question Below</p>
        </blockquote>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="mb-3 container">
        <textarea className="form-control" id="questionTextarea" rows="3" onChange={onChange}></textarea>
        </div>
        <button type="submit" className="btn btn-primary"style={{marginTop:10}}>Submit</button>
        </form>
        <div className='container'style={{marginTop:20}}>
        <blockquote className="blockquote">
        <p className='text-dark h2 '>{data.answer}</p>
        </blockquote>
        </div>
    </div>
  )
}
