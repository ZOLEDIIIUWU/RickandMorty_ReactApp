import Card from "../card/Card";
import { connect, useDispatch } from "react-redux"
import { orderFav, filterFav } from "../../redux/actions";
import { useState } from "react";
import styles from "./favorites.module.css"

const Favorites = ({myFavorites}) => {
    const dispatch = useDispatch()
    const [aux, setAux] = useState(false)

    const handleOrder = (event) => {
        dispatch(orderFav(event.target.value))
        setAux(true)
    } 

    const handleFilter = (event) => {
        dispatch(filterFav(event.target.value))
    }

    return(
        <div className={styles.container}>
            <div className={styles.favContainer}>
                <select onChange={handleOrder}>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>

                <select onChange={handleFilter}>
                    <option value="allCharacters">All Characters</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
            </div>
            <div className={styles.cardContainer}>
                {
                    myFavorites?.map(fav => {
                        return(
                            <Card
                                key={fav.id}
                                id={fav.id}
                                name={fav.name}
                                image={fav.image}
                                onClose={fav.onClose}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
)(Favorites)