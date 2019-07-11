export interface AudioType {
  audio: HTMLAudioElement
  currentTime: number
  jump: (value: number) => number
  pause?: () => void
  play?: (value: string) => void
  playing: boolean
}
