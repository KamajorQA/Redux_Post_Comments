function Title(props) {
  console.log('title props', props);

  const handleChange = function (event) {
    console.log('input text value', event.target.value);
    return event.target.value;
  };
  return (
    <div className="card-title">
      <div className="card-title-top">
        <input type="text" onChange={handleChange}></input>
      </div>
    </div>
  );
}

export default Title;
