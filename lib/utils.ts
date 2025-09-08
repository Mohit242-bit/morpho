import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Date formatting utilities to prevent hydration errors
export function formatDate(
  date: string | Date,
  options?: Intl.DateTimeFormatOptions
): string {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  return dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    ...options,
  });
}

export function formatDateLong(date: string | Date): string {
  return formatDate(date, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatDateShort(date: string | Date): string {
  return formatDate(date, {
    month: "short",
    day: "numeric",
  });
}

export const heroOutro = {
  heading: "And this is just the beginning…",
  content: [
    "This is what rehumanized HR unlocks.",
    "It's almost never the strategy that fails — it's the silence in the room.",
    "The brilliant hires who stop raising their hand.",
    "The team that checks out long before they walk out.",
    "80% execution failures? People, not plans.",
    "It's time to fix that — not with more process, but with more humans."
  ]
};

export const transformationPoints = [
  {
    title: "Managing Teams",
    title2: "Building Self-Led Teams",
    subtitle: "For founders who don't want to manage—just multiply leadership.",
    key: "scalingNotBabysitting",
    caseStudyId: "from-silos-to-shared-outcomes",
  },
  {
    title: "Driving Change",
    title2: "Creating Agile Teams",
    subtitle: "For companies where change is the default setting.",
    key: "embraceChange",
    caseStudyId: "from-hr-ops-to-high-performance-culture",
  },
  {
    title: "Lowering Attrition",
    title2: "Strategic Retention",
    subtitle: "For orgs that keep their builders, not just their headcount.",
    key: "vanityVsValue",
    caseStudyId: "from-talent-friction-to-flow",
  },
  {
    title: "Performance Reviews",
    title2: "Growth Conversations",
    subtitle: "For teams that give feedback like they ship product—fast, frequent, and focused on improvement.",
    key: "growthNotGrades",
    caseStudyId: "from-hr-ops-to-high-performance-culture",
  },
  {
    title: "Star Performers",
    title2: "Star Teams",
    subtitle: "For cultures where performance scales because brilliance is shared.",
    key: "sharedBrilliance",
    caseStudyId: "from-silos-to-shared-outcomes",
  },
  {
    title: "Hiring",
    title2: "Talent Pipelines",
    subtitle: "For companies that don't fill roles—they build ecosystems of talent.",
    key: "buildTalent",
    caseStudyId: "from-performance-to-people-led-growth",
  }
];

// New section for the "3 Whys" content
export const threeWhys = {
  title: "The 3 Whys..!?",
  subtitle: "Because leadership isn't just about answers. It's about awareness. And it starts with the right guide.",
  whys: [
    {
      title: "Why Emotional Intelligence (EI)?",
      problem: "They can clone your product. They can mimic your strategy. But they can’t replicate the way your team thinks, moves, and shows up under pressure.",
      description:
        "Strategies succeed when people drive them. Your team & culture is your real edge—and it’s not built through intelligence it’s built through emotional intelligence. It’s not a soft skill. It’s your differentiator.",
      solution:
        "Performance is 42% logic, 58% emotions. EI turns emotional noise into clarity - unlocking 100% human potential."
    },
    {
      title: "Why Now?",
      problem: "Role of EQ has now evolved from Background Trait to Foreground Superpower",
      description:
        "From being considered optional in the age of industrial revolution, to increasingly essential in the age of social media, and now non-negotiable in the era of AI. AI is no longer just a productivity tool—it’s becoming a hyper-accelerator of information. And here’s the paradox: More information doesn’t mean better decisions. In fact, it often creates the opposite—paralysis, confusion, emotional burnout.",
      solution:
        "EI helps leaders leverage the period of emotional overwhelm to build stronger teams."
    },
    {
      title: "Why With Us?",
      problem: "You Get access to the REHumanised workplace model - an in-house developed, 15 years battle tested, deeply human 3 factor framework built on earned emotional intelligence.",
      description:
        "EI earned through 15 years of navigating: WELL ESTABLISHED organisations with abundant resources but cultural stagnation, MID-SIZED companies balancing ambition with caution, START-UPS where every rupee and every emotion had to be channelled with care.",
      solution:"A partner who blends psychology, systems thinking, and real-world strategy to help you lead teams that lead themselves."
    }
  ]
};