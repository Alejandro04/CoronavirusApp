import React, { Component } from 'react'
import Fragment from 'render-fragment';

export default class CountryCasesList extends Component {
    render() {
        const { confirmed, recovered, deaths } = this.props
        return (
            <Fragment>
                Confirmed: {confirmed} Recovered: {recovered} Deaths: {deaths}
            </Fragment>
        )
    }
}