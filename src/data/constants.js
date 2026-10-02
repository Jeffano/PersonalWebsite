import CheerWebsiteImage from "../images/CheerWebsite.png";
import ChatroomImage from "../images/Chatroom.png";
import PigeonPlexImage from "../images/PigeonPlex.jpg";
import CalculatorImage from "../images/Calculator.png";
import Connect4 from "../images/Connect4.jpg";
import Watercooler from "../images/TheWatercooler.jpg";
import PythonSnake from "../images/PythonSnake.jpg";
import iFinance from "../images/iFinance.png";
import MoneyTranslate from "../images/MoneyTranslate.png";
import SalesForecasting from "../images/SalesForecasting.png";
import SortingMethod from "../images/SortingMethod.png";
import TennisDB from "../images/TennisDB.png";
import BattleGame from "../images/BattleGame.png";
import CustomerChurn from "../images/CustomerChurn.jpg";
import AITextGenerator from "../images/AITextGenerator.jpg";
import ModelCar from "../images/ModelCar.png";
import RecipeGenerator from "../images/RecipeGenerator.jpg";
import DHTTable from "../images/DHTTable.jpg";
import MicrocontrollerGame from "../images/MicrocontrollerGame.jpg";
import RecommendationSystem from "../images/RecommendationSystem.jpg";
import SingletonController from "../images/SingletonController.jpg";
import Superhero from "../images/Superhero.png";
import GeneScope from "../images/GeneScope.png";
import LaneDetection from "../images/LaneDetection.png";
import TurboFan from "../images/TurboFan.png";

/**
{
    id: ,
    title: "",
    date: "",
    description: "",
    image: "",
    tags: [
      "",
    ],
    category: "",
    github: "",
    webapp: "",
  },

  Categories: web-app, ml, python, java;
 */

export const Bio = {
  name: "Jeffano John",
  roles: [
    "Software Engineer",
    "Data Engineer",
    "Full Stack Engineer",
    "ML/AI Engineer",
  ],
  description:
  "I am a Software and Data Engineer focused on building reliable, scalable systems across cloud and distributed environments. My work spans data platform engineering, CI/CD automation, backend services, and AI-driven applications. I enjoy designing clean architectures, improving system reliability, and turning complex workflows into production-ready solutions that create measurable impact.",
  github: "https://github.com/jeffano",
  resume:
    "https://drive.google.com/file/d/11WIMuiYR9z6sSAzEZt67mAouulRnrNWQ/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/jeffanojohn/",
};

