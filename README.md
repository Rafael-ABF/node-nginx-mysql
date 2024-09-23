# node-nginx-mysql

Este projeto configura um ambiente com Node.js, NGINX e MySQL usando Docker. Para iniciar o ambiente, siga os passos abaixo:

1. **Clone o repositório:**

```
git clone https://github.com/Rafael-ABF/node-nginx-mysql.git
```

2. **Navegue até o diretório do projeto:**

```
cd node-nginx-mysql/
```

3. **Inicie os containers em segundo plano**

```
docker-compose up -d
```

4. **Acesse a aplicação**
 - Após os três containers estarem prontos, acesse  para adicionar um item `Full Cycle` à lista.
 - Para adicionar um valor personalizado, acesse `http://localhost:8080?name=ALGUM_VALOR`, substituindo ALGUM_VALOR pelo valor desejado.
 - Em ambos os casos, a lista com todos os itens será exibida.

## Em caso de erro
Caso haja algum erro, pode ser que alguma outra imagem está em conflito.
Nesse caso:
1. **Finalize os containers**
```
docker-compose down
```
2. **Remova dados não utilizados**
```
docker system prune -f
```

3. **Inicie os containers em segundo plano**
```
docker-compose up -d
```

Se o problema continuar, abra uma Issue aqui no projeto.
