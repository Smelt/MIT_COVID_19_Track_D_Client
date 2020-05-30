import React from 'react';
import AudioAnalyser from './AudioAnalyser'

class Audio extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            audio: null
        }
    }
    async getMicrophone() {
        const audio = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: false
        });
        this.setState({ audio });
    }

    stopMicrophone() {
        this.state.audio.getTracks().forEach(track => track.stop());
        this.setState({ audio: null });
    }
    toggleMicrophone = () => {
        if (this.state.audio) {
            this.stopMicrophone();
        } else {
            this.getMicrophone();
        }
    }


    render() {
        return (
            <div>

 
            {this.state.audio ? <AudioAnalyser audio={this.state.audio} /> : ''}
            <button onClick={this.toggleMicrophone}>
              {this.state.audio ? 'Stop microphone' : 'Get microphone input'}

            </button>
            </div>
        )
    }
}

export default Audio;