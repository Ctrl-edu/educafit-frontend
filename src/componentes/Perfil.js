import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // para redirección
import { actualizarUsuario } from '../api/api';
import { eliminarUsuario } from '../api/api';
import '../estilos/Perfil.css';

function Perfil() {
    const [usuario, setUsuario] = useState(null);
    const [editando, setEditando] = useState(false);
    const [datosEditados, setDatosEditados] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        // Recupera los datos del usuario desde localStorage
        const datos = localStorage.getItem('usuario');
        if (datos) {
            setUsuario(JSON.parse(datos));
            setDatosEditados(JSON.parse(datos));
        }
    }, []);

    const cerrarSesion = () => {
        localStorage.removeItem('usuario'); // elimina datos
        navigate('/login'); // redirige al login
    };

    const handleEditar = () => {  // funcion que permite editar el perfil cambia el estado editando a true
        setEditando(true);
        console.log("Editando activado");
    };

    const handleChange = (e) => { // funcion que me permite cambiar datos del perfil
        setDatosEditados({
            ...datosEditados,
            [e.target.name]: e.target.value // uso el nombre del campo y su valor para cambiar solo ese dato
        });
    };

    const handleGuardar = async (e) => {
        e.preventDefault();
        try {
            const usuarioActualizado = await actualizarUsuario(usuario.correo, datosEditados);
            setUsuario(usuarioActualizado);
            localStorage.setItem('usuario', JSON.stringify(usuarioActualizado));
            setEditando(false);
        } catch (error) {
            console.error('Error al guardar los cambios:', error);
            alert('Error al guardar los cambios. Por favor, inténtalo de nuevo.');
        }
    };

    const handleEliminarCuenta = async () => {
    if (window.confirm('¿Estás seguro de que deseas eliminar tu cuenta? Esta acción no se puede deshacer.')) {
        try {
            const response = await eliminarUsuario(usuario.correo); // Llama a la función de la API
            console.log('Respuesta del backend al eliminar:', response);
            localStorage.removeItem('usuario');
            navigate('/login');
        } catch (error) {
            console.error('Error al eliminar la cuenta:', error);
            alert('Error al eliminar la cuenta. Por favor, inténtalo de nuevo.');
        }
    }

};

    // Si no hay usuario cargado, muestra un mensaje de carga
if (!usuario) {
    return (
        <div className="perfil-background">
            <div className="perfil-contenedor-formulario">
                <div className="perfil-formulario">
                    <h2>Mi Perfil</h2>
                    <p>Cargando datos de usuario...</p>
                </div>
            </div>
        </div>
    );
}

return (
    <div className="perfil-background">
        <div className="perfil-contenedor-formulario">
            {/* forzando a reacta a desmontar el formulario actual,
                cuando editando es false la key es view, cuando es true es edit*/}
            <form key={editando ? 'edit' : 'view'} className="perfil-formulario" onSubmit={handleGuardar}>
                <div className="perfil-texto-formulario">
                    <h2>Mi Perfil</h2>
                    <p>Información de tu cuenta</p>
                </div>
                <div className="perfil-input">
                    <label>Nombre:</label>
                    <input name='nombre'
                        value={datosEditados.nombre}
                        onChange={handleChange}
                        // solo me he es posible editar si editando es true, cuando hago click en actualizar
                        disabled={!editando}
                    />
                </div>
                <div className="perfil-input">
                    <label>Apellido:</label>
                    <input name='apellido'
                        value={datosEditados.apellido}
                        onChange={handleChange}
                        disabled={!editando}
                    />
                </div>
                <div className="perfil-input">
                    <label>Género:</label>
                    <select name='genero'
                        value={datosEditados.genero}
                        onChange={handleChange}
                        disabled={!editando}
                    >
                        <option value="masculino">Masculino</option>
                        <option value="femenino">Femenino</option>
                        <option value="otro">Otro</option>
                        <option value="prefiero no decirlo">Prefiero no decirlo</option>
                    </select>
                </div>
                <div className="perfil-input">
                    <label>Ubicación:</label>
                    <input name='ubicacion'
                        value={datosEditados.ubicacion}
                        onChange={handleChange}
                        disabled={!editando}
                    />
                </div>
                <div className="perfil-input">
                    <label>Objetivo de salud:</label>
                    <select name='objetivos'
                        value={datosEditados.objetivos}
                        onChange={handleChange}
                        disabled={!editando}
                    >   <option value="">Selecciona un objetivo</option>
                        <option value="perder_peso">Perder peso</option>
                        <option value="ganar_musculo">Ganar musculo</option>
                        <option value="mejorar_resistencia">Mejorar Resistencia</option>
                        <option value="mantener_salud">Mantener salud</option>
                    </select>
                </div>
                <div className="perfil-input">
                    <label>Correo electrónico:</label>
                    <input name='correo'
                        value={datosEditados.correo}
                        disabled // no se edita el correo
                    />
                </div>

                {/*botones*/}
                <div className="perfil-botones-fila">
                     <button type='button' onClick={handleEliminarCuenta} className="boton-eliminar-cuenta">
                        Elimiar cuenta
                    </button>
                    {!editando ? (
                        <button type='button' onClick={handleEditar} className="boton-actualizar">
                            Actualizar Perfil
                        </button>
                    ) : (
                        <button type='submit' className="boton-actualizar">
                            Guardar Cambios
                        </button>
                    )}
                </div>
                <div className="perfil-input cerrar">
                    <button type='button' onClick={cerrarSesion} className="boton-cerrar-sesion">
                        Cerrar Sesión
                    </button>
                </div>
               
            </form>
        </div>
    </div>
);
}

export default Perfil;
