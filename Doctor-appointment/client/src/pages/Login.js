import React from 'react'
import '../styles/Registerstyles.css';
import { Form, Input,message } from 'antd'
import { useDispatch } from 'react-redux';
import { showLoading,hideLoading } from '../redux/features/alertSlice';
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios';
 import FormItem from 'antd/es/form/FormItem';
const Login=()=>{
  
        const navigate = useNavigate()
        const dispatch=useDispatch()
    
    const onfinishHandler= async(values)=>{
        try{
            dispatch(showLoading())
        const res = await axios.post('/api/v1/user/login ', values);
        dispatch(hideLoading())
        if(res.data.success){
            localStorage.setItem("token",res.data.token)
            message.success('login successfull')
            navigate('/')

        }else{
            message.error(res.data.message)
        }
        } catch(error){
            dispatch(showLoading());
            console.log(error)
            message.error("something went wrong")
        }
    };
    return(
        <div className="form-container">
     <Form layout="vertical" onFinish={onfinishHandler} className="register-form">
     <h3 className="text-center"> LOGIN FORM </h3>
     
     <FormItem label="Email" name="email">
        <Input type="email" required/>
     </FormItem>
     <FormItem label="Password" name="password">
        <Input type="password" required/>
     </FormItem>
     <Link to="/Register" className="m-2">Not a register here</Link>
    <button className="btn btn-primary" type="submit">Login</button>
       

     </Form>
        </div>
    )
}
export default Login
