---
layout: cover
class: text-center
highlighter: shiki
lineNumbers: true
drawings:
  persist: false
title: Iniciándonos en Blockchain
defaults:
  layout:  center
---

# Iniciándonos en Blockchain

Como adentrarnos en la blockchain, entenderla e interactuar con ella

<div class="absolute bottom-10">
  <span class="font-700">
    Jose Segura "segux"  / <i>Lead Engineering Manager and Architect Bit2Me </i>
  </span>
</div>

---
layout: fact
---
# ¿Que es la blockchain?

---

title: Decentraliced image
layout: image
image: https://miro.medium.com/max/1400/1*fIEWQ_6IttN39MMPHg-_lg.jpeg

---

# Minería 
La  minería es el método en el cual se resuelven problemas mátematicos de forma que la red premia con un  incentivo a todos los que ofrecen sus pools para resolver estoss problemas.

Existen actualmente dos métodos de verificación de transacciones

- PoW (Proof of Work)
- PoS (Proof of Stake)
---
layout: cover
background: 'https://academy.bit2me.com/wp-content/uploads/2018/07/07_pow-1.webp'
---
# Proof of Work
---


---
layout: cover
background: 'https://academy.bit2me.com/wp-content/uploads/2018/07/08_pos-1.webp'
---

# Proof of Stake

---

Proof of Stake (PoS) o Prueba de Participación es un protocolo de consenso creado para reemplazar al conocido Proof of Work aportando una mejor seguridad y escalabilidad a las redes que lo implementen.

Este sistema busca incentivar a los participantes para que posean en todo momento, una determinada cantidad de monedas. La posesión de monedas, les permite ser elegidos por el proceso de selección aleatoria que se realiza para designar tareas. Bajo este esquema, aquellos que tengan más reservas, tienen mayor peso en la red y mayores oportunidades de ser elegidos. Una vez elegidos pueden validar transacciones y crear nuevos bloques dentro de la red. Permitiéndoles recibir ganancias e incentivos por el trabajo realizado.
---

# Ethereum

<div class="columns-2">
<p>Ethereum es uno de los proyectos más importantes del ecosistema blockchain.
Fué el primero en permitir interactuar con la blockchain implementando fragmentos de código que pueden ejecutarses en la propia cadena de bloques, también llamados <b>Smart-contracts</b>
Actualmente se encuentra en la versión 2.0 que dentro de sus mayores features está el Proof of Staking
</p>
  <img width="300" height="180" src="https://www.notebookcheck.org/fileadmin/Notebooks/News/_nc3/ethereum_2_the_merge_transition_to_proof_of_stake.jpg"/>
</div>





---

# Que es un smart-contract

## Los smart contracts se tratan de “scripts” escritos con lenguajes de programación. Esto quiere decir que los términos del contrato son puras sentencias y comandos en el código que lo forma.

---

title: Smart contract Video
layout: full

---

## <iframe width="1024" height="575" src="https://www.youtube.com/embed/4ZnYGLWVpXk" title="🎓 ¿Qué son los SMART CONTRACTS o Contratos Inteligentes? - Bit2Me Academy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# Que es un NFT

Los tokens NFT o tokens no fungibles, son una solución creada para permitirnos representar objetos con cualidades únicas, irrepetibles e indivisibles dentro de una blockchain.

## <iframe width="720" height="360" src="https://www.youtube.com/embed/nvwaNuPvnew" title="🎓 ¿QUÉ es un TOKEN NFT (Token No Funfible)? - Bit2Me Academy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

# Pre-requisites

### NodeJS — https://nodejs.org/es/download/

Entorno donde trabajaremo

### VsCode - https://code.visualstudio.com/download

IDE para crear el smart contract y poder generear nuestro NFT, tiene extensiones de solidity para facilitar el desarrollo en solidity

### Truffle — https://www.trufflesuite.com/truffle

