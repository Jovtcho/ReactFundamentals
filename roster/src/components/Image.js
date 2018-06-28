import React, { Component } from 'react';

class Image extends Component {
    render() {
        return (
            //<div>
            <img
                className='img'
                src={this.props.params.url}
                alt='RosterImage'
                onClick={() => this.props.select(this.props.params.id)} />
            //</div>
        )
    }
}

export default Image;
