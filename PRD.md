# **Product Requirements Document: Discover Real Estate**

| **Document Title** | Discover Real Estate: The Australian Property Marketplace |
| :--- | :--- |
| **Version** | 1.0 |
| **Date** | 16 October 2025 |
| **Status** | Draft for Review |
| **Author** | Gemini |

<br>

-----

### <span style="color:#0052FF;">**1. Vision & Introduction**</span>

**Vision:** To become Australia's most trusted and intuitive property marketplace, connecting buyers, renters, and sellers with real estate agents through a data-rich, map-centric, and user-friendly platform.

**Introduction:** Discover Real Estate simplifies the entire property journey. For prospective buyers and renters, it is a powerful, immersive search tool to find the perfect home. For real estate agents and agencies, it is an essential platform to market listings, manage high-quality leads, and build their professional brand. We will differentiate by offering a cleaner interface, significantly faster performance, and more insightful, granular local data than existing market players.

-----

### <span style="color:#0052FF;">**2. Goals & Objectives**</span>

| Goal Category | Objective | Success Metric |
| :--- | :--- | :--- |
| **User (Buyer/Renter)**| Simplify and demystify the property search process. | 75% of new users successfully save a property or contact an agent within their first two sessions. |
| **User (Agent)** | Provide high-quality leads and best-in-class listing management tools. | Achieve 10% month-over-month growth in agent sign-ups for the first year. |
| **Business** | Establish a strong foothold in the Australian market, beginning with Victoria. | Onboard active listings from 20% of agencies in Victoria within 18 months. |
| **System** | Deliver a fast, reliable, and highly available platform. | Average page load time under 1.5 seconds; search query response time under 500ms. |

-----

### <span style="color:#0052FF;">**3. User Personas**</span>

  * **Chloe (The First Home Buyer):** 28, a graphic designer in Melbourne. She is looking for a 2-bedroom apartment in vibrant inner-city suburbs like Richmond or South Yarra. She is tech-savvy, budget-conscious, and feels overwhelmed by the complexity of the market. She needs to filter by price, proximity to public transport, and lifestyle amenities. High-quality photos and detailed floor plans are non-negotiable for her.
  * **The Kumar Family (The Upgraders):** A couple in their early 40s with two primary school-aged children, currently living in a townhouse. They are looking to buy a 4-bedroom house with a backyard in a family-friendly, school-focused suburb like Berwick or Glen Waverley. They require detailed information on school catchment zones, local parks, and recent comparable sales data to make an informed decision.
  * **David (The Real Estate Agent):** 35, works for a mid-sized agency in the eastern suburbs. He needs an easy-to-use platform to upload and manage his property listings, track enquiry emails and calls, and showcase his professional profile and sales history. He is focused on ROI and wants a dashboard that clearly demonstrates the leads generated from the platform.

-----

### <span style="color:#0052FF;">**4. Core Epics & Feature Requirements**</span>

#### **Epic 1: The Core Search Experience (For Buyers/Renters)**

The heart of the platform. It must be intuitive, powerful, and visually engaging.

  * **1.1. Map-Based Search:**
      * **Description:** The default homepage experience will be a full-screen, interactive map centered on the user's current location (or a default major city like Melbourne).
      * **Requirements:**
          * As users pan and zoom the map, property pins load and update in real-time.
          * Property pins are clustered at high zoom levels for performance and clarity.
          * Clicking a pin or cluster reveals a summary card of the property/properties.
  * **1.2. Advanced Search & Filtering:**
      * **Description:** A persistent, powerful filtering system that allows users to precisely define their ideal property.
      * **Requirements:** Users must be able to filter by:
          * **Primary:** Buy / Rent
          * **Location:** Suburb, Postcode, or by drawing a custom polygon on the map.
          * **Core Attributes:** Price Range (interactive slider), Property Type (House, Townhouse, Apartment, Land), Bedrooms, Bathrooms, Parking Spaces.
          * **Keywords:** Free text search for features like "pool," "study," or "north-facing."
  * **1.3. Listing Detail Page:**
      * **Description:** A clean, comprehensive, and SEO-optimized page for each individual property.
      * **Requirements:**
          * A prominent, high-resolution image gallery and embedded video tour viewer.
          * A summary section with key attributes (beds, baths, land size).
          * Detailed property description from the agent.
          * Interactive floor plans.
          * Map view showing the property's location relative to points of interest (schools, train stations, parks, cafes).
          * Scheduled inspection times.
          * A clear agent contact form ("Enquire Now") and a link to the agent's profile.
  * **1.4. User Accounts & Personalization:**
      * **Description:** Registered users can save searches, shortlist properties, and receive alerts.
      * **Requirements:**
          * Simple sign-up/login process (email/password and social logins).
          * Ability to "heart" or save properties to a personal shortlist.
          * Ability to save specific search filter combinations and receive daily/weekly email alerts for new matching listings.

#### **Epic 2: Agent Portal & Listing Management**

A professional suite of tools for real estate agents to manage their business on the platform.

  * **2.1. Agent & Agency Profiles:**
      * **Description:** Agents can create a professional profile to build their brand.
      * **Requirements:** Profiles must showcase the agent's photo, agency branding, contact details, a professional bio, and a gallery of their current and recently sold listings.
  * **2.2. Listing Creation & Management:**
      * **Description:** A secure, multi-step dashboard for agents to manage their listings.
      * **Requirements:**
          * A step-by-step wizard for creating new property listings.
          * Ability to upload high-resolution photos (with drag-and-drop reordering), floor plans, and video links.
          * A calendar interface to set and manage inspection times.
          * Ability to update a listing's status (e.g., For Sale, Under Offer, Sold).
  * **2.3. Lead Management & Analytics:**
      * **Description:** A dashboard where agents can view all incoming leads and basic performance metrics.
      * **Requirements:**
          * Display all incoming email and phone enquiries for each listing.
          * Provide simple analytics, such as page views, enquiries, and saves per listing.