export const skills = [
  {
    title: "Data Engineering",
    skills: [
      {
        name: "Databricks",
        image:
          "https://www.vectorlogo.zone/logos/databricks/databricks-icon.svg",
      },
      {
        name: "Apache Spark",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg",
      },
      {
        name: "Delta Lake",
        image: "https://avatars.githubusercontent.com/u/28974706?s=200&v=4",
      },
      {
        name: "Google Cloud Platform",
        image:
          "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
      },
      {
        name: "Unity Catalog",
        image:
          "https://www.databricks.com/wp-content/uploads/2023/09/uc-logo.png",
      },
      {
        name: "ETL / ELT",
        image: "https://cdn-icons-png.flaticon.com/512/8297/8297296.png",
      },
      {
        name: "CDC",
        image: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
      },
      {
        name: "SQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
      },
    ],
  },

  {
    title: "Frontend",
    skills: [
      {
        name: "React",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Next.js",
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACTklEQVR4Ab1XAaQqURB9DyohSykREpRIQSAlBCoECKUFCSRCBBEAaSEABQEoCIEASCwAUICALgCo83do0//9v819XX845O7VnDkzOzP7JWGaBd3C3IJpQVjAHeJ+Rs9a97vKLGrBsB1KgMhEP3FMUUwt4ENMfxr1yQIU4SSjRkbeOZtERmHk6pXQVDlnkHh9S+QLTm1hkiz4n/gzFQuny9FoFLquE+i34x+n02k0m00UCoV3BIzn3MMJrVYLtp1OJ0cS/X4f5/MZhmG8IyDsWtDfEaDIn2232/3zbrvdxuFwwGg04qRBt+VnETBNE0IIkE2n07/erdfrWK/X6Ha73Hb9ZXII3G43ivy3dNRqtZe7lUoFs9mM6oBDwCQCgquALT1FT3a5XF7qIZ/PYzgcolqtcggIIgBZAgRKB6lCRalp2uM8k8mAVMrlchwC+DEBipycE4n5fP44j8ViKJVKSCaTbAJCpgaez4vFIsjoWa/XA50FAgEkEgmEw2F2CkxZBZ5Br5tt1ITcbjd8Ph88Hg+7CBefECCsVitS4aVJcV9D/VMCVITk/Hq9YrPZyBBo2a1YMGvAcQYcj0cCtWMugcdYNhjDiBrP25mx3++x3W6RzWZZ8isfxzQLlsslJpMJpYY5jhkqcOH1ejEYDDAej9FoNOByuZxGsfqVzC7KTqcDSkkqleKsZOqX0mAwiHK5DGrJfr+fs5SqX8sjkQji8ThCoRC+v78Za7l6JagrUh3YkUuZpqgwDaecc9VYSDoV5Fg+at7n+eLN57kuE/EvzHr/Kvs31aYAAAAASUVORK5CYII=",
      },
      {
        name: "Angular",
        image:
          "https://camo.githubusercontent.com/8886130b3d8aba95dbdd7c4f9a41029606424cc06d1873c1ced87dd55a222fef/68747470733a2f2f616e67756c61722e696f2f6173736574732f696d616765732f6c6f676f732f616e67756c61722f616e67756c61722e737667",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
    ],
  },

  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
      },
      {
        name: "Express.js",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
      },
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "Django",
        image: "https://www.svgrepo.com/show/353657/django-icon.svg",
      },
      {
        name: "Flask",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg",
      },
      {
        name: "PostgreSQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
      {
        name: "GraphQL",
        image:
          "https://seeklogo.com/images/G/graphql-logo-97CBBB6D51-seeklogo.com.png",
      },
    ],
  },

  {
    title: "Cloud & DevOps",
    skills: [
      {
        name: "AWS",
        image:
          "https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png",
      },
      {
        name: "Docker",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      },
      {
        name: "Nginx",
        image: "https://download.logo.wine/logo/Nginx/Nginx-Logo.wine.png",
      },
      {
        name: "AWS Lambda",
        image:
          "https://seeklogo.com/images/A/aws-lambda-logo-AE95CFC218-seeklogo.com.png",
      },
      {
        name: "AWS DynamoDB",
        image:
          "https://seeklogo.com/images/A/aws-dynamodb-logo-CF7BCC577D-seeklogo.com.png",
      },
      {
        name: "CI/CD",
        image: "https://cdn-icons-png.flaticon.com/512/1048/1048943.png",
      },
    ],
  },

  {
    title: "AI & Machine Learning",
    skills: [
      {
        name: "TensorFlow",
        image:
          "https://static-00.iconduck.com/assets.00/tensorflow-icon-1911x2048-1m2s54vn.png",
      },
      {
        name: "Scikit Learn",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/2560px-Scikit_learn_logo_small.svg.png",
      },
      {
        name: "Hugging Face Transformers",
        image: "https://huggingface.co/front/assets/huggingface_logo.svg",
      },
      {
        name: "Amazon Bedrock",
        image:
          "https://converteo.com/app/uploads/2024/02/Amazon-Bedrock-2-1330x1064-c-center.jpg",
      },
      {
        name: "Jupyter",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/1767px-Jupyter_logo.svg.png",
      },
    ],
  },

  {
    title: "Tools",
    skills: [
      {
        name: "Git",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
      },
      {
        name: "VS Code",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
      },
      {
        name: "Postman",
        image:
          "https://static-00.iconduck.com/assets.00/postman-icon-497x512-beb7sy75.png",
      },
      {
        name: "Figma",
        image:
          "https://s3-alpha.figma.com/hub/file/1481185752/fa4cd070-6a79-4e1b-b079-8b9b76408595-cover.png",
      },
    ],
  },
];

