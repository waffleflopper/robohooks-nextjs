import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SearchBox from '../components/SearchBox'
import CardList from '../components/CardList'

export default function Home() {
  
  const [robots, setRobots] = useState([])
  const [searchField, setSearchField] = useState('')

  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setRobots(users))
  })
  
  function onSearchChange(e) {
    setSearchField(e.target.value)
  }

  const filteredResult = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLocaleLowerCase());
  })
  
  return (
    <>
      <Head>
        <title>Robofriends with Next!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.title}>
        RoboFriends Next.js!
      </div>
      
      <div className={styles.main}>
        <div className={styles.search}>
          <SearchBox searchChange={onSearchChange}/>
        </div>
        <div className={styles.container}>
          <CardList robots={filteredResult} />
        </div>
      </div>
    </>
  )
}
