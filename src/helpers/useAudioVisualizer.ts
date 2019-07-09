import React from "react"

interface Type {
  audioData: Uint8Array
}

export default (url: string | undefined) => {
  const [animationFrame, setAnimationFrame] = React.useState(0)
  const [audioData, setAudioData] = React.useState(new Uint8Array(0))

  const result: Type = {
    audioData
  }

  if (!process.browser) {
    return result
  }
  const [audio] = React.useState(new Audio(url))
  const [context] = React.useState(new AudioContext())
  const [analyser] = React.useState(context.createAnalyser())
  const [source] = React.useState(context.createMediaElementSource(audio))

  React.useEffect(() => {
    // const audio = new Audio(url)
    // const context = new AudioContext()
    // const analyser = context.createAnalyser()
    // const source = context.createMediaElementSource(audio)
    const dataArray = new Uint8Array(analyser.frequencyBinCount)

    source.connect(analyser)
    source.connect(context.destination)
    analyser.connect(context.destination)
    analyser.getByteFrequencyData(dataArray)
    setAudioData(dataArray)
    audio.play()
    return () => {
      source.disconnect(analyser)
      source.disconnect(context.destination)
      analyser.disconnect(context.destination)
    }
  }, [audioData])

  return {
    audioData
  }
}
