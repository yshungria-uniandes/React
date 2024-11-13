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
    const infoBar = count ? `Showing ${count} movies` : "No movies available";

    return (
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="text-primary">Movies List</h2>
          <span className={`badge ${count ? 'bg-info' : 'bg-secondary'} fs-5`}>
            {infoBar}
          </span>
        </div>
        
        {count ? (
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
                      <i className="bi bi-trash-fill"></i> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="alert alert-warning text-center mt-4">
            <i className="bi bi-exclamation-triangle-fill me-2"></i>
            No movies to show. Please add new movies.
          </div>
        )}
      </div>
    );
  }
}

export default Movies;
