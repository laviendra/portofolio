// Projects and Skills Data Repository for Rafli Praditta
// Backend & Full-Stack Developer | Information Systems Student at Universitas Pamulang (UNPAM, 5th Sem, GPA 3.70)

const projectsData = [
    {
        id: "student-attendance-system",
        title: "Student Attendance System",
        category: "personal",
        categoryName: "Personal Project",
        statusBadge: "🚧 In Development",
        shortDesc: "A backend-based student attendance management system developed to improve my understanding of REST API development and backend architecture.",
        image: "assets/projects/attendance-showcase.jpg",
        tags: ["Go (Golang)", "Gin Framework", "MySQL", "JWT Auth", "REST API"],
        githubUrl: "https://github.com/laviendra/absensi_mahasiswa",
        demoUrl: "#",
        architecture: "Golang Gin + GORM / Native SQL Query + MySQL Database + JWT Bearer Middleware + Excelize Export Generator.",
        gallery: [
            {
                url: "assets/projects/attendance-showcase.jpg",
                badge: "Showcase",
                title: "Mockup Showcase (Multi-Device Overview)",
                caption: "Comprehensive multi-device presentation of the Student Attendance System (Sistem Absensi Mahasiswa) displaying real-time metrics, responsive laptop dashboard, and mobile companion view."
            },
            {
                url: "assets/projects/attendance-dashboard.png",
                badge: "Admin Panel",
                title: "Administrative Metrics & Attendance Dashboard",
                caption: "Real-time institutional dashboard displaying Total Students (8), Total Lecturers (3), Total Classes (9), daily session tracker, and quick attendance summary statistics."
            },
            {
                url: "assets/projects/attendance-students.png",
                badge: "Admin Panel",
                title: "Student Management & Registry Table",
                caption: "Comprehensive student directory table with student IDs (NIM), full names, class codes (IK, SI, TI), majors, active status tags, and action controls (Edit / Deactivate)."
            },
            {
                url: "assets/projects/attendance-classes.png",
                badge: "Admin Panel",
                title: "Class & Major Directory Navigator",
                caption: "Interactive class filtering navigation deck organized by study programs: Communication Science (IK-01, 02, 03), Information Systems (SI-01, 02, 03), and Informatics (TI-01, 02, 03)."
            },
            {
                url: "assets/projects/attendance-master-majors.png",
                badge: "Admin Panel",
                title: "Master Data: Academic Majors Management",
                caption: "CRUD management interface for university academic departments (Ilmu Komunikasi, Sistem Informasi, Teknik Informatika) with creation and update capabilities."
            },
            {
                url: "assets/projects/attendance-master-classes.png",
                badge: "Admin Panel",
                title: "Master Data: Class Cohort Configurations",
                caption: "Centralized class configuration module listing all cohort identifiers mapped to their respective academic majors (IK-01 through TI-03)."
            },
            {
                url: "assets/projects/attendance-master-lecturers.png",
                badge: "Admin Panel",
                title: "Master Data: Lecturer & Faculty Roster",
                caption: "Faculty member directory managing lecturer credentials, official usernames, email accounts, and teaching assignments."
            },
            {
                url: "assets/projects/attendance-master-schedules.png",
                badge: "Admin Panel",
                title: "Master Data: Timetable & Course Scheduling",
                caption: "Academic schedule matrix assigning lecturers, courses (Web Programming, Java II, Broadcasting), target classes, and lecture hours."
            },
            {
                url: "assets/projects/attendance-portal-student.png",
                badge: "Student Panel",
                title: "Student Panel: Attendance Summary & History",
                caption: "Dedicated student attendance panel displaying attendance percentage (100%), verified timestamps, course details, and lecturer validations."
            },
            {
                url: "assets/projects/attendance-portal-lecturer.png",
                badge: "Lecturer Panel",
                title: "Lecturer Panel & Real-Time Attendance Action",
                caption: "Lecturer command panel displaying assigned teaching schedule with one-click 'Ambil Absen Hari Ini' (Take Attendance Today) live workflow."
            },
            {
                url: "assets/projects/attendance-login.png",
                badge: "Frontend User",
                title: "Role-Based Authentication & Login Portal",
                caption: "Multi-role secure authentication portal supporting Administrator, Lecturer, and Student logins with Username/NIM and encrypted password validation."
            }
        ],
        keyFeatures: [
            "🚧 Status: In Development",
            "Student Management & Profile Data",
            "Attendance Check-in & Check-out Recording",
            "Dashboard Statistical Overview",
            "JWT Bearer Token Authentication",
            "Attendance Filtering by Date & Class",
            "Monthly Attendance Reports & Excel Export",
            "RESTful API & Responsive User Interface"
        ],
        metrics: [
            { label: "Status", value: "In Development" },
            { label: "Backend Engine", value: "Go (Golang)" },
            { label: "Gallery", value: "11 Full Slides" }
        ]
    },
    {
        id: "abdel-kicau-store",
        title: "Abdel Kicau Store",
        category: "academic",
        categoryName: "Academic Project (UNPAM)",
        shortDesc: "An e-commerce web application developed as a university project. The system includes product management, shopping cart functionality, user authentication, and order processing.",
        fullDesc: "An e-commerce web application developed as a university project at Universitas Pamulang (UNPAM). The system includes complete product management, interactive shopping cart functionality, secure user authentication, and order processing workflows.",
        image: "assets/projects/abdel-kicau-store.jpg",
        tags: ["PHP", "MySQL", "Bootstrap", "E-Commerce", "Authentication"],
        githubUrl: "https://github.com/laviendra/abdel-kicau-store",
        demoUrl: "#",
        architecture: "PHP Native Modular + MySQL Database + Bootstrap 5 Styling + Session Authentication.",
        gallery: [
            {
                url: "assets/projects/abdel-kicau-store.jpg",
                badge: "Showcase",
                title: "Mockup Showcase (Multi-Device & Admin Overview)",
                caption: "Full multi-device e-commerce presentation for Abdel Kicau Mania showcasing the storefront, mobile experience, customer catalog, and administrative control panel."
            },
            {
                url: "assets/projects/abdel-collection.png",
                badge: "Frontend User",
                title: "Exotic Birds Collection & Category Page",
                caption: "Dedicated category browsing page with search bar, category counter (Burung Hias, Burung Kicau), decorative theme artwork, and product cards with 'See More' actions."
            },
            {
                url: "assets/projects/abdel-catalog.png",
                badge: "Frontend User",
                title: "Our Birds Catalog & Product Grid",
                caption: "Interactive catalog grid featuring ornamental and singing birds (Canary, Lovebird, Raven, Dove) with category filters ('All Birds', 'Ornamental', 'Singing Birds') and product descriptions."
            },
            {
                url: "assets/projects/abdel-product-detail.png",
                badge: "Frontend User",
                title: "Single Product Detail & Cart Management",
                caption: "Detailed product page displaying high-res bird photos, price tag, star rating, interactive quantity selector, 'Add to Cart' button, and biological weight specifications (40-60g)."
            },
            {
                url: "assets/projects/abdel-featured.png",
                badge: "Frontend User",
                title: "Featured Highlight — Peacock Showcase Banner",
                caption: "Promotional highlight section showcasing exotic featured birds with high-resolution imagery and direct 'Buy Now' ordering button."
            },
            {
                url: "assets/projects/abdel-testimonials.png",
                badge: "Frontend User",
                title: "Customer Testimonials & Verified Reviews",
                caption: "Customer feedback carousel displaying verified buyer testimonials, ratings, and collector recommendations."
            },
            {
                url: "assets/projects/abdel-login.png",
                badge: "Frontend User",
                title: "User Authentication & Login Portal",
                caption: "Secure user login interface with clean card layout, email and password credentials verification, remember me option, and registration link."
            },
            {
                url: "assets/projects/abdel-navbar.png",
                badge: "Frontend User",
                title: "Store Header & Navigation Bar",
                caption: "Header brand identity for Abdel Kicau Mania featuring navigation links (Home, Koleksi, Tentang Kami, Kontak Kami), instant search, shopping cart counter, and user profile menu."
            },
            {
                url: "assets/projects/abdel-footer.png",
                badge: "Frontend User",
                title: "Store Footer & Newsletter Subscription",
                caption: "Comprehensive footer section with newsletter subscription form, brand story, quick store links, customer service contacts, social media, and accepted payment gateways."
            }
        ],
        keyFeatures: [
            "Product Management & Catalog Display",
            "Interactive Shopping Cart Functionality",
            "User Authentication (Login & Register)",
            "Order Processing & Checkout Workflow",
            "Customer Testimonials & Review Section",
            "Responsive E-Commerce User Interface"
        ],
        metrics: [
            { label: "Project Type", value: "Academic Project" },
            { label: "Tech Stack", value: "PHP & MySQL" },
            { label: "Gallery", value: "9 Full Slides" }
        ]
    },
    {
        id: "restaurant-ecommerce-system",
        title: "Restaurant E-Commerce System",
        category: "academic",
        categoryName: "Academic Project (UNPAM)",
        shortDesc: "A restaurant ordering and e-commerce platform that enables customers to browse menus, place orders, and manage transactions through a web-based application.",
        fullDesc: "A comprehensive restaurant ordering and e-commerce platform built with Laravel. Enables customers to seamlessly browse food menus, place online orders, calculate billing, and manage transactions through an intuitive web interface, complete with a robust Admin Management Panel.",
        image: "assets/projects/restaurant-ecommerce.jpg",
        tags: ["Laravel", "MySQL", "E-Commerce", "REST API", "Blade"],
        githubUrl: "https://github.com/laviendra/restaurant-ecommerce-system",
        demoUrl: "#",
        architecture: "Laravel Framework MVC + Eloquent ORM + MySQL Database + Middleware Protection + Chart Reporting Engine.",
        gallery: [
            {
                url: "assets/projects/restaurant-ecommerce.jpg",
                badge: "Showcase",
                title: "Mockup Showcase (Multi-Device Overview)",
                caption: "Responsive presentation across desktop, tablet, and mobile devices for the McDonald's restaurant website alongside its comprehensive sales admin panel."
            },
            {
                url: "assets/projects/mcd-hero.png",
                badge: "Frontend User",
                title: "Landing Page & Hero Banner",
                caption: "Main restaurant storefront with the promotional hero tagline 'Welcome to McDonald's - I'm Lovin' It' and direct navigation buttons to 'View Menu' & 'About Us'."
            },
            {
                url: "assets/projects/mcd-menu.png",
                badge: "Frontend User",
                title: "Our Menu Catalog & Ordering",
                caption: "Interactive food and beverage catalog (Apple Pie, Apple Slices, Ayam Goreng McD) featuring real-time category filtering and search functionality."
            },
            {
                url: "assets/projects/mcd-about.png",
                badge: "Frontend User",
                title: "About Us & History Section",
                caption: "Restaurant brand profile page detailing McDonald's history, founding journey, and service quality commitments."
            },
            {
                url: "assets/projects/mcd-contact.png",
                badge: "Frontend User",
                title: "Contact Info & Inquiry Form",
                caption: "Store location information, 24/7 McDelivery hotline, official email, opening hours, and direct customer inquiry form."
            },
            {
                url: "assets/projects/mcd-login.png",
                badge: "Frontend User",
                title: "Authentication & User Login",
                caption: "Secure customer authentication portal with input validation, 'Remember me' option, 'Forgot password' recovery, and new account registration."
            },
            {
                url: "assets/projects/mcd-admin-dashboard.png",
                badge: "Admin Panel",
                title: "Admin Dashboard — Statistics & Overview",
                caption: "Real-time revenue monitoring, daily sales charts, comprehensive order breakdown (Confirmed, Completed, Delivered), and active user count."
            },
            {
                url: "assets/projects/mcd-admin-products.png",
                badge: "Admin Panel",
                title: "Admin Panel — Product Management",
                caption: "Full restaurant menu management (47 total products, 15 available, 3 featured, 6 categories) with availability toggles and new item creation."
            },
            {
                url: "assets/projects/mcd-admin-orders.png",
                badge: "Admin Panel",
                title: "Admin Panel — Order Management",
                caption: "Customer orders stream with status filters (Pending, Confirmed, Processing, Completed), bank transfer payment verification, and order detail viewer."
            },
            {
                url: "assets/projects/mcd-admin-users.png",
                badge: "Admin Panel",
                title: "Admin Panel — User Management",
                caption: "Registered customer list, phone contacts, role management (Admin/User), order counters, and cumulative expenditure summaries."
            },
            {
                url: "assets/projects/mcd-admin-messages.png",
                badge: "Admin Panel",
                title: "Admin Panel — Customer Messages",
                caption: "Centralized inbox for customer inquiries, feedbacks, and questions submitted via the public contact form for administrative review."
            },
            {
                url: "assets/projects/mcd-admin-reports.png",
                badge: "Admin Panel",
                title: "Admin Panel — Sales Reports & Analytics",
                caption: "Performance analytics filterable by date range (Start Date - End Date), featuring daily sales trend charts and top-selling product metrics."
            }
        ],
        keyFeatures: [
            "Digital Menu Catalog & Price Management",
            "Customer Food Ordering & Shopping Cart",
            "Transaction & Bank Transfer Payment Workflow",
            "Admin Dashboard & Real-Time Sales Statistics",
            "Order Status Tracking (Pending, Confirmed, Completed)",
            "User Management & Role-Based Access (Admin/User)",
            "Customer Inquiries & Contact Messages Inbox",
            "Sales Report Analytics & Date Range Filtering",
            "Laravel Authentication & Security Protection"
        ],
        metrics: [
            { label: "Framework Engine", value: "Laravel" },
            { label: "Database", value: "MySQL" },
            { label: "Screenshots", value: "12 Full Screens" }
        ]
    },
    {
        id: "company-school-profile-website",
        title: "Company School Profile Website",
        category: "school",
        categoryName: "School Project (SMK 1 Tangerang)",
        shortDesc: "A simple school profile website created during vocational school to present information about the school, including its profile, vision, mission, facilities, and activities.",
        fullDesc: "A simple school profile website created during vocational high school at SMK Negeri 1 Kota Tangerang (Multimedia Major) to present information about the school, including its profile, vision, mission, campus facilities, and extracurricular activities.",
        image: "assets/projects/smkn1-tangerang.jpg",
        tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "School Profile"],
        githubUrl: "https://github.com/laviendra/school-company-profile",
        demoUrl: "#",
        architecture: "HTML5 Semantic Structure + CSS3 Layouts + Vanilla JS + Bootstrap UI Components.",
        gallery: [
            {
                url: "assets/projects/smkn1-tangerang.jpg",
                badge: "Showcase",
                title: "SMKN 1 Tangerang Profile Showcase",
                caption: "Comprehensive school profile presentation showcasing responsive multi-device layouts (desktop laptop and mobile), academic majors, extracurriculars, facilities, and contact portals."
            },
            {
                url: "assets/projects/smkn1-hero.png",
                badge: "Frontend User",
                title: "Landing Page & Hero Header",
                caption: "Hero section with banner tagline 'Kami Memberi Pendidikan Belajar yang Terbaik', quick statistic counters (6 Majors, #1 School, Complete Facilities), and 'Contact Us' CTA button."
            },
            {
                url: "assets/projects/smkn1-profile.png",
                badge: "Frontend User",
                title: "School History & Institutional Profile",
                caption: "Detailed school background highlighting SMKN 1 Tangerang's founding history, leadership milestones, and accredited skill departments (Business & IT)."
            },
            {
                url: "assets/projects/smkn1-majors.png",
                badge: "Frontend User",
                title: "Vocational Academic Majors Directory",
                caption: "Interactive catalog presenting various competency programs including Multimedia, Computer & Network Engineering (TKJ), and Electrical Installation Engineering (TITL)."
            },
            {
                url: "assets/projects/smkn1-facilities.png",
                badge: "Frontend User",
                title: "Modern School Facilities & Labs",
                caption: "Campus facilities tour highlighting air-conditioned classrooms, high-spec computer laboratories, and business-simulated Teaching Factory retail environments."
            },
            {
                url: "assets/projects/smkn1-activities.png",
                badge: "Frontend User",
                title: "School Events & News Activities Feed",
                caption: "Newsfeed section displaying recent school activities such as the 78th Independence Day ceremony, ANBK 2023 evaluations, National Batik Day, and religious celebrations."
            },
            {
                url: "assets/projects/smkn1-extracurriculars.png",
                badge: "Frontend User",
                title: "Student Extracurricular Clubs (Ekskul)",
                caption: "Student organizations showcase featuring Nesta Futsal, NVC Volleyball Club, Nihon Club (Japanese culture), and Metikasis journalism & creative club with achievement highlights."
            },
            {
                url: "assets/projects/smkn1-contact.png",
                badge: "Frontend User",
                title: "Contact Information & Inquiry Form",
                caption: "Direct school communication page featuring campus location address, phone hotline, official email, operating hours, and interactive student inquiry form."
            },
            {
                url: "assets/projects/smkn1-footer.png",
                badge: "Frontend User",
                title: "School Footer & Newsletter Subscription",
                caption: "Informative school footer with newsletter subscription, quick site links, vision & mission shortcuts, social channels, and copyright attribution."
            }
        ],
        keyFeatures: [
            "School Profile, Vision & Mission Presentation",
            "Campus Facilities & Major Information",
            "Student Extracurricular Activities Gallery",
            "Contact Information & Guest Book",
            "Responsive Web Design across all devices"
        ],
        metrics: [
            { label: "School", value: "SMKN 1 Kota Tangerang" },
            { label: "Major", value: "Multimedia" },
            { label: "Gallery", value: "9 Full Slides" }
        ]
    }
];

