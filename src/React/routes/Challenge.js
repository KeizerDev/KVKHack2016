var React = require('react')
import Timeline from '../components/Timeline.js';

var Week = require('../components/Week.js');
var data = require('../Api/mock.js');
import { Link } from 'react-router'
import $ from 'jquery';

var Challenge = React.createClass({

    getInitialState: function() {
        return {
            value: 0,
            previous: 0,
            scrolled: 0
        };
    },

    handleClickLeft() {
        console.log(this)

        this.setState({
            scrolled: this.state.scrolled - 1
        });
    },

    handleClickRight() {
        this.setState({
            scrolled: this.state.scrolled + 1
        });

    },

    componentWillMount: function() {
        "use strict";

        var setScrollClasses = function () {
            $('.weeks-wrapper').each(function (delta, weeksWrapper) {
                if ($(weeksWrapper).width() > $(window).width()) {
                    $(weeksWrapper).parent().addClass('needs-scrolling')
                }
                else {
                    $(weeksWrapper).parent().removeClass('needs-scrolling')
                }
            })
        };

        $(window).on('resize', function () {
            setScrollClasses()
        });

        setTimeout(function () {
            setScrollClasses()
        }, 300)
    },

    render: function() {
        var activeWeek = this.props.routeParams.week;
        var challengeId = this.props.routeParams.id;
        return (<div>
            <div className="timeline">

                <div className="slide-left" onClick={this.handleClickLeft}></div>
                <div className="slide-right" onClick={this.handleClickRight}></div>

                <div className="weeks-wrapper" data-count={data.length} data-scroll={this.state.scrolled}>

                    { data.map(function(week, index){
                        var url = '/challenge/' + challengeId + '/' + (index + 1);
                        return <Link className="week-wrapper" to={url} data-selected={activeWeek == index + 1} data-status={week.status} data-number={index + 1}>
                            <div className="week-number">{index + 1}</div>
                        </Link>;
                    }) }
                </div>
            </div>
            <Week/>
        </div>);
    }
});

module.exports = Challenge;
