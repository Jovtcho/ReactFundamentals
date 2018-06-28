import React, { Component } from 'react';
import left from '../resources/left.png';
import right from '../resources/right.png';
import '../styles/slider.css';

class Slider extends Component {
    constructor(props) {
        super(props)

        this.state = {
            url: '',
            id: 0
        }
    }

    componentDidMount() {
        this.selectEpisode(0);
    }

    selectEpisode = (id) => {
        fetch('http://localhost:9999/episodePreview/' + id).then(data => {
            return data.json();
        }).then(parseData => {            
            this.setState( parseData );
        });
    }
    
    render() {
        return (
            <div>
                <div className='warper'>
                    <img
                        alt='nope'
                        src={left}
                        className='slider-elem slider-button case-left'
                        onClick={() => this.selectEpisode(this.state.id - 1)}
                    />
                    <img
                        className='sliderImg slider-elem'
                        alt='focusedEp'
                        src={this.state.url}
                    />
                    <img
                        alt='nope'
                        src={right}
                        className='slider-elem slider-button case-right'
                        onClick={() => this.selectEpisode(this.state.id + 1)}
                    />
                </div>
            </div >
        );
    }
}

export default Slider;
