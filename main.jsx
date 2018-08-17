import React from 'react'
import ReactDOM from 'react-dom'
import cytoscape from 'cytoscape'

class CytoScapeViewer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.viewer = cytoscape({
            container: document.getElementById(this.props.id),
            elements: [
                {
                    'data': { 'id': 'a' }
                },
                {
                    'data': { 'id': 'b' }
                },
                {
                    'data': { 'id': 'c' }
                },
                {
                    'data': { 'id': 'ab', 'source': 'a', 'target': 'b' }
                },
                {
                    'data': { 'id': 'bc', 'source': 'b', 'target': 'c' }
                }
            ],
            style: [
                {
                    selector: 'edge',
                    style: {
                        'curve-style': 'bezier',
                        'control-point-step-size': 40
                    }
                }
            ]
        });
    }

    render() {
        return <div id={this.props.id}></div>
    }
}

ReactDOM.render(
    <CytoScapeViewer id='cy'/>,
    document.getElementById('root')
);
