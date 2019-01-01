var app = angular.module('phma', []);

app.controller('main', function ($scope) {

    const locale = {
        en: {
            menu: {
                first: "about",
                second: "experience",
                third: "education",
                fourth: "skills",
                fifth: "awards & certifications"
            },
            section: {
                about: {
                    first: "I've worked exclusively as a programmer and systems analyst since 2014. All my efforts are directed towards the development, success and excellence of my clients.",
                    second: "I earned my associate degree in Technology and Analysis and Development of Systems and my bachelor’s degree in Systems Information at Mackenzie Presbyterian University in São Paulo, Brazil. Now I'm taking my MSI at California Trinity University in Los Angeles, USA.",
                    third: "Throughout my life, I've been the responsible of organizing various activities such as developing applications, websites and games. My passion and purpose is programming.",
                    fourth: "Working at one of the world's largest technology companies, Microsoft , taught me best practices in software development, as well organization, planning, and professionalism."
                },
                exp: {
                    microsoft: {
                        title: "CONSULTANT INTERNSHIP",
                        date: "Sep 2015 – Dez 2016",
                        rio: {
                            text: "Contributed to get system requirement with the Analysis team, went to non-face-to-face meetings with the customer, and solved the customer's issues. Developed an application using Visual Studio as IDE, HTML5, CSS, Bootstrap, jQuery, JavaScript and C#.",
                            title: "Rio 2016 Olypmic and Paralympic Games"
                        },
                        iot: {
                            text: "Managed a project with the development of a prototype of an intelligent house, where the rooms of the house have sensors (such as luminosity, for example), and are controlled through a universal application (Mobile, Tablet, Desktop, Xbox). All data is stored on the Microsoft Azure cloud computing platform and replicated to a Stream Analytics where it sends the data to a Power BI which improved analysis of data. From this we can do various types of analysis, such as how much energy is consumed, and so on.",
                            title: "IoT Smarthouse"
                        }
                        ,
                        ack: {
                            text: "Developed an Ack Tool for the Compliance team, under the architecture of SharePoint, where they can collect signatures of the data Managers and Leads of the area. We use SharePoint services together with InfoPath to create forms.",
                            title: "Ack Tool"
                        }
                    },
                    brq: {
                        title: "PROGRAMMER INTERNSHIP",
                        date: "May 2014 – May 2015",
                        itau: {
                            text: "Contributed with the upgrade of the application server that was a WebLogic 8 to a WebLogic 11. Worked with the documentation of the same, which used Vb.Net as its programming language, all types of diagram were developed.",
                            title: "Itaú Bank"
                        },
                        cielo: {
                            text: "Developed a system that allows Cielo users to make their own queries. This software allows sellers through this application to consult their sales, amounts receivable, their outstanding finances, etc. all in one place. We used Java EE development, Spring MVC, JSF, Primefaces, Thymeleaf, Bootstrap, WebLogic, WebSphere and IBM Portal.",
                            title: "Cielo"
                        }
                    }
                },
                edu: {
                    ass: {
                        title: "ASSOCIATE'S DEGREE IN TECHNOLOGY IN ANALYSIS AND DEVELOPMENT OF SYSTEMS",
                        inst: "Universidade Presbiteriana Mackenzie",
                        date: "January 2013 - July 2015                    "
                    },
                    bach: {
                        title: "BACHELOR'S DEGREE IN SYSTEMS INFORMATION",
                        inst: "Universidade Presbiteriana Mackenzie",
                        date: "January 2013 - Dez 2016"
                    },
                    mba: {
                        title: "MASTERS IN SYSTEMS INFORMATION",
                        inst: "California Trinity University",
                        date: "Spring 2018 - Present"
                    }
                },
                aw:{
                    text: "Award on the research paper "
                }
            }
        },
        pt: {
            menu: {
                first: "sobre",
                second: "experiência",
                third: "educação",
                fourth: "habilidades",
                fifth: "prêmios & certificações"
            },
            section: {
                about: {
                    first: "Venho trabalhando exclusivamente como programador e analista de sistemas desde 2014. Todos os meus esforcos são direcionados ao desenvolvimento, sucesso e excelência na entrega do serviço aos meus clientes.",
                    second: "Eu obtive meu diploma de Tecnólogo em Análise e Desenvolvimento de Sistemas e meu bacharelado em Sistemas da Informação pela Universidade Presbiteriana Mackenzie. Atualmente estou realizando meu mestrado na California Trinity University localizada em Los Angeles, USA.",
                    third: "Ao longo da minha jornada, fui responsável por organizar varias atividades tais como desenvolvimento de aplicações, websites e jogos. Eu amo programar.",
                    fourth: "Trabalhei em uma das maiores empresas de tecnologia do mundo inteiro, Microsoft, onde aprendi as melhores praticas no desenvolvimento de software, organização e professionalismo."
                },
                exp: {
                    microsoft: {
                        title: "Estágio em Consultoria",
                        date: "Setembro 2015 – Dezembro 2016",
                        rio: {
                            text: "Contribui para obter os requerimentos do projeto junto ao time de Análise, compareci a reuniões não presenciais com o cliente e contribui encontrando maneiras para resolver seus problemas. Desenvolvemos a aplicação utilizando a IDE do Visual Studio, HTML5, CSS, Bootstrap, jQuery, JavaScript e C#.",
                            title: "Jogos Olímpicos e Paralímpicos Rio 2016"
                        },
                        iot: {
                            text: "Gerenciei um projeto onde desenvolvemos um protótipo de uma casa inteligente, onde os quartos da casa continham sensores (como o de iluminosidade, por exemplo) e eles eram controlados por uma aplicação universal (Mobile, Tablet, Desktop, Xbox). Todos os dados foram armazenados no Microsoft Azure e replicados para um Stream Analytics onde o mesmo enviava dados para o Power BI que ajudava a ter uma visão maior dos dados. A partir disso tinhamos varios tipo de análise, como o quanto de energia era consumida, e assim por diante.",
                            title: "IoT Smarthouse"
                        },
                        ack: {
                            text: "Contribui no desenvolvimento de uma Ack Tool para o time de Compliance, utilizando a arquitetura do SharePoitn, onde eles conseguem coletar assinaturas dos Gerentes e Leads da area. Nós utilizamos os servicos do SharePoint junto com o InfoPath para criar os formularios.",
                            title: "Ack Tool"
                        }
                    },
                    brq: {
                        title: "Estágio em Programação",
                        date: "Maio 2014 – Maio 2015",
                        itau: {
                            text: "Contribui para a atualização de uma aplicação que estava utilizando servidor WebLogic 8 para um WebLogic 11. Trabalhei com a documentação do sistema, onde era utilizado a linguagem de programação Vb.Net e todos os tipos de diagrama foram criados.",
                            title: "Banco Itaú"
                        },
                        cielo: {
                            text: "Desenvolvemos um sistema que ajuda os clientes Cielo a criar suas próprias queries. Esse software permite que os vendedores consultem suas vendas, o quanto tem a receber, e muitas outras informações em um só lugar. Nós utilizamos Java EE, Spring MVC, JSF, Primefaces, Thymeleaf, Bootstrap, WebLogic, WebSphere and IBM Portal. ",
                            title: "Cielo"
                        }
                    }
                },
                edu: {
                    ass: {
                        title: "Tecnologia em Análise e Desenvolvimento de Sistemas",
                        inst: "Universidade Presbiteriana Mackenzie",
                        date: "Janeiro 2013 - Julho 2015"
                    },
                    bach: {
                        title: "Sistemas da Informação",
                        inst: "Universidade Presbiteriana Mackenzie",
                        date: "Janeiro 2013 - Dezembro 2016"
                    },
                    mba: {
                        title: "Mestrado em Sistemas da Informação",
                        inst: "California Trinity University",
                        date: "January 2017 - Cursando"
                    }
                },
                aw:{
                    text: "Prêmio pela pesquisa desenvolvida "
                }
            }
        }
    }

    $scope.currentYear = new Date();

    $scope.lang = 'br';

    $scope.ChangeLang = function (lang) {
        switch (lang) {
            case 'br':
                $scope.lang = 'pt-BR';
                $scope.site = locale.pt;
                break;
            case 'en':
                $scope.lang = 'en-US';
                $scope.site = locale.en;
                break;
        }
    }

    $scope.ChangeLang($scope.lang);

});