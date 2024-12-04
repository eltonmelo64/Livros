import React, { useState } from 'react';
import styles from './Doar.module.scss'; 
import Frame from "../../assets/Frame.png"; 

const Doar = () => {
    const [formData, setFormData] = useState({
        titulo: '',
        categoria: '',
        autor: '',
        linkImagem: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dados do Livro:', formData);
        alert('Obrigado por sua doação!');
        setFormData({
            titulo: '',
            categoria: '',
            autor: '',
            linkImagem: ''
        });
    };

    return (
        <div className={styles.pageBody}>
            <p className={styles.formInstruction}>
                Por favor, preencha o formulário com suas informações e as informações do Livro
            </p>
            <div className={styles.formContainer}>
                <div>

                    <section className={styles.imageTitleContainer}>
                        <img src={Frame} alt="Frame" className={styles.imageFrame} />
                        <h1 className={styles.formTitle}>Informações do Livro</h1>
                    </section>
                    
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            id="titulo"
                            name="titulo"
                            className={styles.formInput}
                            value={formData.titulo}
                            onChange={handleChange}
                            placeholder="Título"
                            required
                        />

                        <input
                            type="text"
                            id="categoria"
                            name="categoria"
                            className={styles.formInput}
                            value={formData.categoria}
                            onChange={handleChange}
                            placeholder="Categoria"
                            required
                        />

                        <input
                            type="text"
                            id="autor"
                            name="autor"
                            className={styles.formInput}
                            value={formData.autor}
                            onChange={handleChange}
                            placeholder="Autor"
                            required
                        />

                        <input
                            type="text"
                            id="linkImagem"
                            name="linkImagem"
                            className={styles.formInput}
                            value={formData.linkImagem}
                            onChange={handleChange}
                            placeholder="Link da Imagem"
                        />

                        <button type="submit" className={styles.formButton}>Doar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Doar;
