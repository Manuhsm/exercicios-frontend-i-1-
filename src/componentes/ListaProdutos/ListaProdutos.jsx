import "./ListaProdutos.css";

function ListaProdutos(){
    const produtos = ['Celular Samsung', 'Notebook Acer', 'Smart TV LG', 'Impressora HP', 'Tablet Multilaser', 'Monitor Dell'];
    return(
        <ul className="lista-produtos">
            {produtos.map((produto, index) => (
                <li key={index}>{produto}</li>
            ))}
        </ul>
    );
}

export default ListaProdutos;