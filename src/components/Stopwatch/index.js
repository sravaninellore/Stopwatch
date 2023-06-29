// Write your code here
import {Component} from 'react'

import './index.css'

const initialState = {seconds: 0, isTimerRunning: false}

class Stopwatch extends Component {
  state = initialState

  componentWillUnmount = () => {
    this.clearTimer()
  }

  onStartTimer = () => {
    this.timerIntervalID = setInterval(this.increaseTimerBySecond, 1000)
    this.setState({isTimerRunning: true})
  }

  increaseTimerBySecond = () => {
    this.setState(previousState => ({
      seconds: previousState.seconds + 1,
    }))
  }

  clearTimer = () => {
    clearInterval(this.timerIntervalID)
  }

  onStopTimer = () => {
    this.clearTimer()
    this.setState({isTimerRunning: false})
  }

  onResetTimer = () => {
    this.clearTimer()
    this.setState(initialState)
  }

  render() {
    const {seconds, isTimerRunning} = this.state

    const totalTimeInSeconds = seconds
    const totalMinutes = Math.floor(totalTimeInSeconds / 60)
    const totalSeconds = Math.floor(totalTimeInSeconds % 60)
    const stringifiedMinutes =
      totalMinutes > 9 ? totalMinutes : `0${totalMinutes}`
    const stringifiedSeconds =
      totalSeconds > 9 ? totalSeconds : `0${totalSeconds}`

    return (
      <div className="bg-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="card-container">
          <div className="timer-heading">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="stop-watch"
            />
            <h1 className="timer">Timer</h1>
          </div>
          <h1 className="timer-display">
            {stringifiedMinutes}:{stringifiedSeconds}
          </h1>
          <div className="buttons-container">
            <button
              type="button"
              className="button button-1"
              onClick={this.onStartTimer}
              disabled={isTimerRunning}
            >
              Start
            </button>
            <button
              type="button"
              className="button button-2"
              onClick={this.onStopTimer}
            >
              Stop
            </button>
            <button
              type="button"
              className="button button-3"
              onClick={this.onResetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
