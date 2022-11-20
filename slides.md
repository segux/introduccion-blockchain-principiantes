---
class: text-center
highlighter: shiki
lineNumbers: true
drawings:
  persist: false
title: Iniciación en Blockchain
defaults:
  layout: center
layout: cover
background: https://bit2me.com/assets/img/og/bit2me-welcome-to-bitcoin.jpg
---

# Iniciación a la Blockchain

<div class="absolute bottom-10">
  <span>
    Jose Segura "segux"  / <i>Lead Engineering Manager and Architect Bit2Me </i>
  </span>
</div>


---
layout: fact

---
# ¿Qué es blockchain?

---

# La parábola del Suricato Volador
Para que comprendas qué es blockchain de forma rápida imagina que vas caminando por la calle y, de repente, un suricato volador de proporciones pantagruélicas aterriza en una plaza llena de gente, se come los helados de todos los niños que hay en ella, suelta dos chillidos enormes y se va igual que ha venido.

Sin un segundo que perder, se coloca un detector de mentiras a las 1.000 personas que han sido testigos y se registra exactamente qué es lo que han visto.

Todos cuentan la misma historia con idénticos detalles.

---

# Explicando la parábola del Suricato Volador

En la analogía anterior, los incrédulos individuos que se ponen de acuerdo al explicar lo que han visto, vienen a ser nodos (más adelante hablaremos de ello) geográfica y computacionalmente aislados los unos de los otros.

Al “detector de mentiras”, le enseñan una “prueba de trabajo” (proof of work en inglés), es decir, un **proceso criptográfico que prueba que un ordenador/chip y no otro ha resuelto un problema de forma correcta**.

*Falsificar una entrada en la cadena de bloques equivaldría a conseguir que más de la mitad de la gente se pusiese de acuerdo en mentir acerca de los detalles del aterrizaje del suricato de la misma manera, todos al mismo tiempo y sin tener la posibilidad de coordinar esa mentira previamente.*

**Lo que se plasma en el blockchain no puede desaparecer jamás.** Blockchain es un registro inmutable y permanente. Se trata de una base de datos que solo permite escritura. No se puede modificar ni borrar nada de ello y siempre, bajo consenso.

---
title: Decentraliced image
layout: image
image: https://miro.medium.com/max/1400/1*fIEWQ_6IttN39MMPHg-_lg.jpeg

---

---

# Casos de uso de Blockchain
No solo de las criptomonedas vive blockchain
1. Almacenamiento en la nube distribuido
2. Patentes/Registro de Propiedad
3. Voto electrónico
4. Gobierno transparente


---
layout: cover
background: 'https://i.ytimg.com/vi/dZW9cixBBz4/maxresdefault.jpg'
---
# Bitcoin
El Bitcoin (BTC) es la primera criptomoneda del mundo, el génesis de esta tecnología y la criptomoneda más usada y fuerte en la actualidad.

---

# Whitepaper Bitcoin

Un paper se entiende como un escrito científico, normalmente la exposición de una investigación o de un tema muy concreto.

Un whitepaper es un documento que sirve de guía para explicar un concepto determinado o la solución a un problema específico.

Satoshi Nakamoto publicó el whitepaper de bitcoin en un foro en el año 2008

---

# Nacimimiento Bitcoin 

Pero no fue sino hasta el 9 de enero de 2009, cuando aparece la primera versión del software de Bitcoin: la versión 0.1.0

Actualmente está en la versión 0.23.x

Puedes visitar su repositorio en https://github.com/bitcoin/bitcoin

---

# La propuesta inicial de Bitcoin

La creación de Bitcoin comienza con la idea plasmada en el proyecto DigiCash, un proyecto de dinero digital creado por David Chaum.

Satoshi Nakamoto uso este proyecto como la base para comenzar a crear Bitcoin, pero para ello debían corregirse algunos problemas dentro de DigiCash.



---
layout: image-left
image: 'https://bitcoin.org/img/home/bitcoin-img.svg?1666775325'
---

