var React = require('react')
import Timeline from '../components/Timeline.js';

var Week = require('../components/Week.js');
// var data = require('../Api/mock.js');
import { Link } from 'react-router'
import $ from 'jquery';

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
            state.data.title = '2x per week naar het zwembad';
            state.data.weeks = [[2,2,2,3,3,2,3], [2,2,2,3,2,2,2], [2,3,2,2,3,3,2], [3,2,3,3,2,2,0], [2,2,3,2,2,2,2], [2,3,3,3,3,3,2], [3,2,3,3,2,1,0], [0,0,0,0,0,0,0], [0,0,0,0,0,0,4]]
            state.data.min = 2;
        }
        else {
            state.data.title = '3x per week naar de sportschool';
            state.data.weeks = [[2,2,3,3,3,3,3], [2,2,3,3,3,2,2], [2,3,3,2,3,3,2], [3,2,3,3,2,2,0], [2,2,3,3,3,2,2], [2,3,3,3,3,3,2], [3,2,3,3,2,1,0], [0,0,0,0,0,0,0], [0,0,0,0,0,0,4]];
            state.data.min = 3;
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
            <div className="timeline">

                <div className="slide-left" onClick={this.handleClickLeft}></div>
                <div className="slide-right" onClick={this.handleClickRight}></div>

                <div className="weeks-wrapper" data-count={this.state.data.weeks.length} data-scroll={this.state.scrolled}>

                    { this.state.data.weeks.map(function(week, index){
                        var icon;

                        if (state.data.weeks.length == index-4) {
                            icon = (<i className="fa fa-gift" aria-hidden="true"></i>);
                        } else {
                            icon = (<span>{index + 1}<i className="fa fa-gift" aria-hidden="true"></i></span>);
                        }
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
