
export const GifItem = ({ title, url, id }) => {

    return (
      <div className="card">
          <img src={ url } alt={ title } />
          <p>{ title }</p>
          <p> id: {id} </p>
      </div>
    )
}