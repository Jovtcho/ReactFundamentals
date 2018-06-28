import React, { Component } from 'react';
import ImageList from './ImageList';
import Details from './Details';

class Character extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 0,
            details: {}
        }
    }

    componentDidMount() {
        this.selectImage(0);
    }

    selectImage = (id) => {
        //console.log(id);
        fetch('http://localhost:9999/character/' + id).then(data => {
            return data.json();
        }).then(parseData => {
            this.setState({ details: parseData });
        });
    }

    render() {
        return (
            <div>
                <ImageList selectImage={this.selectImage} />
                <Details {...this.state.details} />
            </div>
        )
    }
}

export default Character;