¿Por qué **es tan importante **Bitcoin** para entender la tecnología blockchain**?

<img src="https://imagenes.elpais.com/resizer/fQI1S6VlDqKVgQSvpJja7rbBPSw=/1960x1470/cloudfront-eu-central-1.images.arcpublishing.com/prisa/GKSL6TU6MR6GLL53GU2F26EQAE.jpg"/>

La solución al problema del doble gasto.

---
layout: image-left
image: https://academy.bit2me.com/wp-content/uploads/2019/11/102_Doble-gasto.webp

---
# ¿Que es el doble gasto?

El doble gasto es un tipo de ataque que permitiría a un ciberdelincuente utilizar unas mismas monedas múltiples veces, un hecho que afecta a la tecnología de las criptomonedas debido a su descentralización y para el cual los desarrolladores han creados diversos mecanismos de protección.

---
layout: image-right
image: 'https://imagenes.20minutos.es/files/og_thumbnail/uploads/imagenes/2020/07/24/imagen-de-recurso-de-un-delincuente-virtual.jpeg'
---
# ¿Cómo funciona un ataque de doble gasto?
El doble gasto tiene lugar cuando un usuario desea utilizar unas mismas monedas múltiples veces.
---
layout: image
image: 'https://media.geeksforgeeks.org/wp-content/uploads/20220808213827/ds2.png'
---
---

# Los ataques de doble gasto mas famosos

- Ataque 51
- Ataque de carrera (Race Attack)
- Ataque por fuerza bruta
  - Ataque Finney
  - Vector 76 


---

# Ataque 51

El famoso ataque del 51%, consiste en que una persona o una coalición logre hacerse con el 51% (más del 50%) del poder de hash de la red. Con lo que lograría controlarla. Así, por ejemplo, llevar a cabo un ataque de fuerza bruta sería 100% factible.

---

# Race Attack

Cuando realizamos o recibimos una transacción en Bitcoin con 0 número de confirmaciones, la operación aún puede ser revertida. Este ataque ocurre cuando se realizan dos transacciones partiendo de los mismos fondos, es decir, se envía la misma cantidad de dinero a dos personas distintas. Pero sólo una de ellas recibirá los fondos, mientras que la otra no.

Por ejemplo el atacante puede enviar 2 transacciones, una para ti y otra para él, y en la que va para el poner mayor comisión para los mineros. Normalmente los mineros priorizarán la transacción con mayor comisión, invalidando la otra.

---

# Ataque por fuerza bruta

Este ataque puede ser ejecutado aún cuando el receptor ha decidido esperar una cierta cantidad de confirmaciones. Consiste en que un atacante realiza una transacción a un usuario como pago de un producto. Y simultáneamente busca una variación de la blockchain donde incluir la transacción fraudulenta

Es importante señalar que la ejecución de este ataque es sumamente costosa, y su posibilidad de éxito es bastante baja si no se cuenta con suficiente velocidad y potencia de hash. Por lo que sólo es posible llevar a cabo el ataque en un plano teórico.

---
layout: full
---
<div class="flex justify-center h-full">
  <img  src="https://i.imgflip.com/71iky0.jpg"/>
</div>
---
layout: cover
background: 'https://academy.bit2me.com/wp-content/uploads/2020/06/CryptoNight.webp'
---
# La mineria al rescate
---

# Minería

La minería es el método en el cual se resuelven problemas mátematicos de forma que la red premia con un incentivo a todos los que ofrecen sus pools para resolver estos problemas.

---
layout: iframe 
url: https://www.youtube.com/embed/pd6T83JRTsc
---

---
layout: cover
background: 'https://academy.bit2me.com/wp-content/uploads/2018/07/07_pow-1.webp'

---
# Proof of Work

El protocolo de Prueba de Trabajo o Proof of Work, es el más conocido y antiguo protocolo de consenso que consiste en que las partes de una red realicen con éxito un trabajo computacionalmente costoso para acceder a los recursos de dicha red.

---
layout: iframe
url: https://www.youtube.com/embed/HYX8kPEoQic
---

