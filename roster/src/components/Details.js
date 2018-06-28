import React, { Component } from 'react';

class Details extends Component {
    // constructor(props) {
    //     super(props);
    // }


    render() {
        return (
            <div>
                <fieldset>
                    <p><strong>Name: </strong>{this.props.name}</p>
                    <img className='img' src={this.props.url} alt='imageDetails' />
                    <p><strong>Bio: </strong>{this.props.bio}</p>
                </fieldset>
            </div>
        )
    }
}

export default Details;
