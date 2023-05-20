import Card from '../card/Card';
import styles from "./cards.module.css"

export default function Cards({characters, onClose}) {
   return (
      <div className={styles.cardContainer}>
         {
            characters.map(({ id, name, image, gender}) => {
               return(
                  <Card
                     key={id}
                     id={id}
                     gender={gender}
                     name={name}
                     image={image}
                     onClose={onClose}
                  />
               )
            })
         }
      </div>
   );
}
