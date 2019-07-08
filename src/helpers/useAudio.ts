import React from "react"

interface Type {
  playing: boolean
  currentTime: number
  play?: () => void
  pause?: () => void
  jump: (value: number) => number
}

export default (url: string | undefined) => {
  let result: Type = {
    playing: false,
    currentTime: 0,
    jump: () => 0
  }

  if (!process.browser) {
    return result
  }

  const [audio] = React.useState(new Audio(url))
  const [, _forceUpdate] = React.useState(false)
  const forceUpdate = () => _forceUpdate(prevState => !prevState)

  React.useEffect(() => {
    // audio.play()
    audio.addEventListener("play", forceUpdate)
    audio.addEventListener("pause", forceUpdate)
    audio.addEventListener("ended", forceUpdate)
    audio.addEventListener("timeupdate", forceUpdate)

    return () => {
      audio.removeEventListener("play", forceUpdate)
      audio.removeEventListener("pause", forceUpdate)
      audio.removeEventListener("ended", forceUpdate)
      audio.addEventListener("timeupdate", forceUpdate)
    }
  }, [])

  result = {
    playing: !audio.paused,
    currentTime: audio.currentTime,
    play: () => audio.play(),
    pause: () => audio.pause(),
    jump: (value: number) => (audio.currentTime += value)
  }

  return result
}
