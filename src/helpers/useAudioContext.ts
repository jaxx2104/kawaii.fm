import * as React from "react"
import { AudioType } from "../@types/AudioType"

export const AudioContext = React.createContext<AudioType>({
  audio: null,
  playing: false,
  currentTime: 0,
  jump: () => 0
})
