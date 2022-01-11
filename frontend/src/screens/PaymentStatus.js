import React, { useEffect, useState } from 'react'
import { grabStatus } from '../actions/apiCalls'

const PaymentStatus = ({ match }) => {
  const [values, setValues] = useState({
    amount: '',
    perror: '',
  })

  const { amount, perror } = values

  useEffect(() => {
    getPaymentStatus(match.params.paymentId)
  }, [])

  const getPaymentStatus = (paymentId) => {
    grabStatus(paymentId).then((respsonse) => {
      if (respsonse.error) {
        setValues({ ...values, perror: respsonse.error, amount: '' })
      } else {
        setValues({ ...values, perror: '', amount: respsonse.amount })
      }
    })
  }

  return (
    <div>
      {perror && <h1 style={{ color: 'red' }}>{perror}</h1>}
      {amount > 0 && (
        <h1 style={{ color: 'green' }}>
          Your order of rs {amount / 100} is successfull
        </h1>
      )}
      {!perror && !amount && <h1>Loading...</h1>}
    </div>
  )
}

export default PaymentStatus
