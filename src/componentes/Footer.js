import React, { useState } from 'react';
import '../estilos/Footer.css';  
import fbIcon from '../img/png/fb.png';
import igIcon from '../img/png/ig.png';

const Footer = () => {
    
    const [formData, SetFormData] = useState({
        nombres: '',
        correo: '',
        telefono: '',
        mensaje: ''
    });
    const [errors, setErrors] = useState([]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        SetFormData({...formData, [name]: value});
       
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const numericRegex = /^\d+$/;
        const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/;
        const validationErrors = [];
        setErrors([]);

        if (!formData.nombres.trim()) {
            validationErrors.push('El nombre no puede estar vacio');
        }

        if (!formData.correo.trim()) {
            validationErrors.push('El correo no puede estar vacio');
        }
        if (!emailRegex.test(formData.correo) && formData.correo.length > 0) {
            validationErrors.push('El formato de correo es invalido');
        }

        if (formData.telefono.length > 10) {
            validationErrors.push('El teléfono no debe superar 10 caracteres.');
        }
        if (!formData.telefono.trim()) {
            validationErrors.push('El telefono no puede estar vacio');
        }
        if (!numericRegex.test(formData.telefono) && formData.telefono.length > 0 ) {
            validationErrors.push('El teléfono solo debe contener números.');
        }

        if (!formData.mensaje.trim()) {
            validationErrors.push('El mensaje no puede estar vacio');
        }
        

        if (validationErrors.length > 0) {
            setErrors(validationErrors);
            return; // no enviar si hay errores
        }

        try {
            const response = await fetch('http://localhost:5000/contacto', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.text();
            alert(data);
            SetFormData({ nombres: '', correo: '', telefono: '', mensaje: ''});
        }
        catch (error) {
            console.error('Error al enviar los datos', error);
        }
    };

    return (
        <footer className="footer">
            <section className='form-contact' id='contacto'>
                <header className='form-header'>
                    <span>
                        <i className='fa fa-paper-plane'></i>
                    </span>
                    <h2>Contactanos</h2>
                </header>

                <form className='contact' onSubmit={handleSubmit}>
                    <label className='nombres'>Nombres:</label>
                    <input type='text' name='nombres' id='nombres' value={formData.nombres} onChange={handleChange} />

                    <label className='correo'>Correo:</label>
                    <input type='email' name='correo' id='correo' value={formData.correo} onChange={handleChange} />
                    
                    <label className='telefono'>Telefono:</label>
                    <input type='text' name='telefono' id='telefono' value={formData.telefono} onChange={handleChange} />

                    <label className='mensaje'>Mensaje:</label>
                    <textarea name='mensaje' id='mensaje' value={formData.mensaje} onChange={handleChange} />
                    
                    {errors.length > 0 && (
                        <div className="error-msg">
                            {errors.map((err, index) => (
                                <p key={index}>{err}</p>
                            ))}
                        </div>
                    )}
                    
                    <input type='submit' value='enviar'></input>
                </form>
            </section>

            <div className="footer-content">
                <p>&copy; 2025 EducaFit. Todos los derechos reservados.</p>
                <div className="social-media">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src={fbIcon} alt="Facebook" className="social-icon" /> Facebook
                    </a>
                    
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={igIcon} alt="Instagram" className="social-icon" /> Instagram
                    </a>
                </div>
            </div>

            
        </footer>
    );
};

export default Footer;
