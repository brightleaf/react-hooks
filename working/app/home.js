import React from 'react'
import html from '../../readme.md'
export default function Home() {
  return <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
}
