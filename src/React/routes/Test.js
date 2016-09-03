var React = require('react')
import Timeline from '../components/Timeline.js';

var weeks = require('../Api/mock.js');
import { Link } from 'react-router'

var Challenge = React.createClass({

    getInitialState: function() {
        return {
            value: 0,
            previous: 0
        };
    },

    componentWillMount: function() {
        "use strict";

    },

    render: function() {
        var activeWeek = this.props.routeParams.week;
        var challengeId = this.props.routeParams.id;
        return (
            <div className="timeline">

                <div className="slide-left"></div>
                <div className="slide-right"></div>

                <div className="weeks-wrapper" data-count={weeks.length} to="test/">

                    { weeks.map(function(week, index){
                        var url = '/test/' + challengeId + '/' + (index + 1);
                        return <Link className="week-wrapper" to={url} data-selected={activeWeek == index + 1} data-status={week.status} data-number={index + 1}>
                            <div className="week-number">{index + 1}</div>
                        </Link>;
                    }) }
                </div>
            </div>
        );
    }
});

module.exports = Challenge;
