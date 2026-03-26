import "./OlaPessoa.css";

function OlaPessoa() {
    const nome = "Manuela";
  return (
    <div className="ola-pessoa">
      <h1>Olá, {nome}!</h1>
    </div>
  );
}

export default OlaPessoa;