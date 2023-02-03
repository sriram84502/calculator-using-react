import React from 'react'

const Display = (value,handle,answer) => {
  return (
    <>
        <div class="displayCont">
          <div class="display" >
            <p class="totalNumber" id="totalNumber">{value}</p>
            <h1 id="currentNumber" class="currentNumber">{answer}</h1>
            {/* <p class="tempResult" id="tempResult">0</p> */}
          </div>
        </div>
    </>
  )
}

export default Display