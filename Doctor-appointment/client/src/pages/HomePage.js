import { Layout } from 'antd';
import React,{useEffect} from 'react';
import axios from 'áxios';
const HomePage=()=>{
//userdata
const getUserData = ()=>{
  try {
    const res = await axios.post
    ('/api/v1/user/getUserData',{},{
        headers :{
            Authorization:"bearer"+ localStorage.getItem('token'),

        },
    })
  } catch (error) {
    console.log(error)
  }  
}


    return(
        <Layout>
            <h1> Home Page  </h1>
        </Layout>
    )
}
export default HomePage
