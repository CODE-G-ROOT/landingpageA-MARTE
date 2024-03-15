import React, { useRef, useEffect, useState } from 'react';

/* ASSETS */
import calvoman from "../public/images/1.2.png";
import presentacionProducto from "../public/images/2.png";
import paraLaGenteDePocoPelo from "../public/images/TienesPocoPelo.png";
import textoPruebaElTonico from "../public/images/pruebaeltonico.png";
import ultimaOferta from "../public/images/3.png"
import testimonios from "../public/images/4.png"
import premiunpack from "../public/images/pp.png"
import mododeuso from "../public/images/uso.png"

import video1 from "../public/video/mechudos.mp4";
import video2 from "../public/video/mechudos2.mp4";
import video3 from "../public/video/mechudos3.mp4";


/* COMPONENTS */
import { ButtonPedirAhora } from "./Buttons";
import { Form } from 'react-router-dom';


export const App = () => {
    const videoRef1 = useRef(null); // Referencia para el primer video
    const videoRef2 = useRef(null); // Referencia para el segundo video
    const videoRef3 = useRef(null); // Referencia para el tercer video
    const [mostrarModalCompra, setMostrarModalCompra] = useState(false);

    const mostrarModal = () => {
        if (mostrarModalCompra === false ) setMostrarModalCompra(true);
    };


    useEffect(() => {
        const estaEnViewport = (el) => {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        };

        const reproducirVideo = (videoRef) => {
            if (estaEnViewport(videoRef.current)) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        };

        const scrollHandler = () => {
            reproducirVideo(videoRef1); // Verificar visibilidad del primer video
            reproducirVideo(videoRef2); // Verificar visibilidad del segundo video
            reproducirVideo(videoRef3); // Verificar visibilidad del tercer video
        };

        window.addEventListener('scroll', scrollHandler);
        scrollHandler(); // Reproducir videos cuando la página carga

        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, []);

    return (
        <>
            <div className="w-full h-auto flex flex-col gap-10 mb-16">
                <img src={calvoman} alt="" />
                <ButtonPedirAhora />
                <img src={presentacionProducto} alt="" />
                <ButtonPedirAhora />
                <video ref={videoRef1} controls autoPlay>
                    <source src={video1} type="video/mp4" />
                </video>
                <img src={paraLaGenteDePocoPelo} alt="" />
                <ButtonPedirAhora />
                <div className="m-5">
                    <img src={textoPruebaElTonico} alt="" />
                </div>
                <video ref={videoRef2} controls autoPlay >
                    <source src={video2} type="video/mp4" />
                </video>
                <ButtonPedirAhora />
                <img src={ultimaOferta} alt="" />
                <img className="app2" src={testimonios} alt="" />
                <video ref={videoRef3} controls autoPlay>
                    <source src={video3} type="video/mp4" />
                </video>
                <ButtonPedirAhora />
                <img src={premiunpack} alt="" />
                <ButtonPedirAhora />
                <img src={mododeuso} alt="" />
            </div>
        </>
    );
};
