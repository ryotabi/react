import React, { useState } from 'react'

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

export default Day




