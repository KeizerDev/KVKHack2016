var React = require('react')
import Timeline from '../components/Timeline.js';

var Week = require('../components/Week.js');
// var data = require('../Api/mock.js');
import { Link } from 'react-router'
import $ from 'jquery';

var Challenge = React.createClass({

    getInitialState: function() {
        return {
            value: 0,
            previous: 0,
            scrolled: 0,
            data: {
                weeks: [[2,2,3,3,3,3,3], [2,2,3,3,3,2,2], [2,3,3,2,3,3,2], [3,2,3,3,2,1,0], [0,0,0,0,0,0,0], [0,0,0,0,0,0,4]]
            }
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

                <div className="weeks-wrapper" data-count={this.state.data.weeks.length} data-scroll={this.state.scrolled}>

                    { this.state.data.weeks.map(function(week, index){
                        var status = getStatusWeek(week);
                        var url = '/challenge/' + challengeId + '/' + (index + 1);
                        return <Link className="week-wrapper" to={url} data-selected={activeWeek == index + 1} data-status={status} data-number={index + 1}>
                            <div className="week-number">{index + 1}</div>
                        </Link>;
                    }) }
                </div>
            </div>
            <Week content={this.state.data.weeks[activeWeek - 1]}/>
        </div>);
    }
});


function getStatusWeek(weekarr) {
    var succesCount = [];
    var noneCount = [];
    for (var i = 0; i < weekarr.length; i++) {
        if (weekarr[i] == 2) {
            succesCount.push(weekarr[i])
        } else if (weekarr[i] == 0 || weekarr[i] == 4) {
            noneCount.push(weekarr[i])
        } else if (weekarr[i] == 1) {
            return 'active';
        }
    }

    if (noneCount.length == 7)
        return 'none';

    return succesCount.length <= 3 ? 'failed' : 'success';
}


module.exports = Challenge;
