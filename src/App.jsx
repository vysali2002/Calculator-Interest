
import { TextField,Stack,Button } from '@mui/material'
import './App.css'
import { useState } from 'react'


function App() {
  const[interest,setInterest]=useState(0)
  const [principle,setPrinciple]=useState(0)
  const[rate,setRate]=useState(0)
  const[year,setYear]=useState(0)

  const [principleAmountValid,setPrincipleAmountValid]=useState(true)
  
  const [rateAmountValid,setRateAmountValid]=useState(true)
  
  const [yearAmountValid,setYearAmountValid]=useState(true)

  const handleReset=()=>{
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    principleAmountValid(true)
    rateAmountValid(true)
    yearAmountValid(true)
  }
  const handleCalculate=()=>{
    if(principle&&rate&&year)
    {
     setInterest(principle*year*rate/100)
    }
    else{
      alert("Please fill the form completely")
    }
  }


  const handleValidation=(e)=>{
    const{value,name}=e
    console.log(value,name);
    if(!!value.match(/^[0-9]*.?[0-9]+$/))
    {
      //valid
      if(name=="principle")
      {
        setPrinciple(value)
        setPrincipleAmountValid(true)
      }
      else if(name=="rate")
      {
        setRate(value)
        setRateAmountValid(true)
      }
      else{
        setYear(value)
        setYearAmountValid(true)

      }
    }else{
    // invalid
    if(name=="principle")
      {
        setPrinciple(value)
        setPrincipleAmountValid(false)
      }
      else if(name=="rate")
      {
        setRate(value)
        setRateAmountValid(false)
      }
      else{
        setYear(value)
        setYearAmountValid(false)
      }

  }
}


  return (
    <div style={{width:'100%',minHeight:'100vh'}} className='d-flex justify-content-center align-items-center bg-dark p-5'>
     <div style={{width:'600px'}} className='bg-light p-5 rounded'>
     <h3>Simple Interest Calculator</h3>
     <p>Calculate your simple interest Easily</p>
     <div className="d-flex justify-content-center align-items-center bg-warning p-2
      rounded shadow flex-column text-light">
     <h1> ₹ {interest}</h1>
     <p className='fw-bolder'>Total Simple Interest</p>
     </div>
     <form className='mt-5'>
      {/*Principle */}
      <div className="mb-3">
      <TextField  className='w-100' id="outlined-basic-principle" label="₹ Principle Amount" variant="outlined" name='principle'  value={principle || ""} onChange={e=>handleValidation(e.target)} />
      </div>
      {!principleAmountValid && <div className="InValid text-danger mb-3">* Invalid Principle Amount</div>}
      {/*Rate */}
      <div className="mb-3">
      <TextField  className='w-100' id="outlined-basic-rate" label="₹ Rate of interest (p.a) %" variant="outlined" name='rate' value={rate || ""} onChange={e=>handleValidation(e.target)}/>
      </div>
      {!rateAmountValid && <div className="InValid text-danger mb-3">* Invalid Principle Amount</div>}

      {/* time */}
       <div className="mb-3">
      <TextField  className='w-100' id="outlined-basic-time" label="₹ Time period (Yr)" variant="outlined" name='year' value={year || ""} onChange={e=>handleValidation(e.target)} />
      </div>
      {!yearAmountValid && <div className="InValid text-danger mb-3">* Invalid Principle Amount</div>}

      {/* Buttons */}
      <Stack direction="row" spacing={2}>
      <Button onClick={handleCalculate} disabled={!principleAmountValid||!rateAmountValid||!yearAmountValid} style={{width:'50%',height:'70px'}}  className='bg-dark' variant="contained">Calculate</Button>
      <Button onClick={handleReset} style={{width:'50%',height:'70px'}}  variant="outlined">Reset</Button>
      </Stack>
     </form>
     </div>
    </div>
  )
}

export default App
