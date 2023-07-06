# bdmg-angular

## 🧰Descrição do Desafio

Para começar leia atentamente as instruções a seguir:

&#9745;: Primeiramente, dê fork nesse projeto para sua conta GitHub.

&#9745;: Veja a estrutura de pastas e utilize os arquivos da pasta app.

&#9745;: Seguindo o padrão MVCS, faça a requisição GET da API: https://viacep.com.br/ws/30160907/json/

&#9745;: Com o dado objeto, construa um formulário em que todos os campos possam ser editados, exceto: ibge e siafi.

&#9745;: Construa o método/função que salve as alterações no localstorage;

&#9745;: Encontre uma solução de máscara para o campo 'cep', seguindo o padrão 00000-000;

&#9745;: Encontre uma solução de máscara para o campo 'complemento', seguindo o padrão de milhar: 0.000;

&#9745;: Utilize o Angular Material para facilitar o desenvolvimento: https://material.angular.io/

&#9745;: Caso necessite, guie-se pela documentação do Angular: https://angular.io/

## 💻Link do Stackblitz:

https://bdmg-angular-jjpyp9.stackblitz.io

## 🗃️Estrutura dos arquivos:

```
bdmg-angular-6ivagw/
src/
├── app/
│   ├── cep-form/
│   │   ├── cep-form.component.css
│   │   ├── cep-form.component.html
│   │   ├── cep-form.component.ts
│   ├── models/
│   │   ├── cep.model.ts
│   │   ├── dialog.model.ts
│   ├── shared/
│   │   ├── dialog/
│   │   │   ├── dialog.component.css
│   │   │   ├── dialog.component.html
│   │   │   ├── dialog.component.ts
│   │   ├── angular-material.module.ts
│   ├── app.component.css
│   ├── app.component.html
│   ├── app.component.ts
│   ├── app.module.ts
│   ├── app.service.ts
├── hello.component.ts
├── index.html
├── polyfills.ts
├── styles.css
angular.json
package.json
README.md
tsconfig.json
```
