var React = require('react');

var Week = React.createClass({

    getInitialState: function() {
        return {
            daysArr: ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag']
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

    componentWillMount: function() {
      this.content = this.props.content;
    },

    componentWillReceiveProps: function(nextProps) {
      this.content = nextProps.content;
    },

    render: function() {
        var dayStatusArr = this.content,
            dayNamesArr = this.state.daysArr,
            daysofweek = [];


        for (var i = 0; i < dayNamesArr.length; i++) {
            var dayName = dayNamesArr[i],
                dayStatus = dayStatusArr[i],
                optionalTag = "",
                backgroundColor = "#eeeeec";

            var listClass = "list-group-item ";

            if (dayStatus == 4) {
                optionalTag = (<span className="tag-right-present pull-xs-right"><i className="fa fa-gift" aria-hidden="true"></i></span>)
            } else if (dayStatus == 3) {
                listClass += 'failed';

            } else if (dayStatus == 2) {
                listClass += 'success';
            } else if (dayStatus == 1) {
                listClass += 'today';

            } else if (dayStatus == 0) {
            }
            daysofweek.push(<li className={listClass}>{dayName}{optionalTag}</li>)
        }

        return (<ul className="list-group l-card">
                {daysofweek}
            </ul>);
    }
});

module.exports = Week;
