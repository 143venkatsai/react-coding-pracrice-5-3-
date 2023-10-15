import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstCard: true, lastCard: true}

  firstName = () => {
    this.setState(prevState => ({firstCard: !prevState.firstCard}))
  }

  lastName = () => {
    this.setState(prevState => ({lastCard: !prevState.lastCard}))
  }

  render() {
    const {firstCard, lastCard} = this.state
    const name1 = firstCard ? '' : <p className="first-name">Joe</p>
    const name2 = lastCard ? '' : <p className="last-name">Jonas</p>

    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="card-container">
          <div className="first-card">
            <button className="button" type="button" onClick={this.firstName}>
              Show/Hide Firstname
            </button>
            {name1}
          </div>
          <div className="last-card">
            <button className="button" type="button" onClick={this.lastName}>
              Show/Hide Lastname
            </button>
            {name2}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
