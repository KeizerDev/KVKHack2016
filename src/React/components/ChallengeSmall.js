var React = require('react');
import TimelineSmall from '../components/TimelineSmall.js';
import { Link } from 'react-router'

export default class ChallengeSmall extends React.Component {

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
        var url = "challenge/" + this.props.content.id + "/7";
        return (<div className="list-group l-card">
                <Link to={url} className="list-group-item list-group-item list-group-item-action">
                    <h5 className="list-group-item-heading text-center">{this.props.content.text}</h5>
                    <TimelineSmall weeks={this.props.content.weeks} min={this.props.content.min} />
                </Link>
            </div>);
    }
}
