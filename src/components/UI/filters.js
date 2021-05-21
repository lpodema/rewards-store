import "rc-tooltip/assets/bootstrap.css";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { withStyles } from "@material-ui/core";

const SelectContainer = styled.div`
    background-color: green;
`;

const Select = styled.select`
    width: 100%;
    height: 35px;
    background: white;
    color: gray;
    padding-left: 5px;
    font-size: 14px;
    border: none;
    margin-left: 10px;

    option {
        color: black;
        background: white;
        display: flex;
        white-space: pre;
        min-height: 20px;
        padding: 0px 2px 1px;
    }
`;

// export const SelectComponent = (props) => {
//     return (
//         <SelectContainer>
//             <Select
//                 multiple
//                 name={props.name}
//                 value={props.val}
//                 onChange={props.onChangeHandler}>
//                 {props.options.map((option, index) => (
//                     <option value={option} key={index}>
//                         {option}
//                     </option>
//                 ))}
//             </Select>
//         </SelectContainer>
//     );
// };

const RangeContainer = styled.div`
    background-color: red;
    width: 400px;
    margin: 50px;
`;

export const RangeSlider = (props) => {
    // console.log(props);
    // const [min, max] = props.range;
    // console.log(props);
    const [min, max] = props.minMax;
    return (
        <RangeContainer>
            <Typography id='range-slider' gutterBottom>
                Costo en puntos
            </Typography>
            <AirbnbSlider
                ThumbComponent={AirbnbThumbComponent}
                /*getAriaLabel={(index) =>
                    index === 0 ? "Minimum price" : "Maximum price"
                }*/
                defaultValue={[50, 2500]}
                max={max}
                min={min}
                onChange={props.onChange}
                value={props.value}
                step={10}
            />
        </RangeContainer>
    );
};

const AirbnbSlider = withStyles({
    root: {
        color: "#3a8589",
        height: 3,
        padding: "13px 0",
    },
    thumb: {
        height: 27,
        width: 27,
        backgroundColor: "#fff",
        border: "1px solid currentColor",
        marginTop: -12,
        marginLeft: -13,
        boxShadow: "#ebebeb 0 2px 2px",
        "&:focus, &:hover, &$active": {
            boxShadow: "#ccc 0 2px 3px 1px",
        },
        "& .bar": {
            // display: inline-block !important;
            height: 9,
            width: 1,
            backgroundColor: "currentColor",
            marginLeft: 1,
            marginRight: 1,
        },
    },
    active: {},
    track: {
        height: 3,
    },
    rail: {
        color: "#d8d8d8",
        opacity: 1,
        height: 3,
    },
})(Slider);

function AirbnbThumbComponent(props) {
    return (
        <span {...props}>
            <span className='bar' />
            <span className='bar' />
            <span className='bar' />
        </span>
    );
}

export const SelectComponent = (props) => {
    // console.log(props);
    return (
        <SelectContainer>
            <Select
                multiple
                native
                value={props.val}
                onChange={props.onChangeHandler}
                inputProps={{
                    id: "select-multiple-native",
                }}>
                {props.options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </Select>
        </SelectContainer>
    );
};
