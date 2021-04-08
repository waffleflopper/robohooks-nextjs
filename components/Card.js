import React from 'react'
import styles from '../styles/Home.module.css'

const Card = ({ name, email, id}) => {
    //I use ?set=set2 in the robohash API call because it makes them silly monsters
    //instead of robots.
    return (
        <div className={styles.card}>
        <img src={`https://robohash.org/${id}?set=set2`} alt={`person${id}`} />
            <div>
                <h3>{name}</h3>
                <p>{email}</p>
            </div>
        </div>
    )
    
}

export default Card;