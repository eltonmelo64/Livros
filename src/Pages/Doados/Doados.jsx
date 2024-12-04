import React from 'react';
import styles from './Doados.module.scss';
import Livro from "../../assets/livro 1.png";

const Doados = () => {
    // Lista de livros doados
    const livros = [
        {
            titulo: 'O Protagonista',
            autor: 'Susanne Andrade',
            categoria: 'Ficção',
            imagem: Livro 
        }
        // Adicione mais livros aqui, se necessário
    ];

    return (
        <div className={styles.doadosContainer}>
            <h1 className={styles.doadosContainer1}>Livros Doados</h1>
            <div className={styles.livrosGrid}>
                {livros.map((livro, index) => (
                    <div key={index} className={styles.livroCard}>
                        <img src={livro.imagem} alt={`Capa de ${livro.titulo}`} /> 
                        <h3>{livro.titulo}</h3>
                        <p>{livro.autor}</p>
                        <span>{livro.categoria}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Doados;
