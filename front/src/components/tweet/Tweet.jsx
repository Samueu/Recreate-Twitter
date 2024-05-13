'use client'

import './Tweet.css'
import { ChatCircle, Heart, ArrowsClockwise } from "@phosphor-icons/react";
import Link from "next/link";

export default function Tweet({ props }) {
  console.log(props)
  return (
    <Link href={`/tweet/${props.id}`} className="tweet">
      <img src="https://github.com/samueu.png" alt="Imagem de perfil" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>{props.author.nome}</strong>
          <span>@{props.author.bio}</span>
        </div>

        <p>{props.content}</p>

        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            20
          </button>

          <button type="button">
            <ArrowsClockwise />
            20
          </button>

          <button type="button">
            <Heart />
            20
          </button>
        </div>
      </div>
    </Link>
  )
}