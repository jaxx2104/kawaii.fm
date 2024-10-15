import React, { useState, useEffect, useRef } from "react"
import { Howl, Howler } from "howler"
import { emitter } from "../helpers/emitter"
import AudioVisualizer from "./audio-visualizer"

const defaultAudioData = new Uint8Array(32)

const AudioAnalyzer: React.FC = () => {
  const [audioData, setAudioData] = useState<Uint8Array>(defaultAudioData)
  const soundRef = useRef<Howl | null>(null)
  const analyserRef = useRef<AnalyserNode | null>(null)
  const dataArrayRef = useRef<Uint8Array>(new Uint8Array(32))
  const drawIdRef = useRef<number | null>(null)

  const drawAudioVisualiser = () => {
    drawIdRef.current = requestAnimationFrame(drawAudioVisualiser)
    if (analyserRef.current && dataArrayRef.current) {
      analyserRef.current.getByteFrequencyData(dataArrayRef.current)
      setAudioData(new Uint8Array(dataArrayRef.current))
    }
  }

  const resetAudioVisualiser = () => {
    if (drawIdRef.current) {
      cancelAnimationFrame(drawIdRef.current)
    }
    setAudioData(defaultAudioData)
  }

  const connect = (src: string) => {
    if (!src) return

    soundRef.current = new Howl({
      src,
      onend: () => {
        resetAudioVisualiser()
      },
    })

    const context = Howler.ctx
    const analyser = context.createAnalyser()
    analyser.fftSize = 64
    Howler.masterGain.connect(analyser)
    const dataArray = new Uint8Array(analyser.frequencyBinCount)

    analyserRef.current = analyser
    dataArrayRef.current = dataArray
    analyser.connect(context.destination)

    drawAudioVisualiser()
    soundRef.current.play()
  }

  const disconnect = () => {
    if (soundRef.current) {
      soundRef.current.stop()
      resetAudioVisualiser()
      if (analyserRef.current) {
        analyserRef.current.disconnect()
      }
    }
  }

  useEffect(() => {
    const playListener = (src: string) => {
      disconnect()
      connect(src)
    }

    emitter.addListener("play", playListener)

    return () => {
      disconnect()
      emitter.removeAllListeners("play")
    }
  }, [])

  return <AudioVisualizer audioData={audioData} />
}

export default AudioAnalyzer
