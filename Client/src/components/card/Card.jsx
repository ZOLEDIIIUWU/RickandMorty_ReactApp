import { useEffect, useState } from "react";
import styles from "./card.module.css"
import { Link } from "react-router-dom";
import { addFavorite, removeFavorite} from "../../redux/actions.js"
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";

const Card = ({ id, name, image, onClose, gender, addFavorite, removeFavorite, myFavorites}) => {

   const location = useLocation()
   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false)
         removeFavorite(id)
      }else{
         setIsFav(true)
         addFavorite({id, name, image, onClose, gender})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id){
            setIsFav(true)
         }
      })
   }, [myFavorites])

      return (
         <div className={styles.card}>
            <div className={styles.dataContainer}>
               <h2 className={styles.id}>{id}</h2>
               <Link to={`/detail/${id}`} className={styles.cardName}>
                  <h2 className={styles.name}>{name}</h2>
               </Link>
            </div>

            <div className={styles.imgContainer}>
               <img  src={image} alt="img" className={styles.cardImg}/>
            </div>
      
            <div className={styles.buttonContainer}>
               {location.pathname !== '/favorites' && <button className={styles.deleteButton} onClick={() => onClose(id)}>
                     <svg width="50" height="50" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={styles.deleteIcon}>
                        <path d="m6.75 7.75.841 9.673a2 2 0 0 0 1.993 1.827h4.832a2 2 0 0 0 1.993-1.827l.841-9.673"></path>
                        <path d="M9.75 7.5v-.75a2 2 0 0 1 2-2h.5a2 2 0 0 1 2 2v.75"></path>
                        <path d="M5 7.75h14"></path>
                     </svg>
                  </button>}

               <button className={styles.favButton} onClick={handleFavorite}>
                     <svg width="50" height="50" fill={isFav ? "red" : "none"} stroke={isFav ? "red" : "rgb(68, 68, 68)"} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={styles.favIcon} id={`addFav${id}`}>
                        <path d="M11.995 7.233c-1.45-1.623-3.867-2.06-5.683-.573-1.816 1.486-2.072 3.971-.645 5.73l6.328 5.86 6.329-5.86c1.426-1.759 1.201-4.26-.646-5.73-1.848-1.471-4.233-1.05-5.683.573Z" clip-rule="evenodd"></path>
                     </svg>
               </button>

            </div>
      
         </div>
      );
}

const mapStateToProps = (state) => {
   return{
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return{
      addFavorite: (character) => { dispatch(addFavorite(character))},
      removeFavorite: (id) => { dispatch(removeFavorite(id))}
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card)