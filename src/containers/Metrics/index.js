import React from 'react';
import clsx from 'clsx';
import { styles } from './styles';
import { withStyles, withTheme } from '@material-ui/core/styles';
import MaskedInput from 'react-text-mask';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';


import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import SaveIcon from '@material-ui/icons/Save';
import DateRangeIcon from '@material-ui/icons/DateRange';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import WcIcon from '@material-ui/icons/Wc';
import LineWeightIcon from '@material-ui/icons/LineWeight';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import AssignmentIcon from '@material-ui/icons/Assignment';

function TextMaskCustom(props) {
    const { inputRef, ...other } = props;
  
    return (
        <MaskedInput
            {...other}
            ref={(ref) => {
            inputRef(ref ? ref.inputElement : null);
            }}
            mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            placeholderChar={'\u2000'}
            showMask
        />
    );
}

class Metrics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: 25,
            showAgeField: false,
            height: "5'7\"",
            showHeightField: false,
            gender: 'female',
            weight: '140',
            emergencyContact: '1234567890'
        }
        this.handleAgeField = this.handleAgeField.bind(this)
        this.handleAgeChange = this.handleAgeChange.bind(this)
        this.handleHeightField = this.handleHeightField.bind(this)
        this.handleHeightChange = this.handleHeightChange.bind(this)
        this.handleGenderChange = this.handleGenderChange.bind(this)
        this.handleWeightChange = this.handleWeightChange.bind(this)
        this.handleECChange = this.handleECChange.bind(this)
    }

    handleAgeField(event) {
        this.setState({
            showAgeField: !this.state.showAgeField
        })
    }
    handleAgeChange(event) {
        console.log("age", event)
        this.setState({
            age: event.target.value
        })
    }
    
    handleHeightField(event) {
        this.setState({
            showHeightField: !this.state.showHeightField
        })
    }
    handleHeightChange(event) {
        console.log("height", event)
        this.setState({
            height: event.target.value
        })
    }

    handleGenderChange(event) {
        console.log("gender", event)
        this.setState({
            gender: event.target.value
        })
    }

    handleWeightChange(event) {
        console.log("weight", event)
        this.setState({
            weight: event.target.value
        })
    }

    handleECChange(event) {
        console.log("Emergency Contact", event)
        this.setState({
            emergencyContact: event.target.value
        })
    }

    render() {
        const ageNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
        const ageItems = ageNumbers.map((ageNumber) =>
            <MenuItem value={ageNumber}>
                {ageNumber.toString()}
            </MenuItem>
        );
        const heightNumbers = [ "1'0\"", "1'1\"", "1'2\"", "1'3\"", "1'4\"", "1'5\"", "1'6\"", "1'7\"", "1'8\"", "1'9\"", "1'10\"", "1'11\"", "1'12\"",
                                "2'0\"", "2'1\"", "2'2\"", "2'3\"", "2'4\"", "2'5\"", "2'6\"", "2'7\"", "2'8\"", "2'9\"", "2'10\"", "2'11\"", "2'12\"",
                                "3'0\"", "3'1\"", "3'2\"", "3'3\"", "3'4\"", "3'5\"", "3'6\"", "3'7\"", "3'8\"", "3'9\"", "3'10\"", "3'11\"", "3'12\"",
                                "4'0\"", "4'1\"", "4'2\"", "4'3\"", "4'4\"", "4'5\"", "4'6\"", "4'7\"", "4'8\"", "4'9\"", "4'10\"", "4'11\"", "4'12\"",
                                "5'0\"", "5'1\"", "5'2\"", "5'3\"", "5'4\"", "5'5\"", "5'6\"", "5'7\"", "5'8\"", "5'9\"", "5'10\"", "5'11\"", "5'12\"",
                                "6'0\"", "6'1\"", "6'2\"", "6'3\"", "6'4\"", "6'5\"", "6'6\"", "6'7\"", "6'8\"", "6'9\"", "6'10\"", "6'11\"", "6'12\"",
                            ]
        const heightItems = heightNumbers.map((heightNumber) =>
            <MenuItem value={heightNumber}>
                {heightNumber}
            </MenuItem>
        );

        const { age, gender, height, weight, emergencyContact } = this.state

        return (
            <div className={"metrics"}>
                <div className={"metrics_title"}>Metrics</div>

                <div className={"metrics_form"}>
                    <FormControl className={"ageForm"}>
                        <div><DateRangeIcon /> Age</div>
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            // open={open}
                            onClose={this.handleAgeField}
                            onOpen={this.handleAgeField}
                            value={age}
                            onChange={this.handleAgeChange}
                        >
                            {ageItems}
                        </Select>
                    </FormControl>
                </div>   


                
                <div className={"metrics_form"}>
                    <FormControl className={"genderForm"} component="fieldset">
                        <div><WcIcon /> Gender</div>
                        <RadioGroup aria-label="gender" name="gender1" value={gender} onChange={this.handleGenderChange}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>
                </div>

                <div className={"metrics_form"}>
                    <div><LineWeightIcon /> Height</div>
                    <FormControl className={"heightForm"}>
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            // open={open}
                            onClose={this.handleHeightField}
                            onOpen={this.handleHeightField}
                            value={height}
                            onChange={this.handleHeightChange}
                        >
                            {heightItems}
                        </Select>
                    </FormControl>
                </div>
                
                <div className={"metrics_form"}>
                    <FormControl className={"weightForm"} variant="outlined">
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            value={weight}
                            onChange={this.handleWeightChange}
                            endAdornment={<InputAdornment position="end">Lbs</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                            labelWidth={0}
                            type="Number"
                        />
                    </FormControl>
                    <div><AccessibilityIcon /> Weight</div>
                </div>

                <div className={"metrics_form"}>
                    <FormControl component="fieldset">
                        <div><AssignmentIcon /> Pre-existing Conditions</div>
                        <FormGroup aria-label="position" column>
                            <FormControlLabel
                                value="HeartDisease"
                                control={<Switch color="primary" />}
                                label="Heart Disease"
                                labelPlacement="start"
                                // className={"metrics_exisCon"}
                            />
                            <FormControlLabel
                                value="ChronicRespiratoryDisease"
                                control={<Switch color="primary" />}
                                label="Chronic Respiratory Disease"
                                labelPlacement="start"
                                // className={"metrics_exisCon"}
                            />
                            <FormControlLabel
                                value="Diabetes"
                                control={<Switch color="primary" />}
                                label="Diabetes"
                                labelPlacement="start"
                                checked
                                // className={"metrics_exisCon"}
                            />
                            <FormControlLabel
                                value="DepressionAnxiety"
                                control={<Switch color="primary" />}
                                label="Depression and Anxiety"
                                labelPlacement="start"
                                // className={"metrics_exisCon"}
                            />
                        </FormGroup>
                    </FormControl>
                </div>

                <div className={"metrics_form"}>
                    <FormControl>
                        <div><ContactPhoneIcon /> Emergency Contact</div>
                        <Input
                            value={emergencyContact}
                            onChange={this.handleECChange}
                            name="textmask"
                            id="formatted-text-mask-input"
                            inputComponent={TextMaskCustom}
                        />
                    </FormControl>
                </div>

                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={"saveButton"}
                    // startIcon={<SaveIcon />}
                >
                    Save
                </Button>
            </div>
        )
    }

}

export default withTheme(withStyles(styles)(Metrics))