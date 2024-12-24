import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";


import { Context } from "../store/appContext";



export const Protected_route=()=> {
    const {store, actions} = useContext(Context);
    const navigate = useNavigate()
    useEffect(()=>{
        if (!localStorage.getItem("accessToken")){
            navigate("/login")
        } else{
            actions.protectedRoute()
        }
    },[])

    return (
        <div className="container">
            <h1>hola</h1>
        </div>
    )
}