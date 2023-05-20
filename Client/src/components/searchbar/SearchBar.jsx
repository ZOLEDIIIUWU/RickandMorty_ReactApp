import { useState } from "react";
import styles from "./searchbar.module.css"

export default function SearchBar({onSearch}) {
   const [id, setId] = useState('')

   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div className={styles.container}>
         <input type='text' onChange={handleChange} value={id}/>
         <button onClick={() => {onSearch(id); setId('')}} className={styles.button}>
            <svg width="50" height="50" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={styles.icon}>
               <path d="M19.25 19.25 15.5 15.5M4.75 11a6.25 6.25 0 1 1 12.5 0 6.25 6.25 0 0 1-12.5 0Z"></path>
            </svg>
         </button>
      </div>
   );
}
