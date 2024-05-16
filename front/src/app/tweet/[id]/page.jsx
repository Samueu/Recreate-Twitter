'use client'

import axios from 'axios'
import Tweet from "@/components/tweet/Tweet"

import { useParams } from 'next/navigation'
import { useEffect, useState } from "react"



export default function Body() {

  const [tweet, setTweet] = useState();

  const { id } = useParams()

  const getTweet = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/tweets/${id}`)
      const data = response.data;
      setTweet(data)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getTweet();
  }, [])

  return (
    <div className="body-wrapper">
      <Tweet
        props={tweet}
        key={tweet?.id}
        tweet={tweet?.id}
      />
      {console.log(tweet)}
    </div>
  )

}