---
layout: fact
---
# Malentendidos típicos sobre Bitcoin

---

# Malentendidos típicos sobre Bitcoin
## Bitcoin es una red descentralizada

La cadena de bloques es una red P2P en la que todos los nodos son iguales entre sí dando como resultado un sistema distribuido resistente a ataques informáticos, fallos o falsificaciones.

De esta manera, aunque un nodo fallase se podría llegar a aquellos a los que estaba conectado por vías alternativas.

Esto no sería posible en un sistema descentralizado.

---
layout: quote
---

# Malentendidos típicos sobre Bitcoin
## Bitcoin es anonimo

El seudonimato y el anonimato son dos maneras de referirse a una persona. Es el secreto sobre el autor de un acto, dicho u obra. Se utilizan en las publicaciones de libros, artículos periodísticos, referencias policiales y otros medios de comunicación masivos.

**Bitcoin se basa en los seudonimos**

---

# Malentendidos típicos sobre Bitcoin
## Bitcoin sirve como moneda de prácticas ilicitas
Esta creencia proviene del hecho de que, en sus inicios, gracias a sus características seudónimas Bitcoin fue muy utilizado en los mercados de la Darknet

Pero al ser sedónimo puede llegar a facilitar la trazabilidad de donde va el dinero y aunque hay una guerra ética al respecto, puede ser una  tecnología que facilite esta trazabilidad de forma transparente.

--- 
layout: cover
background: 'https://academy.bit2me.com/wp-content/uploads/2019/05/03_Pizza-day.webp'

---
# Bitcoin Pizza Day

 El 22 de mayo de 2010 es muy importante para Bitcoin (BTC), ya que esta es la fecha en que Laszlo Hayneck realizó el primer pago con bitcoins por un bien o servicio. Hayneck comprar dos pizzas en la popular cadena estadounidense Papa John’s y pagó 10.000 BTC por ellas (entonces valían 0.003$). Desde entonces, esta fecha se conmemora todos los años como el Bitcoin Pizza Day.


---
layout: cover
background: https://www.roberthalf.com/sites/default/files/2018-08/job-interview-questions_4_types%20rh_2018.jpg
---
# Dudas e inquietudes
---
layout: cover
background: https://www.criptonoticias.com/wp-content/uploads/2021/03/ethereum-criptopedia-educacion-academia-criptonoticias.png
---

# Ethereum
Ethereum es uno de los proyectos más importantes del ecosistema blockchain.
Fué el primero en permitir interactuar con la blockchain implementando fragmentos de código que pueden ejecutarses en la propia cadena de bloques, también llamados <b>Smart-contracts</b>
Actualmente se encuentra en la versión 2.0 que dentro de sus mayores features está el Proof of Staking
---
layout: two-cols
---
# Smart-Contracts

Los smart contracts se tratan de “scripts” escritos con lenguajes de programación. Esto quiere decir que los términos del contrato son puras sentencias y comandos en el código que lo forma.

::right::

<img src="https://blockfold.com/wp-content/uploads/2022/01/solidity.png">
<img src="https://arpitmathur.files.wordpress.com/2018/04/solidity.png"/>


---
title: Smart contract Video
layout: iframe
url: https://www.youtube.com/embed/4ZnYGLWVpXk
---
---
layout: cover
background: https://public.bnbstatic.com/static/academy/uploads-original/4dc404895e764b2aa577167157119233.png

---

# Ethereum 2.0 The Merge
La ultima versión de Ethereum y como ha cambiado de PoW a PoS
---
layout: cover
background: 'https://academy.bit2me.com/wp-content/uploads/2018/07/08_pos-1.webp'
---
# Proof of Stake
Proof of Stake (PoS) o Prueba de Participación es un protocolo de consenso creado para reemplazar al conocido Proof of Work aportando una mejor seguridad y escalabilidad a las redes que lo implementen.
---
layout: iframe
url: 'https://www.youtube.com/embed/0bIQDj7S1h8'
---

