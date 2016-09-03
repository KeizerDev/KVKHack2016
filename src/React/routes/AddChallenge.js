var React = require('react');
// var mojs = require('mo-js');
import $ from 'jquery';

export default class AddChallenge extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 0};
    }

    componentDidMount() {
        // var shape = new mojs.Shape({
        //   shape:        'circle',
        //   radius:       25,
        //   fill:         'white',
        //   stroke:       '#F64040',
        //   strokeWidth:  7,
        //   isShowStart:  true,
        // });
    }
    handleClick() {
        var title = $('input[name="title"]').val();
        var motivation = $('input[name="motivatie"]').val();
        var select = $('select').val();

        sessionStorage.setItem('fakeChallenge', JSON.stringify({
            title: title,
            motivation: motivation,
            challengeType: select
        }));
    }
    render() {
        return (<div>
            <h2 className="page-title">Voeg een challenge toe</h2>
            <div className="add-challenge">
            <div className="form-group row">
                <label htmlFor="name-input" className="col-xs-3 col-form-label">Titel</label>
                <div className="col-xs-9">
                <input className="form-control" type="text" name="title" id="name-input" placeholder="Zwemmen met Henk" />
                </div>
                </div>

                <div className="form-group row">
                <label htmlFor="name-input" className="col-xs-3 col-form-label">Motivatie</label>
                <div className="col-xs-9">
                <input className="form-control" type="text" name="motivatie" id="name-input" placeholder="Een persoonlijke motivatie!" />
                </div>
                </div>

                <div className="form-group row">
                <label htmlFor="name-input" className="col-xs-3 col-form-label">Type</label>
                <div className="col-xs-9">
                <select>

                <option value="1">- Maak een keuze -</option>

            <optgroup label="Beter slapen"></optgroup>
                    <option value="Beter slapen, 5x per week 8 uur per nacht">- 5x per week 8 uur per nacht</option>
                    <option value="Beter slapen, 5x per week 7 uur per nacht">- 5x per week 7 uur per nacht</option>

            <optgroup label="Mediteren"></optgroup>
                <option value="Mediteren, 6x in de week een kwartier">- 6x in de week een kwartier</option>
            <option value="Mediteren, 3x in de week een kwartier">- 3x in de week een kwartier</option>

            <optgroup label="Sporten"></optgroup>
                <option value="Sporten, 2x per week">- 2x per week</option>
            <option value="Sporten, 3x per week">- 3x per week</option>

            <optgroup label="Gezonder eten"></optgroup>
                <option value="Gezonder eten, Minder dan 5% ongezonde producten">- Minder dan 5% ongezonde producten</option>
            <option value="Gezonder eten, Minder dan 10% ongezonde producten">- Minder dan 10% ongezonde producten</option>

            <optgroup label="Stoppen met roken"></optgroup>
                <option value="Stoppen met roken, Volledig stoppen">- Volledig stoppen</option>
            <option value="Stoppen met roken, 1 pakje per week">- 1 pakje per week</option>

            </select>
                </div>
                </div>

                <button type="submit" className="btn btn-primary" onClick={this.handleClick}>Opslaan</button>
            </div></div>);
    }
}