export const experiences = [
  {
    id: 8,
    img: "https://media.licdn.com/dms/image/v2/D560BAQH3esOSJaYbNA/company-logo_200_200/company-logo_200_200/0/1736539743371/kdata_ai_logo?e=2147483647&v=beta&t=RwD68H0QySMPDLsjnNf0udwTjrumrigI-I4X0QrcSAw",
    role: "Data Engineer",
    company: "KData AI",
    date: "June 2025 - Present",
    desc: "Built a suite of 6 Claude-powered LLM agents on Databricks Genie that generate complete production pipelines (DDLs, SCD1/SCD2 MERGE notebooks, historical and CDC loads, views, and test suites) from Excel source-to-target specifications. The agents verify each spec against live Unity Catalog metadata, pause for human approval before writing any code, and validate their own output; they are now used across the team, cutting pipeline build time from 8+ hours to under 15 minutes. Deployed 70+ ingestion pipelines migrating CN Rail's Netezza and DB2 systems into a Databricks and GCP lakehouse across 47 tables, 10 source systems, and 4 environments, using Spark Structured Streaming, Auto Loader, and Delta Lake MERGE on tables up to 70B rows. Led deployment and validation of 160+ Databricks Delta tables and Informatica mappings through end-to-end CI/CD pipelines in Azure DevOps, standardizing Auto Loader configuration, tokenized paths, Delta table properties, and checkpointing to reduce deployment errors by 40%. Migrated safety data from SQL Server into Postgres and Databricks, authoring all source SQL and 9 Informatica mappings that consolidate 10+ legacy tables into 5 normalized targets (7.7M+ records) through production release. Cut Netezza extract time by about 45% through JDBC partition tuning, and partnered with Data Governance and Platform teams on table and column-level metadata to ensure full lineage, catalog compliance, and audit readiness.",
    skills: [
      "Databricks",
      "LLM Agents",
      "Anthropic Claude",
      "Databricks Genie",
      "Apache Spark (Structured Streaming)",
      "Auto Loader",
      "Delta Lake",
      "Unity Catalog",
      "Azure DevOps",
      "GCP",
      "Informatica IICS",
      "SQL",
      "PostgreSQL",
      "SQL Server",
      "Python",
      "CI/CD",
      "CDC",
    ],
  },
  {
    id: 7,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDoKgL2K6bJWK1rJBHM9QAy01N2L2aiX8H6A&s",
    role: "Software Engineer",
    company: "Western University",
    date: "May 2025 - August 2025",
    desc: "Led frontend development of a multi-project Admin Dashboard and AI Chat Interface using React, Vite, and TypeScript, implementing hierarchical RBAC, ReAct agent support, real-time SSE streaming with request cancellation, RAG document ingestion, and multi-source data integrations. Centralized access control and automated user provisioning, reducing manual administrative effort by about 50% and cutting onboarding time from 1 day to under 4 hours. Accelerated research workflows by about 60% by unifying chat, literature retrieval, and document processing into a single platform. Improved reliability and scalability through JWT-based authentication, input validation, lazy loading, and a modular typed API architecture, boosting performance by about 40% and reducing defects by about 20%.",
    skills: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "AI Agents (ReAct)",
      "RAG",
      "RESTful API Integration",
      "Server-Sent Events (SSE)",
      "JWT Authentication",
      "MySQL",
      "PostgreSQL",
    ],
    doc: "",
  },
  {
    id: 6,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjKsL4RPjRVn1G6ii2l-mA6LG_vnNBG52KbQ&s",
    role: "Software Developer",
    company: "OGES INFOTECH",
    date: "May 2024 - August 2024",
    desc: "Modernized the development pipeline by building Jenkins-based CI/CD workflows for a 50+ microservice Spring Boot system, with automated unit, integration, and static analysis checks on every push, reducing integration issues by 45% and shortening release cycles by 30%. Led a security audit of the authentication system, identifying MD5 hashing vulnerabilities through controlled Hashcat testing and migrating to bcrypt with 12+ salt rounds, reducing brute-force risk exposure by 80%. Enhanced a financial analytics dashboard with Java-based visualizations of live stock risk data, modeled loan workflows using UML state diagrams, and researched ML-based credit scoring approaches, improving data clarity for stakeholders by 60% and laying the foundation for an AI-driven credit risk prototype.",
    skills: [
      "Java",
      "Spring Boot",
      "Microservices",
      "Object Oriented Programming (OOP)",
      "REST APIs",
      "Machine Learning",
      "UML",
      "Jenkins",
      "CI/CD",
    ],
    doc: "",
  },
  {
    id: 5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjKsL4RPjRVn1G6ii2l-mA6LG_vnNBG52KbQ&s",
    role: "Software Developer",
    company: "OGES INFOTECH",
    date: "May 2023 - August 2023",
    desc: "Enhanced a Point of Sale system supporting credit, debit, and gift card transactions, event ticketing, and online parking payments. Built a staged Java and MongoDB pipeline to automate merchant settlement, processing CSV transaction files through state-machine ingestion stages to reduce manual reconciliation errors. Led merchant settlement processes by generating customized settlement files and designing a reliable communication framework for transmitting files to acquiring institutions with real-time status tracking. Improved transaction reconciliation workflows by updating database states based on acquiring institution feedback, achieving a 30% increase in processing efficiency and a 20% reduction in settlement time.",
    skills: [
      "Java",
      "MongoDB",
      "Postman API",
      "OAuth",
      "Spring Security",
      "REST APIs",
      "Object-Oriented Programming (OOP)",
      "Spring Boot",
    ],
    doc: "",
  },
  {
    id: 4,
    img: "https://media.licdn.com/dms/image/C4D0BAQGSi5ChozrPQA/company-logo_200_200/0/1630478722933/westernuai_logo?e=2147483647&v=beta&t=tDoyrlvKYSbxXM9QKI45GOojZCAGPsVuFNA4wI1iR4M",
    role: "Lead Software Developer",
    company: "Western AI",
    date: "September 2022 - April 2023",
    desc: "Led a team of 5 developers to build a machine learning sales forecasting model using TensorFlow, Scikit-learn, and XGBoost, achieving predictions within a 5% margin of error. Directed data preprocessing and feature engineering workflows while coordinating collaborative model experimentation and validation using MAE, MSE, and R2 metrics. Established structured development practices and knowledge sharing across the team, delivering a reliable, production-ready forecasting solution.",
    skills: [
      "Java",
      "Python",
      "TensorFlow",
      "Scikit-learn",
      "XGBoost",
      "REST APIs",
      "Artificial Intelligence",
      "Project Management",
      "NumPy",
      "Problem Solving",
    ],
    doc: "",
  },
  {
    id: 3,
    img: "https://media.licdn.com/dms/image/C4E0BAQF4kPFf2nwQGw/company-logo_200_200/0/1631336876249?e=2147483647&v=beta&t=0y2hGejRcPMYXBAeNMRIx2EiSTFqtFtJ_JyQNrNde6g",
    role: "Software Developer",
    company: "The Buckmaster Institute Inc",
    date: "May 2022 - September 2022",
    desc: "Refactored and productionized Python scripts for transcribing audio recordings into musical notation, improving runtime efficiency by 95%. Generated frequency-based audio samples using pyAudioAnalysis and analyzed waveform accuracy with an 87% precision rate. Conducted CSV-based data analysis using SciPy, NumPy, StatsModels, and Matplotlib, contributing over 20 database entries. Produced weekly technical education videos that increased average viewership by 72%.",
    skills: [
      "Python",
      "NumPy",
      "Algorithms",
      "SciPy",
      "Plac",
      "StatsModels",
      "Matplotlib",
      "pyAudioAnalysis",
    ],
    doc: "",
  },
  {
    id: 2,
    img: "https://media.licdn.com/dms/image/D560BAQFCvWORw4jV9g/company-logo_200_200/0/1696259066115/astro_stem_labs_logo?e=2147483647&v=beta&t=-kKXwLuKfKC-o21bOeJf648KhJRiT2FW2aXfyiaA84I",
    role: "Mathematics Teacher",
    company: "Astro STEM Labs",
    date: "July 2020 - August 2021",
    desc: "Provided interactive one-on-one mathematics tutoring, helping students build stronger learning and study techniques while strengthening communication and active listening skills.",
    skills: ["Mathematics", "Problem Solving", "Communication"],
    doc: "",
  },
  {
    id: 1,
    img: "https://spiritofmath.com/wp-content/themes/spirit-of-math-v1.5/rsrc/img/spirit-of-math-ico.png",
    role: "Teacher Assistant",
    company: "Spirit of Math Schools",
    date: "February 2018 - June 2021",
    desc: "Elevated student performance by providing personalized instruction to over 20 students, expanding their knowledge and addressing individual concerns. Implemented engaging activities that improved learning outcomes and encouraged positive, safe conduct in both online and in-person settings. Supported educators through effective student record management and tailored lesson planning, reducing their workload by 40%. Delivered instruction using presentations, hands-on demonstrations, and other educational tools in both virtual and physical classrooms.",
    skills: [
      "Leadership",
      "Mathematics",
      "Teaching",
      "Problem Solving",
      "People Management",
    ],
  },
];