---
layout: cover
background: https://cdn.cnn.com/cnnnext/dam/assets/150929101049-black-coffee-stock-super-tease.jpg
---
# Coffee Break (15-20 min)
---
layout: cover
background: https://academy.bit2me.com/wp-content/uploads/2021/11/Como-anadir-B2M-a-Metamask-bit2meacademy.png
---
# Metamask
---
# ¿Que es Metamask?
Ethereum ha sido capaz de crear un amplio y rico ecosistema de dApps a su alrededor. Sin embargo, el uso de estas aplicaciones descentralizadas siempre había resultado algo engorroso. Algo que ha cambiado con MetaMask y su capacidad de simplificar el uso de dApps gracias a esta sencilla extensión para navegadores web.

---

# Instalando Metamask
https://metamask.io/download.html

Wallet que nos permitirá almacenar y administrar claves, transmitir transacciones, enviar y recibir criptomonedas y tokens basados en la plataforma Ethereum.
Será nuestra **Wallet**

---
layout: two-cols
---
# Vamos a seguir los siguientes pasos
- Crearnos una cuenta
- Conocer las diferentes redes de Ethereum

::right::

<img src="https://academy.bit2me.com/wp-content/uploads/2021/10/metamask-direccion.jpg"/>


--- 
---

# Redes Ethereum ¿Mainnet o Testnet?
## Mainnet
Se denomina Mainnet a la red principal de la blockchain, cada plataforma tiene la suya propia. Sería el equivalente al entorno de producción o entorno real.

## Testnet
Las plataformas Blockchain están pensadas para desarrolladoress, es por ello que toda blockchain tiene su simil a la red principal pero en un entorno de pruebas, para poder crear todo lo que queramos sin gastar dinero real. 

---

# Redes Testnet Ethereum

En Ethereum existen actualmente 5 redes disponibles

## Sepolia
## Goerli
### Ropsten (Deprecated)

### Rinkeby(Deprecated)
### Kovan(Deprecated)

---
# Faucets

La red testnet con la que nos vamos a centrar es goerli, nos permitirá llevar a cabo las acciones que requieran de este taller


---

# ¿Que es un faucet?
Un faucet es un servicio que queda al servicio de la comunidad y que permite pedirle monedas que recibiremos en nuestro monedero
- https://goerlifaucet.com/

- https://goerli-faucet.mudit.blog/

- https://www.allthatnode.com/faucet/ethereum.dsrv


---

# Etherscan Explorer

Un Explorer permite conocer todo lo que ocurre en una blockchain.

Uno de los mas conocidos de la red Ethereum es https://etherscan.io

Nosotros como trabajaremos con goerli, entraremos en https://goerli.etherscan.io

**IMPORTANTE** Nos registraremos en etherscan, más adelante explicaremos por qué

---
layout: cover
background: https://academy.bit2me.com/wp-content/uploads/2022/08/etherscan-explorador-bloques-01.png
---

# Conociendo Etherscan (15 min)


---
layout: cover
background: https://imagenes.20minutos.es/files/og_thumbnail/uploads/imagenes/2021/11/19/nft.png
---

#  Preparando el entorno

---

Crearemos la siguiente carpeta

`mkdir my-first-nft`

Entraremos en la carpeta recien creada

`cd my-first-nft`

Iniciamos el repositorio con npm

`npm i -y`

En cuanto a las dependencias del proyecto

`yarn add @openzeppelin/contracts`

`yarn add hardhat`

Inicializamos el proyecto
`npx hardhat`
---
 # Infura

 Como parte de preparar el entorno, necesitaremos un EVM (Ethereum Virtual Machine)

 Hay proveedores que lo ofrecen de forma gratuita y nos permiten desplegar el entorno en la nube, pudiendo realizar toda interacción con nuestros smart-contracts en la blockchain

 Para ello, usaremos  Nos crearemos una cuenta en  https://www.infura.io/
 
---

 # Redes Infura

 <img src="/infura.png">
---

# ERC721 y Presets de Open Zeppelin

