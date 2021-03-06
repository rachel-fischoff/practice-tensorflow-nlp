import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
// import promise from "redux-promise";
// import reducers from "./reducers";
import 'bootstrap/dist/css/bootstrap.css'
import Home from './components/home';
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";
import TwitterResults from './components/twitter_results';
import TextResults from './components/text_results'
import SearchBarText from './components/search_bar_text';
import CssBaseline from '@material-ui/core/CssBaseline';
import SearchBarTweet from './components/search_bar_twitter'


// const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <Router  >
      <React.Fragment>
      <CssBaseline />
        <App>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/twitter" component={SearchBarTweet} />
              <Route exact path="/twitter/sentiment" component={TwitterResults} />
              <Route exact path="/text" component={SearchBarText} />
              <Route exact path="/text/sentiment" component={TextResults} />
            </Switch>
        </App>
      </React.Fragment>
    </Router>
  </Provider>,
  document.getElementById("root")
);








