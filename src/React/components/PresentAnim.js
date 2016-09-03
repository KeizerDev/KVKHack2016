var React = require('react');
import { Link } from 'react-router'

export default class PresentAnim extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isKeyboardEnabled: true,
        };
    }

    // componentWillMount() {
    //     this.data = this.props.content.map((entry) => entry.date);
    // }

    // componentWillReceiveProps(nextProps) {
    //     this.data = nextProps.content.map((entry) => entry.date);
    // }

    render() {
        const state = this.state;

        return (<svg xmlns="http://www.w3.org/2000/svg" width="400" height="500" className="" viewBox="0 0 400 500" version="1.1">
        <g transform="translate(0,-552.36216)" className="gift">
            <rect width="358.6" height="337.2" x="22.3" y="712.1" fill="#e96793"/>
            <rect width="25" height="335" x="189.1" y="712.8" fill="#fff100"/>
            <rect y="-383.8" x="835.1" height="363.5" width="23.4" transform="matrix(0,1,-1,0,0,0)" fill="#fff100"/>
            <g className="top">
                <rect className="" y="645.8" x="11.1" height="103.4" width="381" rx="8.5" ry="9" fill="#e24d87"/>
                <path className="franjes" d="m200.1 553.4c-14 0.2-29.1 4-32.7 19.7-3.1 13.6 5.4 33.8 9.8 42.8 0.4 0.6 0.8 1.1 0.9 1.4 1.4 3.1 1.4 3.3 1.4 3.3 0 0-1-1.8-2.4-4.7-3.9-5.2-18.5-20-32.2-29.5-15.2-10.5-28.2-7-36.6 0.6-8.4 7.6-15 23.2-4.1 36.6 10.9 13.4 57.6 22.4 57.6 22.4l52.8 0.6c0 0 22.8 0.4 34.5-0.8 11.7-1.2 45.9-12.3 51-25.1 5.1-12.7-0.4-22.4-6-30-5.6-7.6-15-11.3-29.6-6.4-14.6 4.9-30.4 22-30.4 22 0 0 8.4-18.5 5.1-33.5-3.3-15-17.9-18.5-33.3-19.3-1.9-0.1-3.9-0.2-5.9-0.1zm3.9 16.7c7.1 0.1 13.8 2.1 16.7 4.2 5.1 3.7 11.7 12.7 3.3 29.4-8.4 16.7-20.4 33.7-20.4 33.7 0 0-16.4-20.2-21-36-4.5-15.8-4.7-21 5.6-27.6 4.5-2.9 10.3-3.9 15.8-3.8zm-70.3 24.1c6.2-0.1 12.8 3.9 20.6 9.8 12.3 9.5 30 36.2 30 36.2l-0.8 0c0 0-1.2 0.8-11.3 0.2-10.1-0.6-33.1-8-45.2-14-12.1-6-13.2-18.3-3.9-27.3 3.5-3.4 7-4.9 10.7-4.9zm133.1 2.7c1.8 0.1 3.5 0.6 5.2 1.6 7 3.9 15.8 15 8 23.9-7.8 8.8-23.6 15.2-38 18.3-14.4 3.1-26.3 2.7-26.3 2.7 0 0 9.3-18.9 26.3-32.3 12.8-10 19.4-14.3 24.8-14.1z" fill="#e2d500"/>
            </g>
            <g transform="matrix(1.628544,0,0,1.628544,-1405.224,-2.7705779)">
                <path d="m876.8 516.1 100.7 0" className="s1"/>
                <path d="m980.6 440.5 0 203.9" className="s1"/>
                <path d="m877.1 527.9 100 0" className="s1"/>
                <path d="m992.9 439.5 0 206.4" className="s1"/>
                <path d="m996.4 515.7 101.4 0M1098.6 527.9l-103.6 0" className="s1"/>
            </g>
        </g>
    </svg>);
    }
}
