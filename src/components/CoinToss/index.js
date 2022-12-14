import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    total: 0,
    heads: 0,
    tails: 0,
    isTrueImage: true,
  }

  onButtonClick = () => {
    const {total, heads, tails} = this.state
    this.setState({total: total + 1})
    const tossResult = Math.floor(Math.random() * 2)
    console.log(tossResult)
    if (tossResult === 0) {
      this.setState({isTrueImage: true, heads: heads + 1})
    } else {
      this.setState({isTrueImage: false, tails: tails + 1})
    }
  }

  render() {
    const {total, heads, tails, isTrueImage} = this.state
    return (
      <div className="coin-toss-game-container">
        <div className="coin-toss-card">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p className="title">Heads (or) Tails</p>
          {!isTrueImage ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
              className="image"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
              className="image"
            />
          )}
          <button type="button" className="btn" onClick={this.onButtonClick}>
            Toss Coin
          </button>
          <div className="total-container">
            <p className="total">Total:{total}</p>
            <p className="heads">Heads:{heads}</p>
            <p className="tails">Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
