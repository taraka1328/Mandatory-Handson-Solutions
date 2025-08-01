import React, { Component } from "react";

class Getuser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true,
      error: null,
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch("https://api.randomuser.me/");
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      const user = data.results[0];

      this.setState({ user, loading: false });
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  }

  render() {
    const { user, loading, error } = this.state;

    if (loading) return <p>Loading user...</p>;
    if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

    return (
      <div className="user-card">
        <img src={user.picture.large} alt="User" />
        <h2>
          {user.name.title} {user.name.first}
        </h2>
      </div>
    );
  }
}

export default Getuser;
