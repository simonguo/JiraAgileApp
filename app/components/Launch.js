import React, { PureComponent } from 'react';
import { AsyncStorage } from 'react-native'
import { Actions } from 'react-native-router-flux';
import LoadingView from './LoadingView';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/session';

class Launch extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  componentWillMount() {
    this._isMounted = true;
    AsyncStorage.getItem('session').then(data => {
      if (data) {
        this.props.onLogin(JSON.parse(data), res => {
          if (res.errors) {
            this._isMounted && Actions.replace('login');
          } else {
            this._isMounted && Actions.replace('home');
          }          
        }, (e) => {
          this._isMounted && Actions.replace('login');
        });
      } else {
        this._isMounted && Actions.replace('login');
      }
    }).catch(e => {
      this._isMounted && Actions.replace('login');
    });
    // AsyncStorage.getItem('session').then(data => {

    //   if (data) {
    //     this.props.onLogin(JSON.parse(data), () => {
    //       // this.view && this.setState({ loading: false });
    //       this._isMounted && Actions.replace('home');
    //     }, (e) => {
    //       // this.view && this.setState({ loading: false });
    //       this._isMounted && Actions.replace('login');
    //     });
    //     // return;
    //   } else {
    //     // this.setState({ loading: false });
    //     this._isMounted && Actions.replace('login');
    //   }
    // });
    // this._isMounted && Actions.replace('login');
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    return (
      <LoadingView
        ref={(ref) => {
          this.view = ref;
        }}
        loading={this.state.loading}
      />
    );
  }
}



function mapDispatch2Props(dispatch) {
  const actions = bindActionCreators(actionCreators, dispatch);
  return {
    onLogin: actions.login
  };
}

export default connect(null, mapDispatch2Props)(Launch);
