import React, { useState, useEffect, useRef } from "react";
import { Player } from "@lordicon/react";
import ICON from "../assets/eye.json";
import { TbWorldWww } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';


const Manager = () => {
  
  const savedCred = JSON.parse(localStorage.getItem("Credentials"))
  const [divId, setDivID] = useState();
  const [addState, setAddState] = useState(false);
  const [cred, setCred] = useState({id:"", url:"", username:"", email:"", password:""});
  const [credArr, setCredArr] = useState(savedCred || []);
  const [viewCred, setViewCred] = useState(false)
  const [updateState, setUpdateState] = useState(false);
  const [updateId, setUpdateId] = useState("");
  

  const [hide, setHide] = useState(false);
  const passRef = useRef();
  const playerRef = useRef(null);
  const urlRef = useRef(); 
  const userRef = useRef(); 
  const emailRef = useRef(); 
  const clickDivRef = useRef();

  
  
  const notify = ()=>{
    toast.error("Cannot Leave the Required fields empty",{
      position:"bottom-left"
    });
  }
  

  useEffect(() => {
    playerRef.current?.play();
  },[hide]);

  const passHandler = () => {
    setHide(!hide);
    if(hide==true){
      passRef.current.type = "Password";
    }
    else{
      passRef.current.type = "text";
    }
  }

  useEffect(()=>{
    localStorage.setItem("Credentials", JSON.stringify(credArr));
    
  },[credArr])

  // useEffect(()=>{console.log(tag)},[tag]);

  const addHandler = () =>{
    
    
    if(urlRef.current.value=="" || passRef.current.value == "" || emailRef.current.value==""){
      // alert(`Cannot Leave slot empty`);
      notify();
      return;
    }

    setAddState(true);

    if(updateState==true){
      
      const updatedArr = credArr.filter((item)=>{
        if(item.id == updateId){
          return {...item, id:updateId, url:urlRef.current.value, username:userRef.current.value, email:emailRef.current.value, password:passRef.current.value}
        }

      })
      setCredArr(updatedArr);
      setUpdateState(false);

    }
    
    setCredArr([...credArr, cred]);
    setCred({url:"", username:"", email:"", password:""})


  }
  
  const fillOnClick= (e) =>{
   const id = e.target.id;
    setViewCred(!viewCred);
    setDivID(id);
  
 
  }
  
  
  const changeHandler = (e) =>{
    setCred({...cred,id:uuidv4(),[e.target.name]:e.target.value})
    // console.log(cred);
  }
  
  const updateHandler = (e) => {
    const id = e.currentTarget.name;
    console.log(id);
    setViewCred(false);
    setUpdateState(true);
    const updatedArr = credArr.filter((item)=>id!= item.id);
    
    // urlRef.current.value = item.url;
    // userRef.current.value = item.user;
    // emailRef.current.value = item.email;
    // passRef.current.value = item.pass;
    // return {...item, url:"", username:"", email:"", password:""};
    
    const targetElem = credArr.find((item)=>id==item.id);
    if(targetElem){
      setUpdateId(targetElem);
      setCred({id:targetElem.id,url:targetElem.url, username:targetElem.username, email:targetElem.email, password:targetElem.password});
      
    }

        

    setCredArr(updatedArr);

  };


  const deleteHandler = (e)=>{

    const id =  e.currentTarget.name;
    const filteredArr = credArr.filter((item)=>id != item.id);
    setViewCred(false);
    setCredArr(filteredArr);

  }
  
  
  return (
    <div className="flex bg-slate-50 overflow-hidden ">
      <div className="flex flex-col xl:w-60 sm:w-36 w-24 bg-white min-h-dvh border-2 ">
        <div className="sidebar min-h-dvh sm:flex sm:flex-col sm:flex-wrap ">
          <div className="Btn flex justify-center m-3  ">

            <button onClick={addHandler} className="flex justify-center transition-all bg-green-300 items-center w-28 rounded-md active:bg-green-400">
              <lord-icon
                src="https://cdn.lordicon.com/hqymfzvj.json"
                trigger="hover"
              ></lord-icon>
              Add
            </button>
            <ToastContainer/>
          </div>


          <div id="credContainer" className="" >

            {credArr.map((item)=>{
              return (<div ref={clickDivRef}  id={item.id} key={item.id} onClick={fillOnClick} className="border-2 text-center flex h-10 justify-center items-center cursor-pointer">{item.url.substring(4, item.url.length-4)}</div>)
            })}

          </div>
          

        </div>
      </div>

      <div className="infoCont shadow-xl overflow-hidden relative bg-white w-72 h-96 xl:w-130 xl:h-100 lg:h-84 lg:w-122 md:w-98 md:h-96 m-auto rounded-lg flex flex-col items-center justify-center">
        
        
        {viewCred && <div className="border-2 bg-white shadow-2xl top-48 bottom-1/2 z-1 h-115 relative sm:text-base text-sm rounded-md flex text-justify text-nowrap" >

          {credArr.map((item)=>(

              item.id === divId?(
                <div  key={item.id} className="flex flex-col justify-center item p-5  sm:min-w-80    ">
                  <div className="text-justify font-semibold sm:text-xl m-2"><span className="m-2">URL:</span> {item.url}</div>
                  <div className="text-justify font-semibold sm:text-xl m-2"><span className="m-2">Username:</span> {item.username}</div>
                  <div className="text-justify font-semibold sm:text-xl m-2"><span className="m-2">Email: </span> {item.email}</div>
                  <div className="text-justify font-semibold sm:text-xl m-2"><span className="m-2">Password: </span>{item.password}</div>
                  <div id="Btn" className="flex justify-center items-center m-2">
                    <button onClick={updateHandler} name={item.id} className="p-2 m-4 bg-green-300 active:bg-green-400 w-24 transition-all delay-700 hover:shadow-lg hover:-translate-y-2 hover:shadow-green-400 h-8 flex justify-center items-center rounded-lg ">
                      
                      <lord-icon 
                          src="https://cdn.lordicon.com/ghhwiltn.json"
                          stroke = "bold"
                          trigger="loop-on-hover">
                          
                          
                      </lord-icon>
                    </button>
                    
                    <button name={item.id} onClick={deleteHandler} className="p-2 m-4 bg-green-300 active:bg-green-400 w-24 transition-all delay-700 hover:shadow-lg hover:-translate-y-2 hover:shadow-green-400 h-8 flex justify-center items-center rounded-lg ">
                    
                      <lord-icon
                          src="https://cdn.lordicon.com/drxwpfop.json"
                          trigger="hover"
                          stroke="bold">
                          
                      </lord-icon>
                    </button>


                  </div>
                </div>):null
          

            )

              
          )}

        </div> }

        

        <div
          id="infoBody"
          className={viewCred?"blur-lg border-2 bg-white w-130  h-110 m-auto rounded-lg flex flex-col items-center justify-center":" bg-white xl:w-130 md:w-32  m-auto rounded-lg flex flex-col  items-center justify-center"}
        >
          
          <div className="flex justify-center items-center xl:w-auto lg:w-98 sm:w-96  ">
            <TbWorldWww  className="h-7 w-7"/>
            <input disabled={viewCred} ref={urlRef} onChange={changeHandler} className="w-40 sm:w-100 m-6 h-8 rounded-md border-2 sm:placeholder:text-base placeholder:italic placeholder:text-xs placeholder:text-center" name="url" value={cred.url?cred.url:""} type="url" placeholder="Enter URL(Required)" />

          </div>

          
          <div id="userName" className="flex justify-center items-center xl:w-auto lg:w-98 sm:w-96  ">
            <FaUserCircle className="h-7 w-7" />
            <input ref={userRef} disabled={viewCred} onChange={changeHandler} className="w-40 sm:w-100 m-6 h-8 rounded-md border-2 sm:placeholder:text-base placeholder:italic placeholder:text-xs placeholder:text-center" name="username" value={cred.username?cred.username:""} type="text" placeholder="Enter Username" />
          </div>
          

          <div id="email" className="flex justify-center items-center xl:w-auto lg:w-98 sm:w-96  ">
            <MdEmail  className="h-7 w-7" />
            <input disabled={viewCred} ref={emailRef} onChange={changeHandler} className="w-40 sm:w-100 m-6 h-8 rounded-md border-2 sm:placeholder:text-base placeholder:italic placeholder:text-xs placeholder:text-center" name="email" value={cred.email?cred.email:""} type="text" placeholder="Enter Email(Required)" />
          </div>

          
          <div id="pass" className="relative flex items-center xl:w-auto lg:w-98 sm:w-96  ">
            <div  className="border-2 absolute -right-2.5 sm:right-5 lg:pr-3 sm:pr-3.5  cursor-pointer" onClick={passHandler}>
              {hide?<Player ref={playerRef} icon={ICON} direction={-1}/>:<Player ref={playerRef} icon={ICON} />}
            </div>
            <RiLockPasswordFill className="h-7 w-7"/>
            <input disabled={viewCred} 
              onChange={changeHandler}
              ref = {passRef }
              placeholder="Enter Password(Required)"
              className="w-40 sm:w-100  m-6 h-8 rounded-md border-2 placeholder:italic sm:placeholder:text-base placeholder:text-xs placeholder:text-center"
              name="password"
              value={cred.password?cred.password:""}
              type="Password"
            />
          </div>

          
        </div>


      </div>
    </div>
  );
};

export default Manager;
