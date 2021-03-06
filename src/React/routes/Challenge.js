var React = require('react')
import Timeline from '../components/Timeline.js';

var Week = require('../components/Week.js');
// var data = require('../Api/mock.js');
import { Link } from 'react-router'
import $ from 'jquery';
var DemoData = require('../Api/mock.js');


var Challenge = React.createClass({

    getInitialState: function() {
        var state = {
            value: 0,
            previous: 0,
            scrolled: 5,
            data: {

            }
        };

        if (this.props.routeParams.id == 1) {
            state.data.title = DemoData.results[1].text;
            state.data.weeks = DemoData.results[1].weeks;
            state.data.min = DemoData.results[1].min;
        }
        else {
            state.data.title = DemoData.results[0].text;
            state.data.weeks = DemoData.results[0].weeks;
            state.data.min = DemoData.results[0].min;
        }

        if (($(window).width() + 60) / 50 > state.data.weeks.length) {
            state.scrolled = 0;
        }

        return state;
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
                if (($(weeksWrapper).width() + 60) > $(window).width()) {
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
        var state = this.state;
        return (<div>
            <h2 className="page-sub-title">{this.state.data.title}</h2>
            <div data-id={this.props.routeParams.id} className="timeline">

                <div className="slide-left" onClick={this.handleClickLeft}></div>
                <div className="slide-right" onClick={this.handleClickRight}></div>

                <div className="weeks-wrapper" data-count={this.state.data.weeks.length} data-scroll={this.state.scrolled}>

                    { this.state.data.weeks.map(function(week, index){
                        var icon = (<span>{index + 1}<i className="fa fa-gift" aria-hidden="true"></i></span>);
                        var status = getStatusWeek(week, state.data.min);
                        var url = '/challenge/' + challengeId + '/' + (index + 1);
                        return <Link className="week-wrapper" to={url} data-selected={activeWeek == index + 1} data-status={status} data-number={index + 1}>
                            <div className="week-number">{icon}</div>
                        </Link>;
                    }) }
                </div>
            </div>
            <Week content={this.state.data.weeks[activeWeek - 1]}/>
        </div>);
    }
});


function getStatusWeek(weekarr, min) {
    var succesCount = [];
    var noneCount = [];
    for (var i = 0; i < weekarr.length; i++) {
        if (weekarr[i] == 2) {
            succesCount.push(weekarr[i])
        } else if (weekarr[i] == 0 || weekarr[i] == 4) {
            noneCount.push(weekarr[i])
        } else if (weekarr[i] == 1) {
            return 'today';
        }
    }

    if (noneCount.length == 7)
        return 'none';

    return succesCount.length < min ? 'failed' : 'success';
}


module.exports = Challenge;
