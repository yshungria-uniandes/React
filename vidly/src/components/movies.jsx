import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { Like } from "./common/like";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;

    this.setState({ movies });
  };

  render() {
    const { length: count } = this.state.movies;
    const infoBar =
      count !== 0 ? `Showing ${count} movies` : "There are no movies to show";

    return (
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2>Movies List</h2>
          <span className="badge bg-info fs-5">{infoBar}</span>
        </div>
        
        {count !== 0 && (
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th>Like</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.movies.map((movie) => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like
                      onClick={() => this.handleLike(movie)}
                      liked={movie.liked}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => this.handleDelete(movie)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

export default Movies;
