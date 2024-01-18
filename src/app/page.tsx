"use client"

import emojiData from "../../emojiData"

export default function Home() {

  return (
    <div>
    <h1>⛏️ Pickmoji</h1>
    {emojiData.map((category) => (
  <div key={category.slug}>
    <div>
      <h2>{category.name}</h2>
    </div>    
    <div className="grid grid-cols-10">
      {category.emojis.map((emoji, index) => (
        <div key={index}>
          {emoji.emoji}
        </div>
      ))}
    </div>
  </div>
))}
    </div>
  )
}