import React from 'react'
import styles from '../styles/Home.module.css'

const SearchBox = ({ searchChange }) => {
    return (
        <div>
            <input
                className={styles.input}
                type='search'
                placeholder='search robots'
                onChange={searchChange}
                />
        </div>
    )
}

export default SearchBox;