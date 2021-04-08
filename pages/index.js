import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SearchBox from '../components/SearchBox'
import CardList from '../components/CardList'
import ErrorBoundry from '../components/ErrorBoundry'

//note the styles import.  Styles are contained to their individual components
//so you import them, they just need to have the [name].module.css format.
//in this way you can make your stylization module (though global is avilable)
//so that changes to one area don't break another.

export default function Home() {

  //react hooks allow us to hook into react features without writing stateful classes
  //const [variable, setter] = userState('default variable value') is the syntax
  //so instead of this.setState({searchField: e.target.value}) we are able to simply
  //write setSearchField(e.target.value) as well as setRobots(users) when we fetch from the API

  const [robots, setRobots] = useState([])
  const [searchField, setSearchField] = useState('')

  //userEffect() is a hook that can replace component mounts/unmounting
  //so we use it here
  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setRobots(users))
  })
  
  function onSearchChange(e) {
    setSearchField(e.target.value)
  }

  const filteredResult = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  })
  
  if(!robots.length === 0) return <h1>Loading...</h1>
  
  //because the app is small I opted not to create an App container
  //like in the course.  Of course you can do it that way if you'd like
  //<Head> component allows you to modify the header data and can be used
  //in individual components as well.  So you could change the title based
  //on what the user clicks if you want!
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
          <ErrorBoundry>
           <CardList robots={filteredResult} />
          </ErrorBoundry>
        </div>
      </div>
    </>
  )
}
