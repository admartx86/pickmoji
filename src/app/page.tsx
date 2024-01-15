"use client"

import { useState, useEffect } from "react"

export default function Home() {

  const [listAllEmojis, setListAllEmojis] = useState([])

  useEffect(() => {
    fetch(`https://emoji-api.com/emojis?access_key=${process.env.NEXT_PUBLIC_EMOJI_API_ACCESS_KEY}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setListAllEmojis(data)
      })
      .catch(console.error)
  }
  , [])

  return (
    <div>
    <h1>Home</h1>
    <ul>
    {Array.isArray(listAllEmojis) && listAllEmojis.map((emoji, index) => (
    <li key={index}>
    {emoji.character} - {emoji.slug}
    </li>
    ))}
    </ul>
    </div>
  )
}