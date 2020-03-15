import React, { Component } from 'react'

export default class CountryCasesList extends Component {
    render() {
        const { countryCases } = this.props
        return (
            <ul>
                {countryCases.map(x => <li key={x.id}>{x.name}</li>)}
            </ul>
        )
    }
}