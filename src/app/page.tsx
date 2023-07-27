"use client"
import axios from 'axios'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ChangeEvent, ChangeEventHandler, useState } from 'react'


export default function Home() {
  const[signupform,setsignupform]=useState(false)
  const router =useRouter()

  const [loginData, setloginData] = useState({
    name:'',
    email: '',
    password: ''
  })
  const [signupData, setSignupData] = useState({
    email: '',
    password: ''
  })

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setloginData({ ...loginData, [event.target.name]: event.target.value })
  }

  async function signuphandler(event: { preventDefault: () => void }){
    console.log('signup handler')
    event.preventDefault()
    console.log(signupform)
    if(signupform==false)
    setsignupform(true)
    else{
      await axios.post('/api/signup', loginData)
      .then(res=>{
        console.log(res.data)
        setloginData({
          name:'',
          email: '',
          password: ''
        })
        setsignupform(false)
      })
      .catch(err=>{
        console.log(err)
      })
    }
  }


  async function submithandler(event: { preventDefault: () => void }) {
    console.log('login handler')
    event.preventDefault()
    if(signupform)
    setsignupform(false)
    else if(!signupform)
    {
       await axios.post('/api/login', loginData)
    .then(res=>{
      console.log(res.data)
      if(res.data.success)
      router.push('/dashboard')
    
    })
    .catch(err=>{
      console.log(err)
    })
  }
  }

  return (
    <main className="sm:w-[1440px] sm:h-[1024px] p-10 bg-[#F5F5F5] flex mx-auto">
      <div className='sm:w-[900px] sm:h-[564px] mx-auto  bg-white sm:flex my-auto'>
        <Image src={'/rectangle.png'} alt='no' width={450} height={564} className=' ' />
        <form onSubmit={submithandler} className='p-[40px] text-black  mx-auto w-full '>
         
          <h2 className='text-[22px] font-[600]'>{signupform?'Signup':'Login'}</h2>
          <small className={`block text-[16px]`} >Donec tortor quam at duis tortor.</small> <br />

          {signupform && <div className='mt-[10px] h-fit '>
            <label htmlFor="name" className=' text-[#525252]'>Name</label>
          <input type="text" name='name' value={loginData.name} onChange={handleChange} placeholder='Enter your name' className='w-full p-1 rounded-md border-slate-200 border' />
          </div>} <br />
          <label htmlFor="mail" className='mt-[20px]  text-[#525252]'>E-Mail</label>
          <input type="email" name='email' value={loginData.email} onChange={handleChange} placeholder='Enter your email' className='w-full p-1 rounded-md border-slate-200 border' />
          <label htmlFor="password" className='mt-[20px] block text-[#525252]'>Password</label>
          <input type="password" placeholder='Enter your password' value={loginData.password} name='password' onChange={handleChange} className='w-full p-1 rounded-md border-slate-200 border' />
         {!signupform &&  <p className=' text-right mt-[20px] text-[14px] text-[#525252] font-[600]'>Forget password?</p>}
          <button type='submit' className={`w-full p-2 font-semibold ${signupform?'border-slate-500':'bg-blue-600 text-white'}  border rounded-md mt-[15px]`}>Login</button>

          <p className='flex items-center mt-[40px] gap-1 '><span className='bg-slate-400 h-[1px] w-full block'></span><span>or</span><span className='bg-slate-400 h-[1px] w-full block'></span></p>
          <button onClick={signuphandler} className={`w-full p-2 font-semibold ${signupform?'bg-blue-600 text-white':'border-slate-500'}  border rounded-md mt-[15px]`}>Register Now</button>

        </form>
      </div>``
    </main>
  )
}
