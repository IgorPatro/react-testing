import React from "react"

const formatTime = (timerState: number) => {
  const minutes = Math.floor(timerState / 60)
  const seconds = timerState % 60

  return `${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`
}

const Timer = () => {
  const [seconds, setSeconds] = React.useState<string | number>(0)
  const [minutes, setMinutes] = React.useState<string | number>(0)
  const [timerSeconds, setTimerSeconds] = React.useState(0)
  const [isTimerWorking, setIsTimerWorking] = React.useState(false)

  const handleStart = () => {
    setTimerSeconds(Number(minutes) * 60 + Number(seconds))
    return setIsTimerWorking(true)
  }

  const handleToggle = () => {
    if (timerSeconds === 0) return
    setIsTimerWorking((prevState) => !prevState)
  }

  const handleReset = () => {
    setIsTimerWorking(false)
    setSeconds(0)
    setMinutes(0)
    setTimerSeconds(0)
  }

  const refreshTimer = () => {
    setTimerSeconds((prevState) => {
      if (prevState === 0) {
        setIsTimerWorking(false)
        return 0
      }
      return (prevState -= 1)
    })
  }

  React.useEffect(() => {
    if (!isTimerWorking) return

    const timerId = setInterval(refreshTimer, 1000)

    return () => {
      clearInterval(timerId)
    }
  }, [isTimerWorking])

  return (
    <>
      <label>
        <input
          type="number"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
        />
        Minutes
      </label>
      <label>
        <input
          type="number"
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
        />
        Seconds
      </label>
      <button onClick={handleStart}>START</button>
      <button onClick={handleToggle}>PAUSE / RESUME</button>
      <button onClick={handleReset}>RESET</button>
      <h1 data-testid="running-clock">{formatTime(timerSeconds)}</h1>
    </>
  )
}

export default Timer
