import React from 'react'
import axios from 'axios'

export default class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = { status: "" }
  }

  async componentDidMount() {
    const response = await axios.get("/api/something")
    const data = await response.data

    this.setState({ status: data.status })

    const s = document.createElement('script');
    s.src = "https://checkout.epayco.co/checkout.js"
    s.classList.add("epayco-button")
    s.setAttribute('data-epayco-key', "...")
    s.setAttribute('data-epayco-amount', "50000")
    s.setAttribute('data-epayco-name', "Vestido Mujer Primavera")
    s.setAttribute('data-epayco-description', "Vestido Mujer Primavera")
    s.setAttribute('data-epayco-currency', "cop")
    s.setAttribute('data-epayco-country', "co")
    s.setAttribute('data-epayco-test', "true")
    s.setAttribute('data-epayco-external', "false")
    s.setAttribute('data-epayco-response', "http://localhost:3000/epayco/response")
    s.setAttribute('data-epayco-confirmation', "http://localhost:3000/epayco/confirmation")
    s.setAttribute('data-epayco-extra1', "...")

    document.body.appendChild(s)
  }

  render () {
    return (
      <>
        <h1>Hello! {this.state.status}</h1>
      </>
    )
  }
}
