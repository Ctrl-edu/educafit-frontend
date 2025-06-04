
import entranamientoImg from '../img/plan.png';
import nutricionImg from '../img/nutrition.png';
import analisisImg from '../img/workout.png';
import '../estilos/Services.css';

const Services = () =>(
    <main className="services" id='servicios'>
        <div className="services-content container">
            <h2>Servicios EducaFit</h2>
            <div className="services-group">
                <div className="services-1">
                    <img src={entranamientoImg} alt="Entrenamiento personalizado" />
                    <h3>Entrenamiento personalizado</h3>
                </div>
                <div className="services-1">
                    <img src={nutricionImg} alt="Consultoria nutricional" />
                    <h3>Consultoria nutricional</h3>
                </div>
                <div className="services-1">
                    <img src={analisisImg} alt="Analisis de progreso" />
                    <h3>Analisis de progreso</h3>
                </div>
            </div>
            <p>
                En EducaFit, nos comprometemos a ayudarte a alcanzar tus metas de salud y bienestar a través de nuestros servicios
                especializados. Ofrecemos: Entrenamiento Personalizado, Consultoría Nutricional, Seguimiento y Análisis de Progreso.
            </p>
            <a href="#" className="btn-1">Conocer mas</a>
        </div>
    </main>
);

export default Services;