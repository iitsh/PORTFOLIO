export const translations = {
    fr: {
        nav: {
            home: 'Accueil',
            about: 'À propos',
            skills: 'Compétences',
            experience: 'Expérience',
            projects: 'Projets',
            contact: 'Contact',
        },
        hero: {
            greeting: 'Bonjour, je suis',
            name: 'Rayane Berrada',
            title: 'Développeur Machine Learning & Applications',
            subtitle: 'Étudiant en Conception et Développement d\'Applications passionné par le Machine Learning et le Deep Learning',
            cta: 'Découvrir mon travail',
            contact: 'Me contacter',
        },
        about: {
            title: 'À propos de moi',
            description: 'Passionné par le Machine Learning et le développement d\'applications, je suis actuellement en formation pour devenir Concepteur Développeur d\'Applications. Mon parcours combine une solide formation académique en Machine Learning avec une expérience pratique en développement web et mobile.',

        },
        skills: {
            title: 'Compétences Techniques',
        },
        experience: {
            title: 'Expérience Professionnelle',
            items: [
                {
                    title: 'Stagiaire Développeur IA & Web',
                    company: 'Terrab Consulting & Innovation',
                    period: '2024',
                    description: 'Développement d\'un système NLP → SQL. Création d\'un site web et d\'un bot WhatsApp IA. Intégration de solutions IA côté backend.',
                    technologies: ['NLP', 'SQL', 'WhatsApp Bot', 'Backend IA'],
                },
                {
                    title: 'Application de Réalité Augmentée',
                    company: 'Projet Virtual Try-On Shoes',
                    period: '2023',
                    description: 'Superposition 2D / intégration modèles 3D. Traitement d\'images et flux vidéo avec OpenCV.',
                    technologies: ['OpenCV', 'AR', '3D', 'Traitement d\'images'],
                },
            ],
        },
        projects: {
            title: 'Projets Réalisés',
            viewProject: 'Voir le projet',
            categories: {
                all: 'Tous',
                iot: 'IoT',
                security: 'Cybersécurité',
                bigdata: 'Big Data',
            },
            items: [
                {
                    title: 'Bracelet Intelligent de Surveillance Médicale',
                    category: 'iot',
                    description: 'Système IoT avec ESP32 et capteur AD8232. Monitoring du rythme cardiaque. Algorithmes d\'IA pour évaluation des risques. Interface de suivi des données.',
                    technologies: ['ESP32', 'AD8232', 'IoT', 'IA'],
                    image: '/images/projects/iot-bracelet.png',
                },
                {
                    title: 'Visualisation de Données avec Django',
                    category: 'bigdata',
                    description: 'Interface d\'authentification avec SQLite. Importation et analyse de datasets. Visualisations avec Seaborn et Matplotlib. Génération de rapports PDF. Historique des analyses utilisateurs.',
                    technologies: ['Django', 'SQLite', 'Seaborn', 'Matplotlib', 'PDF'],
                    image: '/images/projects/django-dashboard.png',
                },
                {
                    title: 'Cybersécurité - Solutions Sécurisées',
                    category: 'security',
                    description: 'Cryptage et décryptage de données. Solutions sécurisées (local et Azure). Optimisation des protocoles de sécurité.',
                    technologies: ['Cryptographie', 'Azure', 'Sécurité'],
                    image: '/images/projects/security-shield.png',
                },
                {
                    title: 'Architecture BIGDATA - Prédiction des Pandémies',
                    category: 'bigdata',
                    description: 'Traitement avec Hadoop, Spark et Kafka. Stockage partitionné HDFS. Modèles prédictifs via Spark MLlib. Analyse temps réel avec Spark Streaming. Tableaux de bord Grafana et Streamlit.',
                    technologies: ['Hadoop', 'Spark', 'Kafka', 'HDFS', 'Grafana', 'Streamlit'],
                    image: '/images/projects/big-data.png',
                },
            ],
        },
        contact: {
            title: 'Me Contacter',
            subtitle: 'N\'hésitez pas à me contacter pour discuter de projets ou opportunités',
            email: 'rayane06berrada@gmail.com',
        },
        footer: {
            rights: 'Tous droits réservés',
            madeWith: 'Fait avec',
        },
    },
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            skills: 'Skills',
            experience: 'Experience',
            projects: 'Projects',
            contact: 'Contact',
        },
        hero: {
            greeting: 'Hello, I am',
            name: 'Rayane Berrada',
            title: 'Machine Learning & Application Developer',
            subtitle: 'Application Design & Development student passionate about Machine Learning and Deep Learning',
            cta: 'Discover my work',
            contact: 'Contact me',
        },
        about: {
            title: 'About Me',
            description: 'Passionate about Machine Learning and application development, I am currently training to become an Application Designer Developer. My background combines solid academic training in Machine Learning with practical experience in web and mobile development.',

        },
        skills: {
            title: 'Technical Skills',
        },
        experience: {
            title: 'Professional Experience',
            items: [
                {
                    title: 'AI & Web Developer Intern',
                    company: 'Terrab Consulting & Innovation',
                    period: '2024',
                    description: 'Development of an NLP → SQL system. Creation of a website and an AI WhatsApp bot. Integration of AI solutions on the backend.',
                    technologies: ['NLP', 'SQL', 'WhatsApp Bot', 'Backend AI'],
                },
                {
                    title: 'Augmented Reality Application',
                    company: 'Virtual Try-On Shoes Project',
                    period: '2023',
                    description: '2D overlay / 3D model integration. Image and video stream processing with OpenCV.',
                    technologies: ['OpenCV', 'AR', '3D', 'Image Processing'],
                },
            ],
        },
        projects: {
            title: 'Projects',
            viewProject: 'View project',
            categories: {
                all: 'All',
                iot: 'IoT',
                security: 'Cybersecurity',
                bigdata: 'Big Data',
            },
            items: [
                {
                    title: 'Smart Medical Monitoring Bracelet',
                    category: 'iot',
                    description: 'IoT system with ESP32 and AD8232 sensor. Heart rate monitoring. AI algorithms for risk assessment. Data tracking interface.',
                    technologies: ['ESP32', 'AD8232', 'IoT', 'AI'],
                    image: '/images/projects/iot-bracelet.png',
                },
                {
                    title: 'Data Visualization with Django',
                    category: 'bigdata',
                    description: 'Authentication interface with SQLite. Dataset import and analysis. Visualizations with Seaborn and Matplotlib. PDF report generation. User analysis history.',
                    technologies: ['Django', 'SQLite', 'Seaborn', 'Matplotlib', 'PDF'],
                    image: '/images/projects/django-dashboard.png',
                },
                {
                    title: 'Cybersecurity - Secure Solutions',
                    category: 'security',
                    description: 'Data encryption and decryption. Secure solutions (local and Azure). Security protocol optimization.',
                    technologies: ['Cryptography', 'Azure', 'Security'],
                    image: '/images/projects/security-shield.png',
                },
                {
                    title: 'BIGDATA Architecture - Pandemic Prediction',
                    category: 'bigdata',
                    description: 'Processing with Hadoop, Spark and Kafka. HDFS partitioned storage. Predictive models via Spark MLlib. Real-time analysis with Spark Streaming. Grafana and Streamlit dashboards.',
                    technologies: ['Hadoop', 'Spark', 'Kafka', 'HDFS', 'Grafana', 'Streamlit'],
                    image: '/images/projects/big-data.png',
                },
            ],
        },
        contact: {
            title: 'Contact Me',
            subtitle: 'Feel free to reach out to discuss projects or opportunities',
            email: 'rayane06berrada@gmail.com',
        },
        footer: {
            rights: 'All rights reserved',
            madeWith: 'Made with',
        },
    },
};

export const skillsData = {
    categories: [
        {
            name: 'Développement',
            nameEn: 'Development',
            skills: ['Python', 'Java', 'JavaScript', 'React JS', 'React Native', 'Django', 'FastAPI', 'HTML', 'CSS', 'SQL'],
        },
        {
            name: 'Data & IA',
            nameEn: 'Data & AI',
            skills: ['NLP', 'TensorFlow', 'PyTorch', 'OpenCV', 'Spark', 'Hadoop', 'Kafka'],
        },
        {
            name: 'Outils',
            nameEn: 'Tools',
            skills: ['Git', 'GitHub', 'SQLite', 'Grafana', 'Streamlit', 'Matplotlib', 'Seaborn'],
        },
        {
            name: 'Amazon Web Services (AWS)',
            nameEn: 'Amazon Web Services (AWS)',
            skills: ['AWS Lambda', 'AWS CloudFormation'],
        },
        {
            name: 'Réalité Augmentée (AR)',
            nameEn: 'Augmented Reality (AR)',
            skills: ['OpenCV', 'Three.js'],
        },
    ],
};