Los Smart-contracts en solidity tienen un gran parecido con las clases en el paradigma OOP(Object Oriented Programming)
Los contratos tienen datos persistentes en las variables del estado y funciones que modifican estas variables.
Si llamasemos a una funcion de otro contrato, ejecutaría una funcion en EVM(Ethereum Virtual Machine)

---

# Creando nuestro smart-contract

Iremos a la carpeta contracts y crearemos el fichero Tutorial.sol

Con el siguiente contenido

```solidity
//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.4; 

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Tutorial is ERC721 {

    uint256 public tokenCounter;

    constructor(
        string memory name,
        string memory symbol
    ) ERC721(name, symbol) {
        tokenCounter = 0;
    }

}
```
## Que es tokenCounter
Es una propiedad que hemos añadido a nuestro smart-contract y que cuando se construye, por defecto se pone a 0, de forma que cuando se inicie nuestro nft, tendremos 0 tokens emitidos

```solidity
uint256 public tokenCounter;
```

---

- La herencia de OpenZeppelin ERC721 implementa en nuestra clase toda la funcionalidad necesaria para este estándar.
- El constructor con el que se instanciará nuestro Smart-contract, recibiendo dos parametros
- name y symbol son propiedades que tendrá nuestro NFT

---

# Añadiendo la funcionalidad de Minting

A nuestro Tutorial.sol incluiremos la siguiente función

```solidity
function mint(string memory _tokenURI) public {
    _safeMint(msg.sender, tokenCounter);
    _setTokenURI(tokenCounter, _tokenURI);

    tokenCounter++;
}
```

`_safeMint` es otra función que existe en OpenZeppelin ERC721 y que nos implementa los siguientes parametros
- to: Dirección destino donde generaremos el nuevo token
- tokenId: el nuevo id del token minteado

`msg.sender` Es una palabra reservada que devuelve la dirección desde la cual estamos llamando al smart-contract. 


`_setTokenURI()` A continuación explicaremos para qué necesitamos este método


---

# Implementando setTokenURI()

Nuestro NFT, deberá tener un mapa de URIs donde nuestro smart-contract guardará el mapeo de los tokens disponibles 

Incluiremos esta propiedad debajo del counter
```solidity
mapping (uint256 => string) private _tokenURIs;
```

---

Y ahora implementaremos el siguiente método, que nos permitirá añadir en nuestro mapa de tokens una nueva URI
```solidity

function _setTokenURI(uint256 _tokenId, string memory _tokenURI) internal virtual {
    require(
        _exists(_tokenId),
        "ERC721Metadata: URI set of nonexistent token"
    );  // Checks if the tokenId exists
    _tokenURIs[_tokenId] = _tokenURI;
}
```
Explicación de los nuevos terminos que han aparecido

- `internal` Esta declaración define que este método solo va a poder ser llamado por otros métodos del mismo smart-contract
- `virtual` Virtual permite que sea sobreescrita esta función por otra que herede de la clase.
- `require`  Obliga que se cumpla la condición descrita como boleano, sería lo más parecido a un if
- `_exists()` Comprueba si ya existe un token con el id introducido, devolviendo un boleano

---

# Creando tokenURI()

Esta función es la encargada de devolver nuestro token, es el nombre estándar que utilizan plataformas como OpenSea para obtener la información del NFT y sus propiedades

```solidity
function tokenURI(uint256 _tokenId) public view virtual override returns(string memory) {
    require(
        _exists(_tokenId),
        "ERC721Metadata: URI set of nonexistent token"
    );
    return _tokenURIs[_tokenId];
}
```

- `public` Determina que una función es publica y puede llamarse en cualquier momento
- `view` Cuando un método tiene la propiedad view, indica que no modifica el estado de la blockchain, por lo que no gasta ningun tipo de comisión (Gas) para realizar esta acción
- `override` Sobreescribe la funcionalidad que tuviera este método en la clase padre `ERC721` de OpenZeppelin. Por defecto este método realiza la siguiente acción: `baseURI + tokenId`
- `returns(string memory)` Indica que va a devolver un valor de tipo sstring, la propiedad memory indica que la información está guardada en el smart-contract

