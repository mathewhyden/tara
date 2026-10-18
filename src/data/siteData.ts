import logoUrl from '../assets/logo.webp';
import portraitUrl from '../assets/anne.jpg';
import heroHealingOfficeUrl from '../assets/photos/hero-healing-office.webp';
import traumaRecoveryUrl from '../assets/photos/trauma-recovery.webp';
import narcissisticAbuseRecoveryUrl from '../assets/photos/narcissistic-abuse-recovery.webp';
import emotionalResilienceUrl from '../assets/photos/emotional-resilience.webp';
import personalGrowthUrl from '../assets/photos/personal-growth.webp';
import mindfulnessUrl from '../assets/photos/mindfulness.webp';
import griefHealingUrl from '../assets/photos/grief-healing.webp';
import emotionalWellbeingUrl from '../assets/photos/emotional-wellbeing.webp';
import healthyRelationshipsUrl from '../assets/photos/healthy-relationships.webp';
import stressManagementUrl from '../assets/photos/stress-management.webp';
import selfUnderstandingUrl from '../assets/photos/self-understanding.webp';

export const IMG = {
  panels: [traumaRecoveryUrl, narcissisticAbuseRecoveryUrl, emotionalResilienceUrl, personalGrowthUrl, mindfulnessUrl, griefHealingUrl],
  logo: logoUrl,
  portrait: portraitUrl,
  hero: [heroHealingOfficeUrl, personalGrowthUrl, traumaRecoveryUrl],
};
export const TOPIC_IMAGES = {
  traumaRecovery: traumaRecoveryUrl,
  narcissisticAbuseRecovery: narcissisticAbuseRecoveryUrl,
  emotionalResilience: emotionalResilienceUrl,
  mindfulness: mindfulnessUrl,
  griefHealing: griefHealingUrl,
  stressManagement: stressManagementUrl,
  selfUnderstanding: selfUnderstandingUrl,
  healthyRelationships: healthyRelationshipsUrl,
  personalGrowth: personalGrowthUrl,
  emotionalWellbeing: emotionalWellbeingUrl,
};

/**
 * Tara Mindcare - Authoritative Data & Content
 * Rebranded from Cloe Brooks HTML Template for Dr Anne Rosario
 */

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  benefits: string[];
  duration: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  keyTakeaways: string[];
  category: string;
  author: string;
  date: string;
  readTime: string;
  imageUrl: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  service: string;
  quote: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'mindfulness' | 'healing-spaces' | 'self-care' | 'reflection';
  imageUrl: string;
  aspect: 'landscape' | 'portrait' | 'square';
  caption: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  isPopular?: boolean;
  features: string[];
  suitableFor: string;
}

export const BRAND_INFO = {
  brandName: 'Tara Mindcare',
  doctorName: 'Dr Anne Rosario',
  title: 'Counselling Psychologist',
  tagline: 'Heal • Empower • Thrive',
  email: 'drannerosario@gmail.com',
  phone: '+916369303583',
  phoneDisplay: '+91 6369303583',
  instagramHandle: '@healingwithdranne',
  instagramUrl: 'https://www.instagram.com/healingwithdranne/',
  linkedinName: 'Dr Anne Rosario',
  linkedinUrl: 'https://www.linkedin.com/in/dr-anne-rosario/',
  whatsappUrl: 'https://wa.me/916369303583?text=Hello%20Dr%20Anne%2C%20I%20would%20like%20to%20enquire%20about%20a%20session.',
  consultationHours: 'Please enquire to arrange a time',
  consultationType: 'Sessions arranged on enquiry',
  confidentialityNotice: 'Your enquiry is used only to reply to you.',
  aboutIntro: "Counselling can be a safe space to understand yourself, your emotions and your patterns; to navigate change, relationships and life's challenges; and to grow towards greater clarity, confidence and wellbeing.",
};
export const emailComposeUrl = (subject = '', body = '') => {
  const params = new URLSearchParams({ view: 'cm', fs: '1', to: BRAND_INFO.email });
  if (subject) params.set('su', subject);
  if (body) params.set('body', body);
  return `https://mail.google.com/mail/?${params.toString()}`;
};

