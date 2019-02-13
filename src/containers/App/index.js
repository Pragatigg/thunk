import React, { Component } from 'react';
import { connect } from 'react-redux';

import Users from 'COMPONENTS/users';
import { fetchUsers } from 'ACTIONS/users.js';

class App extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { users: { data, isLoading } } = this.props;
    return (
      <Users data={data} isLoading={isLoading} />
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
})


export default connect(mapStateToProps, mapDispatchToProps) (App);
