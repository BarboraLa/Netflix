import "./ReloadMoviesButton.css"

const ReloadMoviesButton = (props) => {
    return( 
        <button className="reload-movies-button" onClick={props.reloadMovies}>Zobrazit vše</button>
    )
}

export default ReloadMoviesButton
