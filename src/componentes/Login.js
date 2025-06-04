import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { login } from '../api/api';
import '../estilos/Login.css';

function Login() {

    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [mensajeExito, setMensajeExito] = useState(false); // para manejar el mensaje de respuesta del backend
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const loginCredentials = {
            correo,
            contraseña,
        };

        login(loginCredentials)
            .then((respuesta) => {
                localStorage.setItem('usuario', JSON.stringify(respuesta.data)); // Guarda los datos del usuario en localStorage
                setMensaje('Inicio de sesión exitoso.');
                setMensajeExito(true);
                // Limpiar los campos del inicio de sesion exitoso
                setCorreo('');
                setContraseña('');
                navigate('/perfil'); // Redirige al perfil del usuario después de iniciar sesión
            })
            .catch((error) => {
                if (error.response && error.response.data) {
                    setMensaje(error.response.data); // Mensaje de error que viene del backend
                } else {
                    setMensaje('Ocurrió un error inesperado');
                }
                setMensajeExito(false); // para que me cambie la configuracion del mensaje de respuesta a rojo
            });
    };

    return (
        <div className="login-background">
            <div className="login-contenedor-formulario">
                <div className="login-imagen-formulario"></div>
                <form className="login-formulario" onSubmit={handleSubmit}>
                    <div className="login-texto-formulario">
                        <h2>BIENVENIDO A EDUCAFIT</h2>
                        <p>Inicia sesión con tu cuenta</p>
                    </div>
                    <div className="login-input">
                        <label htmlFor="usuario">Usuario</label>
                        <input placeholder="Ingresa tu usuario" type="text" id="usuario"
                            value={correo} onChange={(e) => setCorreo(e.target.value)} />
                    </div>
                    <div className="login-input">
                        <label htmlFor="contraseña">Contraseña</label>
                        <input placeholder="Ingresa tu contraseña" type="password" id="contraseña"
                            value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
                    </div>
                    <div className="login-password-olvidada">
                        <a href="#">¿Olvidaste tu contraseña?</a>
                    </div>
                    <div className="login-input">
                        <input type="submit" value="Iniciar Sesion"/>
                    </div>
                    <div className="login-input">
                        <input type="button" value="Crear cuenta" onClick={() => navigate('/registro')} />
                    </div>

                    {mensaje && (
                        <div className={`login-mensaje${mensajeExito ? ' exito' : ''}`}> {/* operador ternario para aplicar clase de éxito */}
                            {mensaje.split('.').map((parte, i) => parte && (
                                <div key={i}>{parte.trim()}.</div>
                            ))}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}

export default Login;