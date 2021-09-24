import React, { Component } from "react";
import { Link } from "react-router-dom";

class CastDetails extends Component {
  state = {
    credits: [],
  };
  componentDidMount() {
    axios
      .get(`movie/${this.props.match.params.id}/credits`)
      .then((res) => this.setState({ credits: res.data.cast, loading: false }));
  }
  convertToSlug = (e) => {
    return e
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  };

  render() {
    return (
      <div className="">
        <h1 className="text-2xl mb-5">Casts</h1>
        {this.state.credits
          .filter((c) => c.profile_path != null)
          .map((credit) => (
            <div key={credit.credit_id}>
              <div className="flex mb-4">
                <Link
                  to={`/person/${credit.id}/${this.convertToSlug(credit.name)}`}
                >
                  <img
                    className="rounded"
                    src={`https://image.tmdb.org/t/p/w66_and_h66_face${credit.profile_path}`}
                  />
                </Link>
                <h2 className="flex items-center ml-3">
                  <strong>{credit.name} </strong> {credit.character}
                </h2>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

export default CastDetails;
