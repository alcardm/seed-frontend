import validateUrl from "../helper";

function ShortenForm(props) {
  return (
    <div>
      <form className="shorten-form">
        <input
          type={"text"}
          id="input-shorten"
          placeholder="Shorten a link here..."
        />
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => {
            onClickSubmit();
          }}
        >
          Shorten It
        </button>
      </form>
    </div>
  );
}

function onClickSubmit() {
  // Validar
  let url = document.getElementById("input-shorten").value;
  if (!url) {
    alert("Opps, no link in here.");
    return false;
  } else if (!validateUrl(url)) {
    alert("Check your link, it's not a valid one.");
  } else {
    console.log("el link: " + url);
    // enviar el link a la API
    // validar resultado
    // mostrar bajo el formulario
  }
}

export default ShortenForm;
