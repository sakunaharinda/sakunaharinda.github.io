export const siteConfig = {
  name: "Sakuna Harinda Jayasundara",
  title: "Software Engineer & Researcher",
  description: "Portfolio website of Ryan Fitzgerald",
  accentColor: "#1d4ed8",
  social: {
    cv: "/cv.pdf",
    email: "sakunaj1996@gmail.com",
    linkedin: "https://www.linkedin.com/in/sakuna-harinda/",
    // twitter: "https://x.com/rfitzio",
    github: "https://github.com/sakunaharinda",
  },
  aboutMe:
    "Software Engineer and Researcher with 5+ years of industry and research experience building scalable, production-grade systems across backend development, machine learning, and automation. Brings 8+ years of experience in Python and Java, along with extensive work across modern ML frameworks, containerization, orchestration, CI/CD pipelines, and end-to-end test automation. Ph.D. from the University of Auckland, with research spanning deep learning, natural language processing, cybersecurity, and HCI. Focused on applying data-driven and research-informed approaches to solve real-world engineering problems.",
  skills: ["Pytorch", "Tensorflow", "Keras", "Python", "Java", "C/C++", "Springboot", "Docker", "Kubernetes"],
  projects: [
    {
      name: "Ragatouille",
      description:
        "The Ultimate Guide to Mastering Retrieval-Augmented Generation (RAG) with LangChain. Featured in LangChain LinkedIn page!.",
      link: "https://sakunah.com/ragatouille-book",
      skills: ["NLP", "Python", "Langchain", "Neo4J"],
    },
    // {
    //   name: "Chrome Extension Mastery: Build Full-Stack Extensions with React & Node.js",
    //   description:
    //     "Master the art of building production-ready, full-stack Chrome Extensions using modern web technologies and best practices",
    //   link: "https://fullstackextensions.com/?ref=devportfolio",
    //   skills: ["React", "Node.js", "AWS"],
    // },
    // {
    //   name: "ExtensionKit",
    //   description:
    //     "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
    //   link: "https://extensionkit.io/?ref=devportfolio",
    //   skills: ["React", "Node.js", "AWS"],
    // },
  ],
  publications: [
    {
      // name: "AI Dev Roundup Newsletter",
      type: "Journal",
      description:
        "Jayasundara, S. H., Gamagedara Arachchilage, N. A., \& Russello, G. (2024). SoK: Access control policy generation from high-level natural language requirements. ACM Computing Surveys, 57(4), 1-37.",
      // link: "https://aidevroundup.com/?ref=devportfolio",
      // skills: ["React", "Node.js", "AWS"],
    },
    {
      // name: "AI Dev Roundup Newsletter",
      type: "Conference",
      description:
        "Jayasundara, S. H., Arachchilage, N. A. G., \& Russello, G. (2024). \"AccessFormer\": Feedback-driven access control policy generation framework. In the Symposium on Usable Security and Privacy (USEC)."
      // link: "https://aidevroundup.com/?ref=devportfolio",
      // skills: ["React", "Node.js", "AWS"],
    },
    {
      // name: "AI Dev Roundup Newsletter",
      type: "Journal",
      description:
        "Jayasundara, S. H., Gamagedara Arachchilage, N. A., \& Russello, G. (2026). AGentVLM: Access Control Policy Generation and Verification Framework with Language Models. Journal of Information Security and Applications.",
      // link: "https://aidevroundup.com/?ref=devportfolio",
      // skills: ["React", "Node.js", "AWS"],
    },
    {
      // name: "AI Dev Roundup Newsletter",
      type: "Conference",
      description:
        "Abeywardena, K., Sumanthiran, S., Jayasundara, S. H., Karunasena, S., Rodrigo, R., \& Jayasekara, P. (2023, September). KORSAL: Key-Point Based Online Real-Time Spatio-Temporal Action Localization. In 2023 IEEE Canadian Conference on Electrical and Computer Engineering (CCECE) (pp. 279-284). IEEE.",
      // link: "https://aidevroundup.com/?ref=devportfolio",
      // skills: ["React", "Node.js", "AWS"],
    },
    {
      // name: "AI Dev Roundup Newsletter",
      type: "In Submission",
      description:
        "Jayasundara, S. H., Gamagedara Arachchilage, N. A., Biddle, R., \& Russello, G. (2026). CHAGent: Context-aware Human-centric Access Control Policy Generation. IEEE Symposium on Security and Privacy.",
      // link: "https://aidevroundup.com/?ref=devportfolio",
      // skills: ["React", "Node.js", "AWS"],
    },
    {
      type: "In Submission",
      // name: "AI Dev Roundup Newsletter",
      description:
        "Jayasundara, S. H., Gamagedara Arachchilage, N. A., Biddle, R., \& Russello, G. (2026). \"This is going to change the game\": Design and Evaluation of a Usable and Accurate Automated Access Control Policy Generation System. ACM CHI conference on Human Factors in Computing Systems.",
      // link: "https://aidevroundup.com/?ref=devportfolio",
      // skills: ["React", "Node.js", "AWS"],
    },
  ],
  experience: [
    {
      company: "H2O.ai",
      title: "Software Engineer",
      dateRange: "June 2022 - October 2022",
      bullets: [
        "Built and maintained scalable Wave applications to support internal and external ML workflows, enhancing reliability and developer productivity through automation.",
        "Designed and implemented robust end-to-end test automation pipelines using Python, Jenkins, and Groovy, reducing manual testing effort and increasing release velocity.",
        "Led the architecture and development of a best-in-class test automation framework, including guiding implementation, defining coding standards, and shaping the automation roadmap for cross-team use.",
        "Collaborated with engineering teams to integrate automation into CI/CD workflows, improving code quality and shortening time-to-deployment for key features."
      ],
    },
    {
      company: "Axiata Digital Labs",
      title: "Software Engineer",
      dateRange: "July 2021 - June 2022",
      bullets: [
        "Designed, developed, and maintained backend RESTful and SOAP APIs using Java and Spring Boot to support customer-facing services for clients associated with Celcom Malaysia, ensuring high reliability and seamless integration with existing telecommunications systems.",
        "Built an anomaly detection system leveraging OpenTelemetry data and machine learning models to identify performance and reliability issues in production services, enabling proactive issue detection and improved system observability.",
        "Developed an NLP-based repository classifier to automatically identify public GitHub projects with potential relevance to internal initiatives, streamlining competitive analysis and reducing manual review workload.",
        "Collaborated with cross-functional product and engineering teams to define API specifications, implement service integration, and ship scalable backend functionality under CI/CD workflows."
      ],
    },
    {
      company: "Paraqum Technologies",
      title: "Intern Electronics Engineer",
      dateRange: "May 2019 - December 2019",
      bullets: [
        "Developed a GTP (GPRS Tunneling Protocol) packet analysis tool along with a test environment, enabling detailed inspection and debugging of mobile core network traffic for protocol validation and performance analysis.",
        "Designed and implemented a load-balancing software module to monitor network interfaces and manage data traffic efficiently, improving throughput handling in simulated network scenarios.",
        "Enhanced performance and extended functionality of the company’s AD client software, optimizing existing C++ modules for responsiveness and reliability under real-world conditions."
      ],
    },
  ],
  education: [
    {
      school: "University of Auckland",
      degree: "Ph.D. in Computer Science",
      dateRange: "2022 October - 2026 January",
      achievements: [
        "Introduced a human-centric approach to automated access control policy generation, addressing fundamental limitations of both manual and fully automated methods by reducing human error and AI-induced inaccuracies.",
        "Developed language model-driven techniques to translate natural-language access requirements into enforceable access control policies, enabling accurate handling of complex, ambiguous, real-world specifications.",
        "Designed mechanisms that support automatic error detection and recovery, enabling safe deployment of AI-generated security policies in high-risk environments.",
        "Conducted empirical user studies with professional policy implementers, demonstrating improved accuracy, efficiency, trust, and adoption potential compared to existing approaches.",
        "Produced comprehensive analyses and datasets that address long-standing research gaps in access control policy generation.",
      ],
    },
    {
      school: "University of Moratuwa",
      degree: "B.Sc. (Hons.) in Electronics and Telecommunication Engineering",
      dateRange: "November 2026 - August 2021",
      achievements: [
        "Attained a GPA of 3.92/4.2, obtaining a First Class.",
        "Dean’s List Honoree, recognized in all four academic years of the B.Sc. program.",
      ],
    },
  ],
};
