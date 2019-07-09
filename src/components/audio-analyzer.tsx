import * as React from "react"
import AudioVisualiser from "./audio-visualiser"

interface Props {
  audio: HTMLAudioElement
}

interface State {
  audioData: Uint8Array
}

class AudioAnalyser extends React.Component<Props, State> {
  audioContext: AudioContext
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
    this.audioContext = new AudioContext()
    this.analyser = this.audioContext.createAnalyser()
    this.analyser.fftSize = 64
    this.dataArray = new Uint8Array(this.analyser.frequencyBinCount)
    this.source = this.audioContext.createMediaElementSource(this.props.audio)
    this.source.connect(this.analyser)
    this.rafId = requestAnimationFrame(this.tick)
  }

  tick() {
    this.analyser.getByteFrequencyData(this.dataArray)
    this.setState({ audioData: this.dataArray })
    this.rafId = requestAnimationFrame(this.tick)
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rafId)
    this.analyser.disconnect()
    this.source.disconnect()
  }

  render() {
    return <AudioVisualiser audioData={this.state.audioData} />
  }
}

export default AudioAnalyser
