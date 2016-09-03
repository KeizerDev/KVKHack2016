var React = require('react');
var Week = require('../components/Week.js');
// var data = require('../Api/mock.js');
import { Link } from 'react-router'
import $ from 'jquery';

var TimelineSmall = React.createClass({

    getInitialState: function() {
        return {
            value: 0,
            previous: 0,
            scrolled: 5
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
        var activeWeek = 7;
        var min = this.props.min
        // var challengeId = this.props.routeParams.id;
        return (<div>
            <div className="timeline">

                <div className="slide-left" onClick={this.handleClickLeft}></div>
                <div className="slide-right" onClick={this.handleClickRight}></div>

                <div className="weeks-wrapper" data-count={this.props.weeks.length} data-scroll={this.state.scrolled}>

                    { this.props.weeks.map(function(week, index){
                        var status = getStatusWeek(week, min);
                        return <div className="week-wrapper" data-selected={activeWeek == index + 1} data-status={status} data-number={index + 1}>
                            <div className="week-number">{index + 1}</div>
                        </div>;
                    }) }
                </div>
            </div>
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

    return succesCount.length <= min ? 'failed' : 'success';
}


module.exports = TimelineSmall;