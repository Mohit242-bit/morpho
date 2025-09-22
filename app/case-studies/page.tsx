"use client";

import type { NextPage } from 'next';
import Image from "next/image";
import { Share2, Copy, Facebook, Linkedin, Instagram, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Card, { CaseStudyCard } from "../../components/Card";
// Removed blogPosts and caseStudyPosts imports; all data is now in caseStudyCards
import { useState } from "react";

const caseStudyCards: CaseStudyCard[] = [
    // --- Case Studies ---
    {
        title: "From Talent Friction to Flow",
        subtitle: "Talent Strategy Consulting",
        excerpt: "Attracting top talent is only the beginning. The real challenge lies in building a system that consistently hires right, integrates fast, and retains strong. This organisation was reaching a critical inflection point. While the ambition and scale were growing, the talent systems were lagging behind.",
        content: `Attracting top talent is only the beginning. The real challenge lies in building a system that consistently hires right, integrates fast, and retains strong.\n\nThis organisation was reaching a critical inflection point. While the ambition and scale were growing, the talent systems were lagging behind. Hiring felt unpredictable.\n\nBranding lacked alignment. Onboarding was patchy. And high-potential employees didn't see a clear path forward.\n\nInternally, teams were stretched. Externally, the employer brand wasn't making the cut. The disconnect was costing time, momentum, and trust.\n\n## The Challenge\n\nThe real challenge lies in building a system that consistently hires right, integrates fast, and retains strong. This organisation was reaching a critical inflection point while the talent systems were lagging behind.\n\n## Our Approach\n\nWe implemented a comprehensive talent transformation strategy:\n\n- A refreshed employer value proposition, aligning internal and external messaging and cultivating a culture of appreciation\n- Structured hiring systems — from semi-structured interviews and feedback loops to hiring strategy, bias-awareness training and talent ambassador development  \n- A personalised onboarding journey that integrated culture, storytelling, peer learning, and role clarity from day one\n- Transparent career paths and tailored development plans that helped retain and re-engage high-performers\n- A strategic talent realignment that identified and reskilled 30% of the workforce and outplaced mismatched talent to improve productivity\n\n## Results Achieved\n\nThe transformation delivered measurable outcomes:\n\n- 75% increase in quality applications, with stronger brand perception and pull\n- Offer-to-join ratio rose from 40% to 85%, with smoother, faster hiring cycles\n- Internal referral hiring rose from 0% to 30% within a year\n- Onboarding integration improved, and satisfaction rose across cohorts\n- Retention stabilised in high-impact teams, driven by clarity and growth visibility\n\n## Key Insight\n\n"Fixing talent problems isn't about plugging gaps, it's about designing flow. Great people stay when they're seen, challenged, and supported. Structure brings speed. Culture brings depth. Emotional intelligence makes it stick. This wasn't about managing talent. It was about unlocking it."`,
        author: "Morphoverse Team",
        date: "2024-12-15",
        readTime: "12 min read",
        category: "Talent Strategy",
        slug: "from-talent-friction-to-flow",
        image: "/top1.png"
    },
    {
        title: "From Silos to Shared Outcomes",
        subtitle: "Org Design & Cross-Functional Enablement",
        excerpt: "Structure isn't just about roles and boxes. It's how decisions get made, how work flows, and how people experience collaboration. This organisation was scaling fast, but the structure was holding it back. Teams worked hard, but in isolation.",
        content: `Structure isn't just about roles and boxes. It's how decisions get made, how work flows, and how people experience collaboration.\n\nThis organisation was scaling fast, but the structure was holding it back. Teams worked hard, but in isolation. Handoffs caused delays. Projects ran late. And clients felt the friction.\n\nThere wasn't a lack of skill, just a system that no longer served the speed and complexity of the work.\n\n## The Challenge\n\nTeams worked hard, but in isolation. Handoffs caused delays. Projects ran late. And clients felt the friction. There wasn't a lack of skill, just a system that no longer served the speed and complexity of the work.\n\n## Our Approach\n\nWe redesigned the organizational structure for collaboration:\n\n- Piloted semi-permanent cross-functional squads with autonomy, shared KPIs, and decision-making rights\n- Each squad was mapped by location, skill, and personality dynamics\n- Leadership came from design or project leads, not just vertical heads\n- Functional Centers of Excellence (COEs) remained in place to drive capability-building\n- Squad members included full-time and shared roles based on project demand\n- Weekly reviews evolved into monthly check-ins as autonomy grew\n\n## Results Achieved\n\nThe structural transformation delivered immediate impact:\n\n- Projects started delivering on time with fewer cross-team lags\n- Clients had a single point of contact and a more seamless journey\n- Employees gained exposure across functions, enriching their perspective\n- Sales teams could focus on growth instead of firefighting delivery issues\n- The culture shifted from individual performance to shared outcomes\n\n## Key Insight\n\n"Structure should evolve with scale. What works in early growth phases can limit collaboration later. Humanising change, through stories, relationships, and emotional support… makes it sustainable. Cross-functional teams need more than new boxes on a chart. They need context, care, and clarity. The most effective design change doesn't just look good on paper. It feels right in practice."`,
        author: "Morphoverse Team",
        date: "2024-12-10",
        readTime: "10 min read",
        category: "Organizational Design",
        slug: "from-silos-to-shared-outcomes",
        image: "/top2.png"
    },
    {
        title: "From Performance to People-Led Growth",
        subtitle: "Organisational Development & Talent Strategy",
        excerpt: "Building a future-ready organisation isn't just about filling roles. It's about shaping leaders, designing culture, and aligning policies with purpose. This organisation was growing, but growth was outpacing its people systems.",
        content: `Building a future-ready organisation isn't just about filling roles. It's about shaping leaders, designing culture, and aligning policies with purpose.\n\nThis organisation was growing, but growth was outpacing its people systems. Talent development felt fragmented. Leadership potential wasn't being fully tapped. And policies, while functional, weren't always accessible or future-aligned.\n\nThe business needed more than HR support. It needed people's strategy.\n\n## The Challenge\n\nGrowth was outpacing people systems. Talent development felt fragmented. Leadership potential wasn't being fully tapped. And policies, while functional, weren't always accessible or future-aligned.\n\n## Our Approach\n\nWe implemented a comprehensive people development strategy:\n\n- A leadership assessment framework that included both outcomes and behavioural traits, adding depth and fairness to evaluations\n- The Mavericks Program to identify and mentor young leaders, pairing them with senior leaders for guided growth\n- The Solutionists Program to highlight and nurture roles requiring strategic, long-term thinking\n- A central platform to surface, recognise, and replicate internal best practices across teams and functions\n\n## Results Achieved\n\nThe people-first approach transformed leadership and culture:\n\n- Leadership conversations deepened, focusing on values and behaviours, not just KPIs\n- Young leaders found a growth path and mentorship support through the Mavericks Program\n- Strategic roles gained visibility and value, laying the groundwork for future-ready teams\n- Cross-functional collaboration improved, with best practices now accessible and celebrated\n- Policy clarity increased, with flexibility preserved across businesses but with stronger guardrails\n- People strategy moved from reactive HR to proactive, business-aligned transformation\n\n## Key Insight\n\n"Great organisations don't just manage people. They grow them with purpose. Leadership is more than metrics. It's behaviour, clarity, and the ability to shape culture. Policy isn't just paperwork. It's a reflection of values in action. When people feel seen, supported, and trusted, they don't just perform. They lead."`,
        author: "Morphoverse Team",
        date: "2024-12-05",
        readTime: "11 min read",
        category: "Leadership Development",
        slug: "from-performance-to-people-led-growth",
        image: "/top3.png"
    },
    {
        title: "From HR Ops to High Performance Culture",
        subtitle: "Organisational Development and Talent Management",
        excerpt: "Culture is not just how people feel at work. It is how systems, leadership, and day to day experiences align to create meaning, motivation, and momentum. This organisation had grown rapidly. But with scale came complexity.",
        content: `Culture is not just how people feel at work. It is how systems, leadership, and day to day experiences align to create meaning, motivation, and momentum.\n\nThis organisation had grown rapidly. But with scale came complexity. HR systems were manually intensive. Promotions relied heavily on numbers. Collaboration felt strained.\n\nAnd while engagement existed, advocacy was missing. It was time to move from functional processes to intentional culture design.\n\n## The Challenge\n\nWith scale came complexity. HR systems were manually intensive. Promotions relied heavily on numbers. Collaboration felt strained. While engagement existed, advocacy was missing.\n\n## Our Approach\n\nWe designed an intentional high-performance culture:\n\n- A Competency Identification and Development Program that mapped core skills for managers, reviewers, and functional heads\n- Standardised training and interview protocols that ensured every promotion decision was both data driven and behaviour aware\n- The Great Place to Work Survey as a cultural mirror and movement that formalised strong informal practices\n- A 360 degree feedback system that combined behavioural interviews with peer, reportee, and cross functional inputs\n- A cross functional stakeholder survey with measurable KPIs tied to department heads' variable pay\n- Digitised HR systems for development programs, scheduling, and feedback loops\n\n## Results Achieved\n\nThe culture transformation delivered sustained excellence:\n\n- Promotion decisions became more grounded, fair, and respected across the organisation\n- The organisation earned Great Place to Work certification and employer branding strengthened significantly\n- Engagement shifted to ownership and employees became informal ambassadors\n- Department heads prioritised cross functional collaboration as a performance driver\n- HR functions became faster, cleaner, and more strategic through digitisation\n- The organisation began to be known not just for business outcomes but for how it treated and grew its people\n\n## Key Insight\n\n"Culture is not declared. It is designed, lived, and measured. Processes can create fairness but emotional intelligence creates belief. Collaboration scales when it is incentivised, supported, and embedded in how performance is measured. Building a high performance culture does not start with slogans. It starts with systems that respect and grow people."`,
        author: "Morphoverse Team",
        date: "2024-12-01",
        readTime: "13 min read",
        category: "Culture Design",
        slug: "from-hr-ops-to-high-performance-culture",
        image: "/ending.png"
    },
    // --- Blog Posts ---
    {
        title: "Neurobiology",
        subtitle: "The Journey from Reaction to Response",
        excerpt: "A Story of Emotions, the Body & the Chemistry Within. Understanding Fight, Flight and Tend & Befriend responses through the lens of neurobiology and emotional leadership.",
        content: `A Story of Emotions, the Body & the Chemistry Within\n(Fight, Flight – typically considered a masculine response… \nand Tend & Befriend – typically considered a feminine response… \nBoth are stress responses.. to understand them better… read on… \n\nThe First Storm \nWhen Emotions Hijack Us\nIt starts before words.\nYou are in a moment of tension… a sharp comment in a meeting, a partner's silence, a subtle rejection.\nYour body reacts before your mind understands.\nYour heart races\nYour breath shortens\nYour stomach drops\nThis is Amy, your amygdala, hitting the red alert button.\nAdrenaline floods your system. Cortisol rises.\nYour nervous system prepares for fight or flight.\nYou brace to defend or to disappear.\n\nBut that's not the only way we survive.\nEver recall meeting and making some of your best friends while going through similar stressors????\n\nThat's Another Instinct\nThe Call to Tend & Befriend\n\nWhile one part of you prepares to react or retreat,\nAnother part does something different.\n\nYou reach out.\nYou soften your tone.\nYou instinctively try to soothe, to protect, to connect.\n\nThis is not avoidance.\nThis is your biology doing something ancient and often forgotten:\nTend and Befriend.\n\nRather than charging forward or backing away,\nyou create safety through care and connection.\n\nBehind the scenes:\nOxytocin rises, promoting bonding, trust, and empathy\nEstrogen enhances oxytocin's effects\nThe brain's reward system lights up when you comfort or are comforted\nThe parasympathetic nervous system begins to activate, nudging you back toward calm\nThis isn't just about gender. It's about emotional wiring… a relational survival strategy that stabilizes systems through community, not confrontation.\n\nThe Hidden Orchestra. Your Body Speaks First.\n\nWhether you fight, flee, freeze  or tend and befriend, your body always speaks first.\n\nYour nervous system is constantly scanning:\n\nAre we safe? Are we loved? Are we alone?\nThe answer determines what chemistry gets released.\nAnd this chemistry determines whether you shut down or open up.\n\nThe Whisperer Awakens \nAwareness is Leadership\n\nSomething shifts.\nYou learn to pause.\nYou notice the heat in your chest, the flutter in your belly.\nYou realize: "I'm not angry, I'm feeling unvalued."\n"I'm not passive… I'm protecting connection."\n\nThis is the awakening of Innie, your insula which is the part of you that senses emotion and bodily truth.\n\nAnd in this awareness, something profound happens:\nYou choose.\n\nYour inner chemistry shifts again:\nOxytocin increases when you hold space or seek support\nGABA calms your circuitry\nSerotonin returns when self-worth and agency are reestablished\nDopamine releases when you take aligned, meaningful action\n\nThe Great Rewiring \nChoosing a New Pattern\n\nMastery isn't in never reacting.\nIt's in recognizing which kind of reaction is arising and consciously responding.\n\nSometimes, the moment calls for boundaries.\nSometimes, for softness.\nTrue leadership is choosing intentionally, not habitually.\n\nAnd with every repetition, every breath, every pause, every act of tenderness or self-respect \nyou rewire your brain.\n\nYou become fluent in your emotional landscape.\nYou lead your chemistry, not the other way around.\n\nChapter 6: From Storm to Stillness Mastery Begins\nWhether through fight, flight, freeze, or befriend, your nervous system is trying to protect you.\nBut now, you lead the team.\nYou understand Amy's fears, Nora's signals, Innie's whispers, and Cortex's wisdom.\nYou become CEO of your inner world with one hand on the dashboard, and the other extended outward to support, to hold, to invite safety in others too.\nBecause emotional mastery is never just about self-control.\nIt's about relational wisdom.\nIt's about becoming a space of calm in a reactive world.\n\nWhen cortisol rises, and adrenaline surges…\nRemember, oxytocin can ground you.\nAnd connection with self or others can be the most radical act of emotional leadership.\n\nThe kind of systems and practices you develop usually determine the stress response of your organisation during stress, "fight or flight" OR "tend or befriend". So if you would like your teams to come together under periods of stress, you will need to design your systems to encourage the 'tend & befriend' response  and develop people to be able to choose that intentionally under stress.`,
        author: "Tashi",
        date: "2025-01-15",
        readTime: "8 min read",
        category: "Neurobiology",
        slug: "neurobiology-of-behavior",
        image: "/neurobiology.webp"
    },
    {
        title: "Pattern to Power",
        subtitle: "Making the unconscious, conscious.",
        excerpt: `"It's fine, I'll handle it." The fourth time I said it that week, I felt something shift... not in the room, but in me. A journey of discovering unconscious patterns and transforming them into conscious choices.`,
        content: `"It's fine, I'll handle it."\nThe fourth time I said it that week, I felt something shift... not in the room, but in me.\nAt work, when the deadline was tight.\nIn the relationship, where I was holding the emotional labor. \nIn friendships, when someone forgot, yet again, to follow through.\n\n"It's fine. I'll handle it."\nIt sounded strong. Capable. Noble, even.\nUntil I realized it had become a script, not a choice.\n\nI used to think it was just bad timing.\nA coincidence that I always ended up carrying extra weight.\nBut when it kept happening ,  in different places, with different people, I had to ask: What's the common factor here?\nMe.\nNot because I was wrong. But because I had a pattern.\nAnd patterns are not random, they are repeated for a reason.\n\nBiologically, here's what happens:\nOur brains are designed to make life easier by automating.\nWhen we repeat a behavior, the brain creates shortcuts, like well-worn paths in a forest.\nThe more often we take a certain route, saying yes to everything, the clearer and faster that path becomes.\n\nThat's neuroplasticity: the brain's ability to rewire itself based on what we do often.\nAt first it worked in my favour, it helped me adapt, survive and actually even thrive. Over time, "handling everything" stopped being a response — it became an identity.\nAnd the world, without malice, started responding accordingly.\nOver time, I began to notice something uncomfortable:\nI was drawn to colleagues who needed rescuing, not collaborating.\nI chose bosses, who depended on me heavily, but disappeared when it was time to talk about disproportionate rewards for disproportionate efforts. \nI gave my time freely to people who leaned on me, but disappeared when I needed support.\nI dated people who admired my strength, but quietly expected me to do the emotional heavy lifting.\nI thought I was being helpful. Reliable.\nBut maybe I was just trying to earn my place over and over again.\nAnd the world? It simply responded to what I kept signaling: "I have got this, even if you don't."\n\nSo I tried an experiment:\nThe fifth time it came up, I said, "Actually, I can't take this on right now."\nMy voice trembled. My stomach churned. But something strange happened… nothing collapsed.\nThe room didn't fall apart. I didn't lose anyone's respect.\nIn fact, I felt a little more me.\nEvery time I paused, said "no," or let someone else step in, no matter how shaky it felt. I was signaling something new.\nTo my brain. And to the world.\n\nAnd the world responded again this time, differently:\nThe colleagues stepped up.\nThe people who disappeared either just disappeared or offered support.\nDating became smoother, because now I noticed it sooner.\n\nThat's when I realized:\nPatterns don't just show us what we are doing.\nThey show us what we are ready to unlearn.\n\nSo if something keeps happening… stop blaming luck, or timing, or other people.\nLook inward.\nNot with shame, but with curiosity.\nBecause the moment you name a pattern is the moment you can change it.\n\nAnd sometimes, that change starts with one simple sentence:\n"It's not fine. And I won't handle it this time."\nTo Explore how to work with your patterns.. Connect with us.`,
        author: "Tashi",
        date: "2025-01-10",
        readTime: "6 min read",
        category: "Personal Growth",
        slug: "pattern-to-power",
        image: "/patternstopower.webp"
    },
    {
        title: "Building Emotional Intelligence",
        subtitle: "From Approval-Seeking to Inner Authority",
        excerpt: `A Corporate Journey through 9 Levels of Emotional Maturity. I remember the first time I got feedback in front of a room. It wasn't kind. It wasn't sugarcoated. And it wasn't wrong. My divisional head said, "You are good at getting people to like you. But not great at getting them to follow you."`,
        content: `A Corporate Journey through 9 Levels of Emotional Maturity\nI remember the first time I got feedback in front of a room.\nIt wasn't kind. It wasn't sugarcoated. And it wasn't wrong.\nMy divisional head said, "You are good at getting people to like you. But not great at getting them to follow you."\nAnd just like that, my carefully curated image of the "empathetic leader" cracked.\nThat was 10 years ago. And what I didn't know then was that I was about to walk—sometimes crawl through Loveinger's 9 levels of emotional maturity without ever knowing the model existed.\nThis is that story.\n\n1. Symbiotic (Pre-personal): "Tell me what to do"\n\nWhen I first joined the company, I needed constant validation.\nIf my manager didn't reply with a smiley face, I would replay the message 5 times. I was operating from a space of dependency. Their approval = my safety.\nWork felt like a family. But not in a good way, more like parent-child dynamics in suits. It started to make me feel very crunched, limited. \n\n2. Impulsive: "I feel it, so I say it"\nWhen things didn't go my way… deadline delays, team pushback, unclear briefs—I would get passive-aggressive.\nI masked it in "just being real," but really, I was emotionally leaking.\nEmail messages with 😒 and "as already mentioned" were my weapons of choice. I started having conflicts at work and taking them back with me, and carrying them back to work the next day. \nI started to talk to people with a mask on. Until this mask became too heavy to carry around. \n\n3. Self-Protective: "Who's to blame?"\nAs pressure mounted, so did my defensiveness.\nAny criticism felt like an attack. I would interrupt feedback mid-sentence to explain. My inner narrative was: "I am working so hard, and you don't see it."\nI didn't want to improve. I wanted to be right. I wanted to be rewarded for being right. I wanted promotions for being right. \n\n4. Conformist: "I just want to be a good employee"\nThen came the phase of performing the perfect manager.\nReading HBR, quoting Brene Brown, using words like "psychological safety" and "holding space."\nI built a leadership style based on templates. It worked for a while. But it was skin-deep. I was still outsourcing my identity to what good was supposed to look like.\nI did everything to earn the right rewards and yes I did earn them. But then I was still disappointed. I wasn't getting my breakthrough I was hoping for. \n\n5. Self-Aware: "Wait… this might be about me"\nContinuous disappointments broke the illusion. I took time off from work for 6 months for the first time. \nI started noticing my patterns. My triggers. My reactions when someone on my team shone brighter than me. The panic I felt when I wasn't the smartest voice in the room.\nTherapy helped. So did 360-degree feedback. But most of all, I began to listen—to others, to myself, to the silences in between. The good thing that happened. I stopped blaming the system, the people. I owned up to what needed to change within me. \n\n6. Conscientious: "I want to do right by people"\nAnd then this was the year I truly stepped into leadership.\nI started making unpopular decisions—not out of ego, but care. I let go of under performers with grace, not guilt. I gave feedback clearly, not sugarcoated.\nI learned to own my impact, not just my intent. I learned to question and I learned to accept the consequences of questioning (sometimes great and sometimes dire). But what was important is I owned it – fully.\n\n7. Individualistic: "My truth matters"\nThis phase was disorienting.\nI questioned company values. I stopped nodding in leadership meetings. I began asking, "Is this the kind of company I still want to build?"\nIt wasn't a rebellion. It was an alignment. Alignment to my own values. \nI learned that being emotionally mature didn't mean fitting in—it meant standing grounded in my own values, even if I stood alone.\nI took tough calls, the ones that seemed brash and irrational to the world around me (specially because they were used to the "good girl" I was).\n\n8. Autonomous: "I lead myself first"\nNow, I mentor younger managers/ people starting out their careers.\nNot to make them like me, but to help them become more themselves.\nI lead from wholeness, not performance.\nMy decisions are not about being liked, or even being listened to all the time but being trusted for my intent. I have learned that clarity is kindness, and that empathy without boundaries is just emotional leakage. That I can only help a person change, not necessarily change them. I stopped taking responsibility for others' failures. \n\n9. Integrated: "I'm not always here, but I know when I am."\nThis level is quiet. Almost invisible.\nIt doesn't announce itself in meetings or glow on performance reviews.\nBut you feel it in the pauses between reactions, in how little you need to prove, in how gently you can hold power.\nI have touched this space… and it's now becoming more frequent… \nWhen I chose not to act in a provocative situation…not out of fear, but out of clarity that it didn't deserve my energy.\n\nWhen a team member resigned and I felt proud instead of betrayed, because they had grown here, and were ready for more.\n\nWhen a colleague got the spotlight I would once have fought for and I genuinely cheered because the mission mattered more than my visibility.\n\nWhen my ex-employer achieved a milestone we had all worked for and I felt a sigh of relief instead of resentment because enjoying that achievement mattered more than being in the centre of it all. \nBeing here doesn't mean you have no ego.\nIt means you are no longer ruled by it.\nYou can sit with paradoxes without flinching.\nYou can lead without being seen.\nYou can influence without forcing.\nAnd perhaps most powerfully, you are okay being misunderstood.\nYou trust that time, consistency, and integrity will do the explaining.\n\nEmotional maturity at work isn't about being calm or nice.\nIt's about being real without being reckless.\nClear without being cruel.\nAnd firm without being frozen.\nIt's a practice. Not a promotion.\nAnd you grow not by mastering others but by outgrowing the versions of yourself that once needed protection.`,
        author: "Tashi",
        date: "2025-01-05",
        readTime: "12 min read",
        category: "Emotional Intelligence",
        slug: "building-emotional-intelligence",
        image: "/building_ei.webp"
    },
    {
        title: "EQ in the world of AI",
        subtitle: "From Background Trait to Foreground Superpower",
        excerpt: `The Changing Role of EQ: From Background Trait to Foreground Superpower. From being considered optional, to increasingly essential in the age of social media, and now non-negotiable in the era of AI.`,
        content: `EQ in the World of AI: The Human Advantage\n\nAs artificial intelligence continues its rapid ascent—doing everything from analysing complex data to writing like humans it raises a vital question: What remains uniquely ours?\n\nPhase 1: The Industrial and Knowledge Age – EQ as "Nice-to-Have"\n\nFor most of modern work history, emotional intelligence was invisible on resumes. Success belonged to those with technical skill, knowledge, and execution power. EQ? It was often seen as the "soft stuff". Good for team harmony, but not business-critical. Managers were measured on productivity. Leaders were measured on strategy. Feelings were…optional.\n\nPhase 2: The Social Media Era – EQ as Social Filter\n\nThen came the era of hyperconnectivity. Social media turned everyone into a passive aggregator, absorbing constant content, opinions, outrage, beauty, wins, and losses. Suddenly, our inner world became louder. Anxiety spiked. Comparison became daily. Cancel culture took root. \n\nNow, emotional intelligence wasn't just helpful… It was protective. We needed EQ to stay grounded, to respond rather than react, to hold nuance in a world obsessed with polarity, to protect our attention and mental health. \n\nAnd now let's zoom in - the idea of information overwhelms how AI will flood us with more inputs than ever and how only EQ, especially self-awareness and self-regulation, will help us navigate it, lead teams, and make meaning out of noise.\n\nEQ as the Differentiator in the AI Era: Making Sense in the Age of Overwhelm\n\nAI is no longer just a productivity tool. It's becoming a hyper-accelerator of information. With one click, you can get:\n- Ten versions of a strategy deck\n- A list of decision options ranked by logic\n- Market trends analysed in real-time\n- Emails drafted before you've even processed your thoughts\n\nWelcome to the era of infinite inputs. But here's the paradox: More information doesn't mean better decisions. In fact, it often creates the opposite…paralysis, confusion, emotional burnout.\n\nImagine a leader starting their Monday. AI-generated dashboards show red flags in sales, 14 potential pivots, 3 competitive threats, and a 10-step productivity plan. Slack is buzzing. Inbox is overflowing. \n\nAnd yet, what's needed most isn't answers. It's clear. The question is no longer, "What should we do?" It's: "What matters right now?"\n\nThis Is Where EQ Becomes Non-Negotiable\n\nWhen AI floods your system with choices, Only self-awareness can filter signals from noise. Only emotional regulation can help you pause instead of panic, respond instead of react. And only empathy allows you to lead your team through the overwhelm with grounding and perspective.\n\nIn the AI world, your edge won't be how fast you process information. It will be how deeply you can center yourself in the chaos and help others do the same. Because your team doesn't need a superhuman who never gets overwhelmed. They need a human who knows how to navigate when overwhelmed.\n\nManaging Machines Requires Technical Skill. Leading Humans Requires Emotional Skill.\n\nAI will give you:\n- Insights\n- Options\n- Answers\n\nBut EQ gives you:\n- Discernment\n- Focus\n- Resilience\n\nAnd in an age where everyone has access to the same tools, the how will matter more than the what. EQ is how you show up when the system short-circuits. EQ is how you lead when the data isn't enough. EQ is how you keep the human thread intact, when everything else feels artificially intelligent.`,
        author: "Tashi",
        date: "2025-01-12",
        readTime: "6 min read",
        category: "Emotional Intelligence",
        slug: "eq-in-the-world-of-ai-foreground-superpower",
        image: "/eq_in_ai.webp"
    },
    {
        title: "Confidence Vs Self-belief",
        subtitle: "The Yin and the Yang of your behaviors",
        excerpt: `Let's understand ourselves more by exploring the key differences between confidence and self-belief, and how they manifest in thinking, action-taking, and interpersonal dynamics through a comprehensive assessment and 3x3 behavioral grid.`,
        content: `Let's understand ourselves more by answering a few questions. \n\nHow Do You Really Show Up?\n\nInstructions:\nRead each statement and rate how true it feels for you\n1 (Not true at all) to 5 (Very true for me, most of the time).\n\nDon't try to analyze, just feel your way through.\n\n1. When plans fall apart suddenly, I can adapt and move forward without spiraling.\n2. I don't always speak first, but when I do, people tend to listen.\n3. Even when no one is watching, I give my best to what matters to me.\n4. If a room is full of strong personalities, I still find a way to bring my voice in.\n5. There are moments I feel unsure but I don't doubt my ability to handle life.\n6. When I feel dismissed or overlooked, I don't let it shake my sense of worth.\n7. I often find myself encouraging others to believe in themselves.\n8. I've followed a path that didn't always make sense to others but it made sense to me.\n9. I usually keep my cool when things get heated or uncertain.\n10. I've taken leaps in life, even when I didn't have all the answers.\n11. I don't need to be in the spotlight to feel valuable.\n12. People often rely on my energy or confidence in group settings.\n\nScoring Guide:\nConfidence indicators: 1, 2, 4, 9, 10, 12\nSelf-Belief indicators: 3, 5, 6, 7, 8, 11\n\nScoring ranges:\nLow (6–13) | Mid (14–23) | High (24–30)\n\nDefinitions:\n\nConfidence:\nConfidence is the trust in one's abilities, qualities, and judgment, often influenced by external achievements, validation, or feedback. It is situational and can fluctuate based on success, failure, or external conditions.\n\nSelf-Belief:\nSelf-belief is an intrinsic conviction in one's worth, potential, and capabilities, independent of external validation or circumstances. It is a steady, internal compass that persists even in the face of challenges or setbacks.\n\nThe 3x3 Behavioral Grid:\n\nHigh Self-Belief + Low Confidence: The Quiet Rock\n"I don't need to be loud to be sure." Strong inner belief but paralyzed by lack of confidence. Avoids action, has tendency to overthink.\n\nHigh Self-Belief + Medium Confidence: The Emerging Force\n"I know what I stand for, I'm still learning how to show it." Deep, resilient, self-honoring. Acts steady, thoughtful, authentic.\n\nHigh Self-Belief + High Confidence: The Integrated Leader\n"I trust myself and I'm here to serve." Grounded, clear, authentic. Inspires trust, unlocks others' potential, builds strong cultures.\n\nMedium Self-Belief + Low Confidence: The Tentative Explorer\n"Maybe I could… but what if I fail?" Curious, vulnerable, cautious. Makes others feel safe to try but may hold back brilliance.\n\nMedium Self-Belief + Medium Confidence: The Balancer\n"I can hold my own — most of the time." Rational, steady, fair. Brings balance and calming presence.\n\nMedium Self-Belief + High Confidence: The Charmer with Core\n"I'm good, but am I great enough?" Expressive, warm, magnetic. Motivates teams but risks people-pleasing and burnout.\n\nLow Self-Belief + Low Confidence: The Invisible One\n"Why would anyone listen to me?" Sensitive, imaginative, hesitant. Withdraws and avoids visibility.\n\nLow Self-Belief + Medium Confidence: The Loud Shell\n"If I talk confidently, they won't see my doubt." Defensive, performative, uncertain. Overcompensates with loudness or bravado.\n\nLow Self-Belief + High Confidence: The Performer\n"If I stop performing, they'll see I'm not enough." Image-conscious, ambitious, fast-paced. Can lead from the front but lacks trustworthiness.\n\nBuilding Confidence (Action + Feedback + Visibility):\n- Practice micro-bravery daily\n- Skill exposure in real settings\n- Body-first approaches (posture, breath)\n- Record and reflect on successes\n- Curate environment for empowerment\n\nBuilding Self-Belief:\n- Trust your "no" even when it disappoints others\n- Try new things without needing instant success\n- Don't spiral when criticized\n- Walk away from things that don't feel right\n- Hold praise without deflecting it\n\nThe optimal zone lies at Medium to High levels of both confidence and self-belief without tipping into excess. Self-awareness is key to preventing overreach.`,
        author: "Tashi",
        date: "2025-01-10",
        readTime: "12 min read",
        category: "Self-Development",
        slug: "confidence-vs-self",
        image: "/confidence_self_belief.webp"
    },
    {
        title: "Tend Befriend",
        subtitle: "There is more to your fear response than Fight OR Flight",
        excerpt: `The traditional fight or flight model is incomplete. Discover the 'Tend and Befriend' response - a biologically supported stress response driven by oxytocin and nurturing instincts, and how it manifests as powerful but often invisible leadership in modern organizations.`,
        content: `The traditional "fight or flight" model is rooted in early research (largely on male subjects), and later studies, especially by Shelley Taylor and colleagues introduced a more nuanced view of stress responses, particularly in women and more relationally oriented individuals.\n\nThis alternative response is called: "Tend and Befriend"\n\nIt is a biologically supported stress response more associated with nurturing, bonding, and seeking social connection, driven in part by oxytocin, endogenous opioids, and female hormones like estrogen.\n\nTend and Befriend at Work: The Evolution of Connection in Organizations\nA Story of Safety, Strength, and Selfhood\n\nWhere It All Began? The Evolution of Relational Safety\n\nLong before boardrooms and Slack threads, we were tribes. Survival meant staying close, sensing danger together, caring for each other's children, grieving together when someone was lost.\n\nAnd in those early days, not everyone survived through dominance or retreat. Some did through care. Through nurturing. Through relational intelligence.\n\nBiology rewarded it:\n- Oxytocin deepened bonds\n- Endogenous opioids eased stress through closeness\n- Dopamine reinforced acts of mutual care\n- Estrogen and serotonin amplified sensitivity to emotional nuance\n\nThis became the foundation of what we now call psychological safety. Not just being safe from harm, but being safe in relationships. And this legacy lives on especially in the workplace.\n\nFrom Tribes to Teams: The Relational Blueprint at Work\n\nModern organizations may look different, but the nervous system hasn't evolved as fast as your HR software. The tend and befriend instinct still fires — especially in emotionally intelligent individuals, often (but not only) women.\n\nIt shows up as:\n- Being the emotional anchor in meetings\n- Preemptively smoothing tension between others\n- Taking on extra work to "protect the team"\n- Avoiding conflict to maintain harmony\n- Translating emotionally tone-deaf leadership into digestible narratives\n- Holding space for others, even when you are burned out\n\nIt's often not rewarded with promotions, but it holds teams together. These individuals become the cultural glue…the unofficial go-to's, the ones people "just feel better around." They are the ones carrying the invisible emotional labor at the workplace.\n\nThe Gift: Why Tend and Befriend is Leadership?\n\nTend and befriend is often invisible, but make no mistake… it is powerful leadership. People with this instinct:\n- Create trust-rich cultures\n- Spot unspoken conflict before it escalates\n- De-escalate emotionally charged situations with grace\n- Retain team members simply through how they make people feel\n- Foster environments where performance can actually thrive\n\nThey are the emotional architects of culture, designing belonging through small, consistent acts of care.\n\nIn high-growth environments or during change:\n- They are the ones who ask, "How is everyone feeling through this?"\n- They hold the emotional memory of the team\n- They keep humanity alive in systems that often forget it\n\nThe Cost: When Tending Becomes Self-Forgetfulness\n\nBut like all evolved instincts, when unconscious, it can become a trap. Here's how tend and befriend becomes over-adaptation:\n- Saying yes when you want to say no\n- Soothing others at the expense of truth\n- Suppressing feedback to avoid hurting someone's feelings\n- Absorbing emotional labor for the team or even your manager\n- Getting caught in people-pleasing or perfectionism\n- Being labeled as "nice but not strategic"\n\nIt creates quiet burnout…where you are respected, relied on, even adored… but not necessarily seen or elevated. The very instincts that help you survive in an emotionally tense culture… Can also keep you from challenging it.\n\nThe Evolution: Conscious Leadership from Connection\n\nThe next evolution isn't to suppress the tend-and-befriend instinct, it's to own it consciously. In emotionally intelligent organizations, leaders learn to:\n- Tend without taking over\n- Befriend without rescuing\n- Hold space for others and themselves\n- Care deeply without abandoning their own clarity, boundaries, and truth\n\nThese leaders move from being emotional containers… To be emotional conductors is allowing energy to move cleanly, honestly, and without enmeshment.\n\nFrom Care to Conscious Culture\n\nTend and befriend isn't just a nervous system response, It's a cultural pattern. Organizations shaped by this response value:\n- Belonging before blame\n- Collaboration before ego\n- Listening before reacting\n- Culture as a living system, not a slide on a deck\n\nBut they must also learn to:\n- Give voice to tension\n- Reward truth-telling\n- Make space for boundaries\n- Allow relational leaders to take up strategic space\n\nBecause care without truth becomes fragility. And culture without accountability become comfort zones.\n\nTend and Befriend helped humans survive. Today, it can help organizations transform. But only if we move from reflex to conscious relational leadership.\n\nSo the new leadership path sounds like:\n"I care deeply and I will speak honestly."\n"I hold space and I also take space."\n"I build safety not silence."\n\nMost Important part is to be able to balance out the approach between, "Fight or Flight" and "Tend or Befriend". They are not two ends of a spectrum but more complementing.`,
        author: "Tashi",
        date: "2025-01-08",
        readTime: "10 min read",
        category: "Organizational Psychology",
        slug: "tend-befriend-beyond",
        image: "/tend_befriend.webp"
    }
];
// Combine all content for dynamic display


const CaseStudies: NextPage = () => {
    // State to track the currently selected content
    const [selectedContent, setSelectedContent] = useState(caseStudyCards[0]); // Default to first item
    // State for slider pagination
    const [sliderIndex, setSliderIndex] = useState(0);
    const cardsPerPage = 3;
    const totalCards = caseStudyCards.length;
    const totalPages = Math.ceil(totalCards / cardsPerPage);
    // Get the cards for the current slider page
    const visibleCards = caseStudyCards.slice(sliderIndex * cardsPerPage, (sliderIndex + 1) * cardsPerPage);

    // Helper function to render content paragraphs
    const renderContent = (contentText: string) => {
        const paragraphs = contentText.split(/\n\n/);
        return paragraphs.map((paragraph, index) => {
            if (paragraph.startsWith('## ')) {
                return (
                    <h2 key={index} className="text-xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-6 tracking-wide">
                        {paragraph.replace('## ', '')}
                    </h2>
                );
            }
            if (paragraph.trim() && !paragraph.startsWith('#')) {
                return (
                    <p key={index} className="text-sm md:text-base mb-4">
                        {paragraph.trim()}
                    </p>
                );
            }
            return null;
        });
    };

    // Handle card click
    const handleCardClick = (slug: string) => {
        const content = caseStudyCards.find(item => item.slug === slug);
        if (content) {
            setSelectedContent(content);
        }
    };

    return (
        <div className="w-full bg-theme-bg-primary text-theme-primary font-poppins min-h-screen">
            {/* Header Image - Mobile Responsive */}
            <div className="relative w-full mt-16 md:mt-20 lg:mt-24">
                {/* Mobile Image */}
                <img 
                    src="/mobileheader1.png" 
                    alt="Case Studies Header" 
                    className="w-full h-48 md:h-64 lg:h-auto object-cover md:hidden"
                />
                {/* Desktop Image */}
                <img 
                    src="/header1.png" 
                    alt="Case Studies Header" 
                    className="w-full h-48 md:h-64 lg:h-auto object-cover hidden md:block"
                />
            </div>

            {/* Main Content Container - Responsive */}
            <div className="max-w-7xl mx-auto px-3 md:px-4 lg:px-8 xl:px-12">
                {/* Header Section - Responsive */}
                <div className="py-6 md:py-8 lg:py-12">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 md:gap-6">
                        {/* Left Side - Main Content */}
                        <div className="flex-1 max-w-4xl">
                            {/* Date and Read Time - Mobile responsive */}
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-theme-primary mb-4 md:mb-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-purple-100 rounded-full"></div>
                                    <span className="text-sm md:text-lg tracking-wide">
                                        {new Date(selectedContent.date).toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" })}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-purple-100 rounded-full"></div>
                                    <span className="text-sm md:text-lg tracking-wide">{selectedContent.readTime}</span>
                                </div>
                            </div>

                            {/* Main Title - Mobile responsive */}
                            <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight mb-6 md:mb-8 tracking-wide">
                                {selectedContent.title}
                            </h1>

                            {/* Subtitle */}
                            <h2 className="text-lg md:text-2xl lg:text-3xl font-medium leading-tight mb-6 md:mb-8 tracking-wide text-theme-secondary">
                                {selectedContent.subtitle}
                            </h2>

                            {/* Author Section - Mobile responsive */}
                            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                                <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gray-300 rounded-lg flex items-center justify-center">
                                    <span className="text-gray-600 text-xs md:text-sm">Author</span>
                                </div>
                                <div>
                                    <div className="font-semibold text-base md:text-lg lg:text-xl tracking-wide">
                                        {selectedContent.author}
                                    </div>
                                    <div className="text-theme-secondary tracking-wide text-sm md:text-base">
                                        {selectedContent.category}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Share Section - Mobile responsive */}
                        <div className="lg:max-w-xs">
                            <div className="border-l-0 lg:border-l border-theme-border pl-0 lg:pl-6 xl:pl-8 mt-6 lg:mt-0">
                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 md:mb-4 tracking-wide">
                                    Share
                                </h3>
                                <p className="text-base md:text-lg font-semibold mb-4 md:mb-6 tracking-wide">
                                    Like this? Spread the word
                                </p>
                                
                                {/* Social Media Icons - Mobile responsive */}
                                <div className="flex flex-row lg:flex-col gap-3 md:gap-4">
                                    <button className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-purple-100 rounded-full flex items-center justify-center hover:bg-purple-200 transition-colors">
                                        <Copy className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" />
                                    </button>
                                    <button className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-purple-100 rounded-full flex items-center justify-center hover:bg-purple-200 transition-colors">
                                        <Linkedin className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" />
                                    </button>
                                    <button className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-purple-100 rounded-full flex items-center justify-center hover:bg-purple-200 transition-colors">
                                        <Facebook className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" />
                                    </button>
                                    <button className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-purple-100 rounded-full flex items-center justify-center hover:bg-purple-200 transition-colors">
                                        <Instagram className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dynamic Content Sections - Mobile responsive */}
                <div className="max-w-4xl">
                    {/* Excerpt Section */}
                    <section className="mb-8 md:mb-12">
                        <div className="prose prose-sm md:prose-lg max-w-none text-theme-primary leading-relaxed space-y-4 md:space-y-6">
                            <p className="text-base md:text-lg font-medium text-theme-secondary">
                                {selectedContent.excerpt}
                            </p>
                        </div>
                    </section>

                    {/* Main Content Section */}
                    <section className="mb-12 md:mb-16">
                        <div className="prose prose-sm md:prose-lg max-w-none text-theme-primary leading-relaxed space-y-4 md:space-y-6">
                            {renderContent(selectedContent.content)}
                        </div>
                        
                        {/* Content Image if available */}
                        {(selectedContent as any).bannerImage && (
                            <div className="w-full mt-6 md:mt-8 mb-6 md:mb-8">
                                <Image
                                    src={(selectedContent as any).bannerImage}
                                    alt={selectedContent.title}
                                    width={800}
                                    height={401}
                                    className="w-full h-48 md:h-64 lg:h-[401px] object-cover rounded-lg"
                                    priority={false}
                                />
                            </div>
                        )}
                    </section>
                </div>

                {/* Divider */}
                <div className="w-full border-t border-theme-border mb-8 md:mb-12"></div>

                {/* Topics Filter Section - Mobile responsive */}
                <div className="mb-6 md:mb-8">
                    <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
                        <h3 className="text-lg md:text-xl font-medium">Topics</h3>
                        <div className="flex flex-wrap gap-2 md:gap-4">
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 md:w-6 md:h-6 bg-purple-100 rounded"></div>
                                <span className="text-purple-100 text-sm md:text-base">All</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 md:w-6 md:h-6 border border-theme-border rounded"></div>
                                <span className="text-purple-100 text-sm md:text-base">HR Professional</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 md:w-6 md:h-6 border border-theme-border rounded"></div>
                                <span className="text-purple-100 text-sm md:text-base">Founder/ CXO</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 md:w-6 md:h-6 border border-theme-border rounded"></div>
                                <span className="text-purple-100 text-sm md:text-base">MNC/ Startup</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 md:w-6 md:h-6 border border-theme-border rounded"></div>
                                <span className="text-purple-100 text-sm md:text-base">Non-Profit Organization</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Arrows for slider */}
                <div className="flex justify-between items-center mb-6 md:mb-8">
                    <button
                        className={`w-8 h-8 md:w-10 md:h-10 bg-theme-bg-secondary rounded-full flex items-center justify-center hover:bg-theme-border transition-colors ${sliderIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={() => sliderIndex > 0 && setSliderIndex(sliderIndex - 1)}
                        disabled={sliderIndex === 0}
                    >
                        <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-theme-primary" />
                    </button>
                    <button
                        className={`w-8 h-8 md:w-10 md:h-10 bg-theme-bg-secondary rounded-full flex items-center justify-center hover:bg-theme-border transition-colors ${sliderIndex === totalPages - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={() => sliderIndex < totalPages - 1 && setSliderIndex(sliderIndex + 1)}
                        disabled={sliderIndex === totalPages - 1}
                    >
                        <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-theme-primary" />
                    </button>
                </div>

                                {/* Articles Slider Section - Mobile responsive */}
                                <section className="mb-12 md:mb-16">
                                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 md:mb-8 tracking-wide">
                                        All Articles
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                        {visibleCards.map(card => (
                                            <div key={card.slug} onClick={() => handleCardClick(card.slug)} className="cursor-pointer">
                                                <Card card={card} />
                                            </div>
                                        ))}
                                    </div>
                                </section>
            </div>
        </div>
    );
};

export default CaseStudies;
