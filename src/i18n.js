import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    nav: {
                        home: 'HOME',
                        works: 'WORKS',
                        saidaa: 'SAIDAA',
                        zeroSaidaa: 'ZERO-SAIDAA',
                        news: 'NEWS',
                        contact: 'CONTACT'
                    },
                    common: {
                        readMore: 'Read more',
                        backToWorks: 'Back to Works',
                        backToNews: 'Back to News',
                        backToZero: 'Back to Zero-Saidaa',
                        ourInsight: 'Our Insight',
                        contact: 'Contact'
                    },
                    categories: {
                        ALL: 'ALL',
                        Urbandesign: 'Urbandesign',
                        Architecture: 'Architecture',
                        Interiors: 'Interiors',
                        'Design Forschung': 'Design Research',
                        'Akquise/wettbewerb': 'Acquisition/Competition',
                        Research: 'Research',
                        Consulting: 'Consulting',
                        Experiment: 'Experiment',
                        AWARDS: 'AWARDS',
                        PUBLICATION: 'PUBLICATION',
                        EXHIBITION: 'EXHIBITION',
                        TALK: 'TALK',
                        NEWS: 'NEWS'
                    },
                    saidaa: {
                        tabs: {
                            about: 'ABOUT',
                            team: 'TEAM',
                            principles: 'PRINCIPLES'
                        },
                        about: {
                            title: 'About',
                            p1: 'SAIDAA is an architecture and research collective on a mission to reconnect people with nature through design at every scale. We aim to transform complex, real-world challenges into designs that leave a lasting positive impact. By bridging research and design, we align data with lived experience, functionality with beauty, economic priorities with ecological responsibility, and hope with action.',
                            p2: 'Led by Founder Johnyun Baek, our design studio brings together a purpose-driven team: architects, designers, urban planners, landscape architects, and researchers who work holistically across borders, scales, and disciplines.',
                            p3: 'For over 10 years, we have worked with innovation and cross-sector partnerships to address some of the most pressing social and environmental challenges in the built environment – from a systemic perspective to the human scale. Our solutions are rooted in the communities and environments they serve – and shaped with care, so they can be both felt and measured.',
                            p4: 'We don\'t pretend to have all the answers, but we continue to push boundaries in our pursuit of design solutions that celebrate nature and meet society\'s needs without compromising the future.'
                        },
                        team: {
                            role: 'CO-FOUNDER AND CEO',
                            role_architect: 'ARCHITECT',
                            bio: 'Johnyun Baek is a co-founder and CEO of SAIDAA. He has dedicated to exploring spatial and social values with his experience in design, system and business model development. Prior to establishing SAIDAA, he completed his studies in Landscape Architecture at Seoul National University and Harvard Graduate School of Design (GSD).',
                            quote: 'Design is not just what it looks like, but how it works.',
                            education_title: 'EDUCATION',
                            experience_title: 'EXPERIENCE',
                            insight_text: 'Haha, we are ABC trying to make an effect we get the right people for you on for the architecture. Just insight.'
                        },
                        principles: {
                            title: 'Design Principles',
                            p1_title: 'Inspired by Nature',
                            p1_content: 'We are surrounded by nature. In Helsinki, our capital, you can find archipelagoes and forests just 15 minutes from the city center. The shapes and innovations of mother nature inspire us in our design work.',
                            p2_title: 'Human Touch',
                            p2_content: 'Architecture should always respect the "small person" as coined by Alvar Aalto. Human experience is the driving principle of all our work. Empathy is needed to develop new solutions and it helps to solve the key challenges of our society.',
                            p3_title: 'Simple but Intelligent',
                            p3_content: 'We have learnt to recognise the strongest of our ideas because they are the simplest ones. Simplicity is achieved through a deep understanding of a problem and an intelligent approach in resolving it.',
                            p4_title: 'Less Talk',
                            p4_content: 'The world is divided into two groups: talkers and doers. We believe in the latter. The built work is what counts the most. This is why we are focused on mastering the construction process, understanding materials, details and craftsmanship.',
                            p5_title: 'Tailor Made',
                            p5_content: 'Our design approach is creative and flexible, just like jazz music. "Improvise" is our middle name. We don\'t use standard methods and styles. This is why all of our projects are unique.',
                            p6_title: 'Hidden Essential',
                            p6_content: 'Design is not about surfaces, but it reveals the inherent idea behind the project. The architect\'s job is to define and discover the essential. We have created hundreds of new design concepts so we know what it takes.',
                            p7_title: 'Total Design',
                            p7_content: 'We see architecture as a holistic environment that can be experienced at all scales ranging from the intimate to the immersive. This is why we welcome projects that allow us to combine the talents of our architects and interior designers.'
                        }
                    },
                    contact: {
                        title: 'CONTACT',
                        office: 'Office',
                        businessDev: 'Business Development',
                        bank: 'Bank',
                        press: 'Press & Communication',
                        inquiries: 'For new business and project inquiries, please contact:',
                        mediaInquiries: 'For press and media inquiries, please contact:',
                        findUs: 'Find us in Seoul'
                    }
                }
            },
            ko: {
                translation: {
                    nav: {
                        home: '홈',
                        works: '작품',
                        saidaa: '사이다',
                        zeroSaidaa: '제로-사이다',
                        news: '뉴스',
                        contact: '문의'
                    },
                    common: {
                        readMore: '더 보기',
                        backToWorks: '작품 목록으로 돌아가기',
                        backToNews: '뉴스 목록으로 돌아가기',
                        backToZero: '제로-사이다로 돌아가기',
                        ourInsight: '우리의 인사이트',
                        contact: '문의하기'
                    },
                    categories: {
                        ALL: '전체',
                        Urbandesign: '도시설계',
                        Architecture: '건축',
                        Interiors: '인테리어',
                        'Design Forschung': '디자인 연구',
                        'Akquise/wettbewerb': '공모전/수주',
                        Research: '연구',
                        Consulting: '컨설팅',
                        Experiment: '실험',
                        AWARDS: '수상',
                        PUBLICATION: '출판',
                        EXHIBITION: '전시',
                        TALK: '강연',
                        NEWS: '뉴스'
                    },
                    saidaa: {
                        tabs: {
                            about: '소개',
                            team: '팀',
                            principles: '원칙'
                        },
                        about: {
                            title: '소개',
                            p1: 'SAIDAA는 모든 규모의 디자인을 통해 사람과 자연을 다시 연결하는 것을 목표로 하는 건축 및 연구 집단입니다. 우리는 복잡한 현실 세계의 과제를 오래 지속되는 긍정적인 영향을 미치는 디자인으로 변화시키고자 합니다. 연구와 디자인을 연결하여 데이터와 실제 경험, 기능과 아름다움, 경제적 우선순위와 생태적 책임, 희망과 실천을 일치시킵니다.',
                            p2: '설립자 백종현이 이끄는 디자인 스튜디오는 건축가, 디자이너, 도시 계획가, 조경가, 연구원 등 다양한 분야의 전문가들이 모여 국경, 규모, 분야를 넘어 총체적으로 협력합니다.',
                            p3: '지난 10년 동안 우리는 혁신과 분야 간 파트너십을 통해 건축 환경의 가장 시급한 사회적, 환경적 문제를 시스템적 관점에서 인간적 규모까지 해결해 왔습니다. 우리의 솔루션은 서비스하는 지역 사회와 환경에 뿌리를 두고 있으며, 세심하게 다듬어져 실질적인 변화를 체감하고 측정할 수 있습니다.',
                            p4: '우리는 모든 답을 가지고 있다고 주장하지 않지만, 미래를 타협하지 않으면서 자연을 기념하고 사회의 필요를 충족시키는 디자인 솔루션을 추구하며 경계를 계속 확장하고 있습니다.'
                        },
                        team: {
                            role: '공동 설립자 및 대표',
                            role_architect: '건축가',
                            bio: '백종현은 SAIDAA의 공동설립자이자 대표이다. 디자인, 시스템 및 비즈니스 모델 개발 등 다양한 경험을 바탕으로 새로운 공간 라이프스타일 디자인을 통한 사회적 가치의 실현을 추구한다. 과거를 발견하기 전, 서울대학교에서 도시조경학 전공학을 전공하고 하버드대학교 GSD에서 조경학 MA 학위를 취득하며 국내외 다양한 프로젝트를 수행하였다.',
                            quote: '디자인은 어떻게 보이는가가 아니라 어떻게 작동하는가이다.',
                            education_title: '학력',
                            experience_title: '경력',
                            insight_text: '저희는 건축에 적합한 인재를 연결하여 효과를 만들어내려는 ABC입니다. 단순한 인사이트입니다.'
                        },
                        principles: {
                            title: '디자인 원칙',
                            p1_title: '자연에서 영감을 얻다',
                            p1_content: '우리는 자연에 둘러싸여 있습니다. 헬싱키에서는 도심에서 15분 거리에 군도와 숲이 있습니다. 어머니 자연의 형태와 혁신은 우리의 디자인 작업에 영감을 줍니다.',
                            p2_title: '인간적 감성',
                            p2_content: '건축은 항상 알바 알토가 말한 "작은 사람"을 존중해야 합니다. 인간의 경험은 우리 모든 작업의 원동력입니다. 새로운 솔루션을 개발하고 사회의 주요 과제를 해결하기 위해서는 공감이 필요합니다.',
                            p3_title: '단순하지만 지능적인',
                            p3_content: '우리는 가장 강력한 아이디어가 가장 단순한 것임을 배웠습니다. 단순함은 문제에 대한 깊은 이해와 해결에 대한 지능적인 접근을 통해 달성됩니다.',
                            p4_title: '말보다는 행동',
                            p4_content: '세상은 말하는 사람과 행동하는 사람 두 부류로 나뉩니다. 우리는 후자를 믿습니다. 지어진 결과물이 가장 중요합니다. 이것이 우리가 시공 과정, 재료, 디테일 및 장인 정신을 마스터하는 데 집중하는 이유입니다.',
                            p5_title: '맞춤 제작',
                            p5_content: '우리의 디자인 접근 방식은 재즈 음악처럼 창의적이고 유연합니다. "즉흥 연주"는 우리의 별명입니다. 우리는 표준적인 방법과 스타일을 사용하지 않습니다. 이것이 우리의 모든 프로젝트가 독특한 이유입니다.',
                            p6_title: '숨겨진 본질',
                            p6_content: '디자인은 표면이 아니라 프로젝트 뒤에 숨겨진 고유한 아이디어를 드러내는 것입니다. 건축가의 일은 본질을 정의하고 발견하는 것입니다. 우리는 수백 개의 새로운 디자인 컨셉을 만들었기 때문에 무엇이 필요한지 알고 있습니다.',
                            p7_title: '토탈 디자인',
                            p7_content: '우리는 건축을 친밀한 것부터 몰입감 있는 것까지 모든 규모에서 경험할 수 있는 전체적인 환경으로 봅니다. 이것이 우리가 건축가와 인테리어 디자이너의 재능을 결합할 수 있는 프로젝트를 환영하는 이유입니다.'
                        }
                    },
                    contact: {
                        title: '문의',
                        office: '사무실',
                        businessDev: '사업 개발',
                        bank: '은행',
                        press: '언론 & 홍보',
                        inquiries: '신규 사업 및 프로젝트 문의는 다음으로 연락주세요:',
                        mediaInquiries: '언론 및 미디어 문의는 다음으로 연락주세요:',
                        findUs: '서울 오피스 찾기'
                    }
                }
            },
            de: {
                translation: {
                    nav: {
                        home: 'STARTSEITE',
                        works: 'ARBEITEN',
                        saidaa: 'SAIDAA',
                        zeroSaidaa: 'ZERO-SAIDAA',
                        news: 'NACHRICHTEN',
                        contact: 'KONTAKT'
                    },
                    common: {
                        readMore: 'Mehr lesen',
                        backToWorks: 'Zurück zu Arbeiten',
                        backToNews: 'Zurück zu Nachrichten',
                        backToZero: 'Zurück zu Zero-Saidaa',
                        ourInsight: 'Unsere Einsicht',
                        contact: 'Kontakt'
                    },
                    categories: {
                        ALL: 'ALLE',
                        Urbandesign: 'Städtebau',
                        Architecture: 'Architektur',
                        Interiors: 'Innenarchitektur',
                        'Design Forschung': 'Designforschung',
                        'Akquise/wettbewerb': 'Akquise/Wettbewerb',
                        Research: 'Forschung',
                        Consulting: 'Beratung',
                        Experiment: 'Experiment',
                        AWARDS: 'AUSZEICHNUNGEN',
                        PUBLICATION: 'PUBLIKATION',
                        EXHIBITION: 'AUSSTELLUNG',
                        TALK: 'VORTRAG',
                        NEWS: 'NACHRICHTEN'
                    },
                    saidaa: {
                        tabs: {
                            about: 'ÜBER UNS',
                            team: 'TEAM',
                            principles: 'PRINZIPIEN'
                        },
                        about: {
                            title: 'Über Uns',
                            p1: 'SAIDAA ist ein Architektur- und Forschungskollektiv mit der Mission, Menschen durch Design in jedem Maßstab wieder mit der Natur zu verbinden. Wir wollen komplexe, reale Herausforderungen in Designs verwandeln, die einen dauerhaften positiven Einfluss hinterlassen. Durch die Verbindung von Forschung und Design stimmen wir Daten mit gelebter Erfahrung, Funktionalität mit Schönheit, wirtschaftliche Prioritäten mit ökologischer Verantwortung und Hoffnung mit Handeln ab.',
                            p2: 'Unter der Leitung von Gründer Johnyun Baek bringt unser Designstudio ein zielgerichtetes Team zusammen: Architekten, Designer, Stadtplaner, Landschaftsarchitekten und Forscher, die ganzheitlich über Grenzen, Maßstäbe und Disziplinen hinweg arbeiten.',
                            p3: 'Seit über 10 Jahren arbeiten wir mit Innovations- und branchenübergreifenden Partnerschaften zusammen, um einige der dringendsten sozialen und ökologischen Herausforderungen in der gebauten Umwelt anzugehen – von einer systemischen Perspektive bis zum menschlichen Maßstab. Unsere Lösungen sind in den Gemeinschaften und Umgebungen verwurzelt, denen sie dienen – und mit Sorgfalt gestaltet, so dass sie sowohl gefühlt als auch gemessen werden können.',
                            p4: 'Wir geben nicht vor, alle Antworten zu haben, aber wir verschieben weiterhin Grenzen in unserem Streben nach Designlösungen, die die Natur feiern und die Bedürfnisse der Gesellschaft erfüllen, ohne die Zukunft zu gefährden.'
                        },
                        team: {
                            role: 'MITGRÜNDER UND CEO',
                            role_architect: 'ARCHITEKT',
                            bio: 'Johnyun Baek ist Mitbegründer und CEO von SAIDAA. Mit seiner Erfahrung in Design, System- und Geschäftsmodellentwicklung widmet er sich der Erforschung räumlicher und sozialer Werte. Vor der Gründung von SAIDAA absolvierte er sein Studium der Landschaftsarchitektur an der Seoul National University und der Harvard Graduate School of Design (GSD).',
                            quote: 'Design ist nicht nur, wie es aussieht, sondern wie es funktioniert.',
                            education_title: 'AUSBILDUNG',
                            experience_title: 'ERFAHRUNG',
                            insight_text: 'Wir sind ABC und versuchen, einen Effekt zu erzielen, indem wir die richtigen Leute für die Architektur finden. Nur eine Einsicht.'
                        },
                        principles: {
                            title: 'Designprinzipien',
                            p1_title: 'Von der Natur inspiriert',
                            p1_content: 'Wir sind von Natur umgeben. In Helsinki, unserer Hauptstadt, finden Sie Schärengärten und Wälder nur 15 Minuten vom Stadtzentrum entfernt. Die Formen und Innovationen von Mutter Natur inspirieren uns bei unserer Designarbeit.',
                            p2_title: 'Menschliche Berührung',
                            p2_content: 'Architektur sollte immer den "kleinen Menschen" respektieren, wie Alvar Aalto es nannte. Die menschliche Erfahrung ist das treibende Prinzip unserer gesamten Arbeit. Empathie ist notwendig, um neue Lösungen zu entwickeln, und sie hilft, die wichtigsten Herausforderungen unserer Gesellschaft zu lösen.',
                            p3_title: 'Einfach aber intelligent',
                            p3_content: 'Wir haben gelernt, die stärksten unserer Ideen zu erkennen, weil sie die einfachsten sind. Einfachheit wird durch ein tiefes Verständnis eines Problems und einen intelligenten Ansatz zu seiner Lösung erreicht.',
                            p4_title: 'Weniger reden',
                            p4_content: 'Die Welt teilt sich in zwei Gruppen: Redner und Macher. Wir glauben an Letzteres. Das gebaute Werk ist das, was am meisten zählt. Deshalb konzentrieren wir uns darauf, den Bauprozess, das Verständnis von Materialien, Details und Handwerkskunst zu meistern.',
                            p5_title: 'Maßgeschneidert',
                            p5_content: 'Unser Designansatz ist kreativ und flexibel, genau wie Jazzmusik. "Improvisieren" ist unser zweiter Vorname. Wir verwenden keine Standardmethoden und -stile. Deshalb sind alle unsere Projekte einzigartig.',
                            p6_title: 'Verstecktes Wesentliche',
                            p6_content: 'Design handelt nicht von Oberflächen, sondern enthüllt die inhärente Idee hinter dem Projekt. Die Aufgabe des Architekten ist es, das Wesentliche zu definieren und zu entdecken. Wir haben Hunderte neuer Designkonzepte erstellt, also wissen wir, was dazu gehört.',
                            p7_title: 'Total Design',
                            p7_content: 'Wir sehen Architektur als eine ganzheitliche Umgebung, die in allen Maßstäben erlebt werden kann, vom Intimen bis zum Immersiven. Deshalb begrüßen wir Projekte, die es uns ermöglichen, die Talente unserer Architekten und Innenarchitekten zu kombinieren.'
                        }
                    },
                    contact: {
                        title: 'KONTAKT',
                        office: 'Büro',
                        businessDev: 'Geschäftsentwicklung',
                        bank: 'Bank',
                        press: 'Presse & Kommunikation',
                        inquiries: 'Für Anfragen zu neuen Geschäften und Projekten wenden Sie sich bitte an:',
                        mediaInquiries: 'Für Presse- und Medienanfragen wenden Sie sich bitte an:',
                        findUs: 'Finden Sie uns in Seoul'
                    }
                }
            }
        }
    });

export default i18n;