---

# Esto sería nuestro fichero final

```solidity {all} {maxHeight:'400px'}
//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.4; 

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Tutorial is ERC721 {

    uint256 public tokenCounter;
    mapping (uint256 => string) private _tokenURIs;

    constructor(
        string memory name,
        string memory symbol
    ) ERC721(name, symbol) {
        tokenCounter = 0;
    }

    function mint(string memory _tokenURI) public {
        _safeMint(msg.sender, tokenCounter);
        _setTokenURI(tokenCounter, _tokenURI);

        tokenCounter++;
    }

    function _setTokenURI(uint256 _tokenId, string memory _tokenURI) internal virtual {
        require(
            _exists(_tokenId),
            "ERC721Metadata: URI set of nonexistent token"
        );  // Checks if the tokenId exists
        _tokenURIs[_tokenId] = _tokenURI;
    }

    function tokenURI(uint256 _tokenId) public view virtual override returns(string memory) {
        require(
            _exists(_tokenId),
            "ERC721Metadata: URI set of nonexistent token"
        );
        return _tokenURIs[_tokenId];
    }

}
```

---

# Compilando el Smart-contract

`npx hardhat compile`

**Importante** Revisad que el fichero `hardhat.config.js` contiene la versión `0.8.4` de solidity, que es la versión que estamos utilizando para nuestro SmartContract

---

# Testeando el smart contract

En este tutorial vamos a realizar los siguientes tests
- El NFT ha sido minteado correctamente
- El tokenURI ha sido modificado correctamente

## Chai
Para nuestros tests, utilizaremos chai, una assertion library que nos permitirá lanzar los tests en entorno nodejs

`yarn add chai`

---

## Creando el test

Iremos a la carpeta test y eliminaremos cualquier  fichero que haya dentro de esta carpeta.

Crearemos el siguiente script: `tutorial-test.js`

Con el siguiente contenido
```js {all} {maxHeight: '150px'}
const { expect } = require('chai');
const { ethers } = require("hardhat")

describe("Tutorial Smart Contract Tests", function() {

    this.beforeEach(async function() {
        // This is executed before each test
    })

    it("NFT is minted successfully", async function() {

    })

    it("tokenURI is set sucessfully", async function() {

    })

})
```

- `describe` Set de tests que queremos definir
- `beforeEach` Función que se ejecutará antes de cada test
- `it` Define cada test que queremos desarrollar

---

# Deploy del contrato y escribiendo los tests

Antes de cada test, haremos un deploy de nuestro contrato
```js
let tutorialContract;

this.beforeEach(async function() {
    // This is executed before each test
    // Deploying the smart contract
    const Tutorial = await ethers.getContractFactory("Tutorial");
    tutorialContract = await Tutorial.deploy("Tutorial Contract", "TUT");
})
```

---

# Probando la función mint

```js
it("NFT is minted successfully", async function () {
  [account1] = await ethers.getSigners();

  const balanceBeforeMint = await tutorialContract.balanceOf(account1.address);
  expect(balanceBeforeMint.toNumber()).to.equal(0);

  const tokenURI =
    "https://opensea-creatures-api.herokuapp.com/api/creature/1";
  const tx = await tutorialContract.connect(account1).mint(tokenURI);

  const balanceAfterMint = await tutorialContract.balanceOf(account1.address);
  expect(balanceAfterMint.toNumber()).to.equal(1);
});
```
---

# Probando la función tokenURI

```js {maxHeight: '300px'}
it("tokenURI is set sucessfully", async function() {
    [account1, account2] = await ethers.getSigners();

    const tokenURI_1 = "https://opensea-creatures-api.herokuapp.com/api/creature/1"
    const tokenURI_2 = "https://opensea-creatures-api.herokuapp.com/api/creature/2"

    const tx1 = await tutorial.connect(account1).mint(tokenURI_1);
    const tx2 = await tutorial.connect(account2).mint(tokenURI_2);

    expect(await tutorial.tokenURI(0)).to.equal(tokenURI_1);
    expect(await tutorial.tokenURI(1)).to.equal(tokenURI_2);

})
```

