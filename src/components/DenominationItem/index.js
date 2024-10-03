import './index.css'

const DenominationItem = props => {
  const {denomination, subractWithrawAmount} = props
  const {value} = denomination

  const onWithdraw = () => {
    subractWithrawAmount(value)
  }

  return (
    <li className="denomination-container">
      <button type="button" onClick={onWithdraw}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem