import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, NotFoundRoute, Link, IndexLink, browserHistory } from 'react-router'

var routes = {
    Home: require('./routes/Home'),
    Login: require('./routes/Login'),
    Challenge: require('./routes/Challenge')
};

const ACTIVE = { color: 'red' }

class Header extends React.Component {
                    // <div className="">&lt;</div>

	render() {
		return (<header>
					<h4>Fireworks</h4>
				</header>);
	}
}

class Footer extends React.Component {
	render() {
		return (<footer>
					<div className="container">
                        <div className="row">
                            <div className="col-md-10">
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
                {this.props.children}
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
            <Route path="login" component={routes.Login}/>
            <Route path="*" component={routes.Page404} />
        </Route>
    </Router>
), document.getElementById('app'))