#### **Epic 3: Data, Insights & Content**

Provide context and data to empower users to make informed decisions.

  * **3.1. Suburb Profiles:**
      * **Description:** Data-rich, SEO-friendly pages for every suburb in Australia.
      * **Requirements:** Pages will include data on median house/unit prices (for sale and rent), historical price trends, demographics (age, family structure), local schools with their ratings/catchments, and lifestyle amenities.
  * **3.2. Sold Property Database:**
      * **Description:** A searchable database of recently sold properties.
      * **Requirements:** Users can search sold properties by address or suburb to research the market and find comparable sales.

-----

# **Technical Architecture & Site Structure**

### ## 🏗️ High-Level Architecture

Our architecture will be a modern, decoupled system prioritizing scalability, performance, and developer experience.

  * **Frontend:** A Server-Side Rendered (SSR) Single Page Application (SPA).
  * **Backend:** A robust API built on a modular, microservices-oriented pattern.
  * **Database:** A combination of a relational database for core data and a search engine for complex queries.
  * **Deployment:** Cloud-native on AWS for its comprehensive suite of managed services.

### ## 🎨 Frontend Structure

  * **Framework: Next.js (React)**
      * **Why:** This is the ideal choice. Its server-side rendering (SSR) and static site generation (SSG) capabilities are **critical for SEO**, ensuring our listings are highly visible on Google. It also provides a fast initial page load, which is essential for user retention.
  * **Styling: Tailwind CSS**
      * **Why:** For building a custom, high-performance, and consistent design system without writing traditional CSS. It allows for rapid development of the clean, minimalist UI we require.
  * **State Management: TanStack Query (React Query) & Zustand**
      * **Why:** **TanStack Query** will manage all server state—fetching listings, suburb data, etc. Its sophisticated caching and refetching logic will make the application feel incredibly fast and responsive. **Zustand** will be used for minimal global client state, like user authentication status or the state of the search filter panel.
  * **Mapping Library: Mapbox GL JS**
      * **Why:** Superior to other options for its performance with large datasets (thousands of property pins), deep customization capabilities for map styling, and excellent interactivity.
  * **Component Library: shadcn/ui**
      * **Why:** Provides a set of beautifully designed, accessible, and unstyled components. This gives our developers a solid foundation for UI elements (forms, modals, buttons) while allowing our designers complete style control via Tailwind.

### ## ⚙️ Backend Structure

  * **Framework: NestJS (using TypeScript on Node.js)**
      * **Why:** NestJS enforces a structured, modular architecture that is perfect for building scalable and maintainable APIs. Its native TypeScript support ensures type safety across our entire backend.
  * **Database:**
      * **Primary Relational DB: PostgreSQL with PostGIS extension**
          * **Why:** PostgreSQL is a robust and reliable relational database. The **PostGIS** extension is the industry standard for efficient geospatial queries, which is fundamental for our map-based search (e.g., "find all properties within the current map viewport").
      * **Search Engine: Elasticsearch**
          * **Why:** For powering fast, complex, and fault-tolerant search queries, including keyword searches and filter aggregations. Data will be continuously synced from PostgreSQL to Elasticsearch.
  * **API Architecture:**
      * **Primary: REST API**
          * **Why:** We will use a standard RESTful API for most CRUD (Create, Read, Update, Delete) operations related to users, agents, and listings.
  * **Core Services (Microservices approach):**
      * `Listings Service`: Manages all property data, including ingestion from third-party agent feeds.
      * `Users Service`: Handles authentication, profiles for buyers/agents, and saved searches/shortlists.
      * `Search Service`: Interfaces with Elasticsearch to provide search results.
      * `Geospatial Service`: Handles all PostGIS queries for map-based functionality.

### ## 🔐 Infrastructure & Core Services

  * **Hosting & Deployment:**
      * **Frontend (Vercel):** The premier platform for hosting Next.js applications, offering seamless CI/CD and a global CDN.
      * **Backend & Database (Amazon Web Services - AWS):**
          * **Compute:** NestJS services will be deployed as Docker containers on a scalable platform like **Amazon EKS (Kubernetes)**.
          * **Database:** We will use managed services: **Amazon RDS for PostgreSQL** and **Amazon OpenSearch Service** (for Elasticsearch) to reduce operational overhead.
  * **Image & Media Handling: Amazon S3 & a CDN (Cloudinary)**
      * **Why:** **Amazon S3** will be used for scalable, durable storage of all property photos and videos. We will serve this media through a specialized CDN like **Cloudinary** to perform real-time image optimization, resizing, and format conversion, ensuring the fastest possible media delivery to users on any device.
  * **Authentication: Auth0**
      * **Why:** We will not build our own authentication. Auth0 provides a secure, enterprise-grade solution for user and agent login, social sign-on (Google, etc.), password management, and multi-factor authentication.
  * **Data Ingestion Pipeline:**
      * **Why:** To onboard listings at scale, we must support automated data feeds from agency CRMs. We will build a serverless pipeline using **AWS Lambda** and **SQS** to process industry-standard XML/JSON feeds, validate the data, and insert it into our database.