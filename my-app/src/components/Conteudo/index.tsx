import imgQuadrado from "../../img/quadrado.png";

export default function Conteudo() {
    return (
        <main>
            <section>
                <h2>Conteúdo Principal</h2>
                                
                {/* Exemplos de imagens externas, internas e do projeto */}
                <figure>
                    <img src="https://placehold.co/300x200/0000FF/FF0000/png" alt="Figura Ilustrativa Externa" />
                    <figcaption>Imagem Externa</figcaption>
                </figure>

                <figure>
                    <img src={imgQuadrado} alt="Figura Ilustrativa Interna do Projeto" />
                    <figcaption>Imagem Interna</figcaption>
                </figure>

                <figure>
                    <img src="/quadrado-b.png" alt="Figura Ilustrativa Publica" />
                    <figcaption>Imagem Pasta Public</figcaption>
                </figure>
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cumque perspiciatis consectetur necessitatibus itaque autem laboriosam commodi, aspernatur odio, dignissimos aliquam quaerat vero, distinctio excepturi veritatis velit temporibus! Dolorum et ut earum repellat nostrum nihil doloribus sint laudantium, aliquid asperiores vel nobis neque nemo laboriosam voluptas facilis aliquam ex cum!</p>
            </section>
        </main>
    );
}