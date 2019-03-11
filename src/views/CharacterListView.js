import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { fetchCharacters } from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchCharacters();
  }

  render() {
    console.log(this.props)
    if (this.props.isLoading) {
      return(
        <div>loading...</div>
      );
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    isLoading: state.charsReducer.isLoading
  }
}


export default connect(
  mapStateToProps,
  {
    fetchCharacters
  }
)(CharacterListView);
