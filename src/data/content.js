export const navLinks = [
  { name: "Products", href: "#products" },
  { name: "Services", href: "#services" },
  { name: "Industries", href: "#industries" },
  { name: "Knowledge Base", href: "#knowledge-base" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "About Us", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export const heroContent = {
  title: "Sales Compass: Data Intelligence",
  subtitle: "Master your multi-channel empire with the AI-powered unified data intelligence platform.",
  ctaPrimary: "Book a Demo",
  ctaSecondary: "Explore Features",
};

export const productsContent = [
  {
    id: 1,
    title: "Sales Compass",
    subtitle: "Master Your Multi-Channel Empire",
    description: "AI-Powered unified data intelligence platform for Amazon, eBay, Walmart, Shopify & more. Stop guessing. Start growing with real data.",
    features: [
      "Unified Dashboard for all channels",
      "AI-Driven Insights",
      "Real-time Analytics",
      "Inventory Optimization"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    link: "https://app.cal.eu/anuragratna"
  }
];

export const services = [
  {
    id: 1,
    title: "Data & AI Consulting",
    description: "Unlock the power of your data with advanced analytics and machine learning models tailored to your business goals.",
    icon: "📊",
  },
  {
    id: 2,
    title: "Cloud Migration Strategy",
    description: "Seamlessly transition to the cloud with our secure, scalable, and cost-effective migration frameworks.",
    icon: "☁️",
  },
  {
    id: 3,
    title: "Digital Transformation",
    description: "Reimagine your business processes and customer experiences through comprehensive digital innovation.",
    icon: "🚀",
  },
  {
    id: 4,
    title: "Support & Maintenance 24x5",
    description: "Reliable, round-the-clock support to ensure your critical systems are always running at peak performance.",
    icon: "🛡️",
  },
  {
    id: 5,
    title: "AI Adoption & Agentic AI",
    description: "Pioneer the next wave of automation with autonomous agents that drive efficiency and decision-making.",
    icon: "🤖",
  },
  {
    id: 6,
    title: "Unified Commerce & Google Pay",
    description: "Enable UCP for US merchants with Google Pay as an accelerated checkout option. We handle Merchant Center setup and Business Profile publishing.",
    icon: "🛍️",
  },
];

export const caseStudies = [
  {
    id: 1,
    title: "Global Retailer: 40% Efficiency Boost with AI",
    excerpt: "How we implemented a custom predictive analytics engine to optimize supply chain management for a Fortune 500 retailer.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    category: "Data & AI",
    hashtags: ["#ArtificialIntelligence", "#RetailTech", "#PredictiveAnalytics", "#Efficiency"],
    content: `
      <h2>The Challenge</h2>
      <p>A Fortune 500 retailer was struggling with supply chain inefficiencies, leading to overstocking in some regions and stockouts in others. Traditional forecasting methods were unable to account for rapidly changing consumer trends and local variables.</p>
      
      <h2>The Solution</h2>
      <p>We implemented a custom predictive analytics engine leveraging machine learning models. By integrating data from sales, weather patterns, and local events, the system could predict demand with 95% accuracy.</p>
      
      <h2>The Results</h2>
      <ul>
        <li><strong>40% Efficiency Boost:</strong> Optimized inventory distribution reduced holding costs.</li>
        <li><strong>Reduced Stockouts:</strong> Product availability increased by 25% in high-demand zones.</li>
        <li><strong>Real-time Insights:</strong> The dashboard provided actionable data for regional managers.</li>
      </ul>
    `
  },
  {
    id: 2,
    title: "FinTech Migration: Zero Downtime to AWS",
    excerpt: "A complete legacy infrastructure overhaul for a leading financial institution, achieving 99.99% availability.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    category: "Cloud",
    hashtags: ["#CloudMigration", "#AWS", "#FinTech", "#ZeroDowntime"],
    content: `
      <h2>The Challenge</h2>
      <p>A leading financial institution needed to migrate their legacy on-premise infrastructure to AWS. The critical requirement was zero downtime to ensure uninterrupted banking services for millions of customers.</p>
      
      <h2>The Solution</h2>
      <p>We adopted a "strangler fig" migration pattern, gradually replacing specific functionality with new cloud-based microservices. We utilized AWS Direct Connect for secure, high-speed data transfer and implemented a blue/green deployment strategy.</p>
      
      <h2>The Results</h2>
      <ul>
        <li><strong>Zero Downtime:</strong> The migration was completed without a single second of service interruption.</li>
        <li><strong>99.99% Availability:</strong> The new cloud architecture significantly improved system reliability.</li>
        <li><strong>Scalability:</strong> The system can now auto-scale to handle peak transaction volumes.</li>
      </ul>
    `
  },
  {
    id: 3,
    title: "Healthcare Provider: Digital Patient Portal",
    excerpt: "Revolutionizing patient engagement with a secure, mobile-first portal that reduced administrative overhead by 25%.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    category: "Digital Transformation",
    hashtags: ["#DigitalHealth", "#PatientExperience", "#HealthcareTech", "#Efficiency"],
    content: `
      <h2>The Challenge</h2>
      <p>A major healthcare provider faced high administrative overhead and low patient engagement due to an outdated, paper-based appointment and records system.</p>
      
      <h2>The Solution</h2>
      <p>We developed a secure, mobile-first patient portal. Features included online appointment scheduling, secure messaging with doctors, and access to lab results. The system was fully HIPAA compliant.</p>
      
      <h2>The Results</h2>
      <ul>
        <li><strong>25% Reduced Overhead:</strong> Automated scheduling and reminders freed up administrative staff.</li>
        <li><strong>Improved Engagement:</strong> Patient satisfaction scores rose by 30% within the first six months.</li>
        <li><strong>Fast Access:</strong> Patients could access their records instantly, reducing phone inquiries.</li>
      </ul>
    `
  },
];

export const industries = [
  {
    id: 1,
    title: "Banking & Finance",
    icon: "FaBuildingColumns",
    description: "Modernizing legacy systems and implementing secure, AI-driven financial solutions.",
    link: "/article/2"
  },
  {
    id: 2,
    title: "Technology",
    icon: "FaLaptopCode",
    description: "Accelerating product development and cloud-native innovation for tech companies.",
    link: "/article/1"
  },
  {
    id: 3,
    title: "Retail",
    icon: "FaCartShopping",
    description: "Optimizing supply chains and personalizing customer experiences with data analytics.",
    link: "/resource/1"
  },
  {
    id: 4,
    title: "Sustainable Business",
    icon: "FaLeaf",
    description: "Driving ESG goals through data transparency and sustainable tech practices.",
    link: "/article/3"
  },
];

export const knowledgeBase = [
  {
    id: 1,
    title: "The Future of AI in Enterprise",
    type: "Whitepaper",
    description: "A comprehensive guide to adopting agentic AI in large-scale organizations.",
    link: "/resource/1",
    content: `
      <h2>Executive Summary</h2>
      <p>Artificial Intelligence is no longer a futuristic concept; it is a present-day reality driving competitive advantage. This whitepaper explores the shift from predictive AI to <strong>Agentic AI</strong>—systems that can autonomously execute complex tasks.</p>
      <h3>Key Takeaways</h3>
      <ul>
        <li>Agentic AI reduces operational costs by 40%.</li>
        <li>Human-in-the-loop systems ensure safety and compliance.</li>
        <li>Early adopters are seeing a 3x ROI within 12 months.</li>
      </ul>
      <p>Download the full PDF to learn more about our implementation framework.</p>
    `
  },
  {
    id: 2,
    title: "Stop Burning Cash on Local Servers: The SME’s Urgent Guide to Lean Cloud Migration",
    type: "Guide",
    description: "Essential steps to ensure a smooth and secure transition to the cloud.",
    link: "/resource/2",
    hashtags: ["#CloudMigration", "#SME", "#BusinessGrowth", "#CostOptimization", "#DigitalTransformation", "#TechTrends2026", "#FinOps", "#CyberSecurity", "#CloudComputing", "#SmallBizTech", "#CloudStrategy", "#Efficiency", "#Innovation"],
    content: `
      <h2>Why the Urgency? The Hidden Costs of Delay</h2>
      <ul>
        <li><strong>Hardware Decay:</strong> Physical servers have a 100% failure rate. A single crash can cost an SME upwards of $10,000 per hour in lost productivity and emergency recovery fees.</li>
        <li><strong>Energy Inefficiency:</strong> Running a private server room is roughly 3x more expensive in energy consumption than leveraging a hyperscale data center’s shared efficiency.</li>
        <li><strong>The Security Gap:</strong> 90% of successful data breaches target outdated on-premise infrastructure. Moving to the cloud gives you an enterprise-grade "security shield" that is impossible to build on a small-business budget.</li>
      </ul>

      <h2>The 3-Step "Lean Migration" Framework</h2>
      
      <h3>1. The "Delete-First" Audit (Immediate Savings)</h3>
      <p>The fastest way to save money is to avoid migrating "digital junk."</p>
      <ul>
        <li><strong>The Rule:</strong> If data hasn't been accessed in 2 years, move it to "Cold Storage" (like AWS Glacier or Azure Archive). This costs 90% less than active hosting.</li>
        <li><strong>Benefit:</strong> Slashing your data volume by 40% means paying 40% less for your initial migration.</li>
      </ul>

      <h3>2. The "Platform Swap" (Low Effort, High ROI)</h3>
      <p>Don't just move your old problems to a new location.</p>
      <ul>
        <li><strong>Instead of</strong> moving a clunky legacy file server, switch to SaaS (Software as a Service) like Microsoft 365 or Google Workspace.</li>
        <li><strong>Benefit:</strong> You instantly eliminate the need for server patching, manual backups, and physical cooling costs.</li>
      </ul>

      <h3>3. Right-Sizing & Reserved Instances</h3>
      <p>The biggest mistake SMEs make is buying "too much" cloud.</p>
      <ul>
        <li><strong>The Strategy:</strong> Use Reserved Instances (committing to a 1-year term) to save up to 72% over standard "Pay-as-you-go" pricing.</li>
        <li><strong>Benefit:</strong> You get predictable monthly billing that is often lower than your current monthly hardware lease.</li>
      </ul>

      <h2>The Bottom Line: ROI in Months, Not Years</h2>
      <p>Most SMEs see a total cost of ownership (TCO) reduction of 25%–35% within the first 6 months by cutting electricity, physical space, and manual IT labor hours.</p>

      <h2>Don’t Navigate the Cloud Alone</h2>
      <p>Migration can be fast and affordable, but "doing it wrong" is where the costs add up. Our Cloud Experts specialize in SME transitions, ensuring you don't overpay for resources you don't need. Whether you're looking for a total migration or a hybrid setup, we provide the roadmap to ensure your journey is seamless, secure, and stays under budget.</p>
      <p>Let our cloud experts take the weight off your shoulders and guide your migration journey today.</p>
    `
  },
  {
    id: 3,
    title: "Data Governance Framework",
    type: "Template",
    description: "Best practices for managing data privacy and compliance in 2025.",
    link: "/resource/3",
    content: `
      <h2>Data Governance in the AI Era</h2>
      <p>With GDPR, CCPA, and new AI regulations, data governance is more critical than ever. Our framework provides a structure for:</p>
      <ul>
        <li>Data Quality Management</li>
        <li>Access Control & Security</li>
        <li>Compliance Monitoring</li>
        <li>Ethical AI Usage</li>
      </ul>
    `
  },
];

export const articles = [
  {
    id: 4,
    title: "The Website Redirect is Officially Dead",
    date: "January 16, 2026",
    excerpt: "With the recent launch of Google’s Universal Commerce Protocol (UCP), the conversion funnel has collapsed. Google is no longer a search engine that points to your business; it is a transaction engine that executes it.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    link: "/article/4",
    content: `
      <p>The website redirect is officially dead.</p>
      <p>With the recent launch of Google’s Universal Commerce Protocol (UCP), the conversion funnel has collapsed. Google is no longer a search engine that points to your business; it is a transaction engine that executes it.</p>
      
      <img src="/src/assets/ucp_diagram.png" alt="Universal Commerce Protocol Diagram" style="width: 100%; border-radius: 8px; margin: 20px 0;">

      <h3>The Conversion Funnel Collapse</h3>
      <p>The objective is clear: keep the consumer within the AI interface for the entire journey. From discovery and price negotiation to final checkout, the goal is to eliminate the jump to your URL entirely.</p>
      <p>For merchants, this means the "site visit" is becoming an optional byproduct of commerce. If your products cannot be discovered, negotiated, and purchased via a headless protocol, you are effectively invisible to the agents that now own the customer relationship.</p>
      
      <h3>The New Competitive Advantage</h3>
      <p>The competitive advantage of 2026 is no longer about driving traffic to a URL. It is about ensuring your inventory, business logic, and checkout endpoints are accessible to the protocol.</p>
      
      <h3>How We Help</h3>
      <p>I am currently helping merchants bridge this technical gap. If you need to implement a UCP-compliant infrastructure—from manifest publication at <code>/.well-known/ucp</code> to full AP2 payment integration—I can help you achieve UCP-readiness and secure your place in the agentic economy.</p>
      <p>Success will not be measured by clicks, but by protocol compliance.</p>
      <p><em>#GoogleUCP #AgenticCommerce #AEO #FutureOfRetail #EcommerceStrategy #ProtocolEconomy</em></p>
    `
  },
  {
    id: 1,
    title: "Why Your Business Needs Agentic AI Now",
    date: "October 15, 2025",
    excerpt: "Agentic AI is not just a buzzword; it's the next evolution of automation. Learn how it can transform your operations.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
    link: "/article/1",
    content: `
      <p>The landscape of automation is changing. Traditional RPA (Robotic Process Automation) was about following rules. <strong>Agentic AI</strong> is about setting goals.</p>
      <h3>What is Agentic AI?</h3>
      <p>Unlike chatbots that wait for a prompt, AI agents can proactively plan, use tools, and execute multi-step workflows to achieve an objective. For example, an agent could autonomously monitor your supply chain, identify a delay, and re-route a shipment—only asking for human approval if the cost exceeds a certain threshold.</p>
      <h3>The Business Case</h3>
      <p>Companies deploying agentic workflows are seeing:</p>
      <ul>
        <li><strong>Speed:</strong> Processes that took days now take minutes.</li>
        <li><strong>Accuracy:</strong> Reduction in human error for repetitive tasks.</li>
        <li><strong>Innovation:</strong> Employees are freed up to focus on strategic initiatives.</li>
      </ul>
      <p>At OpenQuest Solutions, we specialize in building custom AI agents tailored to your specific business needs.</p>
    `
  },
  {
    id: 2,
    title: "Navigating the Complexities of Multi-Cloud",
    date: "September 28, 2025",
    excerpt: "Strategies for managing costs and security across AWS, Azure, and Google Cloud.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    link: "/article/2",
    content: `
      <p>Multi-cloud is the new normal. But with great flexibility comes great complexity. Managing different security protocols, billing models, and APIs can be a nightmare.</p>
      <h3>Key Challenges</h3>
      <ul>
        <li><strong>Data Silos:</strong> Fragmented data across providers.</li>
        <li><strong>Security Gaps:</strong> Inconsistent policies leading to vulnerabilities.</li>
        <li><strong>Cost Spirals:</strong> Unused resources accumulating bills.</li>
      </ul>
      <h3>Our Approach</h3>
      <p>We recommend a unified control plane strategy. By abstracting the infrastructure layer, you can enforce policy-as-code across all your environments.</p>
    `
  },
  {
    id: 3,
    title: "Sustainable Tech: Reducing Carbon Footprint",
    date: "September 10, 2025",
    excerpt: "How green computing practices can lower costs and improve your ESG score.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
    link: "/article/3",
    content: `
      <p>Sustainability is no longer optional. It's a board-level priority. Surprisingly, your IT infrastructure is likely a significant contributor to your carbon footprint.</p>
      <h3>Green Coding</h3>
      <p>Did you know that inefficient code consumes more electricity? By optimizing algorithms and reducing data transfer, we can significantly lower energy consumption.</p>
      <h3>Cloud Optimization</h3>
      <p>Moving to the cloud isn't automatically green. It requires selecting carbon-neutral regions and right-sizing instances to avoid waste.</p>
    `
  },
];

export const footerContent = {
  companyName: "OpenQuest Consulting",
  address: "Netherlands",
  email: "contact@openquest.solutions",
  phone: "+31 683540581",
  copyright: "© 2026 OpenQuest Consulting. All rights reserved.",
};
