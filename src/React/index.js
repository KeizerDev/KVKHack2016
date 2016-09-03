import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, NotFoundRoute, Link, IndexLink, browserHistory } from 'react-router'
var TransitionGroup = require('react-addons-transition-group');

var routes = {
    Home: require('./routes/Home'),
    Login: require('./routes/Login'),
    Challenge: require('./routes/Challenge'),
    Present: require('./routes/Present'),
    PresentCheck: require('./routes/PresentCheck'),
    AddChallenge: require('./routes/AddChallenge')
};

const ACTIVE = { color: 'red' }

class Header extends React.Component {
                    // <div className="">&lt;</div>

	render() {
		return (<header>
					<Link to="/"><h4>FireWorks</h4></Link>
				</header>);
	}
}

class Footer extends React.Component {
	render() {
		return (<footer>
					<div className="container">
                        <div className="row">
                            <div className="col-md-10">
                        {/*<p>FireWorks</p>*/}
							</div>
						</div>
					</div>
	            </footer>);
	}
}

class App extends React.Component {
  render() {
    return (
        <div className="page">
            <Header />
            <div className="">
            <TransitionGroup>

                {this.props.children}
            </TransitionGroup>
            </div>
            <Footer/>
        </div>
    )
  }
}

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={routes.Home}/>
            <Route path="challenge/:id" component={routes.Challenge}/>
            <Route path="challenge/:id/:week" component={routes.Challenge}/>
            <Route path="present/:id" component={routes.Present}/>
            <Route path="present/:id/view" component={routes.PresentCheck}/>
            <Route path="login" component={routes.Login}/>
            <Route path="add-challenge" component={routes.AddChallenge}/>
            <Route path="*" component={routes.Page404} />
        </Route>
    </Router>
), document.getElementById('app'))
