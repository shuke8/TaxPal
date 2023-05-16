import React from 'react'

const YouTubeEmbed = () => (
  <iframe
    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full"
    // width="100%"
    // height="auto"
    src="https://www.youtube.com/embed/yVBvn_pI4Ts"
    title="YouTube video player"
    mute="1"
    autoplay="1"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen={true}
  ></iframe>
)

export default YouTubeEmbed
