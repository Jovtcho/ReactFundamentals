import React, { Component } from 'react';
import Image from './Image';

class ImageList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:9999/roster').then(data => {
            return data.json();
        }).then(parsedData => {
            this.setState({ images: parsedData });
        })
    }    

    render() {
        return (
            <div className='imgList'>
                {this.state.images.map(img => {
                    return <Image params={img} key={img.id} select={this.props.selectImage} />
                })}
            </div>
        )
    }
}

export default ImageList;
