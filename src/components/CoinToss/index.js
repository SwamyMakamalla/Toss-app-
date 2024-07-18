// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    count: 0,
    headCount: 0,
    tailCount: 0,
    image: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  flipTheCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        headCount: prevState.headCount + 1,
        count: prevState.count + 1,
        image: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prevState => ({
        tailCount: prevState.tailCount + 1,
        count: prevState.count + 1,
        image: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {headCount, tailCount, count, image} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="tag-name">Heads (or) Tails</p>
          <img src={image} alt=" toss result" className="toss-image" />
          <button
            type="button"
            className="toss-button"
            onClick={this.flipTheCoin}
          >
            Toss coin
          </button>
          <div className="toss-results">
            <p className="toss-type">Total: {count}</p>
            <p className="toss-type">Heads: {headCount}</p>
            <p className="toss-type">Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
