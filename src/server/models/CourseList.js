export const courseModels = [
  {
    id: 1,
    name: "Introduction to React Native",
    instructor: "John Doe",
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    likes: 150,
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
      {
        week: 3,
        topic: "React Native Components and Styling",
        content:
          "Understanding and utilizing React Native components, styling techniques for app development.",
      },

      {
        week: 4,
        topic: "Navigation in React Native",
        content:
          "Implementing navigation between screens in a React Native application.",
      },

      {
        week: 5,
        topic: "State Management with Redux",
        content:
          "Introduction to state management in React Native using Redux for global state.",
      },

      {
        week: 6,
        topic: "API Integration and Fetching Data",
        content:
          "Connecting React Native apps to APIs, fetching and displaying data in your application.",
      },

      {
        week: 7,
        topic: "Handling User Input and Forms",
        content:
          "Capturing and processing user input, working with forms in React Native.",
      },

      {
        week: 8,
        topic: "Testing and Debugging",
        content:
          "Methods for testing and debugging React Native applications for optimal performance.",
      },
    ],
    students: [
      {
        id: 104,
        name: "Diana Miller",
        email: "diana@example.com",
      },
      {
        id: 105,
        name: "Eva White",
        email: "eva@example.com",
      },
      {
        id: 106,
        name: "Frank Johnson",
        email: "frank@example.com",
      },
    ],
  },
  {
    id: 2,
    name: "Web Development Fundamentals",
    instructor: "Jane Smith",
    description:
      "A comprehensive course on the fundamentals of web development.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://static.vecteezy.com/system/resources/thumbnails/011/153/368/small/3d-website-developer-working-on-laptop-illustration-png.png",
    duration: "8 weeks",
    schedule: "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
    location: "Online",
    likes: 350,
    prerequisites: ["Basic HTML and CSS knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to HTML",
        content: "Understanding the basics of HTML and document structure.",
      },
      {
        week: 2,
        topic: "Styling with CSS",
        content: "Applying styles to HTML elements using CSS.",
      },
      {
        week: 3,
        topic: "Responsive Web Design",
        content:
          "Designing websites that adapt to different screen sizes using media queries and flexible layouts.",
      },

      {
        week: 4,
        topic: "CSS Flexbox and Grid",
        content:
          "Exploring the power of CSS Flexbox and Grid for creating versatile and efficient layouts.",
      },

      {
        week: 5,
        topic: "Introduction to JavaScript",
        content:
          "Basic concepts of JavaScript programming language and its integration with HTML.",
      },

      {
        week: 6,
        topic: "DOM Manipulation",
        content:
          "Understanding the Document Object Model (DOM) and manipulating HTML content using JavaScript.",
      },

      {
        week: 7,
        topic: "CSS Preprocessors (e.g., Sass)",
        content:
          "Introduction to CSS preprocessors for more maintainable and modular stylesheets.",
      },

      {
        week: 8,
        topic: "Web Accessibility",
        content:
          "Ensuring websites are accessible to users with disabilities through proper HTML, CSS, and ARIA practices.",
      },
    ],
    students: [
      {
        id: 201,
        name: "Grace Thompson",
        email: "grace@example.com",
      },
      {
        id: 202,
        name: "Henry Wilson",
        email: "henry@example.com",
      },
      {
        id: 203,
        name: "Isabel Davis",
        email: "isabel@example.com",
      },
    ],
  },
  {
    id: 3,
    name: "Data Science Basics",
    instructor: "Alex Johnson",
    description: "An introduction to the foundations of data science.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://www.auronova.in/images/services/data-science-overview.png",
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    likes: 100,
    prerequisites: ["Basic Python knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Data Science",
        content: "Overview of data science and its applications.",
      },
      {
        week: 2,
        topic: "Data Analysis with Pandas",
        content: "Introduction to data analysis using the Pandas library.",
      },
      {
        week: 3,
        topic: "Data Visualization with Matplotlib and Seaborn",
        content:
          "Creating informative and visually appealing plots and charts using Matplotlib and Seaborn libraries.",
      },

      {
        week: 4,
        topic: "Introduction to Machine Learning",
        content:
          "Fundamental concepts of machine learning and its applications in data science.",
      },

      {
        week: 5,
        topic: "Supervised Learning Algorithms",
        content:
          "Exploration of supervised learning algorithms such as linear regression and decision trees.",
      },

      {
        week: 6,
        topic: "Unsupervised Learning Techniques",
        content:
          "Understanding unsupervised learning methods like clustering and dimensionality reduction.",
      },

      {
        week: 7,
        topic: "Model Evaluation and Validation",
        content:
          "Methods for evaluating and validating machine learning models to ensure their effectiveness.",
      },

      {
        week: 8,
        topic: "Introduction to Natural Language Processing (NLP)",
        content:
          "Overview of NLP and its applications in extracting insights from textual data.",
      },
    ],
    students: [
      {
        id: 204,
        name: "Jack Miller",
        email: "jack@example.com",
      },
      {
        id: 205,
        name: "Katherine Lee",
        email: "katherine@example.com",
      },
      {
        id: 206,
        name: "Liam Harris",
        email: "liam@example.com",
      },
    ],
  },
  {
    id: 4,
    name: "Python for Beginners",
    instructor: "Sarah Davis",
    description: "Learn the basics of Python programming language.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png",
    duration: "8 weeks",
    schedule: "Mondays and Wednesdays, 5:00 PM - 7:00 PM",
    location: "Online",
    likes: 300,
    prerequisites: ["No prior programming experience required"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Python",
        content: "Basic syntax, data types, and control structures.",
      },
      {
        week: 2,
        topic: "Functions and Modules",
        content: "Defining functions and organizing code with modules.",
      },
      {
        week: 3,
        topic: "Object-Oriented Programming (OOP) in Python",
        content:
          "Understanding the principles of OOP and implementing them in Python.",
      },

      {
        week: 4,
        topic: "File Handling and Input/Output",
        content:
          "Working with files, reading and writing data, and handling input/output operations in Python.",
      },

      {
        week: 5,
        topic: "Error Handling and Exceptional Cases",
        content:
          "Managing errors and handling exceptional cases in Python programs.",
      },

      {
        week: 6,
        topic: "Web Scraping with Beautiful Soup",
        content:
          "Introduction to web scraping using the Beautiful Soup library in Python.",
      },

      {
        week: 7,
        topic: "Data Manipulation with NumPy and Pandas",
        content:
          "Utilizing NumPy and Pandas for efficient data manipulation and analysis.",
      },

      {
        week: 8,
        topic: "Introduction to Python Testing",
        content:
          "Overview of testing methodologies in Python and writing basic test cases.",
      },
    ],
    students: [
      {
        id: 207,
        name: "Mia Rodriguez",
        email: "mia@example.com",
      },
      {
        id: 208,
        name: "Nathan White",
        email: "nathan@example.com",
      },
      {
        id: 209,
        name: "Olivia Brown",
        email: "olivia@example.com",
      },
    ],
  },
  {
    id: 5,
    name: "Mobile App Design",
    instructor: "Daniel Johnson",
    description:
      "Create visually appealing and user-friendly mobile app designs.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://www.andromo.com/wp-content/uploads/2021/12/Mobile-app-prototype-1536x865.png",
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 4:00 PM - 6:00 PM",
    location: "Online",
    likes: 200,
    prerequisites: ["Basic design knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Fundamentals of Design",
        content: "Basic design principles and color theory.",
      },
      {
        week: 2,
        topic: "User Interface (UI) Design",
        content: "Creating effective user interfaces for mobile apps.",
      },
      {
        week: 3,
        topic: "Interactive Prototyping",
        content:
          "Using tools like Figma or Adobe XD to create interactive prototypes for user testing.",
      },

      {
        week: 4,
        topic: "Usability and User Experience (UX) Principles",
        content:
          "Understanding the principles of usability and user experience in design.",
      },

      {
        week: 5,
        topic: "Designing for Multiple Devices",
        content:
          "Adapting designs for various devices and screen sizes to ensure a consistent user experience.",
      },

      {
        week: 6,
        topic: "Visual Hierarchy and Information Architecture",
        content:
          "Structuring information and establishing a clear visual hierarchy in design layouts.",
      },

      {
        week: 7,
        topic: "Design Systems and Components",
        content:
          "Creating and utilizing design systems to maintain consistency across multiple UI components.",
      },

      {
        week: 8,
        topic: "Portfolio Building and Showcase",
        content:
          "Building a portfolio showcasing design projects and discussing design decisions.",
      },
    ],
    students: [
      {
        id: 210,
        name: "Peter Martinez",
        email: "peter@example.com",
      },
      {
        id: 211,
        name: "Quinn Taylor",
        email: "quinn@example.com",
      },
      {
        id: 212,
        name: "Rachel Adams",
        email: "rachel@example.com",
      },
    ],
  },
  {
    id: 6,
    name: "Machine Learning Basics",
    instructor: "Ryan Miller",
    description: "Introduction to machine learning concepts and algorithms.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://img.pikbest.com/element_our/20220416/bg/811e6fa18bf98.png!w700wp",
    duration: "8 weeks",
    schedule: "Fridays, 6:00 PM - 8:00 PM",
    location: "Online",
    likes: 520,
    prerequisites: ["Basic knowledge of Python"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Machine Learning",
        content: "Overview of machine learning and its applications.",
      },
      {
        week: 2,
        topic: "Linear Regression",
        content: "Understanding and implementing linear regression.",
      },
      {
        week: 3,
        topic: "Logistic Regression and Classification",
        content:
          "Exploring logistic regression for binary classification and extending to multiclass classification.",
      },

      {
        week: 4,
        topic: "Decision Trees and Ensemble Methods",
        content:
          "Introduction to decision trees and ensemble methods like random forests and boosting.",
      },

      {
        week: 5,
        topic: "Clustering Techniques",
        content:
          "Understanding unsupervised learning through clustering techniques such as k-means and hierarchical clustering.",
      },

      {
        week: 6,
        topic: "Dimensionality Reduction",
        content:
          "Reducing the dimensionality of data using techniques like Principal Component Analysis (PCA).",
      },

      {
        week: 7,
        topic: "Neural Networks and Deep Learning",
        content:
          "Introduction to neural networks and deep learning concepts for complex pattern recognition.",
      },

      {
        week: 8,
        topic: "Model Evaluation and Hyperparameter Tuning",
        content:
          "Methods for evaluating machine learning models and optimizing their performance through hyperparameter tuning.",
      },
    ],
    students: [
      {
        id: 213,
        name: "Samuel Turner",
        email: "samuel@example.com",
      },
      {
        id: 214,
        name: "Sophia Davis",
        email: "sophia@example.com",
      },
      {
        id: 215,
        name: "Tom Clark",
        email: "tom@example.com",
      },
    ],
  },
  {
    id: 7,
    name: "Java Programming Fundamentals",
    instructor: "Emily White",
    description: "Learn the basics of Java programming language.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://icon-library.com/images/java-icon-png/java-icon-png-15.jpg",
    duration: "8 weeks",
    schedule: "Wednesdays, 5:00 PM - 7:00 PM",
    location: "Online",
    likes: 111,
    prerequisites: ["No prior programming experience required"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Java",
        content: "Basic syntax, data types, and control structures.",
      },
      {
        week: 2,
        topic: "Object-Oriented Programming (OOP)",
        content: "Understanding OOP concepts and Java classes.",
      },
      {
        week: 3,
        topic: "Exception Handling and File I/O",
        content:
          "Handling exceptions and working with file input/output operations in Java.",
      },

      {
        week: 4,
        topic: "Collections Framework",
        content:
          "Exploring the Java Collections Framework for efficient data storage and manipulation.",
      },

      {
        week: 5,
        topic: "Multithreading in Java",
        content:
          "Introduction to multithreading concepts and their implementation in Java programs.",
      },

      {
        week: 6,
        topic: "Database Connectivity with JDBC",
        content:
          "Connecting Java applications to databases using Java Database Connectivity (JDBC).",
      },

      {
        week: 7,
        topic: "GUI Programming with Swing",
        content:
          "Creating graphical user interfaces (GUIs) using the Swing toolkit in Java.",
      },

      {
        week: 8,
        topic: "Introduction to Spring Framework",
        content:
          "Overview of the Spring Framework and its role in Java enterprise applications.",
      },
    ],
    students: [
      {
        id: 216,
        name: "Victoria Brown",
        email: "victoria@example.com",
      },
      {
        id: 217,
        name: "William Adams",
        email: "william@example.com",
      },
      {
        id: 218,
        name: "Xavier Harris",
        email: "xavier@example.com",
      },
    ],
  },
  {
    id: 8,
    name: "Cybersecurity Essentials",
    instructor: "Sophie Martinez",
    description: "Foundational concepts and practices in cybersecurity.",
    enrollmentStatus: "Open",
    thumbnail: "https://www.buildingsiot.com/hubfs/cybersecurity.png",
    duration: "8 weeks",
    schedule: "Thursdays, 7:00 PM - 9:00 PM",
    location: "Online",
    likes: 851,
    prerequisites: ["Basic computer knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Cybersecurity",
        content: "Overview of cybersecurity threats and defenses.",
      },
      {
        week: 2,
        topic: "Network Security",
        content: "Understanding and securing computer networks.",
      },
      {
        week: 3,
        topic: "Cryptography Fundamentals",
        content:
          "Introduction to cryptographic techniques for securing data and communications.",
      },

      {
        week: 4,
        topic: "Web Application Security",
        content:
          "Identifying and mitigating security vulnerabilities in web applications.",
      },

      {
        week: 5,
        topic: "Operating System Security",
        content:
          "Securing operating systems and understanding common security measures.",
      },

      {
        week: 6,
        topic: "Incident Response and Forensics",
        content:
          "Developing strategies for incident response and digital forensics in cybersecurity incidents.",
      },

      {
        week: 7,
        topic: "Security Policies and Compliance",
        content:
          "Establishing security policies and ensuring compliance with industry standards and regulations.",
      },

      {
        week: 8,
        topic: "Ethical Hacking and Penetration Testing",
        content:
          "Introduction to ethical hacking practices and conducting penetration testing for security assessments.",
      },
    ],
    students: [
      {
        id: 219,
        name: "Yasmine Turner",
        email: "yasmine@example.com",
      },
      {
        id: 220,
        name: "Zane Clark",
        email: "zane@example.com",
      },
      {
        id: 221,
        name: "Ava Robinson",
        email: "ava@example.com",
      },
    ],
  },
  {
    id: 9,
    name: "Graphic Design Principles",
    instructor: "David Brown",
    description: "Explore the principles and techniques of graphic design.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://img.freepik.com/premium-photo/computer-screen-with-colorful-paint-it-generative-ai_97167-1066.jpg",
    duration: "8 weeks",
    schedule: "Tuesdays, 4:00 PM - 6:00 PM",
    location: "Online",
    likes: 1090,
    prerequisites: ["Basic design knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Fundamentals of Design",
        content: "Basic design principles and composition.",
      },
      {
        week: 2,
        topic: "Color Theory",
        content: "Understanding and applying color in design.",
      },
      {
        week: 3,
        topic: "Typography Essentials",
        content:
          "Exploring the art and science of typefaces, fonts, and text arrangement.",
      },

      {
        week: 4,
        topic: "Layout Mastery",
        content:
          "Understanding and applying effective layout strategies for visual communication.",
      },

      {
        week: 5,
        topic: "Image Editing Techniques",
        content:
          "Introduction to basic image editing tools and techniques for graphic design.",
      },

      {
        week: 6,
        topic: "Brand Identity Design",
        content:
          "Creating cohesive and impactful brand identities through design elements.",
      },

      {
        week: 7,
        topic: "Digital Design Trends",
        content:
          "Exploration of current and emerging trends in digital graphic design.",
      },

      {
        week: 8,
        topic: "User Experience (UX) Design Basics",
        content:
          "Introduction to principles and practices for designing user-friendly experiences.",
      },
    ],
    students: [
      {
        id: 222,
        name: "Benjamin Harris",
        email: "benjamin@example.com",
      },
      {
        id: 223,
        name: "Catherine Davis",
        email: "catherine@example.com",
      },
      {
        id: 224,
        name: "Dylan Wilson",
        email: "dylan@example.com",
      },
    ],
  },
  {
    id: 10,
    name: "JavaScript Frameworks",
    instructor: "Liam Turner",
    description: "Explore popular JavaScript frameworks for web development.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png",
    duration: "8 weeks",
    schedule: "Wednesdays, 6:00 PM - 8:00 PM",
    location: "Online",
    likes: 1509,
    prerequisites: ["Intermediate JavaScript knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Frameworks",
        content: "Overview of popular JavaScript frameworks.",
      },
      {
        week: 2,
        topic: "React.js Basics",
        content: "Getting started with React.js and components.",
      },
      {
        week: 3,
        topic: "Vue.js Fundamentals",
        content: "Introduction to Vue.js framework and its core concepts.",
      },

      {
        week: 4,
        topic: "Angular Basics",
        content:
          "Getting familiar with Angular framework and building basic components.",
      },

      {
        week: 5,
        topic: "State Management in React",
        content:
          "Understanding and implementing state management in React.js applications.",
      },

      {
        week: 6,
        topic: "Advanced React.js Concepts",
        content:
          "Exploring advanced React.js concepts like hooks, context, and routing.",
      },

      {
        week: 7,
        topic: "Building RESTful APIs with Node.js",
        content:
          "Creating RESTful APIs using Node.js for backend development with JavaScript.",
      },

      {
        week: 8,
        topic: "Integration Testing with Jest and Enzyme",
        content:
          "Performing integration testing in React.js applications using Jest and Enzyme.",
      },
    ],
    students: [
      {
        id: 225,
        name: "Elena Miller",
        email: "elena@example.com",
      },
      {
        id: 226,
        name: "Finn Wilson",
        email: "finn@example.com",
      },
      {
        id: 227,
        name: "Gabriella Brown",
        email: "gabriella@example.com",
      },
    ],
  },
  {
    id: 11,
    name: "Mobile App Development with Flutter",
    instructor: "Noah Davis",
    description: "Build cross-platform mobile apps using Flutter framework.",
    enrollmentStatus: "Open",
    thumbnail: "https://logowik.com/content/uploads/images/flutter5786.jpg",
    duration: "8 weeks",
    schedule: "Mondays and Thursdays, 7:00 PM - 9:00 PM",
    location: "Online",
    likes: 1120,
    prerequisites: ["Basic Dart programming knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Flutter",
        content: "Overview of Flutter and Dart programming language.",
      },
      {
        week: 2,
        topic: "Building UI with Flutter",
        content: "Creating user interfaces with Flutter widgets.",
      },
      {
        week: 3,
        topic: "State Management in Flutter",
        content:
          "Understanding and implementing state management techniques in Flutter applications.",
      },

      {
        week: 4,
        topic: "Navigation in Flutter",
        content:
          "Implementing navigation between screens and managing app routes in Flutter.",
      },

      {
        week: 5,
        topic: "Flutter and Firebase Integration",
        content:
          "Connecting Flutter applications with Firebase for real-time databases and authentication.",
      },

      {
        week: 6,
        topic: "Advanced Flutter Widgets",
        content:
          "Exploring advanced Flutter widgets and customizing UI elements for specific design needs.",
      },

      {
        week: 7,
        topic: "Flutter Animation and Gestures",
        content:
          "Adding animations and handling user gestures in Flutter applications.",
      },

      {
        week: 8,
        topic: "Testing and Debugging in Flutter",
        content:
          "Methods for testing and debugging Flutter applications for optimal performance.",
      },
    ],
    students: [
      {
        id: 228,
        name: "Hannah Martinez",
        email: "hannah@example.com",
      },
      {
        id: 229,
        name: "Isaac Turner",
        email: "isaac@example.com",
      },
      {
        id: 230,
        name: "Julia Wilson",
        email: "julia@example.com",
      },
    ],
  },
  {
    id: 12,
    name: "Blockchain Fundamentals",
    instructor: "Aiden Johnson",
    description:
      "Explore the basics of blockchain technology and cryptocurrencies.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://png.pngtree.com/png-vector/20230112/ourmid/pngtree-blockchain-vector-transparent-image-png-image_6560354.png",
    duration: "8 weeks",
    schedule: "Tuesdays and Fridays, 6:00 PM - 8:00 PM",
    location: "Online",
    likes: 1890,
    prerequisites: ["Basic understanding of computer science"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Blockchain",
        content: "Overview of blockchain technology and decentralized systems.",
      },
      {
        week: 2,
        topic: "Cryptocurrencies",
        content: "Understanding and working with cryptocurrencies.",
      },
      {
        week: 3,
        topic: "Smart Contracts and Solidity",
        content:
          "Introduction to smart contracts and programming smart contracts using Solidity.",
      },

      {
        week: 4,
        topic: "Decentralized Applications (DApps)",
        content:
          "Building decentralized applications (DApps) using blockchain technology.",
      },

      {
        week: 5,
        topic: "Blockchain Consensus Mechanisms",
        content:
          "Exploration of different consensus mechanisms used in blockchain networks.",
      },

      {
        week: 6,
        topic: "Blockchain Security",
        content:
          "Understanding security challenges in blockchain systems and implementing best practices.",
      },

      {
        week: 7,
        topic: "Blockchain Use Cases",
        content:
          "Analyzing real-world use cases and applications of blockchain technology across industries.",
      },

      {
        week: 8,
        topic: "Blockchain and Regulation",
        content:
          "Examining legal and regulatory aspects related to blockchain technology.",
      },
    ],
    students: [
      {
        id: 231,
        name: "Kaden Wilson",
        email: "kaden@example.com",
      },
      {
        id: 232,
        name: "Lily Davis",
        email: "lily@example.com",
      },
      {
        id: 233,
        name: "Mason Brown",
        email: "mason@example.com",
      },
    ],
  },
  {
    id: 13,
    name: "Artificial Intelligence Concepts",
    instructor: "Sophia Turner",
    description:
      "Introduction to artificial intelligence and machine learning.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2zjsBydK_bLdlEr4azkXE8Pkza-rI7Twomx5tmFCPf3Ev3dh6CDsXghU9UoxJnZtFs_Y&usqp=CAU",
    duration: "8 weeks",
    schedule: "Mondays and Thursdays, 5:00 PM - 7:00 PM",
    location: "Online",
    likes: 3050,
    prerequisites: ["Basic understanding of programming"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to AI",
        content:
          "Overview of artificial intelligence concepts and applications.",
      },
      {
        week: 2,
        topic: "Machine Learning Basics",
        content: "Understanding the fundamentals of machine learning.",
      },
      {
        week: 3,
        topic: "Natural Language Processing (NLP)",
        content:
          "Introduction to NLP and its applications, including sentiment analysis and language processing.",
      },

      {
        week: 4,
        topic: "Computer Vision",
        content:
          "Exploring computer vision techniques and applications, including image recognition and object detection.",
      },

      {
        week: 5,
        topic: "Reinforcement Learning",
        content:
          "Understanding reinforcement learning concepts and their applications in AI systems.",
      },

      {
        week: 6,
        topic: "AI Ethics and Bias",
        content:
          "Discussing ethical considerations and addressing biases in AI algorithms and systems.",
      },

      {
        week: 7,
        topic: "AI in Industry",
        content:
          "Examining real-world applications of AI in various industries, such as healthcare and finance.",
      },

      {
        week: 8,
        topic: "Future Trends in AI",
        content:
          "Exploring emerging trends and future developments in the field of artificial intelligence.",
      },
    ],
    students: [
      {
        id: 234,
        name: "Natalie Martinez",
        email: "natalie@example.com",
      },
      {
        id: 235,
        name: "Owen Wilson",
        email: "owen@example.com",
      },
      {
        id: 236,
        name: "Peyton Brown",
        email: "peyton@example.com",
      },
    ],
  },
];
