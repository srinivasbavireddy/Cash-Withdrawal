import {Component} from 'react'
import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  subractWithrawAmount = value => {
    this.setState(prevState => {
      const amount = prevState.balance
      if (amount - value >= 0) {
        return {balance: amount - value}
      }
      return {balance: amount}
    })
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="profile-Name-Container">
            <h1 className="profile-name-img">S</h1>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="your-balance">Your Balance</p>
            <div className="amount-container">
              <p className="balance-amount">{balance}</p>
              <p className="in-rupees">In Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choose-heading">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominations-Container">
            {denominationsList.map(each => (
              <DenominationItem
                denomination={each}
                key={each.id}
                subractWithrawAmount={this.subractWithrawAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal