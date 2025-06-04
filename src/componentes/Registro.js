import { register } from '../api/api.js';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../estilos/Registro.css';

function Registro() {

    const [nombre, setNombre] = useState('');  // useState para darle manejo a cualquier dato que se ingrese en el formulario
    const [apellido, setApellido] = useState('');
    const [genero, setGenero] = useState('');
    const [ubicacion, setUbicacion] = useState('');
    const [objetivos, setObjetivos] = useState('');
    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [confirmarContraseña, setConfirmarContraseña] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [mensajeExito, setMensajeExito] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (contraseña !== confirmarContraseña) {
            setMensaje('Las contraseñas no coinciden.');
            setMensajeExito(false);
            return;
        }

        const datosUsuario = {
            nombre,
            apellido,
            genero,
            ubicacion,
            objetivos,
            correo,
            contraseña,
        };

        register(datosUsuario)
            .then((respuesta) => {
                setMensaje(respuesta.data); // Mensaje de éxito que viene del backend
                setMensajeExito(true);
                // Limpiar los campos del formulario después del registro exitoso
                setNombre('');
                setApellido('');
                setGenero('');
                setUbicacion('');
                setObjetivos('');
                setCorreo('');
                setContraseña('');
                setConfirmarContraseña('');
            })
            .catch((error) => {
                if (error.response && error.response.data) {
                    setMensaje(error.response.data); // Mensaje de error que viene del backend
                } else {
                    setMensaje('Ocurrió un error inesperado');
                }
                setMensajeExito(false);
            });
    };

    useEffect(() => {
        if (mensaje) {
            const timer = setTimeout(() => {
                navigate('/login');
            }, 6000);

            return () => clearTimeout(timer); // Limpieza
        }
    }, [mensaje, navigate]);



    return (
        <div className="registro-background">
            <div className="registro-contenedor-formulario">
                <form className="registro-formulario" onSubmit={handleSubmit}>
                    <div className="registro-texto-formulario">
                        <h2>REGISTRO USUARIO</h2>
                        <p>Completa tus datos para crear tu cuenta</p>
                    </div>
                    <div className="registro-input">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" id="nombre" placeholder="Ingresa tu nombre"
                            value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </div>
                    <div className="registro-input">
                        <label htmlFor="apellido">Apellido</label>
                        <input type="text" id="apellido" placeholder="Ingresa tu apellido"
                            value={apellido} onChange={(e) => setApellido(e.target.value)} />
                    </div>
                    <div className="registro-input">
                        <label htmlFor="genero">Género</label>
                        <select id="genero" value={genero} onChange={(e) => setGenero(e.target.value)} >
                            <option value="">Selecciona tu género</option>
                            <option value="masculino">Masculino</option>
                            <option value="femenino">Femenino</option>
                            <option value="otro">Otro</option>
                            <option value="prefiero_no_decirlo">Prefiero no decirlo</option>
                        </select>
                    </div>
                    <div className="registro-input">
                        <label htmlFor="ubicacion">Ubicación</label>
                        <input type="text" id="ubicacion" placeholder="Ciudad o país"
                            value={ubicacion} onChange={(e) => setUbicacion(e.target.value)} />
                    </div>
                    <div className="registro-input">
                        <label htmlFor="objetivo">Objetivo de salud</label>
                        <select id="objetivo" value={objetivos} onChange={(e) => setObjetivos(e.target.value)} >
                            <option value="">Selecciona un objetivo</option>
                            <option value="perder_peso">Perder peso</option>
                            <option value="ganar_musculo">Ganar músculo</option>
                            <option value="mejorar_resistencia">Mejorar resistencia</option>
                            <option value="mantener_salud">Mantener salud</option>
                        </select>
                    </div>
                    <div className="registro-input">
                        <label htmlFor="correo">Correo electrónico</label>
                        <input type="email" id="correo" placeholder="Ingresa tu correo"
                            value={correo} onChange={(e) => setCorreo(e.target.value)} />
                    </div>
                    <div className="registro-input">
                        <label htmlFor="contraseña">Contraseña</label>
                        <input type="password" id="contraseña" placeholder="Crea una contraseña"
                            value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
                    </div>
                    <div className="registro-input">
                        <label htmlFor="confirmarContraseña">Confirmar contraseña</label>
                        <input type="password" id="confirmarContraseña" placeholder="Repite tu contraseña"
                            value={confirmarContraseña} onChange={(e) => setConfirmarContraseña(e.target.value)} />
                    </div>
                    {mensaje && (
                        <div className={`registro-mensaje${mensajeExito ? ' exito' : ''}`}> {/* operador ternario para aplicar clase de éxito */}
                            {mensaje.split('.').map((parte, i) => parte && (
                                <div key={i}>{parte.trim()}.</div>
                            ))}
                        </div>
                    )}
                    <div className="registro-input">
                        <input type="submit" value="Registrarse" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Registro;