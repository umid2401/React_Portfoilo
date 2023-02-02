import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/Home.scss";
export default function Home() {
  return (
    <div className="homePage">
      <div className="home-container">
        <div className="home-wrapper">
          <h1>Hello!</h1>
          <p>Welcome to My website</p>
          <div className="link"> 
            <a href="http://" target="_blank" rel="noopener noreferrer">CV to Download</a>
          </div>

        </div>
      </div>

    </div>
  )
}
