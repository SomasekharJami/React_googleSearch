import './index.css'

const SuggestionItem = props => {
  const {itemDetails, onClicking} = props
  const {suggestion} = itemDetails

  const onPassing = () => {
    onClicking(suggestion)
  }

  return (
    <li className="listItem">
      <p className="liP">{suggestion}</p>
      <img
        className="bton"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        onClick={onPassing}
      />
    </li>
  )
}

export default SuggestionItem
