
import React, {useState} from "react";
const Formulario = () => {
    

    

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hizoSubmit, setHizoSubmit] = useState(false);
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [EmailError, setEmailError] = useState("");
    const [PasswordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

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
        setFirstNameError("");
        setLastNameError("");
        setEmailError("");
        setPasswordError("");
        setConfirmPasswordError("");

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
            setFirstNameError("Nombre no puede estar vacio");
        } else if(e.target.value.length < 3) {
            setFirstNameError("Escribe tu nombre");
        } else {
            setFirstNameError('');
        }
    }

    const apellido = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("Escribe tu apellido");
        } else if(e.target.value.length < 3) {
            setLastNameError("Escribe un apellido valido");
        } else {
            setLastNameError('');
        }
    }

    const correo = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Campo obligatorio");
        } else if(e.target.value.length < 3) {
            setEmailError("Escribe un correo valido");
        } else {
            setEmailError('');
        }
    }

    const contraseña = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Campo obligatorio");
        } else if(e.target.value.length < 3) {
            setPasswordError("Escribe una contraseña");
        } else {
            setPasswordError('');
        }
    }

    const confirmarContraseña = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value !== Password) {
            setConfirmPasswordError("Las contraseñas no coiciden");
        } else if(e.target.value.length < 3) {
            setConfirmPasswordError("Las contraseñas no coiciden");
        } else {
            setConfirmPasswordError('');
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
                <input className="form-control" onChange={apellido} value ={lastName}/>
                {
                    lastNameError ?
                    <p style={{color:'red'}}>{ lastNameError }</p> :
                    ''
                }
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input className="form-control" onChange={correo} value ={Email}/>
                {
                    EmailError ?
                    <p style={{color:'red'}}>{ EmailError }</p> :
                    ''
                }
            </div>
            <div className="form-group">
                <label >Password:</label>
                <input type= "password" className="form-control" onChange={contraseña} value={Password}/>
                {
                    PasswordError ?
                    <p style={{color:'red'}}>{ PasswordError }</p> :
                    ''
                }
            </div>
            <div className="form-group">
                <label  >confirmPassword:</label>
                <input type= "password" className="form-control" onChange={confirmarContraseña} value={confirmPassword}/>
                {
                    confirmPasswordError ?
                    <p style={{color:'red'}}>{ confirmPasswordError }</p> :
                    ''
                }
            </div>
            <input type="submit" className="btn btn-success" value="Crear Usuario" />
            {mensaje()}

        </form>
    )
}


export default Formulario;