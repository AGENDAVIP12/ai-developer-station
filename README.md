# Command Central

Crie um NOVO projeto independente, sem qualquer vínculo, reaproveitamento ou alteração do projeto Zuvvi.



Este novo sistema será uma CENTRAL DE COMANDO PARA DESENVOLVIMENTO DE SOFTWARE.



IMPORTANTE:



- NÃO conectar GitHub nesta etapa.

- NÃO conectar Supabase nesta etapa.

- NÃO utilizar banco de dados real.

- NÃO alterar, acessar ou reaproveitar qualquer configuração, variável de ambiente, banco, repositório ou estrutura pertencente ao Zuvvi.

- Todo o projeto deve funcionar inicialmente apenas como interface e protótipo funcional.

- Deixe a arquitetura preparada para integrações futuras, mas sem realizá-las agora.



OBJETIVO DO SISTEMA



Quero uma plataforma onde eu possa conversar com uma inteligência artificial para comandar a construção e manutenção de sistemas.



A ideia é que futuramente esta central consiga trabalhar integrada com:



1. GPT / OpenAI;

2. Lovable;

3. GitHub;

4. Supabase.



A interface deve ser simples para uma pessoa que NÃO É PROGRAMADORA.



Eu quero conseguir escrever normalmente, por exemplo:



“Crie uma tela de cadastro.”



“Arrume o botão da tela inicial.”



“Veja se essa função está funcionando.”



“Prepare essa alteração para o GitHub.”



O sistema deverá transformar esses pedidos em etapas compreensíveis e mostrar claramente o que está acontecendo.



ESTRUTURA PRINCIPAL



Crie uma aplicação desktop-first responsiva, moderna e profissional.



Layout:



SIDEBAR À ESQUERDA



Itens:



- Início

- Projetos

- Nova conversa

- Histórico

- Integrações

- Alterações

- Configurações



ÁREA PRINCIPAL



Criar uma tela de conversa semelhante a uma central de trabalho com IA.



No topo mostrar:



Nome do projeto selecionado.



Status do projeto.



Indicadores futuros de:



- IA

- Lovable

- GitHub

- Supabase



Como as integrações ainda não existem, mostrar:



“Não conectado”



Não simular conexão real.



ÁREA DE CONVERSA



Criar mensagens do usuário e mensagens da IA.



Na parte inferior:



Campo grande:



“Descreva o que você quer criar ou alterar...”



Botão:



Enviar



Permitir também anexar futuramente:



- imagens;

- documentos;

- arquivos.



Por enquanto, o botão de anexo pode existir visualmente sem integração real.



RESPOSTA DA IA



A resposta deve ter uma apresentação clara, podendo possuir:



- Entendi seu pedido

- O que será alterado

- Arquivos envolvidos

- Etapas

- Resultado

- Próxima ação recomendada



Criar componentes visuais para representar ações realizadas.



Exemplo:



ANÁLISE

✓ Pedido interpretado



PLANEJAMENTO

✓ Alterações definidas



EXECUÇÃO

Aguardando integração



VALIDAÇÃO

Aguardando



GITHUB

Não conectado



IMPORTANTE



Não quero uma interface excessivamente técnica.



Sempre priorizar termos compreensíveis.



Quando algum termo técnico for necessário, mostrar uma pequena explicação.



PROJETOS



Criar uma tela “Projetos”.



Ela deverá permitir futuramente cadastrar vários projetos diferentes.



Card do projeto contendo:



- Nome

- Descrição

- Última atividade

- Status

- Abrir projeto



Criar um projeto demonstrativo apenas local chamado:



“Projeto de demonstração”



Não utilizar o nome Zuvvi.



INTEGRAÇÕES



Criar uma página de integrações contendo cards separados:



OpenAI

Lovable

GitHub

Supabase



Cada card deverá possuir:



- Logo/ícone

- Nome

- Descrição

- Status

- Botão “Conectar”



Por enquanto todos devem aparecer como:



“Não conectado”



Os botões NÃO devem estabelecer nenhuma conexão real.



Apenas preparar a interface.



ALTERAÇÕES



Criar também uma página para visualizar alterações propostas pela IA.



Cada alteração poderá possuir:



- título;

- descrição;

- arquivos afetados;

- status;

- data;

- ação.



Status possíveis:



Rascunho

Preparada

Aguardando aprovação

Aprovada

Cancelada



Não implementar commit real nesta etapa.



DESIGN



Quero aparência de ferramenta profissional de desenvolvimento, porém simples.



Utilizar:



- sidebar organizada;

- cards;

- ícones;

- boa hierarquia visual;

- responsividade;

- estados de loading;

- estados vazios;

- tooltips;

- feedback visual das ações.



Usar português do Brasil em toda a interface.



Não criar funcionalidades falsas apresentadas como se estivessem funcionando.



Quando algo depender de integração futura, deixar explicitamente identificado como:



“Disponível após conexão”.



Ao terminar, faça uma revisão geral da interface e informe quais páginas e componentes foram criados.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://ai-developer-station.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/486a07e8-a626-4c29-8447-1f271458d1ad).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
