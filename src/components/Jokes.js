import React, { Component } from "react";

const Joke = ({ joke: { setup, punchline } }) => (
  <p style={{ margin: 20 }}>
    {setup} <em>{punchline}</em>
  </p>
);

const fetchJoke = async () => {
  let response = await fetch(
    "https://official-joke-api.appspot.com/random_joke"
  );
  let joke = await response.json();
  return joke;
};

const fetchRandomJokes = async () => {
  let response = await fetch(
    "https://official-joke-api.appspot.com/random_ten"
  );
  let jokes = await response.json();
  return jokes;
};

class Jokes extends Component {
  state = { joke: {}, jokes: [] };
  getRandomJokes = async () => {
    const json = await fetchRandomJokes();
    this.setState({ ...this.state, jokes: json });
  };
  async componentDidMount() {
    let joke = await fetchJoke();
    this.setState({ ...this.state, joke: joke });
  }
  render() {
    return (
      <div>
        <h2>Highlighted Joke</h2>
        <Joke joke={this.state.joke} />
        <hr />
        <h3>Want ten new Jokes?</h3>
        <button className = "button" onClick={this.getRandomJokes}>Click me!</button>
        {this.state.jokes.map((joke) => (
          <Joke key={joke.id} joke={joke} />
        ))}
      </div>
    );
  }
}

export default Jokes;
