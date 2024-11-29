const pt = {
    greeting: "Olá, mundo!",
    my_position: "Engenheiro de Software",
    hello_alessandro: "Olá, eu sou Alessandro",
    sections: {
        about: {
            title: "Sobre",
            short_text:
                "Sou um engenheiro de software entusiasmado em usar a tecnologia para capacitar o mundo. Ao longo dos anos, adquiri experiência com uma ampla gama de tecnologias, de aplicativos web full-stack a sistemas de baixo nível. Tenho um olho para eficiência, organização e detalhes técnicos, e adoro trabalhar dentro e entre equipes para projetar e construir coisas que promovam o belo mundo da tecnologia.",
            qualities: {
                efficient: {
                    title: "Eficiente",
                    description:
                    "Eu sempre trago energia, produtividade, organização e agilidade para a mesa como um trabalhador eficaz e um aprendiz rápido.",
                },
                attentive: {
                    title: "Atencioso",
                    description:
                    "Para mim, cada detalhe importa. Adoro formular o panorama geral tanto quanto medir os pequenos detalhes e casos extremos.",
                },
                versatile: {
                    title: "Versátil",
                    description:
                    "Trabalho melhor quando sou desafiado. Embora prospere na organização, sempre posso me adaptar e aprender coisas novas de forma rápida.",
                },
                consistent: {
                    title: "Consistente",
                    description:
                    "Sempre busco manter altos e confiáveis padrões de qualidade. Desde interfaces até internals, a excelência é uma prioridade importante.",
                },
                collaborative: {
                    title: "Colaborativo",
                    description:
                    "Adoro trabalhar com pessoas em direção a uma visão compartilhada, comunicando ideias entre equipes, e incentivando e desafiando os outros.",
                },
                proactive: {
                    title: "Proativo",
                    description: "Tomo a iniciativa de antecipar necessidades e resolver problemas antes que eles surjam, estando sempre um passo à frente para garantir o sucesso."
                }
            },
        },
        skills: {
            filter: "Filtrar:",
            title: "Habilidades",
            short_text:
                "Trabalhei com várias áreas diferentes de tecnologia, mas estou sempre procurando explorar coisas novas e usar a tecnologia de novas maneiras. <br/><br/>Tenho experiência no desenvolvimento backend, criação de APIs, otimização de performance de aplicações e habilidades full stack.",
            categories: {
                none: "Nenhum",
                programming: "Programação",
                scripting: "Script",
                web: "Web",
                server: "Servidor",
                database: "Banco de Dados",
                devops: "DevOps",
                framework: "Framework",
                testing: "Testes",
                other: "Outros"
            }
        },
        experience: {
            title: "Experiência",
            short_text: "Sua trajetória profissional",
            work_mode: {
                remote: "Remoto",
                in_person: "Presencial",
            },
            manusis: {
                text:' Manusis4 é uma empresa especializada em soluções de gestão de manutenção e ativos, fornecendo ferramentas para otimização de processos, manutenção preventiva, controle de inventário e integração com sistemas ERP e IoT, visando aumentar a eficiência e reduzir custos operacionais.',
                rds_squad: {
                    name: "RDS (Time de Pesquisa e Desenvolvimento)",
                    position: "Desenvolvedor Pleno Full Stack",
                    roles: {
                        0: "Objetivo de migrar a aplicação para tecnologias mais recentes.",
                        1: "Implementação de soluções mais eficientes.",
                        2: "Desenvolvimento de endpoints otimizados.",
                        3: "Criação de componentes reutilizáveis no front-end.",
                        4: "Melhorias contínuas na arquitetura, buscando abandonar a arquitetura engessada do monolito.",
                    },
                },
                prs_squad: {
                    name: "PRS (Time de Projetos)",
                    position: "Desenvolvedor Pleno Full Stack",
                    roles: {
                        0: "Focado em novos desenvolvimentos conforme as demandas dos clientes.",
                        1: "Busca por entregar soluções eficazes e de qualidade.",
                    },
                },
                sts_squad: {
                    name: "STS (Time de Sustentação)",
                    position: "Desenvolvedor Pleno Full Stack",
                    roles: {
                        0: "Principal responsabilidade era solucionar bugs e ajustar regras de negócio de forma ágil.",
                        1: "Garantia da continuidade e estabilidade da aplicação.",
                    },
                },
            },
            stefanini: {
                text: "Stefanini é uma empresa global com mais de 35 anos de experiência, especializada em soluções de transformação digital, desenvolvimento de software, infraestrutura de TI, automação e consultoria. Atendemos diversas indústrias, incluindo automotiva, saúde, varejo e manufatura, ajudando nossos clientes a inovar e melhorar sua eficiência operacional.",
                vale_team: {
                    name: "Time Vale",
                    position: "Engenheiro de Suporte de Software",
                    roles: {
                        0: "Monitoramento constante do desempenho do sistema.",
                        1: "Identificação de áreas de melhoria.",
                        2: "Proposição de soluções proativas para prevenir interrupções.",
                        3: "Desempenho de funções de suporte técnico de N2 e N3.",
                        4: "Oferecimento de assistência especializada para resolver problemas complexos relacionados ao software.",
                        5: "Cumprimento dos SLAs estabelecidos.",
                        6: "Assegurando que as metas de serviço fossem cumpridas de forma eficaz.",
                    }
                }
            },
            james: {
                text: "James foi uma plataforma de entrega que conecta usuários a uma variedade de produtos, incluindo alimentos, supermercados e outros itens, com entregas rápidas e eficientes realizadas por uma rede de vendedores estabelecida. Nosso objetivo é economizar tempo para os clientes, oferecendo uma experiência de compra prática e conveniente.",
                payment_squad: {
                    name: "Time de Pagamentos",
                    position: "Desenvolvedor de Software Backend Pleno",
                    roles: {
                        0: "Desenvolvimento do gateway de pagamento JamesPay.",
                        1: "Arquitetura de microsserviços para reduzir custos e expandir opções de pagamento.",
                        2: "Inclusão de cartões de débito e Pix, além das transações de crédito.",
                        3: "Integração e ajustes contínuos durante a transição do monolito.",
                    }
                }
            },
            teresina_city_hall: {
                name: "Prefeitura de Teresina",
                text: "A Secretaria Municipal de Finanças de Teresina (SEMF) é responsável pela administração tributária e financeira da cidade. Ela cuida da contabilidade geral, liquidação e pagamento de despesas, e procura garantir uma política tributária justa e eficiente1. A SEMF também oferece diversos serviços online, como consultas e pagamentos de IPTU, ITBI, e outras taxas municipais.",
                finance_department_team: {
                    name: "Time Secretaria de Finanças",
                    position: "Desenvolvedor Full Stack Junior",
                    roles: {
                        0: "Gestão do Sistema de Poda: Fui responsável pelo sistema de poda urbana, garantindo que o fluxo de trabalho fosse funcional e organizado.",
                        1: "Automatização de Análises de Árvores: Desenvolvi um software para automatizar a análise de árvores cortadas, substituindo processos manuais por uma solução digital avançada.",
                        2: "Aumento da Eficiência Operacional: A automação do sistema reduziu o tempo gasto em análises, otimizando o fluxo de trabalho e liberando recursos para outras atividades.",
                        3: "Melhoria na Tomada de Decisões: O software trouxe dados mais precisos e acessíveis, permitindo decisões rápidas e mais assertivas pela equipe de gestão.",
                        4: "Correção de Bugs: Identifiquei e resolvi problemas técnicos no sistema, garantindo estabilidade e confiabilidade no uso diário.",
                        5: "Atualização de Regras de Negócio: Adaptei o sistema às novas necessidades e demandas, implementando mudanças nas regras de negócio conforme solicitado pelo time.",
                    }
                }
            }
        },
        projects: {
            title: "Projetos",
            short_text: "Principais projetos em que você trabalhou",
        },
        education: {
            title: "Educação",
            short_text: "Sua formação educacional",
        },
        connect: {
            title: "Contato",
            short_text: "Como entrar em contato com você",
        },
    },
};

export default pt;
