var React = require('react');
// var mojs = require('mo-js');

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

    }
    render() {
        return (<div>
            <h2 className="page-title">Voeg een challenge toe</h2>
            <div className="form-group row">
                <label htmlFor="name-input" className="col-xs-3 col-form-label">Titel</label>
                <div className="col-xs-9">
                <input className="form-control" type="text" name="title" id="name-input" placeholder="Zwemmen met Henk" />
                </div>
                </div>

                <div className="form-group row">
                <label htmlFor="name-input" className="col-xs-3 col-form-label">Motivatie</label>
                <div className="col-xs-9">
                <input className="form-control" type="text" name="motivatie" id="name-input" placeholder="Je ziet dit telkens als je de app opent" />
                </div>
                </div>

                <div className="form-group row">
                <label htmlFor="name-input" className="col-xs-3 col-form-label">Type</label>
                <div className="col-xs-9">
                <select>

                <option value="1">- Maak een keuze -</option>

            <optgroup label="Beter slapen"></optgroup>
                    <option value="1">- 5x per week 8 uur per nacht</option>
                    <option value="2">- 5x per week 7 uur per nacht</option>

            <optgroup label="Mediteren"></optgroup>
                <option value="1">- 6x in de week een kwartier</option>
            <option value="2">- 3x in de week een kwartier</option>

            <optgroup label="Sporten"></optgroup>
                <option value="1">- 2x per week</option>
            <option value="2">- 3x per week</option>

            <optgroup label="Gezonder eten"></optgroup>
                <option value="1">- Minder dan 5% ongezonde producten</option>
            <option value="2">- Minder dan 10% ongezonde producten</option>

            <optgroup label="Stoppen met roken"></optgroup>
                <option value="1">- Volledig stoppen</option>
            <option value="2">- 1 pakje per week</option>

            </select>
                </div>
                </div>

                <button type="submit" className="btn btn-primary" onClick={this.handleClick}>Opslaan</button>
            </div>);
    }
}