---

# Como quedaría nuestro test

```js {all} {maxHeight: '400px'}
const { expect } = require('chai');
const { ethers } = require("hardhat")

describe("Tutorial Smart Contract Tests", function() {

    let tutorialContract;

    this.beforeEach(async function() {
        // This is executed before each test
        // Deploying the smart contract
        const Tutorial = await ethers.getContractFactory("Tutorial");
        tutorialContract = await Tutorial.deploy("Tutorial Contract", "ART");
    })

    it("NFT is minted successfully", async function () {
      [account1] = await ethers.getSigners();

      const balanceBeforeMint = await tutorialContract.balanceOf(account1.address);
      expect(balanceBeforeMint.toNumber()).to.equal(0);

      const tokenURI =
        "https://opensea-creatures-api.herokuapp.com/api/creature/1";
      const tx = await tutorialContract.connect(account1).mint(tokenURI);

      const balanceAfterMint = await tutorialContract.balanceOf(account1.address);
      expect(balanceAfterMint.toNumber()).to.equal(1);
    });

    it("tokenURI is set sucessfully", async function() {
        [account1, account2] = await ethers.getSigners();

        const tokenURI_1 = "https://opensea-creatures-api.herokuapp.com/api/creature/1"
        const tokenURI_2 = "https://opensea-creatures-api.herokuapp.com/api/creature/2"

        const tx1 = await tutorialContract.connect(account1).mint(tokenURI_1);
        const tx2 = await tutorialContract.connect(account2).mint(tokenURI_2);

        expect(await tutorialContract.tokenURI(0)).to.equal(tokenURI_1);
        expect(await tutorialContract.tokenURI(1)).to.equal(tokenURI_2);

    })

})
```

---

# Lanzando los tests

`npx hardhat test`


---

# Deploy del Smart Contract

## Dotenv
Nos permitirá añadir nuestras variables de entorno para conectar con el api de infura y añadir nuestro private key
`yarn add dotenv`
## @nomiclabs/hardhat-etherscan
Nos permitirá verificar nuestro smart contract desplegado en la red mediante etherscan
`yarn add @nomiclabs/hardhat-etherscan`

## @nomiclabs/hardhat-waffle
Framework que facilita los tests de smart contracts
`yarn add @nomiclabs/hardhat-waffle`

---

# Configuración dotenv
Creamos el fichero `.env` e incluimos la siguiente configuración 
```md
INFURA_KEY=Paste the API key here
PRIVATE_KEY=Paste the private key here
ETHERSCAN_KEY=Paste etherscan key
```

---

# Ampliando la configuración de hardhat
Modificaremos el fichero `hardhat.config.js`

```js {all} {maxHeight:'300px'}
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config();

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

task("deploy", "Deploy the smart contracts", async(taskArgs, hre) => {

  const Tutorial = await hre.ethers.getContractFactory("Tutorial");
  const tutorialContract = await Tutorial.deploy("Tutorial Contract", "ART");

  await tutorialContract.deployed();

  // FIXME: Actually some kind of bug with etherscan is going on because delay from api response to know if deployed
  await new Promise((resolve) => setTimeout(resolve, 30000));

  await hre.run("verify:verify", {
    address: tutorialContract.address,
    constructorArguments: [
      "Tutorial Contract",
      "TUT"
    ]
  })

})

module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_KEY}`,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY,
  }
};
```

---

# Deploy del Smart Contract

Para poder subir nuestro smart contract, ejecutaremos el siguiente comando

`npx hardhat deploy --network goerli`

## Posibles Errores

Fondos insuficientes, para ello, tendremos que conseguir más fondos en nuestro monedero de Goerli
```bash 
Error: insufficient funds for intrinsic transaction cost 
(error={"name":"ProviderError","code":-32000,
"_isProviderError":true}, method="sendTransaction",
 transaction=undefined, code=INSUFFICIENT_FUNDS, version=providers/5.4.5)
