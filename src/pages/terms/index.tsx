import React from "react";

import Header from "../../components/Shared/Header";
import JelloInfo from "../../components/Shared/JelloInfo";
import SEO from "../../components/Seo";

import { Container } from "../../styles/aboutStyles";
import { TextBox, Checkbox } from "../../styles/termsStyles";

const TermsJello: React.FC = () => {
  return (
    <Container>
      <Header />
      <SEO title="Termos" />
      <TextBox>
        <div>
          <div className="ScrollBar">
            <h1>Termos e Politicas</h1>
            <p>
              O aceite destes Termos de Uso configuram uma licença de uso não
              exclusiva das ferramentas tecnológicas contidas na PLATAFORMA
              JELLO aos USUÁRIOS. As ferramentas tecnológicas são licenciadas no
              estado em que se encontram, podendo ser modificadas, substituídas
              ou removidas da PLATAFORMA JELLO a qualquer momento, sem aviso
              prévio. O respeito às condições destes Termos de Uso é essencial
              para o uso legítimo de tais ferramentas.
            </p>
            <p>
              {" "}
              O USUÁRIO expressamente declara que tem conhecimento e concorda
              com os Termos de Uso da PLATAFORMA JELLO, inclusive com as
              Políticas de Privacidade e de Direitos Autorais que, apesar de
              apresentadas em textos separados, são parte integrante destes. O
              uso das ferramentas tecnológicas contidas na PLATAFORMA JELLO em
              discordância com os termos a seguir poderá implicar a suspensão do
              acesso à conta ou o cancelamento do cadastro do USUÁRIO, o
              consequente e imediato encerramento da licença de uso previamente
              existente e eventuais outras sanções, conforme adiante detalhado.
            </p>
            <h2>
              PROVEDORA DAS FERRAMENTAS TECNOLÓGICAS E PRESTADORA DE SERVIÇOS
            </h2>
            <p>
              As ferramentas tecnológicas contidas na PLATAFORMA JELLO são
              disponibilizadas pela Jello, empresa brasileira, sediada em Belo
              Horizonte, para serem utilizadas em qualquer país do mundo, e,
              para serem utilizadas em transações realizadas no Brasil, em
              reais, e exclusivamente entre usuários que se declarem
              brasileiros, são oferecidas pela Jello Tecnologia, pessoa jurídica
              de direito privado, inscrita no CNPJ/MF sob o nº
              13.427.325/0001-05, sediada em Belo Horizonte/MG.
            </p>
            <h2>DEFINIÇÕES</h2>
            <p>
              Sempre que as expressões abaixo forem usadas em letra maiúscula
              nestes Termos de Uso, elas terão o significado abaixo:
              <li>
                1 PLATAFORMA JELLO – Plataforma de ensino digital com serviços
                de streaming e on-demand, que proporciona um aprendizado
                personalizado com foco no desenvolvimento individual dos
                assinantes e usuários da plataforma e aproxima os produtores de
                conteúdos de seus alunos.
              </li>
              <li>
                2 CONTEÚDO – conteúdo em diversos formatos digitais (vídeo,
                áudio, texto, software etc.), também denominado PRODUTO DIGITAL,
                criado pelo PRODUTOR DE CONTEÚDO ou por terceiro de quem o
                PRODUTOR DE CONTEÚDO tenha recebido autorização em caráter de
                exclusividade para exploração comercial e que é disponibilizado
                pelo PRODUTOR DE CONTEÚDO para divulgação, promoção e
                comercialização mediante o uso das ferramentas tecnológicas
                contidas na PLATAFORMA JELLO;
              </li>
              <li>
                3 USUÁRIO – qualquer pessoa que acesse a PLATAFORMA JELLO,
                independentemente do fato de ter feito ou não o seu cadastro
                como PRODUTOR DE CONTEÚDO ou COMPRADOR;
              </li>
              <li>
                4 PRODUTOR DE CONTEÚDO – USUÁRIO titular de direitos de
                propriedade intelectual de um CONTEÚDO ou detentor de
                autorização válida para exploração comercial em caráter de
                exclusividade do CONTEÚDO e que utiliza as ferramentas
                tecnológicas contidas na PLATAFORMA JELLO para viabilizar a
                divulgação, a promoção e a comercialização de tal CONTEÚDO.
              </li>
              <li>
                5 COMPRADOR – USUÁRIO que adquire CONTEÚDO mediante o uso das
                ferramentas tecnológicas disponibilizadas pela PLATAFORMA JELLO.
              </li>
            </p>
            <h2>
              FINALIDADE DAS FERRAMENTAS TECNOLÓGICAS E SERVIÇOS PRESTADOS
            </h2>
            <p>
              As ferramentas tecnológicas contidas na PLATAFORMA JELLO permitem
              que PRODUTORES DE CONTEÚDO divulguem, promovam e comercializem seu
              CONTEÚDO sem precisar desenvolver uma plataforma online própria. O
              PRODUTOR DE CONTEÚDO conta com ferramentas tecnológicas para
              automatização da entrega de CONTEÚDO, tais como:
              <li>
                i) Espaço de Alunos personalizado (pela qual o PRODUTOR DE
                CONTEÚDO pode controlar o acesso de seus alunos aos CONTEÚDOS
                disponibilizados);
              </li>
              <li>
                ii) o Checkout (pelo qual a transação de compra e venda pode ser
                efetivamente realizada);
              </li>
              <li>
                iii) os Cupons Promocionais (pelos quais o PRODUTOR DE CONTEÚDO
                pode criar com novos valores de acordo com sua estratégia de
                vendas, permitindo a realização de promoções temporárias).
              </li>
            </p>
            <p>
              A PLATAFORMA JELLO disponibiliza ainda ferramentas para
              recebimento de remuneração por seus respectivos USUÁRIOS, as quais
              permitem que sejam gerados créditos para os usuários decorrentes
              da comercialização de PRODUTOS, conforme detalhado no item GESTÃO
              DE PAGAMENTOS.
            </p>
            <p>
              Por fim, é importante ressaltar que, exceto para as operações
              realizadas entre produtores e compradores que estejam situados,
              simultaneamente, no Brasil, a PLATAFORMA JELLO opera no modelo de
              revendedora. Assim, no momento da compra, a JELLO adquiri o
              conteúdo do PRODUTOR e revende ao COMPRADOR, em uma operação
              instantânea.{" "}
            </p>
            <p>
              Em atenção a diretrizes expedidas por órgãos de alcance
              internacional, como Office of Foreign Assets Control (OFAC), a
              PLATAFORMA JELLO não transaciona e/ou opera com usuários
              localizados em determinados países ou regiões, em atendimento as
              normas e boas práticas globais voltadas à prevenção da lavagem de
              dinheiro, atos fraudulentos e financiamento de atividades
              ilícitas.
            </p>
            <h2>CADASTRO, LOGIN, SENHA E SEGURANÇA</h2>
            <p>
              Os serviços oferecidos pela JELLO somente podem ser contratados
              por pessoa habilitada à prática de todos os atos da vida civil
              (maiores de 18 anos no Brasil, ou regularmente emancipados), sendo
              vedado o cadastro de pessoas menores de idade.
            </p>
            <p>
              Ao utilizar a PLATAFORMA JELLO, o USUÁRIO declara ser maior de 18
              anos e estar em plena capacidade do exercício de todos os atos da
              vida civil.
            </p>
            Para utilização da PLATAFORMA JELLO, o USUÁRIO obriga-se a preencher
            adequadamente e com informações corretas todos os dados solicitados
            pelo JELLO na página de cadastramento do site.
            <p>
              A JELLO reserva-se o direito de não aprovar o cadastro do USUÁRIO,
              se houver indício de que este utilizará a PLATAFORMA JELLO em
              desacordo com estes Termos de Uso.
            </p>
            A JELLO poderá usar quaisquer meios válidos para identificação dos
            USUÁRIOS e ainda requerer a qualquer momento dados adicionais para
            complementar aqueles já fornecidos. Caso o USUÁRIO envie informações
            incorretas ou incompletas, o cadastro na PLATAFORMA JELLO poderá ser
            cancelado ou suspenso temporariamente.
            <p>
              O USUÁRIO será o único responsável por seu login e senha e
              responderá por todos os atos praticados com estes. Portanto, é
              dever do USUÁRIO zelar pela guarda e confidencialidade de sua
              senha. A JELLO não é responsável por qualquer perda resultante do
              uso indevido da senha do USUÁRIO por terceiros.
            </p>
            O USUÁRIO concorda que os dados fornecidos no momento do cadastro na
            PLATAFORMA JELLO poderão ser entregues ao COMPRADOR ou PRODUTOR DE
            CONTEÚDO, em caso de: infração destes Termos de Uso que possa
            provocar danos a outros USUÁRIOS da Plataforma ou a terceiros;
            suspeita de fraude; disputa; reclamação quanto ao produto
            comercializado ou qualquer indício de ilícito cometido pelo USUÁRIO,
            quando necessário para o cumprimento de obrigações contratuais
            firmada entre as partes (JELLO, PRODUTORES, USUÁRIOS e COMPRADORES),
            em caso de interesse legítimo e para atendimento a legislação
            aplicável, especialmente de cunho fiscal e tributários, conforme
            detalhado na Política de Privacidade.
            <p>
              Após realizar o cadastro do primeiro conteúdo através da
              PLATAFORMA JELLO, os PRODUTORES deverão fornecer dados bancários,
              indicando uma conta bancária de sua titularidade, para receber o
              valor das transações efetivadas por meio das ferramentas contidas
              na PLATAFORMA JELLO.
            </p>
            Não será permitido o cadastro e/ou o repasse de valores devidos aos
            USUÁRIOS para conta bancária de terceiros, através da PLATAFORMA
            JELLO. Não será permitido o cadastro e/ou o repasse de valores
            devidos aos USUÁRIOS para conta bancária de terceiros, através da
            PLATAFORMA JELLO.
            <p>
              Além disso, será vedado aos USUÁRIOS cadastrados como pessoa
              física cadastrarem conta bancária localizada em um país diferente
              do vpaís informado em sua conta na PLATAFORMA JELLO.
            </p>{" "}
            <p>
              O USUÁRIO é responsável pela veracidade e assertividade dos dados
              cadastrados, respondendo por desdobramentos decorrentes da
              incorreção dos dados e informações fornecidos no ato de
              cadastramento. A título exemplificativo, ao cadastrar
              equivocadamente seu e-mail, o USUÁRIO pode deixar de receber
              informações relevantes sobre a PLATAFORMA JELLO ou até mesmo sobre
              o acesso aos conteúdos adquiridos. Assim, é essencial que o
              USUÁRIO mantenha seu cadastro atualizado e revise seus dados a
              cada 05 meses a contar do seu cadastramento ou realização de uma
              compra.
            </p>
            <h2>
              REGRAS PARA A INCLUSÃO DE CONTEÚDO NA PLATAFORMA POR PRODUTOR DE
              CONTEÚDO
            </h2>
            <p>
              O PRODUTOR DE CONTEÚDO poderá usar as ferramentas contidas na
              PLATAFORMA JELLO para comercializar seu CONTEÚDO diretamente ou
              para disponibilizá-lo para divulgação e promoção. Para tanto, o
              USUÁRIO deverá:
            </p>
            <li>
              (i)registrar-se na PLATAFORMA JELLO como um PRODUTOR DE CONTEÚDO,
              responsabilizando-se pelo uso apropriado das ferramentas contidas
              na PLATAFORMA JELLO, bem como por buscar o esclarecimento
              necessário através dos canais disponíveis na PLATAFORMA JELLO em
              caso de dúvidas.
            </li>
            <li>
              (ii)aceitar e respeitar os Termos de Uso e Políticas da JELLO;
            </li>
            <li>
              (iii)ser o autor do CONTEÚDO ou ter autorização do titular de
              direitos autorais sobre o CONTEÚDO para promovê-lo e
              comercializá-lo em caráter de exclusividade, responsabilizando-se
              por não conceder autorização a terceiros para que explorem o
              CONTEÚDO concorrentemente;
            </li>
            <li>
              (iv)respeitar todas as indicações de CONTEÚDO PROIBIDO contidas
              nestes Termos de Uso, abstendo-se de tentar inserir na PLATAFORMA
              JELLO CONTEÚDO PROIBIDO, reconhecendo ser o único responsável pelo
              CONTEÚDO que incluir na PLATAFORMA JELLO;
            </li>
            <li>
              (v)incluir o CONTEÚDO na PLATAFORMA JELLO fornecendo todas as
              informações solicitadas a seu respeito (inclusive dados
              bancários), a respeito do preço de oferta do CONTEÚDO e das formas
              de pagamento, a respeito do prazo de garantia (15 ou 30 dias),
              podendo alterar tais informações a qualquer momento, sem
              necessidade de aviso prévio, mas responsabilizando-se perante os
              COMPRADORES a respeitar as informações ali constantes no ato de
              cada operação realizada;
            </li>
            <li>
              (vi)aguardar o período necessário para que o CONTEÚDO fique
              disponível para divulgação e comercialização na PLATAFORMA JELLO,
              eis que o CONTEÚDO poderá passar por uma análise de conformidade
              com estes Termos de Uso, e se não estiverem de acordo com estes
              Termos de Uso não serão divulgados;
            </li>
            <li>
              (vii)abster-se de comercializar o CONTEÚDO por qualquer outro meio
              que não a PLATAFORMA JELLO;
            </li>
            <li>
              (viii)utilizar, exclusivamente, as ferramentas e soluções de
              pagamento fornecidas pela PLATAFORMA JELLO;
            </li>
            <li>
              (ix) responsabilizar-se por prestar informações claras e objetivas
              sobre o CONTEÚDO ofertado por meio das ferramentas contidas na
              PLATAFORMA JELLO; mantendo-as atualizadas e compatíveis com
              aquelas divulgadas em seus websites, páginas de vendas e espaço de
              alunos externas à PLATAFORMA JELLO etc, bem como
              responsabilizando-se perante o COMPRADOR e JELLO por eventuais
              divergências, especialmente no tocante aos preços do CONTEÚDO, sua
              qualidade, descrição, adequação ao objetivo a que se propõe e aos
              prazos de garantia, entrega em caso de não atualização;
            </li>
            <li>
              (x) responsabilizar-se pela entrega do CONTEÚDO ao COMPRADOR, bem
              como por garantir que o COMPRADOR possa utilizar o CONTEÚDO da
              maneira como foi ofertado; responsabilizar-se pelo cumprimento
              integral de todas as obrigações legais relacionadas às vendas
              realizadas com o uso das ferramentas contidas na PLATAFORMA JELLO;
            </li>
            <li>
              (xi) respeitar o prazo de garantia que tiver indicado no cadastro
              do CONTEÚDO, que não poderá ser inferior à 15 dias, na PLATAFORMA
              JELLO, comprometendo-se a aceitar eventual solicitação de
              cancelamento da venda por parte da JELLO, autorizando, desde já,
              que a JELLO realize a dedução dos valores objeto de reembolso dos
              créditos existentes em sua conta;
            </li>
            <li>
              (xii) responsabilizar-se por solucionar quaisquer problemas, em
              especial de origem técnica, que ocorrerem com o CONTEÚDO após a
              entrega ao COMPRADOR, assumindo a obrigação de fornecer suporte
              adequado ao COMPRADOR sempre que solicitado pela JELLO, bem como
              responder aos eventuais contatos da equipe de suporte da
              PLATAFORMA JELLO viabilizando o adequado atendimento aos USUÁRIOS;
            </li>
            <li>
              (xii) responsabilizar-se por alterar sempre que necessário as
              informações relativas ao CONTEÚDO, assim como por suspender ou
              cancelar sua divulgação sempre que deixar de atender a qualquer
              das condições destes Termos de Uso, sem prejuízo de permanecer
              responsável por todas as obrigações decorrentes do período de
              divulgação;
            </li>
            <li>
              (xvii) arcar com as TARIFAS decorrentes do uso das ferramentas
              tecnológicas contidas na PLATAFORMA JELLO e arcar com suas
              obrigações legais, regulatórias, fiscais e tributárias, se, quando
              e onde existentes.
            </li>
            <li>
              (xiv) ceder à JELLO, no momento da operação, autorização relativa
              aos direitos autorais e de propriedade intelectual relativos ao
              CONTEÚDO para todos os fins e efeitos legais, em caráter
              irrevogável, irretratável e não exclusivo, pelo prazo que o
              CONTEÚDO estiver cadastrado na PLATAFORMA JELLO, exclusivamente
              com o objetivo de permitir que a JELLO revenda regularmente o
              CONTEÚDO. Nesse sentido, a referida cessão de direitos autorais
              pelo PRODUTOR à JELLO não significa, em qualquer aspecto, que o
              CONTEÚDO e os direitos a ele associados passam a pertencer à
              JELLO, mas somente que a JELLO está autorizada a revender o
              CONTEÚDO, sendo que o PRODUTOR continua sendo detentor de todos os
              direitos e obrigações relacionadas ao CONTEÚDO comercializado na
              PLATAFORMA. Ademais, a cessão de direitos autorias de que trata
              esse item é aplicável apenas às operações realizadas a partir das
              ferramentas disponibilizadas pela JELLO, tendo em vista a adoção
              do modelo de revendedora em tais casos;
            </li>
            <li>
              (xv) Aceitar e respeitar, todas as políticas da PLATAFORMA JELLO,
              em especial o Código de Conduto e seu Adendo, reconhecendo neste
              ato que, ao se cadastrar na PLATAFORMA, tomou conhecimento de tais
              documentos, que estão devidamente publicados no site da JELLO
              (www.jellotecnologia.com), se sujeitando e se comprometendo a
              observar todas as regras, princípios e diretrizes neles previstos;
            </li>
            <li>
              (xvi) responsabilizar-se, integralmente, por cumprir as leis e
              normativos aplicáveis relativos a proteção de dados pessoais, em
              especial o Regulamento Geral de Proteção de Dados da União
              Europeia (GDPR), assumindo a obrigação de obter o consentimento
              expresso e inequívoco de seus usuários relativamente a coleta,
              armazenamento, tratamento e processamento de dados pessoais, nos
              termos da legislação aplicável;
            </li>
            <li>
              (xvii) reconhecer que é inteira e exclusivamente responsável pelo
              CONTEÚDO oferecido na PLATAFORMA JELLO, incluindo, mas não se
              limitando, às informações, características, qualidades,
              quantidade, descrição, adequação do conteúdo ao objetivo proposto,
              composição, preço, garantia, prazos de validade e entrega. Nesse
              sentido, caso a JELLO venha a responder, através de seu suporte,
              administrativa ou judicialmente pelo CONTEÚDO gerado pelos
              PRODUTOR, os valores despendidos pela JELLO poderão, a seu
              exclusivo critério, ser abatidos das comissões, saldos contratuais
              e demais valores devidos ao PRODUTOR responsável até o limite
              necessário à recomposição dos custos incorridos pela JELLO em
              razão de ações, acordos extrajudiciais e judiciais firmados com
              terceiros em razão de falhas do CONTEÚDO gerado pelo PRODUTOR, bem
              como condenações judiciais. Assim, o PRODUTOR concorda e autoriza,
              desde já, a retenção e/ou cobrança dos referidos valores, pela
              JELLO, nos termos acima.
            </li>
            <h2>CONTEÚDOS PROIBIDOS</h2>
            <p>
              É expressamente proibido o anúncio ou a comercialização por meio
              da PLATAFORMA JELLO dos seguintes CONTEÚDOS:
            </p>
            <ul>
              <li>
                produtos que façam alusão a armas de fogo, narcóticos, tóxicos e
                qualquer tipo de drogas ilegais, bem como a qualquer substância
                ilícita e/ou que dependa, necessariamente, de prescrição médica
                para seu consumo;
              </li>
              <li>produtos subtraídos de terceiros, furtados ou roubados;</li>
              <li>produtos subtraídos de terceiros, furtados ou roubados;</li>
              <li>ações de empresas negociadas em Bolsa de Valores;</li>
              <li>listas de correio ou bases de dados pessoais;</li>
              <li>
                produtos que violem a intimidade, a honra, a imagem, o nome ou
                qualquer outro direito de personalidade de terceiros;
              </li>
              <li>
                produtos relacionados à pedofilia, à prostituição ou similares,
                material pornográfico, contendo cenas de nudez ou atos sexuais,
                ou de algum modo obsceno ou contrário a moral e os bons
                costumes;
              </li>
              <li>produtos que façam apologia do hábito de fumar;</li>
              <li>
                produtos que promovam esquemas de pirâmide, marketing multinível
                ou esquemas similares cujo funcionamento dependa,
                prioritariamente, de recursos financeiros aportados por novos
                participantes para remunerar participantes anteriores, de forma
                insustentável, gerando prejuízos aos participantes que entram
                por último;
              </li>
              <li>
                produtos que prometam sucesso em loterias, jogos de azar, bem
                como qualquer atividade ou prática que dependa de fatores
                relacionados sorte para seu sucesso;
              </li>
              <li>
                produtos que promovam a violência e/ou a discriminação baseada
                em questões de raça, sexo, religião, nacionalidade, orientação
                sexual ou de qualquer outro tipo;
              </li>
              <li>
                produtos que prometem o atingimento de qualquer tipo de
                resultado, seja de natureza física, mental ou de outra espécie,
                sem respaldo científico robusto e/ou reconhecimento pelos órgãos
                e entidades competentes;
              </li>
              <li>
                produtos que contenham músicas, imagens e vídeos em quaisquer
                formatos, quando os mesmos não estão expressamente autorizados
                pelo titular dos direitos autorais;
              </li>
              <li>
                produtos que violem direitos intelectuais de terceiros, tais
                como produtos que violem software, direitos autorais, patentes,
                marcas, modelos e desenhos industriais, especialmente produtos
                que contenham software para OEM, NFR, cópias e/ou arquivos de
                backup, licença, programas acadêmicos e/ou desenvolvidos para
                alguma entidade educacional, ou segredos industriais;
              </li>
              <li>
                produtos afetados por alguma restrição de qualquer espécie
                quanto ao seu uso, exploração ou transferência de domínio ou
                posse;
              </li>
              <li>
                produtos que não apresentem, claramente, em sua oferta e
                divulgação, as disposições relacionadas a sua forma de aquisição
                e consumo, preço, contato de suporte, regras de reembolso,
                cancelamento, garantias, renovação, dentre outras informações
                exigidas por lei;
              </li>
              <li>
                produtos cujas características indiquem elevado potencial de
                fraude, prática de lavagem de dinheiro e financiamento do
                terrorismo ou atividades ilegais, tendo em vistas às normas
                aplicáveis e recomendações de órgãos nacionais e internacionais
                sobre o tema;
              </li>
              <li>
                produtos e cursos que garantam o seu reconhecimento pelos órgãos
                competentes (ex. Ministério da Educação, Conselhos de Classe,
                etc.) sem a respectiva comprovação de tal reconhecimento;
              </li>
              <li>
                produtos em que a discrepância entre o preço cadastrado e o
                valor efetivamente agregado e entregue ao comprador possam, em
                razão do nicho, natureza e peculiaridades do conteúdo, indicar
                fortes indícios de práticas abusivas e/ou irregulares;
              </li>
              <li>
                quaisquer outros produtos cuja venda, divulgação e/ou exploração
                seja expressamente proibida pelas leis vigentes no local da
                transação.
              </li>
            </ul>
            <p>
              Cabe ressaltar que, apesar de não realizar qualquer controle
              editorial e/ou revisão dos conteúdos cadastrados na PLATAFORMA
              JELLO, se limitando a análise de conformidade dos produtos frente
              aos Termos de Uso, a PLATAFORMA JELLO se resguarda ao direito de
              não aceitar e/ou excluir de sua PLATAFORMA conteúdos que atentem
              contra a legislação aplicável, melhores práticas perante os
              consumidores ou que vão de encontro a cultura da empresa, sendo
              certo que o não cadastramento de tais conteúdos não gera qualquer
              tipo de direito, dano ou prejuízo aos USUÁRIOS.
            </p>
            <h2>INGRESSOS PARA EVENTOS</h2>
            <p>
              Em se tratando de produto destinado a venda de ingressos para
              participação em evento criado pelo PRODUTOR DE CONTEÚDO
              organizador, sob sua exclusiva responsabilidade, as seguintes
              regras e condições também serão aplicadas:
            </p>
            <p>
              {" "}
              O PRODUTOR deve informar expressamente em sua página de vendas e
              demais meios de oferta e publicação as regras e de reembolso e
              arrependimento eficaz, em especial nos casos em que tal prazo seja
              de até 7 (sete) dias a contar da data compra do ingresso com a
              condição de que o pedido de reembolso seja feito pelo COMPRADOR
              com pelo menos 48 (quarenta e oito) horas de antecedência do
              horário de início do evento. Vale lembrar que o PRODUTOR DE
              CONTEÚDO é exclusivamente responsável pelo estabelecimento das
              regras de reembolso e cancelamento, sendo que eventuais
              reclamações de compradores quanto a regra estabelecida será de
              inteira responsabilidade do PRODUTOR DE CONTEÚDO.
            </p>
            <p>
              {" "}
              - Ao cadastrar produto destinado a venda de ingressos, o PRODUTO
              DE CONTEÚDO deve garantir que o evento efetivamente ocorrerá, bem
              como apresentar dados e informações completas absolutamente
              verdadeiras e exatas sobre o evento, em especial, quanto este for
              presencial apresentar informações quanto ao local, data, horários,
              escopo do evento, preços, lotes etc.
            </p>
            <p>
              {" "}
              - Em caso de cancelamento ou alteração de data, local ou escopo do
              evento, além de comunicar seus compradores, o PRODUTOR deverá
              imediatamente cientificar a JELLO de tal ocorrência, sob pena de
              bloqueio de sua(s) conta(s) e valores nela(s) existentes.
            </p>
            <p>
              {" "}
              - É responsabilidade exclusiva do PRODUTOR DE CONTEÚDO observar e
              cumprir integralmente a legislação aplicável quanto ao evento,
              incluindo, mas não se limitando, às normas de defesa do
              consumidor, legislação tributária, Lei 9.610/98 (Direitos
              Autorais) e recolhimento de contribuições ao ECAD (se aplicável),
              legislação local relativa às autorizações, licenças e alvarás
              necessários para realização do evento, além da Lei 12.933/13 e
              Decreto 8.537/2015 (política de meia-entrada) e realizar a
              classificação indicativa de faixa etária informando-a em sua
              publicidade. Ressalta-se que sempre caberá ao PRODUTOR DE CONTEÚDO
              cumprir a legislação e normas locais de sua cidade, estado, país
              e/ou região, aplicáveis ao evento, em todos os seus aspectos.
            </p>
            <p>
              {" "}
              - O PRODUTOR DE CONTEÚDO, desde já, concorda em fornecer a JELLO
              documentos, dados e informações relativos ao local do evento e
              fornecedores e demais envolvidos, permitindo que, caso entenda
              necessário, a JELLO entre em contato com estes.
            </p>
            <p>
              {" "}
              - É vedado ao PRODUTOR DE CONTEÚDO cadastrar evento com número de
              ingressos superior a efetiva capacidade do local onde o evento
              ocorrerá. Nesse sentido, o PRODUTOR DE CONTEÚDO assume possuir
              plena capacidade de cumprir todas as condições anunciadas.
            </p>
            <p>
              {" "}
              - É vedado ao PRODUTOR DE CONTEÚDO cadastrar evento com A
              PLATAFORMA JELLO poderá, a seu exclusivo critério, negar o
              cadastramento de evento na PLATAFORMA caso não sejam apresentadas,
              pelo PRODUTOR DE CONTEÚDO, informações que permitam a adequada
              identificação do evento, seus responsáveis e efetiva realização,
              bem como caso identifique atipicidades que indiquem possíveis
              irregularidades que possam impor riscos a direitos de terceiros,
              incluindo USUÁRIOS, COMPRADORES e a própria JELLO.
            </p>
            <p>
              {" "}
              Ressalta-se que, no caso de ingressos para eventos, o IVA (Imposto
              Sobre Valor Adicionado) será cobrado de acordo com as regras e
              normativos do país de realização do evento.
            </p>
            <h2>DIRETRIZES GERAIS AO USUÁRIO</h2>
            <p>
              Sem prejuízo de outras regras previstas nestes Termos de Uso, o
              USUÁRIO se compromete a não:
            </p>
            <li>
              (i) COPIAR, MODIFICAR, REPRODUZIR, DISTRIBUIR, FAZER DOWNLOAD,
              ARMAZENAR, TRANSMITIR, VENDER, REVENDER, FAZER ENGENHARIA REVERSA
              OU CRIAR PRODUTOS DERIVADOS DE QUALQUER CONTEÚDO DISPONÍVEL NA
              PLATAFORMA JELLO;
            </li>
            <li>
              (ii) violar ou tentar violar quaisquer medidas de segurança da
              PLATAFORMA JELLO, ou tirar proveito de qualquer inconsistência do
              sistema para obter vantagem para si próprio ou para terceiros, ou
              causar prejuízo à JELLO e/ou a terceiros, especialmente ao acessar
              ou tentar acessar qualquer conta de USUÁRIO da PLATAFORMA JELLO,
              ou, ainda, ao obter e divulgar a senha de USUÁRIO da PLATAFORMA
              JELLO;
            </li>
            <li>
              (iii)submeter à PLATAFORMA JELLO qualquer informação falsa,
              imprecisa ou incompleta;
            </li>
            <li>(iv) manipular preços de CONTEÚDO;</li>
            <li>
              (v) interferir nas transações realizadas entre outros USUÁRIOS;
            </li>
            <li>(vi) passar-se por outra pessoa ou organização;</li>
            <li>
              (vii) usar SPAM ou qualquer outra prática de divulgação ou
              captação de informação inapropriada, caluniosa ou ilegal para
              promover qualquer CONTEÚDO inserido na PLATAFORMA JELLO;
            </li>
            <li>
              (viii) agredir, caluniar, injuriar ou difamar outros USUÁRIOS e/ou
              terceiros;
            </li>
            <h2>DIRETRIZES GERAIS AO USUÁRIO</h2>
            <p>As ferramentas contidas na PLATAFORMA JELLO permitem:</p>
            <li>
              a) O pagamento pelos COMPRADORES pela aquisição de CONTEÚDOS
              inseridos na PLATAFORMA JELLO;
            </li>
            <li>
              b) O recebimento pelos PRODUTORES dos valores relativos à
              comercialização de seus CONTEÚDOS;
            </li>
            <p>
              Além dos meios de gestão de pagamento descritos acima a PLATAFORMA
              JELLO oferece a ferramenta denominada Parcelamento Inteligente
              cujas características e respectivas TARIFAS estão dispostas no
              capítulo “TARIFAS PELO USO DAS FERRAMENTAS CONTIDAS NA PLATAFORMA
              JELLO”
            </p>
            <p>
              No momento em que se cadastra na PLATAFORMA JELLO o PRODUTOR DE
              CONTEÚDO concorda e solicita que a JELLO promova:
            </p>
            <li>a) o recebimento do preço pago pelo COMPRADOR;</li>
            <li>
              b) a dedução da remuneração devida à JELLO pela utilização de suas
              ferramentas;
            </li>
            <li>
              c) o pagamento do valor remanescente devido ao PRODUTOR DE
              CONTEÚDO.
            </li>
            <p>
              O USUÁRIO declara-se ciente de que as ferramentas de gestão de
              pagamentos contidas na PLATAFORMA JELLO não são e nem se destinam
              a ser comparáveis aos serviços financeiros oferecidos por
              instituições bancárias ou administradoras de cartão de crédito,
              consistindo apenas em uma forma de facilitação e acompanhamento da
              realização de transações para pagamentos e recebimentos entre os
              USUÁRIOS da PLATAFORMA JELLO.
            </p>
            <p>
              Apesar de as ferramentas contidas na PLATAFORMA JELLO serem o meio
              de pagamento exclusivo para as transações realizadas com CONTEÚDOS
              nela inseridos, a JELLO poderá se utilizar de meios de pagamento
              de terceiros tais como instituições financeiras, administradoras
              de cartões de crédito e outras entidades para promover o
              recebimento e pagamento de tais transações.
            </p>
            <p>
              {" "}
              Além disso, todas as operações de comercialização serão
              verificadas pelas ferramentas de gestão de risco integradas à
              PLATAFORMA JELLO e poderão ser recusadas sempre que houver
              suspeita de fraude aos meios de pagamento ou infração à lei ou aos
              Termos de Uso.
            </p>
            <h2>
              TARIFAS PELO USO DAS FERRAMENTAS CONTIDAS NA PLATAFORMA JELLO
            </h2>
            <p>
              O uso das ferramentas tecnológicas contidas na PLATAFORMA JELLO
              pelo PRODUTOR DE CONTEÚDO está sujeito ao pagamento de uma TARIFA
              DE LICENÇA, que é configurada por um valor fixo aplicável de
              acordo com a moeda de pagamento aos envolvidos na transação,
              acrescido de uma cobrança pelo serviço de intermediação, a TARIFA
              DE INTERMEDIAÇÃO, consubstanciada no valor de 10% (dez por cento)
              ou 20% (vinte por cento), a depender do valor final da moeda de
              pagamento.
            </p>
            <p>
              ATENÇÃO! Caso o valor a ser recebido pelo PRODUTOR DE CONTEÚDO, de
              acordo com moeda de pagamento, seja igual ou menor aos valores
              descritos na tabela abaixo, a TARIFA DE INTERMEDIAÇÃO aplicada
              sobre tais transações será de 20% (vinte por cento), sem a
              cobrança da TARIFA DE LICENÇA.
            </p>
            <table>
              <tr>
                <td>BRL</td>
                <td>R$ 10,00</td>
              </tr>
              <tr>
                <td>USD</td>
                <td>US$ 5,00</td>
              </tr>
              <tr>
                <td>EUR</td>
                <td>EUR 5,00</td>
              </tr>
            </table>
            <p>
              Para transações que, após a conversão para a moeda de pagamento,
              representem valores superiores aos mencionados anteriormente, será
              aplicada TARIFA DE INTERMEDIAÇÃO de 10% (dez por cento) sobre o
              valor da transação, sendo adicionada a TARIFA DE LICENÇA,
              representada por um valor fixo, aplicada de acordo com a moeda de
              pagamento, conforme valores indicados abaixo.
            </p>
            <p>
              {" "}
              Ressalta-se que, em qualquer dos casos previstos acima, a TARIFA
              DE INTERMEDIAÇÃO será sempre aplicada sobre valor final da
              transação já convertida para respectiva moeda de pagamento.
            </p>
            <table>
              <tr>
                <td>BRL</td>
                <td>R$ 1,00</td>
              </tr>
              <tr>
                <td>USD</td>
                <td>US$ 2,50</td>
              </tr>
              <tr>
                <td>EUR</td>
                <td>EUR 2,50</td>
              </tr>
            </table>
            <h2>REGRAS PARA SAQUE DE VALORES ACUMULADOS</h2>
            <p>
              Os valores de comissões a que fizerem jus e os valores relativos
              às VENDAS realizadas pelos PRODUTORES DE CONTEÚDO poderão ter seu
              resgate solicitado pelos respectivos USUÁRIOS após o prazo de 30
              dias e desde que o valor acumulado seja suficiente para a retenção
              da TARIFA DE SAQUE e para permitir o saque de no mínimo R$ 40,00
              (vinte reais) para resgates relativos a operações realizadas em
              Reais ou de no mínimo o valor equivalente a US$ 50,00 (cinquenta
              dólares) para resgates relativos a operações realizadas em outras
              moedas.
            </p>
            <p>
              {" "}
              O valor mínimo de saque também será considerado para fins de
              encerramento de conta, ficando o USUÁRIO ciente desde já, tendo
              esse o escopo de cobrir as tarifas inerentes ao saque e transações
              realizadas.
            </p>
            <h2>DIREITOS AUTORAIS</h2>
            <p>
              As informações contidas na PLATAFORMA JELLO, bem como as marcas,
              nome empresarial, nome de domínio, programas, bancos de dados,
              redes e arquivos são titularidade da JELLO e estão protegidos
              pelas leis e tratados internacionais de propriedade intelectual,
              sendo absolutamente vedada a cópia, distribuição, uso ou
              publicação, total ou parcial, de qualquer material, parte do site
              e dos CONTEÚDOS nele ofertados sem prévia e expressa autorização.
            </p>
            <p>
              Os PRODUTORES ficam, desde já, cientes do risco de terceiros
              criarem CONTEÚDOS com a mesma “ideia” dos comercializados por meio
              da PLATAFORMA JELLO, considerando a grande visualização de acessos
              que a Internet proporciona. No entanto, declaram reconhecer que a
              JELLO não pode impedir que isso ocorra, nem tem responsabilidade
              sobre essa situação, que foge completamente de seu controle, tendo
              em vista que ideias não são protegidas pela legislação aplicável e
              que a configuração de plágio é algo muito subjetivo que pode
              precisar ser avaliado pelo Poder Judiciário.
            </p>
            <h2>MECANISMOS DE DENÚNCIAS E RESOLUÇÃO DE DISPUTAS</h2>
            <p>
              Considerando que a PLATAFORMA JELLO não é a criadora do CONTEÚDO
              produzido e publicado pelo PRODUTOR e que não há controle
              editorial prévio dos CONTEÚDOS, a JELLO, nos termos da legislação
              aplicável, não é responsável pelos CONTEÚDOS divulgados.
            </p>
            <p>
              Com isso, a JELLO oferece mecanismos eficientes para que USUÁRIOS
              que entendam ter tido algum direito seu violado possam fazer
              denúncias e busquem resolver suas disputas, conforme abaixo
              indicado.]
            </p>
            <h2>DISPUTAS A RESPEITO DA QUALIDADE DO PRODUTO</h2>
            <p>
              A JELLO recomenda que toda transação seja realizada com cautela e
              bom senso. Caso o COMPRADOR decida realizar uma transação e se
              sinta lesado em relação à qualidade do CONTEÚDO adquirido, exceto
              o serviço de assinatura, o COMPRADOR poderá enviar, dentro do
              prazo de garantia estipulado pelo PRODUTOR (o qual pode variar
              entre 15 ou 45 dias) uma reclamação através do link
              <a href="#"> JELLO.com/reembolso.</a>
            </p>
            <p>
              Uma vez enviada a reclamação pelo link acima indicado e dentro do
              prazo de garantia do CONTEÚDO, tendo em vista que o PRODUTOR
              continua sendo responsável pelos aspectos técnicos e de qualidade
              do CONTEÚDO gerado, a JELLO comunicará o PRODUTOR em questão e
              concederá o prazo de até 10 (dez) dias corridos para que ele
              responda a reclamação com uma justificativa ou tentativa de sanar
              o problema. Caso o PRODUTOR não entre em contato neste prazo, a
              solicitação de reembolso poderá ser executada de forma automática,
              além de poderem ser fornecidos dados do PRODUTOR ao COMPRADOR,
              conforme Política de Privacidade.
            </p>
            <p>
              {" "}
              Ocorrendo uma disputa entre COMPRADOR e PRODUTOR que não puder ser
              resolvida pelos meios aqui estabelecidos, a JELLO poderá promover
              a consignação judicial dos valores envolvidos.
            </p>
            <h2>
              DISPUTAS A RESPEITO DE OFENSAS AOS DIREITOS DA PERSONALIDADE:
              CALÚNIA, INJÚRIA OU DIFAMAÇÃO
            </h2>
            <p>
              Caso alguém entenda que algum CONTEÚDO viole seus direitos de
              personalidade, tais como, a honra, a imagem, a voz, o nome, a
              intimidade, poderá enviar uma reclamação preenchendo o Formulário
              disponibilizado no link{" "}
              <a href="#"> http://ombudsman.jello.com</a>
            </p>
            <p>
              Uma vez preenchido o Formulário
              <a href=""> https://jello.com/resolution-center </a>, a JELLO,
              caso não se trate de uma hipótese que autorize/justifique a
              imediata remoção do CONTEÚDO, de acordo com estes Termos de Uso,
              comunicará ao PRODUTOR e concederá o prazo de até 10 dias para que
              ele responda a reclamação com uma justificativa.
            </p>
            <p>
              Caso o PRODUTOR não se manifeste no prazo, a JELLO poderá, mas não
              estará obrigada a remover o CONTEÚDO denunciado, dando ciência ao
              Notificante e comunicando a medida ao PRODUTOR.
            </p>
            <p>
              {" "}
              Caso o PRODUTOR reconheça a ilicitude do CONTEÚDO, a JELLO
              removerá o CONTEÚDO, dando ciência ao Notificante.
            </p>
            <p>
              {" "}
              Caso o PRODUTOR manifeste-se sustentando a licitude do CONTEÚDO,
              as partes serão cientificadas que foi instaurada uma disputa cuja
              decisão está além das prerrogativas da JELLO, e que a remoção do
              CONTEÚDO só será efetivada mediante ordem judicial nesse sentido.
            </p>
            <h2>
              DISPUTAS A RESPEITO DE VIOLAÇÃO A DIREITOS DE PROPRIEDADE
              INTELECTUAL
            </h2>
            <p>
              Caso alguém entenda que um CONTEÚDO inserido na PLATAFORMA JELLO
              viola seus direitos de propriedade industrial (marca, patente,
              desenhos industriais) ou seus direitos autorais, poderá notificar
              a JELLO, preenchendo o Formulário
            </p>
            <a href=""> https://jello.com/resolution-center </a>, indicando a
            URL em que o CONTEÚDO em questão se encontra, bem como anexando ao
            formulário a comprovação de ser o titular do direito violado ou seu
            representante legal, via documentos juridicamente adequados para
            comprovar sua titularidade sobre o CONTEÚDO.
            <p>
              Ao iniciar o procedimento "disputas a respeito de violação a
              direitos de propriedade intelectual", todos os envolvidos
              concordam automaticamente com os termos e condições expressos na
              Política de Notificações sobre Violações de Direitos Intelectuais
              da PLATAFORMA JELLO
              <a href=""> https://www.jello.com/politica-de-notificacoes/ </a>
            </p>
            <p>
              Notificar a PLATAFORMA JELLO a respeito de uma violação de
              direitos é um assunto sério com consequências jurídicas. Em caso
              de dúvida sobre a infração, recomenda-se buscar orientação
              jurídica. Antes de enviar uma Notificação, o USUÁRIO deve sempre
              lembrar que existem exceções e limitações aos direitos de cada um.
              O envio de denúncias enganosas sobre infrações e pode ser punível
              por lei.
            </p>
            <h2>
              DISPUTAS A RESPEITO DE DIVULGAÇÃO, SEM AUTORIZAÇÃO DE SEUS
              PARTICIPANTES, DE IMAGENS, VÍDEOS OU OUTROS MATERIAIS CONTENDO
              CENAS DE NUDEZ OU DE ATOS SEXUAIS DE CARÁTER PRIVADO
            </h2>
            <p>
              Caso alguém tome conhecimento de que um CONTEÚDO inserido na
              PLATAFAORMA JELLO contenha cenas de nudez ou de atos sexuais de
              caráter privado a seu respeito, poderá notificar a JELLO, por meio
              do Formulário{" "}
              <a href=""> https://jello.com/resolution-center, </a> indicando a
              URL em que o CONTEÚDO em questão se encontra, bem como anexando ao
              formulário a comprovação de ser o participante da cena ou seu
              representante legal.
            </p>
            <p>
              Uma vez preenchido o Formulário
              <a href=""> https://jello.com/resolution-center </a> , a JELLO
              verificará os requisitos de validade da notificação, conforme
              indicado acima, e constatada a existência de cenas de nudez ou de
              atos sexuais de caráter privado, providenciará em até 10 dias a
              remoção do CONTEÚDO, dando ciência ao Notificante e informando ao
              PRODUTOR responsável a sanção a ele aplicável, que poderá ser até
              o cancelamento definitivo do seu cadastro, a critério exclusivo da
              JELLO.
            </p>
            <h2>RELAÇÃO ENTRE USUÁRIOS E A JELLO</h2>
            <li>
              1. A JELLO é responsável pela guarda dos dados de cadastro dos
              USUÁRIOS, bem como pelos dados relativos às transações realizadas
              com as ferramentas tecnológicas contidas na PLATAFORMA JELLO nos
              termos da legislação aplicável;
            </li>
            <li>
              2. Os USUÁRIOS serão única e exclusivamente responsáveis por
              manter todos os dados e informações cadastrais devidamente
              atualizados, revendo e atualizando seus dados, no mínimo, a cada
              06 meses, responsabilizando pela veracidade, legalidade e
              adequação de todos os documentos e informações inseridos no
              sistema durante o cadastramento na PLATAFORMA JELLO. Caso sejam
              identificadas inconsistências ou desatualização dos dados e
              informações cadastrais, a JELLO poderá proceder com a imediata
              suspensão da conta do USUÁRIO até que esta seja regularizada;
            </li>
            <li>
              3. A JELLO irá trabalhar junto com o comprador para resolver
              quaisquer problemas originados pela venda, a JELLO será totalmente
              responsável por quaisquer disputas abertas pelos compradores, como
              chargebacks, reclamações diversas, cancelamento e estornos, mas
              reserva o direito de deduzir esses valores do pagamento dos
              produtores;
            </li>
            <li>
              4. Considerando que o PRODUTOR continua sendo responsável pelos
              aspectos técnicos e de qualidade do CONTEÚDO gerado, a JELLO
              comunicará o PRODUTOR em questão e concederá o prazo de até 10
              (dez) dias corridos para que este responda à reclamações relativas
              ao CONTEÙDO ofertado na PLATAFORMA JELLO, com uma justificativa ou
              tentativa de sanar o problema. Caso o PRODUTOR não entre em
              contato com a JELLO nesse prazo, eventuais solicitações de
              reembolso poderão ser executadas de forma automática, observadas
              as disposições deste Termo de Uso;
            </li>
            <li>
              5. A JELLO empenhará todos os esforços para manter a continuidade
              e a disponibilidade das ferramentas tecnológicas contidas na
              PLATAFORMA JELLO. Entretanto, por razões técnicas e que fugirem ao
              seu controle, a PLATAFORMA JELLO poderá ficar indisponível por
              algum período;
            </li>
            <li>
              6. A JELLO não se responsabiliza (i) por qualquer dano, prejuízo
              ou perda no equipamento do USUÁRIO causada por falhas no sistema,
              no servidor ou na internet decorrentes de condutas de terceiros;
              (ii) por danos decorrentes de ataques de vírus ao equipamento do
              USUÁRIO em decorrência do acesso, utilização ou navegação na
              PLATAFORMA JELLO ou como consequência da transferência de dados,
              arquivos, imagens, textos ou áudio.
            </li>
            <li>
              7. Os USUÁRIOS isentam a JELLO de responsabilidade por danos
              suportados em virtude de prejuízos resultantes de dificuldades
              técnicas ou falhas nos sistemas ou na internet.
            </li>
            <li>
              8. A JELLO não se responsabilizará por erros na divulgação de
              CONTEÚDO com a utilização das ferramentas contidas na PLATAFORMA
              JELLO, que possam dificultar a venda de tal CONTEÚDO.
            </li>
            <li>
              9. As tarifas e os meios de pagamento poderão ser alterados
              conforme estratégia da JELLO, a seu exclusivo critério, sem
              necessidade de notificação prévia aos USUÁRIOS;
            </li>
            <li>
              10. As tarifas e os meios de pagamento poderão ser alterados
              conforme estratégia da JELLO, a seu exclusivo critério, sem
              necessidade de notificação prévia aos USUÁRIOS;
            </li>
            <li>
              11. CONTEÚDOS incluídos na PLATAFORMA JELLO apenas permanecerão
              disponibilizados para divulgação se estiverem de acordo com estes
              Termos de Uso. A JELLO reserva-se o direito de remover qualquer
              CONTEÚDO que não esteja de acordo suas normas e políticas.
            </li>
            <li>
              12. A JELLO não é responsável pelo efetivo cumprimento das
              obrigações assumidas pelos USUÁRIOS.
            </li>
            <li>
              13. A JELLO não é responsável por eventuais contestações,
              chargebacks ou bloqueios de compra/pagamento de qualquer natureza
              por parte do COMPRADOR e poderá deduzir a qualquer tempo do saldo
              do USUÁRIO valores referentes a transações reembolsadas ou
              bloqueadas, ou transações contestadas (chargeback);
            </li>
            <li>
              14. A JELLO NÃO SE RESPONSABILIZA PELO USO INDEVIDO DA PLATAFORMA
              POR TERCEIROS, sejam PRODUTORES ou COMPRADORES, seja a que título
              for, especialmente em caso de divulgação em outras plataformas de
              CONTEÚDOS previamente adquiridos;
            </li>
            <li>
              15. Os USUÁRIOS reconhecem que o site da JELLO pode conter links
              para outros sites da rede, o que não significa que esses sites
              sejam de propriedade ou operados pela JELLO.
            </li>
            <li>
              16. A JELLO não se responsabiliza pelos materiais, informações ou
              conteúdo publicados em sites de terceiros, tampouco pela
              disponibilidade destes sites, competindo ao USUÁRIO usar seu
              próprio discernimento, precaução e senso comum ao acessar sites de
              terceiros, devendo conferir as políticas de privacidade e os
              termos de uso aplicáveis.
            </li>
            <li>
              17. Todas as informações fornecidas pelo USUÁRIO à JELLO são
              armazenadas e tratadas na forma indicada na Política de
              Privacidade.
            </li>
            <li>
              18. Considerando a proposta de uso da PLATAFORMA JELLO como uma
              ferramenta para promover e anunciar CONTEÚDO, os USUÁRIOS estão
              cientes e consentem que toda a informação relevante será fornecida
              para habilitar PRODUTORES a venderem seus CONTEÚDOS.
            </li>
            <li>
              19. A JELLO tomará todas as medidas possíveis para manter a
              confidencialidade e a segurança das informações dos USUÁRIOS, mas
              não poderá ser considerada responsável por perdas ou danos
              derivados da violação de tais medidas por terceiros que usarem
              redes públicas ou a Internet com o propósito de subverter o
              sistema de segurança e/ou ter acesso a informações confidenciais
              de USUÁRIOS.
            </li>
            <li>
              20. Os USUÁRIOS serão integralmente responsáveis por cumprir as
              leis e normativos aplicáveis relativos a proteção de dados
              pessoais, em especial o Regulamento Geral de Proteção de Dados da
              União Europeia (GDPR) a Lei Geral de Proteção de Dados Lei nº
              13.709/18, assumindo a obrigação de obter o consentimento expresso
              e inequívoco de seus usuários relativamente a coleta,
              armazenamento, tratamento e processamento de dados pessoais, nos
              termos da legislação aplicável. Assim, a JELLO não será
              responsabilizada por eventual falha de seus USUÁRIOS em cumprir
              tais normas, se reservando ao direito de suspender e/ou cancelar o
              contrato com USUÁRIOS que não estejam em conformidade com a
              legislação de proteção de dados aplicável, bem como reter o saldo
              de valores a receber de tais USUÁRIOS como ressarcimento parcial
              dos danos que tiver experimentado, ou entregue a terceiros
              prejudicados, mediante ordem judicial.
            </li>
            <p>
              Os PRODUTORES concordam que a JELLO poderá, a seu exclusivo
              critério, realizar o bloqueio preventivo da(s) conta(s) e
              respectivos valores nela existentes, sempre que tomar conhecimento
              de qualquer indício de ato ou conduta que possa caracterizar uma
              prática ilegal, especialmente relacionados à prática de lavagem de
              dinheiro, financiamento ao terrorismo e crimes, violação de
              direitos de imagem, propriedade intelectual e industrial, violação
              aos Termos de Uso e Política de Privacidade da PLATAFORMA JELLO ou
              que represente infração à direitos de USUÁRIOS ou terceiros.
            </p>
            <p>
              Além disso, PRODUTORES e AFILIADOS concordam que a JELLO também
              poderá realizar, a seu exclusivo critério, o bloqueio preventivo
              da(s) conta(s) e respectivos valores nela existentes, caso sejam
              identificados parâmetros e índices atípicos de reembolsos,
              chargebacks e demais índices operacionais que são objeto de
              análise pelas equipes de Riscos, que indiquem a necessidade de
              efetivação do bloqueio a fim de resguardar direitos de USUÁRIOS,
              COMPRADORES e terceiros.
            </p>
            <p>
              Considerando que a JELLO não é responsável pelo conteúdo gerado
              pelos PRODUTORES em sua PLATAFORMA, o bloqueio preventivo será
              mantido, em regra, até que (i) constate-se que o ato ou conduta
              suspeita não caracterizou prática ilegal, com base em critérios e
              avaliação exclusiva da JELLO; (ii) as partes envolvidas formalizem
              adequadamente a resolução amigável da questão; ou (iii) por ordem
              judicial ou determinação de autoridades administrativas que
              contenha identificação clara e específica do conteúdo ou ato
              apontado como infringente, permitindo sua adequada identificação e
              adoção das medidas requeridas. Caso reste confirmado a natureza
              ilegal da conduta, o bloqueio preventivo será convertido em
              definitivo, sendo que os valores eventualmente existentes na conta
              apenas serão liberados a quem de direito e mediante ordem
              judicial.
            </p>
            <p>
              Ressalta-se que o bloqueio preventivo citado acima não caracteriza
              aplicação de penalidade aos USUÁRIOS, por se tratar de uma medida
              cautelar adotada com o único objetivo de buscar evitar a
              ocorrência de danos, prejuízos ou infrações à direitos dos
              USUÁRIOS e terceiros.
            </p>
            <p>
              Por fim, os USUÁRIOS reconhecem e autorizam que a JELLO reporte
              aos órgãos de controle e fiscalização responsáveis os atos,
              condutas e práticas que contenham indícios de irregularidades e/ou
              ilegalidades, sem que isso gere qualquer tipo de prejuízo ou dano
              moral e patrimonial ao USUÁRIO reportado.
            </p>
            <h2>PENALIDADES</h2>
            <p>
              Qualquer conduta contrária ao previsto nestes Termos de Uso poderá
              ser punida:
            </p>
            <li>1. com a remoção de determinado CONTEÚDO;</li>
            <li>2. com a suspensão imediata do acesso à conta do USUÁRIO;</li>
            <li>3. com o bloqueio da conta do USUÁRIO da PLATAFORMA JELLO;</li>
            <p>
              Tudo a critério exclusivo da JELLO, sem prejuízo de poderem ser
              tomadas as ações legais cabíveis pela própria JELLO ou por
              terceiros.
            </p>
            <p>
              Nos casos de remoção de CONTEÚDO, transações relacionadas ao
              CONTEÚDO removido realizadas anteriormente à remoção poderão ter
              seus respectivos valores bloqueados. A partir da remoção do
              CONTEÚDO de uma determinada conta, nenhuma nova transação
              referente a tal CONTEÚDO será processada pelas ferramentas de
              pagamento da JELLO para aquela conta.
            </p>
            <p>
              Nos casos de suspensão do acesso à conta do USUÁRIO, transações
              relacionadas aos CONTEÚDOS cadastrados por aquela conta poderão
              continuar a ser realizadas, porém, o usuário não terá acesso a
              qualquer funcionalidade da conta, exemplo: nenhuma alteração
              poderá ser realizada nos dados cadastrais, dados bancários ou nos
              conteúdos cadastrados, tampouco poderá ser feito qualquer resgate
              de valores acumulados na respectiva conta.
            </p>
            <p>
              Nos casos de bloqueio à conta do cadastro do USUÁRIO, todos os
              anúncios ativos e/ou ofertas realizadas serão automaticamente
              cancelados, não assistindo ao USUÁRIO, por essa razão, qualquer
              direito de indenização ou ressarcimento.
            </p>
            <p>
              A JELLO, os USUÁRIOS ou quaisquer terceiros prejudicados poderão
              tomar as ações legais cabíveis em decorrência dos delitos ou
              contravenções de que sejam vítimas, ou ainda buscar o
              ressarcimento pelos prejuízos civis por descumprimento dos Termos
              de Uso, sem que isso acarrete qualquer direito de indenização por
              parte da JELLO ao USUÁRIO acionado.
            </p>
            <h2>ISENÇÃO DE RESPONSABILIDADE DA PLATAFORMA</h2>
            <p>
              Nos casos em que um ou mais USUÁRIOS ou algum terceiro inicie
              qualquer tipo de disputa, reclamação ou ação legal contra outro ou
              outros USUÁRIOS, todos os USUÁRIOS envolvidos nas disputas,
              reclamações ou ações eximem de toda responsabilidade a JELLO e a
              seus diretores, gerentes, empregados, agentes, operários,
              representantes e procuradores, inclusive no que tange os custos e
              honorários incorridos pelos USUÁRIOS para promover as disputas,
              reclamações ou ações.
            </p>
            <p>
              Em termos jurídicos, até onde permitido por lei, a PLATAFORMA
              JELLO e empresas do grupo, não é responsável por danos e prejuízos
              financeiros, materiais e morais, diretos ou indiretos, inclusive
              lucros cessantes, bem como danos físicos eventualmente sofridos
              pelos USUÁRIOS.
            </p>
            <h2>INDENIZAÇÃO</h2>
            <p>
              O USUÁRIO concorda em ressarcir a JELLO, seus empregados, sócios,
              empresas afiliadas ou subsidiárias quaisquer despesas incorridas
              com ações judiciais oriundas de ações ou omissões do USUÁRIO que
              violem os presentes Termos de Uso ou as Políticas da JELLO,
              incluindo honorários advocatícios.
            </p>
            <h2>RESCISÃO</h2>
            <p>
              A JELLO poderá encerrar, a seu exclusivo critério, quaisquer
              serviços oferecidos e remover quaisquer CONTEÚDOS nele publicados.
              A JELLO poderá também restringir o acesso de USUÁRIOS a qualquer
              parte ou a todos os serviços oferecidos pela JELLO a qualquer
              momento, com ou sem justa causa ou notificação prévia, e por
              qualquer razão ou motivo.
            </p>
            <p>
              O PRODUTOR poderá deixar de usar a PLATAFORMA JELLO a qualquer
              tempo, devendo para tanto remover todo o seu CONTEÚDO, bem como
              responsabilizar-se pela entrega de qualquer CONTEÚDO que tenha
              sido comprado através de links anteriormente divulgados. Além
              disso, o PRODUTOR deve realizar seu descadastramento como USUÁRIO
              da JELLO. O PRODUTOR, entretanto, continuará responsável pelo
              CONTEÚDO perante o COMPRADOR, nos termos da legislação aplicável.
            </p>
            <p>
              Caso o USUÁRIO deseje terminar sua conta, poderá apenas cessar seu
              acesso e uso dos serviços prestados pela JELLO, que não será
              responsável, em qualquer hipótese, por manter ou devolver o
              CONTEÚDO publicado, a conta, identificação ou senha do USUÁRIO.
            </p>
            <p>
              Em qualquer caso, inclusive de rescisão, a JELLO poderá, a seu
              exclusivo critério, reter total ou parcialmente o saldo existente
              na conta do USUÁRIO, caso entenda que tal medida é necessária para
              garantir o pagamento, ressarcimento e reembolso devidos em razão
              de qualquer responsabilidade, obrigações ou dívida que o USUÁRIO
              possa ter incorrido com a JELLO e/ou terceiros.
            </p>
            <p>
              O percentual de retenção será avaliado de forma minuciosa, de
              acordo com o perfil, histórico de ocorrências, transações dos
              USUÁRIOS e sempre será estipulado no montante necessário a
              garantir o cumprimento das obrigações pretéritas e futuras
              eventualmente assumidas pelos USUÁRIOS perante a JELLO e
              terceiros.
            </p>
            <h2>ALCANCE DOS SERVIÇOS</h2>
            <p>
              Estes Termos não geram nenhum contrato de sociedade, de mandato,
              parceria, franquia ou relação de trabalho entre a JELLO e o
              USUÁRIO.
            </p>
            <h2>MODIFICAÇÕES NOS TERMOS DE USO</h2>
            <p>
              Quando houver alteração nos Termos de Uso e nas Políticas da
              JELLO, o USUÁRIO será comunicado através de e-mail ou de
              publicação em área de destaque na PLATAFORMA JELLO.
            </p>
            <p>
              Ressalta-se que o presente Termos de Uso constitui o acordo entre
              as partes a que se refere. Nesse sentido, este instrumento
              prevalece sobre todas as propostas, entendimentos anteriores e
              todos os acordos, orais e escritos, eventualmente existentes entre
              as partes. Assim, a JELLO reserva-se o direito de alterar os
              Termos de Uso a qualquer momento. Após a comunicação referente as
              alterações dos Termos de Uso, conforme procedimentos mencionados
              acima, caso o USUÁRIO de continuidade ao uso da PLATAFORMA JELLO
              significará e será considerada como seu consentimento e aceitação
              irrevogável e irretratável. Dessa forma, o USUÁRIO concorda que
              tem o encargo de rever periodicamente o site{" "}
              <a href=""> (www.jello.com) </a> para se informar sobre quaisquer
              alterações.
            </p>
            <h2>LEI APLICÁVEL</h2>
            <p>
              Estes Termos de Uso apresentam as normas aplicáveis ao uso da
              PLATAFORMA JELLO disponível nos domínios jello.com, jello.com.br,
              sendo certo que a JELLO, empresa brasileira, sediada em Belo
              Horizonte, Minas Gerais, é a responsável pela disponibilização de
              ferramentas tecnológicas a serem utilizadas em qualquer país do
              mundo, aplicando-se, portanto, a legislação brasileira e regras
              comunitárias compatíveis. Para transações realizadas no Brasil, em
              reais, e exclusivamente entre usuários que se declarem
              brasileiros, a responsável pela disponibilização das ferramentas
              será a JELLO TECNOLOGIA, SERVIÇOS E PAGAMENTOS LTDA, pessoa
              jurídica de direito privado, inscrita no CNPJ sob o nº
              XXX.XXX.XXX/XXXX-XX, ENDEREÇO., razão pela qual serão aplicáveis
              as leis brasileiras no tocante a essas operações, sendo que
              qualquer ação judicial relativa à sua interpretação ou aplicação
              deverá ser processada e julgada pelo Poder Judiciário Brasileiro.
            </p>
            <h2>FORO</h2>
            <p>
              Para operações realizadas a partir das ferramentas
              disponibilizadas pela JELLO fica eleito o foro da Comarca de Belo
              Horizonte/MG como o único competente para dirimir eventuais
              controvérsias referentes à interpretação e ao cumprimento destes
              Termos de Uso e Política de Privacidade, independentemente de
              outro, por mais privilegiado que seja.
            </p>
            <h2>DÚVIDAS</h2>
            <p>
              Caso tenha qualquer dúvida em relação ao presente documento, o
              USUÁRIO poderá entrar em contato através do suporte@jello.com,
              utilizando no título da mensagem a frase: “Termos de Uso”.
            </p>
            <p className="textrodape">
              2021-2023 © Todos os direitos Tecnologia.
            </p>
          </div>
        </div>
      </TextBox>
      <Checkbox>
        <label className="container">
          <p>Li e aceito os termos descritos</p>
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
      </Checkbox>

      <JelloInfo />
    </Container>
  );
};

export default TermsJello;
