import React from "react";
import crossfitImg from '../img/CrossFit.jpg';
import calisteniaImg from '../img/calistenia.jpg';
import gymImg from '../img/gym.jpg';
import '../estilos/Exercises.css';

const Exercises = () =>(
    <section className="exercises">
        <div className="exercises-content container">
            <h2>entrenamientos</h2>
            {/*
            <p className="txt-p">
                En EducaFit, ofrecemos una variedad de opciones de entrenamiento para ayudarte a alcanzar tus metas
                de acondicionamiento físico, sin importar tu nivel o preferencia.
            </p>
            */}
            <div className="exercises-group">
                <div className="exercise-1">
                    <img src={crossfitImg} alt="Crossfit" />
                    <h3>Crossfit</h3>
                    <p>
                        CrossFit es una modalidad de entrenamiento funcional que combina ejercicios de alta intensidad, 
                        levantamiento de pesas, gimnasia y acondicionamiento metabólico.
                    </p>
                </div>
                <div className="exercise-1">
                    <img src={calisteniaImg} alt="Calistenia" />
                    <h3>Calistenia</h3>
                    <p>
                        La calistenia es una disciplina de entrenamiento que utiliza el peso corporal para desarrollar fuerza,
                        flexibilidad y coordinación.
                    </p>
                </div>
                <div className="exercise-1">
                    <img src={gymImg} alt="Gym" />
                    <h3>Gym</h3>
                    <p>
                        El entrenamiento cardiovascular, conocido comúnmente como cardio, es una pieza clave para
                        mejorar la resistencia, quemar calorías y mantener el corazón en óptimas condiciones.
                    </p>
                </div>
            </div>
            <a href="#" className="btn-1">Conocer mas</a>
        </div>
    </section>
);

export default Exercises;