export const education = [
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDoKgL2K6bJWK1rJBHM9QAy01N2L2aiX8H6A&s",
    school: "Western University",
    date: "September 2021 - April 2025",
    grade: "82%",
    desc: "Bachelor of Engineering Science in Software Engineering. Coursework included Data Structures and Algorithms, Operating Systems, Database Systems, Computer Networks, and Object-Oriented Design. Actively involved in Western AI and the Western Founders Network, contributing to collaborative technical projects and interdisciplinary initiatives.",
    degree: "Bachelor of Engineering Science, Software Engineering",
  },
  {
    id: 1,
    img: "https://pbs.twimg.com/profile_images/1829694977/xavier-crest-original_400x400.jpg",
    school: "St. Francis Xavier Secondary School",
    date: "September 2017 - June 2021",
    grade: "97%",
    desc: "Ontario Secondary School Diploma. Served as President of the Engineering Club and participated in the Specialist High Skills Major (SHSM) program in Transportation, focusing on applied engineering and technical leadership.",
    degree: "Ontario Secondary School Diploma (OSSD)",
  },
  {
    id: 0,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/International_Baccalaureate_Logo.svg/2048px-International_Baccalaureate_Logo.svg.png",
    school: "St. Francis Xavier Secondary School, IB Program",
    date: "September 2019 - June 2021",
    grade: "97%",
    desc: "Completed the International Baccalaureate Diploma with Higher Level courses in Mathematics, Physics, and Economics, and Standard Level courses in Chemistry, English, and French.",
    degree: "International Baccalaureate (IB) Diploma",
  },
];

