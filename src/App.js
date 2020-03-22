import React from 'react'
import Score from './Score.js'
import Day from './Day.js'
const App = () => {
  const students = {
    day1: {
      day: '1学期',

    },
    day2: {
      day: '2学期',

    }
  }

  const classDays = {
    day1: 50,
    day2: 63
  }
  return (
    <>
      <h1 class="title">通知表</h1>
      <div class="text-wrap">
        <Score
          day={students.day1.day}
        />
        <Day classDay={classDays.day1} />
      </div>
      <div class="text-wrap">
        <Score
          day={students.day2.day}
        />
        <Day classDay={classDays.day2} />
      </div>

    </>
  )
}

export default App