Truffle es un entorno de desarrollo, framework y pipelines de activos para Ethereum, con el objetivo de facilitar la vida como desarrollador de Ethereum.

---

# Pre-requisites

### OpenZeppelin - https://www.openzeppelin.com/contracts

OpenZeppelin es una biblioteca de contratos inteligentes modulares, reutilizables y seguros para la red Ethereum, escrita en solidity. Permite aprovechar los contratos estándar, probados y revisados por la comunidad para sus propios fines y puede reducir significativamente el tiempo de desarrollo de las aplicaciones.Utilizaremos contratos de preajuste en OpenZepeppelin Contracts 3 para crear un ERC721 e implementarlo usando Truffle.

### Pinata account — https://www.pinata.cloud/

Pinata account proporciona acceso a nodos públicos para todas las redes de prueba y la red principal, a través de planes gratuitos y de pago.

### Metamask - https://metamask.io/download.html

Wallet que nos permitirá almacenar y administrar claves, transmitir transacciones, enviar y recibir criptomonedas y tokens basados en la plataforma Ethereum.

---

# Pre-requisites

### OpenSea - https://opensea.io/

Mercado descentralizado peer-to-peer para comprar, vender e intercambiar productos digitales, desde artículos para juegos hasta coleccionables y arte, que se basan en tecnología de token no fungible (NFT) y se ejecutan en la cadena de bloques Ethereum.

### Asset

El asset que queramos convertir en NFT, en este caso una imagen, aunque podría ser un render en 3D u otro elemento gráfico representable.

---

## NFT Diagram flow

![image info](/assets/nft-diagram.png)

---

## Metadata

ERC-721 contiene un string metadata que es principalmente la base de los NFT.
En este tutorial realizaremos un NFT donde la metadata se almacenará off-chain pero utilizando el protocolo y sistema de ficheros IPFS.
No entraremos en detalle en este tutorial al respecto, pero recomiendo una lectura de este articulo de OpenSea sobre metadata y descentralización https://opensea.io/blog/announcements/decentralizing-nft-metadata-on-opensea/

![image_info](/assets/nft-diagram.png)

---

## Subiendo la metadata a Pinata

Procederemos a subir una imagen a Pinata para aprovecharnos de IPFS y utilizarla mas tarde en nuestro smart contract

En nuestro caso, hemos subido esta imagen

![image_info](https://gateway.pinata.cloud/ipfs/QmZM2ywL5z9UYMS9EMM5Xd7mDKE9TPrvtPw7doLatwgsbY)

---

## Preparando el entorno

Iniciaremos el repositorio haciendo

`mkdir my-first-nft`

Entraremos en la carpeta recien creada

`cd my-first-nft`

Iniciamos el repositorio con npm

`npm i -y`

En cuanto a las dependencias del proyecto

`yarn add @openzeppelin/contracts`

`yarn add truffle`

Inicializamos el proyecto truffle

`npx truffle init`

---

## ERC721 y Extensiones

Los Smart-contracts en solidity tienen un gran parecido con las clases en el paradigma OOP(Object Oriented Programming)
Los contratos tienen datos persistentes en las variables del estado y funciones que modifican estas variables.
Si llamasemos a una funcion de otro contrato, ejecutaría una funcion en EVM(Ethereum Virtual Machine)

En este tutorial vamos a utilizar el Preset `ERC721PresetMinterPauserAutoIdwhich` lo que contendrá varios smart-contracts con diferentes funcionalidades que nos permitirán agilizar la creación de nuestro nft.

En este enlace podeis ver el código del preset https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/presets/ERC721PresetMinterPauserAutoId.sol

Copiamos los smart contracts en nuestra carpeta de build

`cp node_modules/@openzeppelin/contracts/build/contracts/* build/contracts/`

---

Conectar a opensea testnet
https://testnets.opensea.io/

memeNFT contract 0x68EfD4536F5e29865317492dDEE0308bFAb9275C
