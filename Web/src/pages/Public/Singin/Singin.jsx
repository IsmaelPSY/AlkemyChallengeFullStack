import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createUser, getApi } from "../../../services/index";

const Singin = ()=>{
    
    const navigate = useNavigate()
    const {handleSubmit,register} = useForm();
    const [userObj,setUserObj] = useState({});

    const onSubmit = (data)=>{
      setUserObj(data)
    }

    useEffect(()=>{
        if(userObj.email){
          createUser(userObj)
          .then(res => {
            console.log('Usuario Creado:')
            console.log(res)
          })
            // .then((res) =>{
            //   console.log('Usuario creado:')
            //   console.log(res)
            //   loginUser({email:userObj.email,password:userObj.password})})
            //     .then(res =>{
            //         console.log(res)
            //         localStorage.setItem('Token',res.access)
            //     })
            //     .then(()=>{
            //         navigate('/operations')
            //     })
        }
    },[userObj])


    return(
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>User Nick</Form.Label>
        <Form.Control type="text" placeholder="Enter name" {...register("user_name")}/>
      </Form.Group>
      
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
    </Form>
    )
}
export default Singin;