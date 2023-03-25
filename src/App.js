import './helpers/style.css';
import profile from './helpers/profile.jpg';

function App() {
  return (
    <div className="App"><body>
    <h1 id="Title">Caíque Gama Correia</h1>
    <h2 id="Presentation">Apresentação:</h2>
    <img src={profile} alt="Foto de Perfil" width="160px" id="profile" />
    <p>
        Olá! Chamo-me Caíque, sou natural de Salvador, capital da Bahia, e atual residente na cidade de Vitória da
        Conquista - BA.Estudo Desenvolvimento Web pela Trybe e estou em constante busca por aprimoramento,
        portanto <em>julgue-me com parcimônia</em> e <strong>espere sempre o melhor de mim!</strong>
        Sou apaixonado por leitura e vivo em labuta com o violão!
    </p>
    <h3 id="Social">Redes Sociais:</h3>
    <ul>
        <li><a href="https://github.com/CGC-98/">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/caique-correia/">Linkedin</a></li>
    </ul>
    <h3 id="Skills">Habilidades-Chave:</h3>
    <ul>
        <li>Assertividade</li>
        <li>Colaboração</li>
        <li>Comunicação</li>
    </ul>
    <h3>Habilidades Complementares:</h3>
    <ul>
        <li>Unix&Bash</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li><strong>Poesia!</strong></li>
    </ul>
    <h3 id="Outro">Encerramento:</h3>
    <p>
        Finalmente, uma pequena referência! 
        À comunidade que atualmente corrobora para o meu progresso - 
        meu desenvolvimento pessoal e profissional:
        <a href="https://blog.betrybe.com/" target="_blank" rel="noreferrer"><strong>a Trybe</strong></a>!
    </p>
</body>
    </div>
  );
}

export default App;
