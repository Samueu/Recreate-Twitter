'use client'

import Tweet from "../tweet/Tweet"
import './Body.css'
import { useState, useEffect } from "react";
import axios from 'axios'


export default function Body() {

  const [tweets, setTweets] = useState([]);

  const getTweets = async () => {
    try {
      const response = await axios.get(`http://localhost:5000`)
      const data = response.data;
      setTweets(data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getTweets();
  }, [])

  return (
    <div className="body-wrapper">
      {tweets.map(tweet =>
        <Tweet props={tweet} key={tweet.id}
          tweet={tweet.id}
        />
      )}
    </div>
  )
}