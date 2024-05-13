'use client'

import axios from 'axios'
import Tweet from "@/components/tweet/Tweet"

import { useParams } from 'next/navigation'
import { useEffect, useState } from "react"



export default function produto() {

  const { id } = useParams()

  const [tweets, setTweets] = useState([]);

  const getTweets = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/tweets/${id}`)

      const post = response.data;
      setTweets(post);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getTweets();
  }, [])

  return (
    <div className="body-wrapper">
      <Tweet
        props={tweets} key={tweets.id} tweet={tweets.id}
      />
    </div>
  )

}