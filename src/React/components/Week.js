var React = require('react');

var Week = React.createClass({

    getInitialState: function() {
        return {
            daysArr: ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag'],
            data: {weekofyearnumber: 3, daysstatus: [3,2,1,0,0,4,0]}
        };
        /*
        4: presentday (not done yet)
`       3: red
        2: green
        1: blue day of today
        0: gray (not done yet)
        */
    },

    componentDidMount: function() {
    },

    render: function() {
        var dayStatusArr = this.state.data.daysstatus,
            dayNamesArr = this.state.daysArr,
            daysofweek = [];


        for (var i = 0; i < dayNamesArr.length; i++) {
            var dayName = dayNamesArr[i],
                dayStatus = dayStatusArr[i],
                optionalTag = "";

            if (dayStatus == 4) {
                optionalTag = (<span className="tag tag-default tag-pill pull-xs-right"><i className="fa fa-gift" aria-hidden="true"></i></span>)
            } else if (dayStatus == 3) {
            } else if (dayStatus == 2) {
            } else if (dayStatus == 1) {

            } else if (dayStatus == 0) {

            }
            daysofweek.push(<li styles={{backgroundColor: '#4fe'}} className="list-group-item">{dayName}{optionalTag}</li>)
        }

        return (<ul className="list-group">
                {daysofweek}
            </ul>);
    }
});

module.exports = Week;