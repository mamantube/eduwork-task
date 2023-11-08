const ShowError = ({errors}) => {
    return (
        <ul className="error-warning" >
            {
               errors.map((error, i) => <li key={i}>{error}</li>)
            }
        </ul>
    )
}

export default ShowError;