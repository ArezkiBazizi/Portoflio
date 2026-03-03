// Personal Information --> #hero section
export const name = "Arezki Bazizi"
export const designation = "Ingénieur Dev & DevOps"
export const location = "France"
export const website = "https://github.com/ArezkiBazizi"

// About
export const Bio = "Ingénieur Développeur Full-Stack (Angular/Spring Boot) spécialisé en environnements Cloud et DevOps. Expérimenté dans la conception d'API RESTful et l'industrialisation des déploiements (CI/CD). Orienté vers la haute disponibilité et l'optimisation des performances sur des volumes de données massifs (Oracle/PostgreSQL)."

// Work Experience --> #work section
export const Experience = [
	{
		from: "2024",
		to: "Actuellement",
		role: "Ingénieur Développeur Full-Stack & DevOps",
		org: "Arval BNP PARIBAS",
		org_url: "https://group.bnpparibas/",
		location: "Paris, FRANCE",
		skills: "Développement d'applications critiques en Spring Boot et Angular au sein d'une équipe internationale (FR, UK, ES, IT). Architecture Frontend : implémentation de modules Angular optimisés (Lazy loading, services, composants réutilisables). API Design : conception d'API RESTful, standardisation via Swagger/OpenAPI et automatisation des tests sous Postman. Expertise Database : optimisation et refactorisation de procédures PL/SQL complexes sur très gros volumes (VLDB Oracle). Infrastructure : déploiement et orchestration de microservices sur Kubernetes (VMware Tanzu) via des pipelines CI/CD. Automation : refonte complète des jobs Jenkins (versioning automatisé, déploiement continu multi-environnements) réduisant drastiquement les erreurs manuelles en production."
	},
	{
		from: "Mars 2024",
		to: "Août 2024",
		role: "Cloud Data Engineer",
		org: "LesCityZens",
		org_url: "https://www.lescityzens.fr/",
		location: "Paris, FRANCE",
		skills: "Migration d'OVH vers AWS Cloud, assurant continuité, scalabilité et optimisation des services. Déploiement de microservices, refonte de la base PostgreSQL et développement d'un programme automatisé pour l'analyse des données et la génération de rapports détaillés."
	},
	{
		from: "Fév 2023",
		to: "Mars 2023",
		role: "Data Analyst",
		org: "Ooredoo Algérie",
		org_url: "https://www.ooredoo.dz/fr/",
		location: "Alger, Algérie",
		skills: "Mise en place de tableaux de bord dynamiques pour la direction, réduisant le temps d'analyse des données clients de 50 %. Analyse prédictive du churn (résiliation) via des modèles d'apprentissage statistique."
	},
	{
		from: "Déc 2022",
		to: "Jan 2023",
		role: "Architecte Bases de Données",
		org: "SONATRACH",
		org_url: "https://sonatrach.com/",
		location: "Bejaia, Algérie",
		skills: "Conception et implémentation d'une solution de base de données pour la gestion et la maintenance du service HSE. Étude des normes et procédures HSE, modélisation du SI et développement d'une interface de gestion en Java/Python."
	}
]

// Projects --> #project section
export const projects = [
	{
		title: "Jeux de l'Aventurier",
		description: "Jeu en C++ simulant un environnement interactif (exploration de château, combats de monstres et gestion d'inventaire).",
		url: "https://github.com/ArezkiBazizi/Jeux-Aventurier",
		tech: "C++",
	},
	{
		title: "E-Commerce Full-Stack",
		description: "Développement complet d'une plateforme de commerce électronique (Projet de fin de cycle).",
		url: "https://github.com/ArezkiBazizi/FullStack-E-Commerce",
		tech: "JS, HTML, CSS, PHP, MySQL",
	},
	{
		title: "Rush Hour Solver",
		description: "Implémentation du jeu Rush Hour avec un algorithme de résolution optimale (minimum de mouvements).",
		url: "https://github.com/ArezkiBazizi/Rush-Hour",
		tech: "Java",
	},
	{
		title: "Churn Prediction Model",
		description: "Projet de classification binaire utilisant la régression logistique et KNN pour prédire la résiliation client.",
		url: "https://github.com/ArezkiBazizi/Customer-Churn-Prediction-KNN-and-Logistic-Regression",
		tech: "Python (Scikit-learn, Pandas)",
	}
]

// Education --> #education section
export const formation = [
	{
		from: "2024",
		to: "2026",
		institute: "Université Paris Nanterre",
		course: "Master MIAGE : Systèmes d’information fiables et intelligence des données",
		location: "Paris, France"
	},
	{
		from: "2023",
		to: "2024",
		institute: "Université de Haute-Alsace",
		course: "Licence Informatique option MIAGE",
		location: "Mulhouse, France"
	},
	{
		from: "2019",
		to: "2023",
		institute: "Université Abderahmane Mira",
		course: "Master 1 & Licence SI : Systèmes d'Informations Avancées",
		location: "Bejaia, Algérie"
	}
]

// Contact --> #contact section
export const contact = [
	{
		title: "Email",
		description: "baziziarezki@gmail.com",
	},
	{
		title: "WhatsApp",
		description: "+33769614503",
	},
	{
		title : "Profil LinkedIn",
		source_name: "LinkedIn",
		source: "https://www.linkedin.com/in/arezki-bazizi/",
	},
]

// Certifications --> #certificate section
export const certificates = [
	{
		issued: "2023",
		title: "Introduction to Cybersecurity",
		org: "Cisco",
		url: "https://www.credly.com/badges/bcabcfcc-9038-42f7-8f86-d3ad1475b220/",
		description: "Cisco Certification",
	},
	{
		issued: "2022",
		title: "Full-Stack Web Development with React",
		org: "HKUST",
		url: "https://coursera.org/verify/specialization/FY4UDE3Q825G",
		description: "Coursera Certification",
	},
	{
		issued: "2022",
		title: "Server-side Development (NodeJS, Express, MongoDB)",
		org: "HKUST",
		url: "https://coursera.org/verify/5AVUCSATXG2J",
		description: "Coursera Certification",
	},
	{
		issued: "2022",
		title: "Cloud Computing",
		org: "Huawei",
		url: "#",
		description: "Huawei Certification",
	}
]
