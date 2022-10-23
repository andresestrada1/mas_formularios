
import React, {useState} from "react";
const Formulario = () => {
    

    

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hizoSubmit, setHizoSubmit] = useState(false);
    const [firstNameError, setFirstNameError] = useState("");

    const crearUsuario = e => {
        e.preventDefault(); 
        const nuevoUsuario = {firstName, lastName, Email, Password, confirmPassword};
        console.log("Nuevo Registro:", nuevoUsuario);
    

        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setHizoSubmit(true);
        setFirstNameError("")

    }


    const mensaje = () =>{
        if(!hizoSubmit){
            return "Por favor ingresa tus datos"
        }
        else{
            return "Gracias"
        }

    }

    const handleTitle = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("Title is required!");
        } else if(e.target.value.length < 3) {
            setFirstNameError("Title must be 3 characters or longer!");
        } else {
            setFirstNameError('');
        }
    }





    return(
        <form className="container" onSubmit={crearUsuario}>
            
            <div className="form-group">
                <label>Nombre:</label>
                <input className="form-control" onChange = { handleTitle } value = {firstName}/>
                {
                    firstNameError ?
                    <p style={{color:'red'}}>{ firstNameError }</p> :
                    ''
                }
            </div>
            <div className="form-group">
                <label>Apellido:</label>
                <input className="form-control" onChange={(e) => setLastName(e.target.value)} value ={lastName}/>
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input className="form-control" onChange={(e) => setEmail(e.target.value)} value ={Email}/>
            </div>
            <div className="form-group">
                <label >Password:</label>
                <input type= "password" className="form-control" onChange={(e) => setPassword(e.target.value)} value={Password}/>
            </div>
            <div className="form-group">
                <label  >confirmPassword:</label>
                <input type= "password" className="form-control" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}/>
            </div>
            <input type="submit" className="btn btn-success" value="Crear Usuario" />
            {mensaje()}

        </form>
    )
}


export default Formulario;