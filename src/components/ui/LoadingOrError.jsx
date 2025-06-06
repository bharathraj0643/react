function LoadingOrError(props) {
  return (
    <div
      className="d-flex justify-content-center align-items-center" style={{height:"82vh"}}
    >
      {!props.error && <img src="loading.gif" height="100px" />}
      {props.error && <h5><pre>{props.error}</pre></h5>}
    </div>
  );
}

export default LoadingOrError;