...
reason: 'insufficient funds for intrinsic transaction cost',
code: 'INSUFFICIENT_FUNDS',
error: ProviderError: insufficient funds for gas * price + value
...
method: 'sendTransaction',
transaction: undefined
```
<Link to="43"><mdi-wallet-plus-outline />Volver al paso de los faucets</Link>

---
layout:  cover
background: https://github.com/figment-networks/learn-tutorials/raw/master/assets/ContractVerified.png
---

# Minteando con nuestro Contrato

Entrando en goerli.etherscan.io poremos buscarlo mediante la dirección que se ha generado al hacer el deploy.

Una vez estemos allí, en el método mint, podremos introducir una URI para probarlo.

Para probarlo, podemos introducir la siguiente URI:

https://gambakitties-metadata.herokuapp.com/metadata/1

Esta URI ya contiene los metadatos necesarios para que el nft se genere correctamente.

---

# Conectandonos con OpenSea Testnet

Iremos a [OpenSea Testnet](https://testnets.opensea.io/)

Y conectaremos metamask

Una vez conectado, si entramos en nuestra colección, deberia aparecernos nuestro nft

<div class="flex justify-center h-full h-75">
  <img src="https://github.com/figment-networks/learn-tutorials/raw/master/assets/NFTMinted.png" />
</div>

---
layout: cover
background: /nft-diagram.png
---
# Metadata

ERC-721 contiene un string metadata que es principalmente la base de los NFT.
Hasta este punto no he profundizado mucho en esto, pero vamos a explicar que es el sistema de ficheros IPFS y que relación tiene con los NFT
No entraremos en detalle, pero recomiendo una lectura de este articulo de OpenSea sobre metadata y descentralización https://opensea.io/blog/announcements/decentralizing-nft-metadata-on-opensea/


---
layout: image-right
image: https://gateway.pinata.cloud/ipfs/QmZM2ywL5z9UYMS9EMM5Xd7mDKE9TPrvtPw7doLatwgsbY
---
# Pinata

Pinata es un servicio en la nube que permite generar ficheros con IPFS y así poder utilizarlos para nuestros smart contracts

Esta es una imagen de ejemplo que subí

https://gateway.pinata.cloud/ipfs/QmZM2ywL5z9UYMS9EMM5Xd7mDKE9TPrvtPw7doLatwgsbY

---

# Como generar metadata en fichero json

Aquí hay un ejemplo de metadata.json

```json
{   
   "description": "Friendly OpenSea Creature",      
   "image": "https://opensea-prod.appspot.com/puffs/3.png",  
   "name": "Dave Starbelly",   
   "attributes": [
       { "trait_type": "Base", "value": "Starfish" },      
       { "trait_type": "Eyes", "value": "Big" },      
       { "trait_type": "Mouth","value": "Surprised" },
   ]
}
```

- `description` Breve descripción del nft
- `image` Url a la imagen que vamos a vincular al nft
- `name` Nombre del NFT
- `attributes` Propiedades únicas que tendrá nuestro NFT a la hora de mintearlo, recomiendo indagar más al respecto, ya que es extenso este apartado y no vamos a profundizar aquí

---

# Subiendo el fichero a pinata

- Creamos una cuenta
- Subimos la carpeta donde tengamos el `nft.json` y `nft.png` por ejemplo
- Se generará un CID

Al indicar la url de la siguiente forma, podremos visitar nuestro IPFS

https://ipfs.io/ipfs/{CID}/nft.png


---

# Minteando nuestro nuevo NFT

Si volvemos al smart-contract que ya teniamos desplegado, si vamos a la función de mint e indicamos el nuevo URI, podremos ver como estaremos generando un nuevo NFT con las propiedades que tenía `nft.json`

---
layout: end
---
# Enhorabuena, ya has conseguido completar el ciclo completo de un NFT
Ahora solo te queda seguir aprendiendo y experimentando.

Espero que hayas disfrutado este tutorial.



