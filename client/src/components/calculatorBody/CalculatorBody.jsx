import React, {useState} from 'react'
import Buttons from '../buttons/Buttons'
import Screen from '../screen/Screen'
function CalculatorBody() {

    const [total, setTotal] = useState(0)

  return (
    <div className='calculator-body'>
        <Screen total={total}/>
        <Buttons setTotal={setTotal} total={total}/>
    </div>
  )
}

export default CalculatorBody