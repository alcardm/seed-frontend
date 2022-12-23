import validateUrl from "../helper";
import swal from "sweetalert";

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
    swal("Oops!", "No link here.", "warning");
    return false;
  } else if (!validateUrl(url)) {
    swal("Oh oh!", "It's not a valid link.", "error");
  } else {
    console.log("el link: " + url);
    // enviar el link a la API
    // validar resultado
    // mostrar bajo el formulario
  }
}

export default ShortenForm;