// USER CUSTOM LOGOS INTEGRATION - ALL PNG ASSET LOGOS UPDATED
const skillsData = [
    {
        name: "Go (Golang)",
        category: "backend",
        svg: `<img src="assets/logos/go.png" alt="Go (Golang)" style="width:46px; height:40px; object-fit:contain;">`
    },
    {
        name: "Laravel",
        category: "backend",
        svg: `<img src="assets/logos/laravel.png" alt="Laravel" style="width:40px; height:40px; object-fit:contain;">`
    },
    {
        name: "PHP",
        category: "backend",
        svg: `<img src="assets/logos/php.png" alt="PHP" style="width:48px; height:40px; object-fit:contain;">`
    },
    {
        name: "Gin Framework",
        category: "backend",
        svg: `<img src="assets/logos/gin.png" alt="Gin Framework" style="width:40px; height:40px; object-fit:contain;">`
    },
    {
        name: "JavaScript",
        category: "backend",
        svg: `<img src="assets/logos/javascript.png" alt="JavaScript" style="width:40px; height:40px; object-fit:contain; border-radius:6px;">`
    },
    {
        name: "Java",
        category: "backend",
        svg: `<img src="assets/logos/java.png" alt="Java" style="width:40px; height:40px; object-fit:contain; border-radius:6px;">`
    },
    {
        name: "REST API",
        category: "frameworks",
        svg: `<img src="assets/logos/restapi.png" alt="REST API" style="width:40px; height:40px; object-fit:contain;">`
    },
    {
        name: "HTML5",
        category: "frameworks",
        svg: `<img src="assets/logos/html5.png" alt="HTML5" style="width:40px; height:40px; object-fit:contain;">`
    },
    {
        name: "CSS3",
        category: "frameworks",
        svg: `<img src="assets/logos/css3.png" alt="CSS3" style="width:40px; height:40px; object-fit:contain;">`
    },
    {
        name: "MySQL",
        category: "database",
        svg: `<img src="assets/logos/mysql.png" alt="MySQL" style="width:52px; height:40px; object-fit:contain;">`
    },
    {
        name: "Git",
        category: "database",
        svg: `<img src="assets/logos/git.png" alt="Git" style="width:40px; height:40px; object-fit:contain; border-radius:8px;">`
    },
    {
        name: "GitHub",
        category: "database",
        svg: `<img src="assets/logos/github.png" alt="GitHub" style="width:40px; height:40px; object-fit:contain;">`
    },
    {
        name: "Postman",
        category: "database",
        svg: `<img src="assets/logos/postman.png" alt="Postman" style="width:40px; height:40px; object-fit:contain;">`
    }
];

