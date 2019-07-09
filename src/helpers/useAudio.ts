import React from "react"

interface Type {
  audio: HTMLAudioElement
  playing: boolean
  currentTime: number
  play?: (value: string) => void
  pause?: () => void
  jump: (value: number) => number
}

export default () => {
  const result: Type = {
    audio: null,
    playing: false,
    currentTime: 0,
    jump: () => 0
  }

  if (!process.browser) {
    return result
  }

  const [audio, setAudio] = React.useState(new Audio())
  const [, _forceUpdate] = React.useState(false)
  const forceUpdate = () => _forceUpdate(prevState => !prevState)

  React.useEffect(() => {
    if (audio.src) {
      audio.play()
    }

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
  }, [audio])

  result.audio = audio
  result.playing = !audio.paused
  result.currentTime = audio.currentTime
  result.play = (value: string) => setAudio(new Audio(value))
  result.pause = () => audio.pause()
  result.jump = (value: number) => (audio.currentTime += value)
  return result
}
