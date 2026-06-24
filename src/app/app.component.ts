import { CUSTOM_ELEMENTS_SCHEMA, Component, linkedSignal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OrganismBgComponent } from './components/organism-bg/organism-bg.component';

@Component({
  standalone: true,
  imports: [RouterModule, OrganismBgComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Portfolio';

  // Track which iframe previews have loaded
  previewLoaded: Record<string, boolean> = {};
  // Track which projects are expanded to show full content
  expandedProjects: Record<string, boolean> = {};

  onPreviewLoad(projectTitle: string) {
    this.previewLoaded[projectTitle] = true;
  }

  toggleProject(projectTitle: string) {
    this.expandedProjects[projectTitle] = !this.expandedProjects[projectTitle];
  }

  /** Extract hostname for the browser bar */
  getHost(url: string): string {
    try {
      return new URL(url).hostname.replace('www.', '');
    } catch {
      return url;
    }
  }

  /** Build a WordPress mShots screenshot URL — 1440x900 for desktop feel */
  getScreenshotUrl(url: string): string {
    return `https://s0.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1440&h=900`;
  }

  // Calculate mouse position relative to a project card for the glow effect
  onCardMouseMove(event: MouseEvent) {
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  }

  resumeData = {
    personalInfo: {
      name: 'Manoj Manjunatha',
      title: 'Software Engineer',
      location: 'Riverside, CA, USA',
      phone: '951-801-9745',
      email: 'mmanj008@ucr.edu',
      linkedin: 'https://linkedin.com/in/manojm042k/',
      github: 'https://github.com/manu042k',
      website: 'https://manu042k.tech/',
      linkedinLabel: 'linkedin.com/in/manojm042k',
      githubLabel: 'github.com/manu042k',
      websiteLabel: 'manu042k.tech',
      copyrightYear: 2026,
    },
    education: [
      {
        institution: 'University of California, Riverside',
        location: 'Riverside, CA, USA',
        degree: 'Master’s in Computer Engineering',
        dates: 'Sep 2024 – Dec 2025',
        gpa: '3.63/4',
      },
    ],
    skills: {
      languages: 'TypeScript, JavaScript, Python, C#, SQL, C',
      frameworks:
        'Node.js, Express, NestJS, React, Next.js, Angular, Django, FastAPI, Flask, ASP.NET Core, Three.js',
      tools:
        'Git, Docker, Kubernetes, Azure, Microsoft SQL, PostgreSQL, MongoDB, Supabase, AWS, Postman, RabbitMQ',
      ai: 'LangChain, LangGraph, Claude Code, GitHub Copilot, RAG pipelines, Workflow orchestration',
    },
    experience: [
      {
        company: 'MarketEq Digital',
        location: 'Remote, USA',
        title: 'Software Engineer',
        dates: 'Feb 2026 – Present',
        bullets: [
          'Reduced homepage load latency by 25% by building a full-stack homepage with Next.js, NestJS, and Payload CMS integrated through the existing API Gateway, improving response consistency across marketplace services.',
          'Cut repeated backend calls by 40% and achieved sub-200ms content updates using an event-driven architecture with Redis caching and RabbitMQ event invalidation; implemented gRPC for inter-service communication with the user service.',
          'Built an end-to-end content automation pipeline in n8n integrating Groq (gpt-oss-120b) and Pexels API to auto-generate listing titles, descriptions, FAQs, and images at scale, replacing 100% of manual content workflows across the marketplace.',
          'Engineered fault-tolerant retry logic reusing upstream node data on LLM correction, and delivered production-ready Next.js image integration (CDN authorization, taxonomy normalization, secure credential injection) with zero hardcoded secrets.',
        ],
      },
      {
        company: 'Micron Technology',
        location: 'Boise, ID, USA',
        title: 'System Software Engineer Intern',
        dates: 'Jun 2025 – Sep 2025',
        bullets: [
          'Architected and deployed a full-stack specialized analysis platform for component fitness assessment, integrating interactive 3D visualization models to modernize and automate previously manual evaluation workflows.',
          'Developed sophisticated computational geometry algorithms and exposed them through global-scale APIs, supporting a cross-continental engineering team with centralized data synchronization and high-performance querying.',
          'Engineered an AI-driven reasoning system utilizing heuristic search and constraint-based decision policies to automate complex design selections, resulting in an 80% reduction in manual validation and reporting overhead.',
        ],
      },
      {
        company: 'Siemens Healthineers',
        location: 'Bengaluru, India',
        title: 'Software Developer/Engineer',
        dates: 'Aug 2022 – Aug 2024',
        bullets: [
          'Engineered and maintained user-centric modules within a large-scale micro-frontend ecosystem, contributing to a 20% increase in user satisfaction through scalable and decoupled architecture.',
          'Architected robust state management solutions for complex UI data flows, improving system testability and reducing overall development time by 30% through optimized workspace orchestration.',
          'Spearheaded the deployment of a high-concurrency multi-tenant cloud application supporting over a million records, utilizing automated CI/CD pipelines to achieve a 35% reduction in system downtime.',
          'Optimized enterprise-level data workflows between core industrial systems and IoT interfaces, cutting processing time by 40% and significantly enhancing operational efficiency.',
        ],
      },
      {
        company: 'Siemens Healthineers',
        location: 'Bengaluru, India',
        title: 'Software Developer Intern',
        dates: 'Jan 2022 – Jul 2022',
        bullets: [
          'Modernized legacy workflows by developing a full-stack web application, resulting in a 30% reduction in processing time through a streamlined and scalable architecture.',
          'Designed and implemented comprehensive access control systems and advanced analytical report features, improving data accessibility and organizational security.',
        ],
      },
    ],
    projects: [
      {
        title: 'Project Hawkeye - AI-Powered QA Platform',
        tech: 'LangGraph, FastAPI, Next.js, Playwright MCP, Docker, Python',
        link: 'https://project-hawkeye.vercel.app/',
        github: 'https://github.com/manu042k/Project-Hawkeye',
        bullets: [
          'Eliminated test-script maintenance overhead by building an autonomous browser-testing platform with LangGraph and Playwright MCP that self-adapts to UI changes through multimodal reasoning over screenshots and accessibility trees, replacing brittle hand-maintained recorded scripts.',
          'Implemented a Celery-backed task queue with WebSocket streaming for real-time test progress, supporting parallel browser execution and automated artifact generation including screenshots, DOM diffs, and trace logs.',
        ],
      },
      {
        title: 'SWOT Prompt Explorer',
        tech: 'Next.js, LangGraph, ReactFlow, LangChain, OpenAI, Claude, Groq, Tailwind CSS',
        link: 'https://swot-prompt-explorer.vercel.app/',
        github: 'https://github.com/manu042k/SWOTPromptExplorer',
        bullets: [
          'Replaced static SWOT templates with a two-phase plan→execute pipeline where an LLM dynamically designs a custom 6–10 node analysis DAG per customer segment at runtime, then executes all nodes in parallel via LangGraph.',
          'Fired 8 parallel regional persona agents that score market fit across continents, grounded in the actual DAG insight content, and rendered results as interactive radial progress rings on a zoomable world map with custom region support.',
          'Built a chat-driven graph augmentation loop where user questions generate new insight nodes appended to the live DAG and executed immediately, plus a side-by-side provider comparison panel for evaluating the same analysis across OpenAI, Claude, Groq, and OpenRouter.',
          'Engineered a nested resizable three-panel layout using ReactFlow with dagre auto-layout, position-preserving session updates, and session-scoped API key management via sessionStorage to support multi-provider switching without page reloads.',
        ],
      },
      {
        title: 'CodeGuard - AI Static Code Analysis Platform',
        tech: 'Multi-Agent Systems, LangGraph, FastAPI, Docker, PostgreSQL',
        link: 'https://code-gaurd-six.vercel.app',
        github: 'https://github.com/manu042k/CodeGuard',
        bullets: [
          'Developed a multi-agent static code analysis platform to evaluate security, code quality, architecture, and documentation across GitHub repositories.',
          'Automated reporting by executing code in isolated containers, ensuring safe, scalable, and reliable static analysis.',
        ],
      },
      {
        title: 'VisionX.ai - Visual Information Retriever',
        tech: 'Agentic RAG, LangChain, LangGraph, FastAPI, Angular, vLLM',
        link: 'https://annot-a-ix-v5yz.vercel.app',
        github: 'https://github.com/manu042k/VisionXAI',
        bullets: [
          'Built a multi-modal chat platform enabling users to upload images, annotate with bounding boxes, and query specific regions using AI-powered visual information retrieval.',
          'Developed a responsive agent-driven interface handling follow-up queries and providing contextually relevant internet-sourced information, improving interactive data exploration.',
        ],
      },
      {
        title: 'AgileBot - Smart Project-Management Platform',
        tech: 'Agentic AI, Django, Celery, Next.js, Shadcn, WebSockets',
        link: 'https://agile-bot-xtwo.vercel.app',
        github: 'https://github.com/manu042k/Agile-bot',
        bullets: [
          'Built a SaaS platform converting requirement documents into structured user stories using Agentic LLM pipelines and semantic-search embeddings for accurate, context-aware outputs.',
          'Implemented agile workflow features, capacity-based task allocation and sprint planning, reducing manual effort by 40%.',
        ],
      },
      {
        title: 'Chain Reaction - Online Multiplayer Game',
        tech: 'Next.js 15, TypeScript, Socket.IO, MongoDB, WebRTC, NextAuth, Zustand',
        link: 'https://chain-reaction-tau.vercel.app',
        github: 'https://github.com/manu042k/ChainReaction',
        bullets: [
          'Built a real-time multiplayer Chain Reaction board game supporting up to 4 players with room-based matchmaking, unique room codes, and Socket.IO for lag-free game state synchronization.',
          'Integrated peer-to-peer voice chat via WebRTC/PeerJS, Google OAuth authentication, and MongoDB-backed game state persistence with player reconnection support.',
        ],
      },
      {
        title: 'TwinMind - AI Meeting Assistant',
        tech: 'AI Agents, Groq API, Whisper, Next.js, Web Audio API',
        link: 'https://twin-mind-flame.vercel.app',
        bullets: [
          'Developed a real-time meeting assistant that captures microphone and tab audio for live transcription using Groq Whisper.',
          'Implemented an intelligent suggestion engine that surfaces fact-checks and talking points during active conversations.',
          'Built a citation-grounded chat interface for querying the meeting transcript with sub-second latency.',
          'Engineered a dual-source audio pipeline using MediaRecorder and ScriptProcessor for synchronized VAD and flush logic.',
        ],
        github: 'https://github.com/manu042k/TwinMind',
      },
    ],
    awards: [
      { description: 'UCR AI Idea Pitch Competition 2025', category: 'Winner' },
      { description: 'SHS DC Excellence Awards 2024', category: 'Finalist' },
      { description: 'SHS DC AI Hackathon 2024', category: 'Runner-up' },
    ],
  };
}
