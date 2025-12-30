export const personalInfo = {
  name: "Jagan Murugaiyan",
  title: "Full Stack Developer",
  phone: "+91 9360305400",
  email: "jaganeditz@gmail.com",
  location: "Puducherry, India",
  linkedin: "https://linkedin.com/in/jaganedits",
  github: "https://github.com/jaganedits",
  summary: "Results-driven Full Stack Developer with 2+ years of professional experience in developing enterprise-level web and mobile applications. Proficient in Angular, Flutter, .NET Core, Entity Framework, and SQL Server with hands-on experience in AWS cloud services (EC2, S3) and cross-platform mobile development.",
};

export const skills = {
  frontend: ["Angular 16+", "TypeScript", "JavaScript ES6+", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
  mobile: ["Flutter", "Dart", "Cross-Platform (Android & iOS)"],
  backend: [".NET Core", "C#", "Entity Framework Core", "Web API", "REST APIs", "SignalR"],
  database: ["SQL Server", "SSMS", "T-SQL", "Database Design", "Query Optimization"],
  cloud: ["AWS EC2", "AWS S3", "IIS Server", "Application Deployment", "Server Configuration"],
  security: ["Data Encryption", "RBAC", "IP Restriction", "Secure File Storage"],
  tools: ["Git", "GitHub", "Postman", "Visual Studio", "VS Code", "SSMS"],
};

export const experience = [
  {
    title: "Full Stack Developer",
    company: "Leiten Technologies Private Limited",
    location: "Chennai",
    period: "September 2024 – Present",
    highlights: [
      "Developed enterprise-level Angular and Flutter applications for manufacturing and agricultural domains",
      "Deployed and configured web applications on AWS EC2 instances using IIS Server, managing application pools and SSL certificates",
      "Developed backend services using .NET Core and Entity Framework Core with MS-SQL Server database",
    ],
  },
  {
    title: "Angular Developer",
    company: "Cloute Technologies Pvt Ltd",
    location: "Bangalore",
    period: "December 2023 – August 2024",
    highlights: [
      "Developed and maintained responsive web applications using Angular framework with TypeScript",
      "Built reusable UI components and implemented state management for complex user interfaces",
      "Integrated RESTful APIs and handled data binding, form validations, and routing",
      "Collaborated with backend developers and UI/UX designers to deliver high-quality applications",
    ],
  },
];

export const projects = [
  {
    title: "VPG Sensor Integration",
    subtitle: "Document Management System",
    tech: ["Angular", ".NET Core", "AWS S3", "SSMS SQL"],
    description: "Web and mobile applications for VPG load cell sensor management with QR code-based certificate and manual access for customers.",
    highlights: [
      "Implemented AWS S3 bucket integration for secure storage of test certificates and product manuals",
      "Built console application and web interface for bulk document upload to S3 with data encryption",
      "Implemented role-based access control (RBAC) and IP restriction for sensitive information security",
      "Enabled customer self-service access by scanning QR codes on load cells to retrieve specific certificates",
    ],
    icon: "FileCheck",
  },
  {
    title: "Cane Management System",
    subtitle: "Agricultural Operations",
    tech: ["Angular", ".NET Core", "EF Core", "SSMS SQL", "AWS EC2", "IIS"],
    description: "Centralized system for managing agricultural operations including farmers, vehicles, and financial transactions.",
    highlights: [
      "Developed centralized Configuration Masters for managing villages, farmers, vehicles, and banks",
      "Built transaction module with order issuance, yield estimation, and weighbridge integration",
      "Created comprehensive reporting dashboard for operational and financial analytics",
      "Deployed application on AWS EC2 with IIS server configuration for production environment",
    ],
    icon: "Wheat",
  },
  {
    title: "QuePass",
    subtitle: "Event Ticketing System",
    tech: ["Flutter", "Dart", ".NET Core", "REST APIs", "POS Integration"],
    description: "Cross-platform mobile application for event ticketing with both online and offline processing capabilities.",
    highlights: [
      "Developed cross-platform Flutter mobile application for event ticketing",
      "Implemented POS device integration for on-site ticket sales and validation",
      "Built offline-first architecture with local data storage and automatic sync",
      "Integrated QR code scanning for quick ticket verification and entry management",
    ],
    icon: "Ticket",
  },
  {
    title: "HR Payroll Mobile App",
    subtitle: "Employee Management",
    tech: ["Flutter", "Dart", ".NET Core", "REST APIs", "SQL Server"],
    description: "Comprehensive HR mobile application for employees to view payslips, attendance details, and manage leave requests.",
    highlights: [
      "Built comprehensive HR mobile application for employees to view payslips and attendance",
      "Developed leave request, permission request, and shift change request modules with approval workflows",
      "Implemented holiday calendar feature displaying company-wide and location-specific holidays",
      "Integrated push notifications for request status updates and payslip availability alerts",
    ],
    icon: "Users",
  },
  {
    title: "EventKroot",
    subtitle: "Event Management Platform",
    tech: ["Angular", ".NET Core", "SignalR", "WhatsApp Business API", "SQL Server"],
    description: "Real-time event management platform with live food check-in dashboard and automated marketing campaigns.",
    highlights: [
      "Implemented SignalR for real-time live food check-in dashboard enabling instant status updates",
      "Integrated WhatsApp Business API for automated marketing message campaigns",
      "Provided technical support and feature enhancements for existing event management system",
    ],
    icon: "Calendar",
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Sri Manakula Vinayagar Engineering College",
    university: "Pondicherry University",
    period: "2021 – 2023",
  },
  {
    degree: "Bachelor of Computer Science (B.Sc)",
    institution: "RAAK Arts and Science College",
    university: "Thiruvalluvar University",
    period: "2018 – 2021",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
