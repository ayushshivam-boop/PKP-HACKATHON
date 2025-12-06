// 4 learning styles (must match the values used in your select box)
const STYLES = [
  { id: "visual", label: "Visual track" },
  { id: "reading", label: "Reading & notes track" },
  { id: "practice", label: "Practice-heavy track" },
  { id: "video", label: "Video-heavy track" },
];

// 21 base courses = 7 subjects × 3 levels
// Each one will be cloned into 4 style variants → 84 total COURSES.
const BASE_COURSES = [
  /* ----------------------------- MATHEMATICS ----------------------------- */

  {
    subject: "Mathematics",
    level: "beginner",
    baseTitle: "Foundation Math: Number Sense & Basics",
    durationWeeks: 4,
    topics: [
      "Week 1: Numbers, place value & basic operations",
      "Week 2: Fractions, decimals & percentages",
      "Week 3: Introduction to algebra – variables & simple equations",
      "Week 4: Graphing basics & word problems",
    ],
  },
  {
    subject: "Mathematics",
    level: "intermediate",
    baseTitle: "Algebra & Geometry Mastery",
    durationWeeks: 6,
    topics: [
      "Week 1: Linear equations, inequalities & manipulation",
      "Week 2: Quadratics – factorisation, roots, graphs",
      "Week 3: Coordinate geometry – distance, slope, midpoint",
      "Week 4: Geometry – triangles, circles & constructions",
      "Week 5: Trigonometry basics – identities, ratios",
      "Week 6: Word problems & applied mathematics",
    ],
  },
  {
    subject: "Mathematics",
    level: "advanced",
    baseTitle: "Calculus & Advanced Problem-Solving",
    durationWeeks: 5,
    topics: [
      "Week 1: Limits & continuity",
      "Week 2: Differentiation – rules, graph interpretation",
      "Week 3: Applications of derivatives – maxima/minima, optimisation",
      "Week 4: Integration – basics & substitution",
      "Week 5: Definite integrals & area under the curve",
    ],
  },

  /* ----------------------------- PROGRAMMING ----------------------------- */

  {
    subject: "Programming",
    level: "beginner",
    baseTitle: "Python Fundamentals with Mini Projects",
    durationWeeks: 5,
    topics: [
      "Week 1: Variables, input/output, data types",
      "Week 2: Conditions & loops",
      "Week 3: Functions & modular code",
      "Week 4: Lists, tuples, dictionaries",
      "Week 5: Mini project – calculator or number game",
    ],
  },
  {
    subject: "Programming",
    level: "intermediate",
    baseTitle: "Data Structures & Algorithms in Python",
    durationWeeks: 6,
    topics: [
      "Week 1: Arrays & strings",
      "Week 2: Linked lists",
      "Week 3: Stacks & queues",
      "Week 4: Trees & graphs basics",
      "Week 5: Sorting & searching algorithms",
      "Week 6: Time complexity & problem-solving practice",
    ],
  },
  {
    subject: "Programming",
    level: "advanced",
    baseTitle: "Full-Stack & Project-Based Programming",
    durationWeeks: 6,
    topics: [
      "Week 1: API basics & JSON",
      "Week 2: Frontend integration with APIs",
      "Week 3: Databases & ORMs (conceptual)",
      "Week 4: Authentication & sessions (conceptual)",
      "Week 5: Build & refine a capstone project",
      "Week 6: Testing, debugging & deployment overview",
    ],
  },

  /* ----------------------------- SCIENCE ----------------------------- */

  {
    subject: "Science",
    level: "beginner",
    baseTitle: "Physics Basics: Motion, Force & Energy",
    durationWeeks: 4,
    topics: [
      "Week 1: Motion – distance, speed, velocity",
      "Week 2: Newton’s laws of motion",
      "Week 3: Work, energy & power",
      "Week 4: Simple machines & mechanical advantage",
    ],
  },
  {
    subject: "Science",
    level: "intermediate",
    baseTitle: "Core Science: Physics, Chemistry & Biology",
    durationWeeks: 5,
    topics: [
      "Week 1: Atomic structure & chemical bonding",
      "Week 2: Acids, bases & simple reactions",
      "Week 3: Cell structure & cell division",
      "Week 4: Human body systems overview",
      "Week 5: Electricity & magnetism basics",
    ],
  },
  {
    subject: "Science",
    level: "advanced",
    baseTitle: "Advanced Science for Competitive Exams",
    durationWeeks: 6,
    topics: [
      "Week 1: Thermodynamics & kinetic theory",
      "Week 2: Organic chemistry fundamentals",
      "Week 3: Genetics, evolution & heredity",
      "Week 4: Modern physics – atomic models & radiation",
      "Week 5: Chemical equilibrium & electrochemistry",
      "Week 6: Revision & mixed problem practice",
    ],
  },

  /* ----------------------------- ENGLISH ----------------------------- */

  {
    subject: "English",
    level: "beginner",
    baseTitle: "English Grammar Foundation",
    durationWeeks: 4,
    topics: [
      "Week 1: Parts of speech",
      "Week 2: Tenses & sentence structure",
      "Week 3: Active/passive voice",
      "Week 4: Common grammar mistakes & corrections",
    ],
  },
  {
    subject: "English",
    level: "intermediate",
    baseTitle: "Effective Writing Skills",
    durationWeeks: 5,
    topics: [
      "Week 1: Paragraph writing & coherence",
      "Week 2: Essay writing",
      "Week 3: Formal letters & emails",
      "Week 4: Report writing",
      "Week 5: Creative writing",
    ],
  },
  {
    subject: "English",
    level: "advanced",
    baseTitle: "Advanced Communication & Vocabulary",
    durationWeeks: 5,
    topics: [
      "Week 1: High-level vocabulary & usage",
      "Week 2: Argumentative & persuasive writing",
      "Week 3: Presentation skills & speech structure",
      "Week 4: Critical reading & summarisation",
      "Week 5: Editing, tone & style refinement",
    ],
  },

  /* ----------------------------- APTITUDE ----------------------------- */

  {
    subject: "Aptitude",
    level: "beginner",
    baseTitle: "Aptitude Basics for Competitive Exams",
    durationWeeks: 5,
    topics: [
      "Week 1: Number series & simplifying calculations",
      "Week 2: Ratios, proportions, percentages",
      "Week 3: Time, work & distance",
      "Week 4: Logical reasoning & patterns",
      "Week 5: Data interpretation",
    ],
  },
  {
    subject: "Aptitude",
    level: "intermediate",
    baseTitle: "Quantitative & Logical Aptitude Practice",
    durationWeeks: 5,
    topics: [
      "Week 1: Profit, loss & simple interest",
      "Week 2: Permutations, combinations & probability basics",
      "Week 3: Seating arrangements & puzzles",
      "Week 4: Syllogisms & logical deductions",
      "Week 5: Mixed mock test sets",
    ],
  },
  {
    subject: "Aptitude",
    level: "advanced",
    baseTitle: "Advanced Aptitude for Placements & Exams",
    durationWeeks: 6,
    topics: [
      "Week 1: Advanced probability & combinatorics",
      "Week 2: Higher-level DI sets & caselets",
      "Week 3: Critical reasoning & argument evaluation",
      "Week 4: Speed math tricks & optimisation",
      "Week 5: Full-length mock tests",
      "Week 6: Error analysis & performance strategy",
    ],
  },

  /* ----------------------------- ECONOMICS ----------------------------- */

  {
    subject: "Economics",
    level: "beginner",
    baseTitle: "Basics of Microeconomics",
    durationWeeks: 4,
    topics: [
      "Week 1: Demand & supply",
      "Week 2: Elasticity",
      "Week 3: Market structures",
      "Week 4: Cost curves & revenue",
    ],
  },
  {
    subject: "Economics",
    level: "intermediate",
    baseTitle: "Macroeconomics Essentials",
    durationWeeks: 5,
    topics: [
      "Week 1: National income & GDP",
      "Week 2: Inflation & unemployment",
      "Week 3: Monetary policy & central banking",
      "Week 4: Fiscal policy & government budgets",
      "Week 5: International trade & exchange rates",
    ],
  },
  {
    subject: "Economics",
    level: "advanced",
    baseTitle: "Applied Economics & Policy",
    durationWeeks: 5,
    topics: [
      "Week 1: Economic growth models",
      "Week 2: Market failures & externalities",
      "Week 3: Development economics & inequality",
      "Week 4: Public policy case studies",
      "Week 5: Data interpretation & economic indicators",
    ],
  },

  /* ----------------------------- HISTORY ----------------------------- */

  {
    subject: "History",
    level: "beginner",
    baseTitle: "Modern History: World Timeline",
    durationWeeks: 5,
    topics: [
      "Week 1: Renaissance & Age of Exploration",
      "Week 2: Industrial Revolution",
      "Week 3: World War I",
      "Week 4: World War II",
      "Week 5: Post-war world & modern era",
    ],
  },
  {
    subject: "History",
    level: "intermediate",
    baseTitle: "Indian & World History Overview",
    durationWeeks: 5,
    topics: [
      "Week 1: Ancient civilisations & early kingdoms",
      "Week 2: Medieval period & empires",
      "Week 3: Colonialism & freedom movements",
      "Week 4: Partition, independence & nation-building",
      "Week 5: Major global movements in the 20th century",
    ],
  },
  {
    subject: "History",
    level: "advanced",
    baseTitle: "Thematic History & Exam Preparation",
    durationWeeks: 6,
    topics: [
      "Week 1: Social & cultural history themes",
      "Week 2: Economic history & trade networks",
      "Week 3: Political ideologies & revolutions",
      "Week 4: Case studies: important leaders & events",
      "Week 5: Source-based questions & analysis",
      "Week 6: Revision & practice papers",
    ],
  },
];

// Generate 84 concrete course objects (21 base × 4 styles)
export const COURSES = BASE_COURSES.flatMap((baseCourse, baseIndex) =>
  STYLES.map((style, styleIndex) => ({
    id: baseIndex * STYLES.length + styleIndex + 1, // unique ID 1..84
    subject: baseCourse.subject,
    level: baseCourse.level,
    style: style.id,
    title: `${baseCourse.baseTitle} – ${style.label}`,
    durationWeeks: baseCourse.durationWeeks,
    topics: baseCourse.topics,
  }))
);
