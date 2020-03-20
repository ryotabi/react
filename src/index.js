import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const students = {
    day1: {
      day: '1学期',
      math: 40,
      english: 49,
      ja: 42,
    },
    day2: {
      day: '2学期',
      math: 46,
      english: 39,
      ja: 38,
    }
  }

  const classDays = {
    day1: 50,
    day2: 63
  }
  return (
    <>
      <h1>通知表</h1>
      <Score
        day={students.day1.day} math={students.day1.math} english={students.day1.english} ja={students.day1.ja}
      />
      <Day classDay={classDays.day1} />
      <Score
        day={students.day2.day} math={students.day2.math} english={students.day2.english} ja={students.day2.ja}
      />
      <Day classDay={classDays.day2} />

    </>
  )
}

const Score = ({ day, math, english, ja, }) => {
  let average = (math + english + ja) / 3
  average = average.toFixed(2)

  let comment

  if (average > 80) {
    comment = "よくできました"
  } else if (average > 50) {
    comment = "普通です"
  } else if (average <= 50) {
    comment = "もっと頑張りましょう"
  }

  return (
    <>
      <h2>{day}</h2>
      <h3>成績</h3>
      <span>得点</span>
      <ul>
        <li>数学:{math}</li>
        <li>英語:{english}</li>
        <li>国語:{ja}</li>
      </ul>
      <span>平均:{average}</span>
      <br></br>
      <span>コメント:{comment}</span>
    </>
  )

}

const Day = ({ classDay }) => {
  const [absent, setAbsent] = useState(0)
  const handleClick = () => {
    setAbsent(absent + 1)
  }

  let attend = classDay - absent

  let daycomment

  if (attend / classDay * 100 === 100) {
    daycomment = "皆勤賞です"
  } else if (attend / classDay * 100 > 80) {
    daycomment = "よく頑張りました"
  } else if (attend / classDay * 100 >= 60) {
    daycomment = "普通です"
  } else if (attend / classDay * 100 < 60) {
    daycomment = "もっと学校に来ましょう"
  }
  return (
    <>
      <h3>出欠表</h3>
      <p>授業日数:{classDay}</p>
      <p>出席数:{attend}</p>
      <p>欠席数:{absent}</p>
      <button
        type='button'
        onClick={handleClick}
      >
        欠席
      </button>
      <p>コメント:{daycomment}</p>
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)