export const projects = [
  {
    id: 25,
    title: "Predicting Lane Boundaries",
    date: "March 2025",
    description:
      "Developed a lane detection system for autonomous vehicles by combining traditional computer vision with deep learning. Implemented Canny and Sobel edge detection, Hough Transform, and a custom VGG16 UNet segmentation model trained on the TuSimple dataset. Achieved 97.72% validation accuracy through preprocessing steps including grayscale conversion, ROI masking, and brightness normalization, with clear next steps identified for robustness in low visibility conditions.",
    image: LaneDetection,
    tags: [
      "Python",
      "OpenCV",
      "TensorFlow",
      "Keras",
      "VGG16",
      "UNet",
      "Computer Vision",
      "Hough Transform",
      "Image Segmentation",
    ],
    category: "ml",
    github: "https://github.com/Jeffano/Predicting-Lane-Boundaries",
    webapp: "",
  },
  {
    id: 24,
    title: "GeneScope",
    date: "September 2024 - April 2025",
    description:
      "Designed and developed a full stack genomic analysis platform with AI assisted interpretation and real time visualization. Built with React.js, Node.js and Express, MongoDB, and AWS services including Amplify, Cognito, and S3. Implemented a secure file processing pipeline for uploads, tracking, and retrieval, and custom REST APIs that deliver AI generated genetic insights. Integrated GPT 2 and LLaMA models to produce accessible explanations for both technical and non technical users, doubling analysis speed for laboratory workflows.",
    image: GeneScope,
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AWS Amplify",
      "AWS Cognito",
      "AWS S3",
      "REST API",
      "GPT-2",
      "LLaMA",
      "AI",
    ],
    category: "web-app",
    github: "https://github.com/Jeffano/GeneScope",
    webapp: "https://youtu.be/mODFWydZKWs",
  },
  {
    id: 23,
    title: "Remaining Useful Life Prediction",
    date: "October 2024",
    description:
      "Built a predictive maintenance system to estimate remaining useful life of jet engines using the NASA C MAPSS dataset. Modeled time series sensor data using Linear Regression, Random Forest, SVR with PCA, and LSTM, with LSTM and SVR performing best on capturing temporal degradation patterns. Focused on preprocessing, feature selection, and dimensionality reduction to improve signal quality and reduce noise, turning raw sensor streams into actionable maintenance insights.",
    image: TurboFan,
    tags: [
      "Python",
      "Scikit-learn",
      "TensorFlow",
      "Keras",
      "LSTM",
      "SVR",
      "Random Forest",
      "PCA",
      "Predictive Maintenance",
      "Time Series Analysis",
      "NASA C-MAPSS",
    ],
    category: "ml",
    github: "https://github.com/Jeffano/Remaining-Useful-Life-Prediction",
    webapp: "https://youtu.be/DRU52p_B_oE",
  },
  {
    id: 22,
    title: "AI Recipe Generator",
    date: "August 2024",
    description:
      "Developed a serverless web application for AI powered recipe generation using React and AWS Amplify. Integrated Amazon Bedrock with Claude 3 Sonnet to generate recipes from user provided ingredients. Implemented authentication with Amazon Cognito and a GraphQL API backed by DynamoDB to support a smooth end to end user experience.",
    image: RecipeGenerator,
    tags: [
      "React",
      "AWS Amplify",
      "AWS Lambda",
      "Amazon Bedrock",
      "Claude 3 Sonnet",
      "GraphQL",
      "Amazon DynamoDB",
      "Amazon Cognito",
    ],
    category: "web-app",
    github: "https://github.com/Jeffano/ai-recipe-generator",
    webapp: "https://youtu.be/5K6dWU0f4bo",
  },
  {
    id: 21,
    title: "AI Text Generation GPT-2",
    date: "May 2024 - August 2024",
    description:
      "Built an AI powered text generation tool using Hugging Face Transformers and GPT 2. Implemented prompt driven generation workflows and evaluation experiments to produce coherent, context aware outputs, demonstrating practical NLP applications for automated content creation.",
    image: AITextGenerator,
    tags: [
      "Python",
      "NLP",
      "GPT-2",
      "Hugging Face Transformers",
      "Text Generation",
      "Language Models",
    ],
    category: "ml",
    github: "https://github.com/Jeffano/AI-Text-Generation-GPT-2",
    webapp: "",
  },
  {
    id: 20,
    title: "Customer Churn Prediction",
    date: "May 2024 - August 2024",
    description:
      "Developed a churn prediction model to identify customers at risk of leaving based on historical usage and account features. Trained and evaluated classification approaches including logistic regression, emphasizing feature engineering, model interpretability, and clear performance reporting for retention focused decision making.",
    image: CustomerChurn,
    tags: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Machine Learning",
      "Logistic Regression",
      "Data Visualization",
      "Predictive Analytics",
    ],
    category: "ml",
    github: "https://github.com/Jeffano/Customer-Churn-Prediction",
    webapp: "",
  },
  {
    id: 19,
    title: "Model Car Management System",
    date: "May 2024 - August 2024",
    description:
      "Built a full stack CRUD web application for managing a collection of model cars. Developed a React frontend, Node.js and Express backend, and MongoDB data layer with secure authentication. Implemented create, update, delete, and search workflows with clean data validation and user friendly views for browsing detailed inventory records.",
    image: ModelCar,
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Firebase"],
    category: "web-app",
    github: "https://github.com/Jeffano/CarManagementApp",
    webapp: "",
  },
  {
    id: 18,
    title: "Microcontroller LED Game",
    date: "March 2024",
    description:
      "Built an embedded LED sequence game in C featuring timed pattern changes and interactive button controls. Implemented state based sequencing logic with dynamic delays and user driven behavior changes, emphasizing deterministic timing and responsive input handling.",
    image: MicrocontrollerGame,
    tags: ["C", "Embedded Systems", "GPIO", "Timing", "State Machines"],
    category: "embedded",
    github: "https://github.com/Jeffano/Microcontroller-LED-Game",
    webapp: "",
  },
  {
    id: 17,
    title: "Singleton Controller for Networking",
    date: "March 2024",
    description:
      "Implemented a singleton module for managing sequence numbers and timestamps in a networked application. Added safe increment logic and periodic timestamp updates with 32 bit rollover constraints to support consistent packet ordering and timing metadata across sessions.",
    image: SingletonController,
    tags: ["JavaScript", "Networking", "Design Patterns"],
    category: "systems",
    github: "https://github.com/Jeffano/Singleton-Controller-for-Networking",
    webapp: "",
  },
  {
    id: 16,
    title: "DHT Table Management System",
    date: "February 2024",
    description:
      "Implemented core utilities for managing a Distributed Hash Table including packet creation, prefix length computation, bucket maintenance, and peer metadata updates. Focused on correctness of routing table behaviors and peer management logic for decentralized networking.",
    image: DHTTable,
    tags: ["JavaScript", "Distributed Systems", "Networking", "DHT"],
    category: "systems",
    github: "https://github.com/Jeffano/DHT-Table-Management-System",
    webapp: "",
  },
  {
    id: 15,
    title: "Cheer Website",
    date: "January 2024 - April 2024",
    description:
      "Developed an accessible full stack website for Ongoing Living and Learning Inc. to support adults with disabilities, families, and caregivers. Delivered responsive pages, clear information architecture, and community focused content to improve resource discoverability and communication.",
    image: CheerWebsiteImage,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript"],
    category: "web-app",
    github: "https://github.com/Jeffano/CHEER-Fullstack-Website",
    webapp: "https://youtu.be/Aiu-fwW3Rbw",
  },
  {
    id: 14,
    title: "Calculator App",
    date: "January 2024 - April 2024",
    description:
      "Built a UI and usability focused calculator suite featuring an INFIX calculator, an RPN calculator, and an order of operations calculator with parentheses support. Evaluated interaction models and usability tradeoffs across novice and advanced user workflows.",
    image: CalculatorImage,
    tags: ["UI/UX", "HCI", "INFIX", "RPN", "Usability Testing"],
    category: "web-app",
    github: "https://github.com/Jeffano/CalculatorApp",
    webapp: "",
  },
  {
    id: 13,
    title: "Chatroom App",
    date: "January 2024 - April 2024",
    description:
      "Built a real time chatroom application using a C++ multi threaded server and a Python client. Implemented socket based messaging, per client connection handling, and semaphore controlled synchronization to ensure stable concurrent communication and graceful shutdown behavior.",
    image: ChatroomImage,
    tags: ["C++", "Python", "Sockets", "Multithreading", "Semaphores"],
    category: "systems",
    github: "https://github.com/Jeffano/ChatroomApp",
    webapp: "",
  },
  {
    id: 12,
    title: "PigeonPlex - Movie DB",
    date: "September 2023 - December 2023",
    description:
      "Developed a full stack movie theater platform enabling ticket purchases, refunds, and movie browsing across showtimes. Built responsive interfaces in React and implemented backend workflows with Django and MySQL, including Firebase authentication and agile team delivery practices.",
    image: PigeonPlexImage,
    tags: ["React.js", "Django", "MySQL", "Python", "Firebase", "JavaScript"],
    category: "web-app",
    github: "https://github.com/Jeffano/Movie-Database-System",
    webapp: "",
  },
  {
    id: 11,
    title: "Superhero Management System",
    date: "December 2023",
    description:
      "Built a full stack superhero catalog application with a Node.js and Express REST API and MongoDB storage. Delivered a lightweight frontend using HTML, CSS, and JavaScript with asynchronous operations, input sanitization, and workflows for creating and managing favorite hero lists.",
    image: Superhero,
    tags: ["Node.js", "Express.js", "MongoDB", "REST API", "JavaScript", "HTML", "CSS"],
    category: "web-app",
    github: "https://github.com/Jeffano/Superhero-Management-System",
    webapp: "",
  },
  {
    id: 10,
    title: "Grocery and Retail Recommendation System",
    date: "December 2023",
    description:
      "Built a recommendation system that suggests retail items based on grocery purchase history. Used KNN to identify top user preference categories and generated item recommendations from retail datasets, focusing on feature engineering and evaluation of recommendation quality.",
    image: RecommendationSystem,
    tags: ["Python", "Machine Learning", "Recommendation System", "KNN", "Data Processing"],
    category: "ml",
    github: "https://github.com/Jeffano/Grocery-and-Retail-Recommendation-System",
    webapp: "https://youtu.be/Q1V0lZJBVak",
  },
  {
    id: 9,
    title: "The Battle of The Marauders",
    date: "January 2023 - April 2023",
    description:
      "Developed a 16 bit RPG game using Python and Pygame featuring 2D platforming, turn based combat, and character upgrades. Built core gameplay systems including movement, combat loops, progression, and level navigation with a focus on interactive user experience.",
    image: BattleGame,
    tags: ["Python", "Pygame", "Game Development"],
    category: "game",
    github: "https://github.com/Jeffano/The-Battle-of-the-Marauders",
    webapp: "https://youtu.be/togiNx3HCbc?si=hfTkzUUkh7MUKVqy",
  },
  {
    id: 8,
    title: "Sales Forecasting Model",
    date: "September 2022 - April 2023",
    description:
      "Developed a machine learning forecasting model to predict item sales across multiple retail branches. Applied preprocessing and feature engineering, trained models using TensorFlow and XGBoost, and achieved predictions within a 5% error margin. Optimized training workflows to reduce training time by 20% and evaluated performance using MAE, MSE, and R2 metrics.",
    image: SalesForecasting,
    tags: [
      "Python",
      "TensorFlow",
      "Scikit-learn",
      "XGBoost",
      "Machine Learning",
      "Forecasting",
      "Feature Engineering",
    ],
    category: "ml",
    github: "https://github.com/Jeffano/Sales-Forecaster",
    webapp: "",
  },
  {
    id: 7,
    title: "iFinance Database",
    date: "March 2023 - April 2023",
    description:
      "Built a personal finance management system using Java and JavaFX with a Derby database backend. Implemented double entry bookkeeping across assets, liabilities, income, and expenses, supporting account management, secure authentication, and reporting features such as balance sheets and profit and loss statements.",
    image: iFinance,
    tags: ["Java", "JavaFX", "Derby", "Database Systems"],
    category: "java",
    github: "https://github.com/Jeffano/iFinance-Database",
    webapp: "",
  },
  {
    id: 6,
    title: "Tennis Ball DB",
    date: "February 2023",
    description:
      "Developed a JavaFX database application to manage summer T ball teams, games, and scores. Connected to a Derby database, implemented SQL queries for standings and match updates, and built UI workflows for adding teams and recording results.",
    image: TennisDB,
    tags: ["Java", "JavaFX", "SQL", "Derby", "GUI Development"],
    category: "java",
    github: "https://github.com/Jeffano/Tennis-Ball-Database",
    webapp: "",
  },
  {
    id: 5,
    title: "Money Translate",
    date: "January 2023",
    description:
      "Built a web app that summarizes complex financial documents into clear, beginner friendly explanations. Users upload a PDF and receive an AI generated summary highlighting key concepts and takeaways using a Python and React based workflow.",
    image: MoneyTranslate,
    tags: ["Python", "React", "JavaScript", "NLP"],
    category: "python",
    github: "https://github.com/Jeffano/MoneyTranslate",
    webapp: "",
  },
  {
    id: 4,
    title: "Sorting Method Visualizer",
    date: "September 2022 - December 2022",
    description:
      "Built a Java visualization tool to demonstrate and compare sorting algorithms including Bubble Sort, Merge Sort, and Quick Sort. Implemented real time animations to show element movement and algorithm behavior, helping users understand time complexity tradeoffs.",
    image: SortingMethod,
    tags: ["Java", "Algorithms", "Sorting", "Visualization"],
    category: "java",
    github: "https://github.com/Jeffano/Sorting-Method-Visualizer",
    webapp: "",
  },
  {
    id: 3,
    title: "The Watercooler",
    date: "October 2022",
    description:
      "Built a full stack platform that matches remote employees based on shared interests. Users complete onboarding questions and the system recommends connections, supporting collaboration and social interaction in distributed teams.",
    image: Watercooler,
    tags: ["Python", "JavaScript", "Web App"],
    category: "python",
    github: "https://github.com/Jeffano/TheWatercooler",
    webapp: "",
  },
  {
    id: 2,
    title: "Python Snake Game",
    date: "July 2021",
    description:
      "Built a classic Snake game using Python and Pygame with scoring, audio effects, and real time gameplay. Implemented collision handling, game state management, and responsive controls.",
    image: PythonSnake,
    tags: ["Python", "Pygame", "Game Development"],
    category: "python",
    github: "https://github.com/Jeffano/Snake",
    webapp: "",
  },
  {
    id: 1,
    title: "Java Connect 4 Game",
    date: "July 2020",
    description:
      "Implemented a graphical Connect Four game using Java Swing featuring a 7 by 7 grid, turn based gameplay, win detection, and interactive UI feedback. Built core game state logic and dynamic UI controls for a smooth user experience.",
    image: Connect4,
    tags: ["Java", "Swing", "GUI", "Game Development"],
    category: "java",
    github: "https://github.com/Jeffano/Connect-4",
    webapp: "",
  },
];