export const openMail = (subject: string, body: string) => {
  window.open(emailComposeUrl(subject, body), '_blank', 'noopener,noreferrer');
};

export const SERVICES_DATA: ServiceItem[] = [
  {id:'trauma-recovery',title:'Trauma Recovery',shortDescription:'A gentle, trauma-informed space to make sense of difficult experiences at a pace that feels safe.',fullDescription:'Dr Anne brings trauma-informed psychology together with positive psychology principles to support recovery. No particular outcome can be guaranteed, and support is tailored to you.',iconName:'ShieldCheck',benefits:['Trauma-informed approach', 'A safe, unhurried pace', 'Building steadiness and self-trust'],duration:'Details on enquiry'},
  {id:'narcissistic-abuse',title:'Narcissistic Abuse Recovery',shortDescription:'Support in rebuilding self-trust, clarity and healthy boundaries after emotionally harmful relationships.',fullDescription:'Recovery from narcissistic abuse is listed among Dr Anne’s areas of specialization. Sessions focus on understanding what happened and rebuilding your sense of self.',iconName:'HeartHandshake',benefits:['Rebuilding self-trust', 'Clarity and healthy boundaries', 'Non-judgmental support'],duration:'Details on enquiry'},
  {id:'inner-child-resilience',title:'Emotional Resilience & Inner-Child Work',shortDescription:'Understanding early patterns and building healthier inner foundations to meet life with steadiness.',fullDescription:'Dr Anne helps people heal emotional wounds, rebuild resilience and cultivate healthy inner foundations.',iconName:'Compass',benefits:['Understanding emotional patterns', 'Building resilience', 'Healthier inner foundations'],duration:'Details on enquiry'},
  {id:'positive-psychology-coaching',title:'Positive Psychology Coaching',shortDescription:'Strengths-based, goal-oriented coaching toward a more intentional life. Coaching is distinct from psychotherapy.',fullDescription:'Dr Anne is an ICF-ACC certified Positive Psychology Coach with training in strengths-based practice.',iconName:'Sparkles',benefits:['Strengths-based growth', 'Clarity and direction', 'Intentional living'],duration:'Details on enquiry'},
  {id:'mindfulness-ei',title:'Mindfulness & Emotional Intelligence',shortDescription:'Practices for noticing feelings, pausing before reacting and relating more wisely to yourself and others.',fullDescription:'Mindfulness and emotional intelligence are among Dr Anne’s listed areas, and she is also a trained meditation teacher.',iconName:'Activity',benefits:['Awareness of feelings', 'Pausing before reacting', 'Relating with more understanding'],duration:'Details on enquiry'},
  {id:'grief-healing',title:'Grief Healing',shortDescription:'Company and care while you move through loss in your own way and time.',fullDescription:'Grief healing and strengths-based growth are among Dr Anne’s listed areas of specialization.',iconName:'Users',benefits:['Space for loss', 'No fixed timeline', 'Gentle, steady support'],duration:'Details on enquiry'},
];

