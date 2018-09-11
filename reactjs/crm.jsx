import React from "react"
import { render } from "react-dom"

import CrmContainer from "./containers/CrmContainer"

class Crm extends React.Component {
  render() {
    return (
      <CrmContainer />
    )
  }
}

render(<Crm/>, document.getElementById('Crm'))