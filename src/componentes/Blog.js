import React from "react";
import novato from '../img/principiantes.jpg';
import funcional from '../img/funcional.jpeg';
import cardioyfuerza from '../img/cardioyfuerza2.jpg';
import '../estilos/Blog.css';

const blog = () =>(
    <section className="blog container" id="allblog">
        <h2>Tu guia Fitness</h2>
        <div className="blog-content">
            <div className="blog-1">
                <img src={novato} alt="Principiantes en el gym" />
                <h3>Principiantes en el gym</h3>
                <p>
                    En Educafit, encontrarás un artículo detallado que explica cómo comenzar en el gimnasio, incluyendo consejos sobre la elección de ejercicios,
                    la creación de una rutina, y la importancia de la nutrición.
                </p>
            </div>
            <div className="blog-1">
                <img src={funcional} alt="Entrenamiento funcional" />
                <h3>Entrenamiento funcional</h3>
                <p>
                    Una entrada sobre cómo el entrenamiento funcional mejora la fuerza, la movilidad y la resistencia, ideal para aquellos que buscan mejorar
                    su rendimiento en la vida diaria.
                </p>
            </div>
            <div className="blog-1">
                <img src={cardioyfuerza} id="img3" alt="Cardio y fuerza" />
                <h3>Cardio y fuerza</h3>
                <p>
                    Una guía sobre cómo equilibrar entrenamientos de cardio y fuerza en una rutina semanal para quemar grasa y ganar músculo de manera eficiente.
                </p>
            </div>
        </div>
    </section>
);

export default blog;