export const TESTIMONIALS_DATA: Testimonial[] = [];

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    id: 'understanding-your-emotions',
    slug: 'understanding-your-emotions',
    title: 'Understanding Your Emotions: A Compassionate Guide to Feeling and Healing',
    category: 'Emotional Wellbeing',
    author: 'Tara Mindcare',
    date: '',
    readTime: '5 min read',
    imageUrl: TOPIC_IMAGES.emotionalWellbeing,
    tags: ['Emotions', 'Mindfulness', 'Self-Awareness', 'Counselling'],
    excerpt: 'Emotions can offer useful clues about what matters to us. Meeting them with curiosity can be a gentler starting point than judging ourselves for feeling them.',
    content: [
      'Many people feel pressure to move quickly past sadness, worry or anger. Yet emotions are part of ordinary human experience, and there is no single correct way to feel in a difficult moment.',
      'A brief pause can help you notice what is happening. You might name the feeling, notice where it shows up in your body, and consider what was happening just before it appeared. This is an invitation to understand, not a test you have to pass.',
      'Questions such as “What feels important to me here?” or “What might help me feel supported right now?” can open up reflection without assuming that every emotion has one simple explanation.',
      'If feelings are hard to manage alone, a conversation with a qualified professional can offer space to explore them at a pace that feels comfortable.'
    ],
    keyTakeaways: [
      'There is no need to judge yourself for having an emotion.',
      'Pausing to name a feeling can help you reflect on the moment.',
      'An emotion may have several influences; stay curious rather than assuming.',
      'Professional support is available when you would like help exploring what you feel.'
    ]
  },
  {
    id: 'building-self-confidence',
    slug: 'building-self-confidence',
    title: 'Building Self-Confidence: Unlearning Self-Doubt and Owning Your Worth',
    category: 'Personal Growth',
    author: 'Tara Mindcare',
    date: '',
    readTime: '6 min read',
    imageUrl: TOPIC_IMAGES.personalGrowth,
    tags: ['Confidence', 'Self-Esteem', 'Imposter Syndrome', 'Personal Growth'],
    excerpt: 'Confidence can grow through self-understanding, self-trust and small choices that reflect what matters to you.',
    content: [
      'Confidence does not mean feeling certain all the time. It can include recognising what you know, acknowledging what you are still learning and deciding how you want to respond when doubt appears.',
      'Notice the way you speak to yourself after a mistake or an unfamiliar challenge. Is that inner voice helping you learn, or making it harder to see the situation clearly? A more balanced view can leave room for both your limits and your strengths.',
      'You might begin with one manageable step: ask a question, try a new approach or make a choice that reflects your values. Progress does not have to be dramatic to matter, and confidence develops differently for each person.',
      'Positive psychology coaching can provide a structured space to explore strengths and goals. Coaching is distinct from psychotherapy, and the right form of support depends on what you are looking for.'
    ],
    keyTakeaways: [
      'Self-confidence can coexist with uncertainty.',
      'A balanced inner voice can make learning from setbacks easier.',
      'Small actions aligned with your values can be meaningful progress.',
      'Coaching and counselling serve different purposes; choose support that fits your needs.'
    ]
  },
  {
    id: 'navigating-relationships',
    slug: 'navigating-relationships',
    title: 'Navigating Relationships: Healthy Boundaries and Meaningful Connection',
    category: 'Relationships',
    author: 'Tara Mindcare',
    date: '',
    readTime: '7 min read',
    imageUrl: TOPIC_IMAGES.healthyRelationships,
    tags: ['Relationships', 'Boundaries', 'Communication', 'Attachment'],
    excerpt: 'Healthy boundaries help people communicate what they are comfortable with and what they need in a relationship.',
    content: [
      'Boundaries describe what feels acceptable to us and how we may respond when a limit is crossed. They do not control another person; they help make our needs and choices clearer.',
      'It can help to be specific and calm. For example: “I want to continue this conversation, but I need us to speak without insults. If that is not possible right now, I will take a break and return to it later.”',
      'The other person may not respond as hoped. A boundary is still useful as a guide for your own choices, and it can take practice to communicate one clearly—especially when the relationship matters to you.',
      'When recurring conflict feels difficult to navigate, counselling can offer a space to reflect on communication, needs and possible next steps.'
    ],
    keyTakeaways: [
      'Boundaries communicate your limits and guide your own decisions.',
      'Clear, specific language can make a request easier to understand.',
      'You can set a boundary without controlling another person’s response.',
      'Support can help when repeated conflict is hard to work through alone.'
    ]
  },
  {
    id: 'managing-everyday-stress',
    slug: 'managing-everyday-stress',
    title: 'Managing Everyday Stress: Practical Strategies for a Calmer Life',
    category: 'Stress Management',
    author: 'Tara Mindcare',
    date: '',
    readTime: '4 min read',
    imageUrl: TOPIC_IMAGES.stressManagement,
    tags: ['Stress', 'Wellbeing', 'Mindfulness', 'Calm'],
    excerpt: 'Everyday stress can feel more manageable when you notice what is contributing to it and make room for small, realistic pauses.',
    content: [
      'Stress can come from many directions: competing responsibilities, change, uncertainty or not having enough time to rest. It may help to write down what is weighing on you and separate what needs attention now from what can wait.',
      'Small pauses may offer a moment to reset. You could step outside, stretch, take a few comfortable breaths or put a short break between tasks. Try options that feel accessible to you; no single technique works for everyone.',
      'It can also help to look at expectations and commitments. Is there one task you can postpone, share or approach differently? Small adjustments may not remove every source of stress, but they can help you decide what to do next.',
      'If stress feels persistent or is affecting daily life, consider speaking with a qualified professional about the support available to you.'
    ],
    keyTakeaways: [
      'Notice which situations or demands are contributing to stress.',
      'Experiment with brief pauses that feel comfortable and realistic.',
      'Review expectations and decide whether one commitment can change.',
      'Seek professional guidance if stress is persistent or affecting daily life.'
    ]
  },
  {
    id: 'understanding-personal-patterns',
    slug: 'understanding-personal-patterns',
    title: 'Understanding Personal Patterns: Breaking Free From Repetitive Cycles',
    category: 'Self-Understanding',
    author: 'Tara Mindcare',
    date: '',
    readTime: '5 min read',
    imageUrl: TOPIC_IMAGES.selfUnderstanding,
    tags: ['Patterns', 'Psychology', 'Healing', 'Growth'],
    excerpt: 'Noticing repeated reactions can help you understand the situations, feelings and needs connected to them.',
    content: [
      'You may notice that certain situations bring up familiar reactions: saying yes when you want to say no, avoiding a difficult conversation or becoming self-critical after a setback. Observing a pattern is a starting point for curiosity, not a reason to blame yourself.',
      'Try noting what happened, what you felt and what you did next. Look for similarities, while remembering that the same response can have different reasons in different situations.',
      'With time and reflection, you may identify another response you would like to try. A counsellor can support this exploration if you want help understanding recurring patterns or considering change.'
    ],
    keyTakeaways: [
      'Notice recurring reactions with curiosity rather than self-criticism.',
      'Track the situation, your feelings and what you did next.',
      'Avoid assuming that every repeated response has the same cause.',
      'Counselling can offer support as you explore patterns and possible changes.'
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [];

export const PRICING_PLANS_DATA: PricingPlan[] = [];

export const FAQS_DATA = [
  {
    question: 'How do I know if counselling is right for me?',
    answer: 'Counselling is beneficial whenever you feel overwhelmed, stuck in repetitive patterns, navigating a difficult transition, or simply seeking deeper self-understanding and emotional clarity. You do not need to be in acute crisis to benefit from professional psychological guidance.'
  },
  {
    question: 'What can I expect in our first session?',
    answer: 'Our first session is an unhurried, warm conversation where you can share what has brought you to Tara Mindcare. Dr Anne Rosario will listen attentively, understand your background and present goals, and outline how you can work collaboratively together in a completely non-judgmental environment.'
  },
  {
    question: 'Are sessions confidential?',
    answer: 'Your privacy matters. Before counselling begins, Dr Anne can explain how information is handled and any limits to confidentiality that may apply.'
  },
  {
    question: 'How are online consultations conducted?',
    answer: 'Online consultations can be arranged by enquiry. Session details are discussed when scheduling; if possible, join from a quiet, private place where you feel comfortable speaking.'
  },
  {
    question: 'How many sessions will I need?',
    answer: 'The number of sessions varies with your concerns and preferences. You can discuss your goals with Dr Anne and review together whether continued sessions feel useful.'
  }
];
