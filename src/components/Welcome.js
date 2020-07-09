import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        return (
            <div>
                 <h1>Hello {this.props.name} a.k.a {this.props.heroName}</h1>
                 <h1>{this.props.children}</h1>
            </div>
        )
    }
}

export default Welcome

