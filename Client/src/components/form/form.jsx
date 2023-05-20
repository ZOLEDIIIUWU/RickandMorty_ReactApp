import styles from "./form.module.css"
import logo from "../../logo.png"
import validation from "./validation.js"
import { useState } from "react"

const Form = ({ login }) => {
    const [errors, setErrors] = useState({})
    const [form, setform] = useState({
        email: '',
        password: ''
    })
    
    const handleChange = (event) => {
        setform({
            ...form,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...form,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        login(form)
    }

    return (
        <div className={styles.cont}>
            <div className={styles.container}>

                    <div className={styles.logoContainer}>
                        <img src={logo} alt="rick and morty logo" className={styles.logo}/>
                    </div>

                <form onSubmit={handleSubmit}>

                    <div className={styles.formInput}>
                        <div className={styles.inputContainer}>
                            <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange}/>
                        </div>
                        
                        {errors.email && <p className={styles.errors} >{errors.email}</p>}
                    </div>

                    <div className={styles.formInput}>
                        <div className={styles.inputContainer}>
                            <input type="text" name="password" placeholder="Password" value={form.password} onChange={handleChange}/>
                        </div>

                        {errors.password && <p className={styles.errors} >{errors.password}</p>}
                    </div>

                    <button href="#">
                        <svg width="50" height="50" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={styles.icon}>
                            <path d="m9.75 8.75 3.5 3.25-3.5 3.25"></path>
                            <path d="M9.75 4.75h7.5a2 2 0 0 1 2 2v10.5a2 2 0 0 1-2 2h-7.5"></path>
                            <path d="M13 12H4.75"></path>
                        </svg>
                    </button>

                </form>

            </div>
        </div>
    )
}

export default Form