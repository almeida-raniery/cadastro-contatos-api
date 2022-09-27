# Api cadastro de contatos:

## Instalação:

### Com Docker:
* Faça o clone deste repositório.
* Instale as dependências com o comando `yarn`.
* Crie um arquivo .env com as variáveis de ambiente, assim como demonstrado no arquivo .env.example.
* Preencha as variáveis de ambiente com seus dados de usuário do postgres e uma chave secreta para encriptação de tokens jwt
* Utilize o comando `docker-compose up` para inicializar o banco de dados.
* Em outro terminal, utilize o comando `docker exec api yarn typeorm migration:run -d ./src/data-source.ts`

### Com yarn na máquina local:
* Faça o clone deste repositório.
* Instale as dependências com o comando `yarn`.
* Crie um arquivo .env com as variáveis de ambiente, assim como demonstrado no arquivo .env.example.
* Preencha as variáveis de ambiente com seus dados de usuário do postgres e uma chave secreta para encriptação de tokens jwt
* Utilize o comando `yarn dev` para inicializar o banco de dados.
* Em outro terminal, utilize o comando `yarn typeorm migration:run -d ./src/data-source.ts`