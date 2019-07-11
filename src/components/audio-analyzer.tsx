import * as React from "react"
import AudioVisualiser from "./audio-visualiser"

interface Props {
  audio: HTMLAudioElement
}

interface State {
  audioData: Uint8Array
}

class AudioAnalyser extends React.Component<Props, State> {
  audio: HTMLAudioElement
  analyser: AnalyserNode
  dataArray: Uint8Array
  source: MediaElementAudioSourceNode
  rafId: number

  state = {
    audioData: new Uint8Array(0)
  }

  constructor(props: Readonly<Props>) {
    super(props)
    this.tick = this.tick.bind(this)
  }

  componentDidMount() {
    this.connect("")
  }

  componentWillUnmount() {
    this.disconnect()
  }

  tick() {
    this.analyser.getByteFrequencyData(this.dataArray)
    this.setState({ audioData: this.dataArray })
    this.rafId = requestAnimationFrame(this.tick)
  }

  connect(src: string) {
    this.audio = new Audio(src)
    const context = new AudioContext()
    this.analyser = context.createAnalyser()
    this.analyser.fftSize = 64
    this.source = context.createMediaElementSource(this.audio)
    this.dataArray = new Uint8Array(this.analyser.frequencyBinCount)
    this.source.connect(this.analyser)
    this.analyser.connect(context.destination)
    this.rafId = requestAnimationFrame(this.tick)
    if (this.audio.src) this.audio.play()
  }

  disconnect() {
    cancelAnimationFrame(this.rafId)
    this.analyser.disconnect()
    this.source.disconnect()
  }

  render() {
    return (
      <div onClick={() => this.connect("/static/assets/warp1.wav")}>
        <AudioVisualiser audioData={this.state.audioData} />
      </div>
    )
  }
}

export default AudioAnalyser
