import React from 'react'

const Score = ({ day }) => {
  const math = document.getElementById('math');
  const english = document.getElementById('english');
  const ja = document.getElementById('ja');
  console.log(math)
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

  console.log()


  return (
    <>
      <h2 class='day'>{day}</h2>
      <h3>成績</h3>
      <span>得点</span>
      <ul>
        <li>数学:<input type='text' size='2' id='math'></input></li>
        <li>英語:<input type='text' size='2' id='english'></input></li>
        <li>国語:<input type='text' size='2' id='ja'></input></li>
      </ul>
      <span>平均:{average}</span>
      <br></br>
      <span>コメント:{comment}</span>
    </>
  )

}

export default Score
