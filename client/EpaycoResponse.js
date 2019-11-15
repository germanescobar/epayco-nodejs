import React from 'react'
import queryString from 'query-string'
import axios from 'axios'

export default class EpaycoResponse extends React.Component {
  constructor(props) {
    super(props)

    this.state = { state: "", amount: "" }
  }

  async componentDidMount() {
    // obtener el ref_payco del query string
    const query = queryString.parse(location.search)
    const ref = query.ref_payco

    const response = await axios.get(`https://secure.epayco.co/validation/v1/reference/${ref}`)
    console.log(response.data.data)
    const data = response.data.data
    this.setState({ state: data["x_response"], amount: data["x_amount"] });
  }

  render() {
    return (
      <>
        <h1>Página de respuesta</h1>
        <p><strong>Amount: </strong> {this.state.amount}</p>
        <p><strong>Response: </strong> {this.state.state}</p>
      </>
    )

  }
}
