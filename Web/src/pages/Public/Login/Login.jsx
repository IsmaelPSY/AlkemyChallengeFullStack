import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../../services/index";

const Login = ()=>{
    
    const navigate = useNavigate()
    const {handleSubmit,register} = useForm();
    const [userObj,setUserObj] = useState({});

    const onSubmit = (data)=>{
      setUserObj(data)
    }

    useEffect(()=>{
        if(userObj.email){
        loginUser(userObj)
            .then(res =>{
                console.log(res)
                localStorage.setItem('Token',res.token)
                localStorage.setItem('User',res.user)
            })
            .then(()=>{
                navigate('/operations')
            })
        }
    },[userObj])


    return(
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" {...register('email')}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" {...register('password')}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Link to='/singin'>Sing Up</Link>
    </Form>
    )
}
export default Login;