const educationJourneyData = [
    {
        institution: "Universitas Pamulang (UNPAM)",
        degree: "Bachelor of Information Systems (S1)",
        period: "2024 - Present",
        gpa: "GPA 3.70 / 4.00 (5th Semester)",
        icon: "🎓",
        description: "Active 5th-semester Information Systems undergraduate at Universitas Pamulang with deep specialization in Software Engineering, Information System Architecture, Backend Development, and Database Design.",
        highlights: [
            "Maintained a cumulative GPA of 3.70 out of 4.00 through the 5th semester.",
            "Focused on modern Backend engineering with Go (Golang) and Laravel.",
            "Actively developing production-grade REST APIs and database-driven enterprise simulations."
        ],
        keySkills: ["Information Systems", "Go (Golang)", "Laravel", "REST API", "Database Design", "Clean Architecture"]
    },
    {
        institution: "SMK Negeri 1 Kota Tangerang",
        degree: "Multimedia Engineering Major",
        period: "2021 - 2024",
        gpa: "Graduated",
        icon: "🏫",
        description: "Completed vocational education in Multimedia at SMKN 1 Kota Tangerang, establishing a robust foundation in graphic design, interactive web UI, and front-end fundamentals.",
        highlights: [
            "Successfully built the 'Company School Profile Website' as a milestone first web development project.",
            "Mastered core principles of UI/UX design, semantic HTML5 structure, CSS3 styling, and JavaScript logic."
        ],
        keySkills: ["HTML5", "CSS3", "JavaScript", "UI/UX Design", "PHP Native", "Multimedia Production"]
    }
];
