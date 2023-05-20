import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./detail.module.css"
import axios from "axios"


const Detail = () => {
    const { id } = useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios
        .get(`http://localhost:3001/rickandmorty/character/${id}`)
        .then((response) => response.data)
        .then((char) => {
            if (char.name) {
                setCharacter(char);
            } else {
                window.alert("No hay personajes con ese ID");
            }
        })
        .catch((err) => {
            window.alert("No hay personajes con ese ID");
        });
        return setCharacter({});
    }, [id]);

    return(
            <div className={styles.container}>
                <div className={styles.detail}>
                    <div className={styles.id}>
                        <h2>{character?.id}</h2>
                        <div className={styles.name}>
                            <h2>{character?.name}</h2>
                            <h2>status: {character?.status}</h2>
                        </div>
                    </div>

                    <img className={styles.containerDetailimg} src={character?.image} alt={character?.name} />

                    <div className={styles.data}>
                        <h2>Specie: {character?.species}</h2>
                        <h2>Gender: {character?.gender}</h2>
                        <h2>Origin: {character?.origin?.name}</h2>
                        <h2>location: {character?.location?.name}</h2>
                    </div>
                </div>
            </div>
    )
}

export default Detail