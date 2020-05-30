import React from 'react';
import { styles } from './styles';
import { withStyles, withTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ReactSpeedometer from "react-d3-speedometer"
import { mdiHeartPulse, mdiHeart, mdiLungs } from '@mdi/js';
import Icon from '@mdi/react';
import Audio from './Audio'

class Monitor extends React.Component {

    state = {
        bpm: 75,
        o2Levels: 97,
        heartClass: "monitor__heart-icon-dull"
    }

    beat = false;

    refreshInterval = -1;
    oxygenRefresh = -1;

    componentDidMount() {
        let random = 750;

        this.refreshInterval = setInterval(() => {
            const heartClass = this.beat ? 'monitor__heart-icon-start' : 'monitor__heart-icon-end';
            random = Math.floor(Math.random() * 500) + 2000;
            this.beat = !this.beat;

            const coin = Math.floor(Math.random() * 15);
            let o2Levels = Math.floor(((this.state.o2Levels * coin) + ((Math.random() * 30) + 70)) / (coin + 1));
            this.setState({
                bpm: Math.floor(Math.random() * 5) + 70,
                o2Levels,
                heartClass
            })
        }, random)
    }




    componentWillUnmount() {
        clearInterval(this.refreshInterval);
    }



    render() {
        const { bpm, o2Levels, heartClass } = this.state;
        const { classes, theme } = this.props;
        return (
            <React.Fragment>

                <div className="monitor">

                    <div className="monitor__card">
                        <h4 className="monitor__title">Coughing Audio</h4>
                        <div className="monitor__audio">
                            <Audio/>
                        </div>
                    </div>


                    <div className="monitor__card">
                        <h4 className={"monitor__title"}>Blood sp O2</h4>
                        <div className="monitor__speedometer">
                            <ReactSpeedometer

                                height={120}
                                width={250}
                                value={o2Levels}
                                minValue={70}
                                maxValue={100}
                                needleTransitionDuration={1000}
                                needleTransition="easeElastic"
                                customSegmentStops={[70, 85, 92, 95, 100]}
                                segmentColors={["#d4daee", "#859bdd", "#2c54c9", "#0031bf"]}
                                customSegmentLabels={[
                                    {
                                        text: "Danger",
                                        position: "OUTSIDE",
                                        color: "rgb(50,50,50)",
                                    },

                                    {
                                        text: "Low",
                                        position: "OUTSIDE",
                                        color: "rgb(50,50,50)",
                                    },
                                    {

                                        position: "OUTSIDE",
                                        color: "rgb(50,50,50)",
                                    },
                                    {
                                        text: "Healthy",
                                        position: "OUTSIDE",
                                        color: "rgb(50,50,50)",
                                    },
                                ]}
                                needleColor="#D8DEE9"
                                textColor={'#fff'}
                            />
                        </div>
                        <div className="monitor__row">
                        <div className="monitor__o2-levels">{o2Levels}%</div>
                        </div>
                    </div>
                    <div className="monitor__card">
                        <span className={"monitor__title"}>Heart Rate</span>

                        <Icon path={mdiHeartPulse}
                            title="User Profile"
                            size={'18vh'}


                            className={heartClass}
                        />
                        <div className="monitor__row">
                        <div className="monitor__bpm-rate">{bpm} bpm</div>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        )
    }

}

export default withTheme(withStyles(styles)(Monitor))