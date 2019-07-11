import React from "react"
import { AudioType } from "../@types/AudioType"

export const useAudio = () => {
  const [audio, setAudio] = React.useState(process.browser && new Audio())
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

  const result: AudioType = {
    audio,
    playing: !audio.paused,
    currentTime: audio.currentTime,
    play: (value: string) => setAudio(new Audio(value)),
    pause: () => audio.pause(),
    jump: (value: number) => (audio.currentTime += value)
  }
  return result
}
