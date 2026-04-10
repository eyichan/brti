import { ClassicQuizQuestion } from "./types";

export const CLASSIC_QUESTIONS: ClassicQuizQuestion[] = [
  // ── S1: Self-Worth ──
  {
    id: "c1",
    dim: "S1",
    text: "A post goes viral roasting you by name (all in good fun, supposedly). Your first thought?",
    options: [
      { label: "They're right. Every word. I am that pathetic.", value: 1 },
      { label: "Haha they got me... but also, low-key ouch.", value: 2 },
      { label: "Let them post. I know who I am.", value: 3 },
    ],
  },
  {
    id: "c2",
    dim: "S1",
    text: '"Everyone in this room is more accomplished than me."',
    options: [
      { label: "Yeah. Almost certainly true.", value: 1 },
      { label: "Depends on the room, honestly.", value: 2 },
      { label: "Nah. I hold my own just fine.", value: 3 },
    ],
  },
  // ── S2: Self-Clarity ──
  {
    id: "c3",
    dim: "S2",
    text: '"I have a clear picture of who I really am."',
    options: [
      { label: "Disagree. I'm still buffering.", value: 1 },
      { label: "Neutral. Some days clearer than others.", value: 2 },
      { label: "Agree. I know exactly what I'm working with.", value: 3 },
    ],
  },
  {
    id: "c4",
    dim: "S2",
    text: "\"There's something I genuinely, deeply care about pursuing.\"",
    options: [
      { label: "Disagree. Nothing feels real enough yet.", value: 1 },
      { label: "Neutral. I have interests but no calling.", value: 2 },
      { label: "Agree. I know what lights me up.", value: 3 },
    ],
  },
  // ── S3: Core Drive ──
  {
    id: "c5",
    dim: "S3",
    text: '"I need to keep leveling up. Stagnation is death."',
    options: [
      { label: "Disagree. Comfort is the goal, not the obstacle.", value: 1 },
      { label: "Neutral. I want growth, but also naps.", value: 2 },
      { label: "Agree. Standing still makes me anxious.", value: 3 },
    ],
  },
  {
    id: "c6",
    dim: "S3",
    text: '"What random people on the internet think about me? Couldn\'t care less."',
    options: [
      { label: "Disagree. I read every comment and it haunts me.", value: 1 },
      { label: "Neutral. Sometimes I care, sometimes I don't.", value: 2 },
      { label: "Agree. Other people's opinions are their problem.", value: 3 },
    ],
  },
  // ── E1: Trust Level ──
  {
    id: "c7",
    dim: "E1",
    text: "Your partner hasn't replied for 5 hours. They said they \"weren't feeling well.\" Your gut reaction?",
    options: [
      { label: "Nobody's sick for 5 hours without checking their phone. Something's up.", value: 1 },
      { label: "Could go either way. I'll wait before jumping to conclusions.", value: 2 },
      { label: "They probably feel terrible. I'll check in later.", value: 3 },
    ],
  },
  {
    id: "c8",
    dim: "E1",
    text: '"In relationships, I often worry about being left behind."',
    options: [
      { label: "Yes. It's my default background anxiety.", value: 1 },
      { label: "Sometimes, when things feel unstable.", value: 2 },
      { label: "No. I trust the process.", value: 3 },
    ],
  },
  // ── E2: Heart Mode ──
  {
    id: "c9",
    dim: "E2",
    text: '"When I care about someone, I go absolutely ALL in. No half measures."',
    options: [
      { label: "Not really. I keep my walls up on purpose.", value: 1 },
      { label: "Maybe? I try to balance head and heart.", value: 2 },
      { label: "Absolutely. Full simp mode. No regrets.", value: 3 },
    ],
  },
  {
    id: "c10",
    dim: "E2",
    text: "Imagine dating someone who's genuinely kind, funny, thoughtful, and loyal. Like, actually perfect. You would:",
    options: [
      { label: "Still keep my guard up. Can't be too careful.", value: 1 },
      { label: "I'd fall for them, but keep some insurance.", value: 2 },
      { label: "I'd be down BAD. Full emotional investment.", value: 3 },
    ],
  },
  // ── E3: Boundary Style ──
  {
    id: "c11",
    dim: "E3",
    text: "You're dating someone who texts you every 15 minutes and wants to spend every free moment together. Your honest reaction?",
    options: [
      { label: "That's literally the dream. Give me MORE.", value: 1 },
      { label: "It's fine in small doses.", value: 2 },
      { label: "I need my own life, thanks.", value: 3 },
    ],
  },
  {
    id: "c12",
    dim: "E3",
    text: '"I need personal space in every relationship. Non-negotiable."',
    options: [
      { label: "I'd rather be close and connected 24/7.", value: 1 },
      { label: "Depends on the day.", value: 2 },
      { label: "Absolutely. Sacred boundary.", value: 3 },
    ],
  },
  // ── A1: World Lens ──
  {
    id: "c13",
    dim: "A1",
    text: '"Deep down, most people are fundamentally good."',
    options: [
      { label: "There are way more villains out there than you think.", value: 1 },
      { label: "Maybe. Jury's still out.", value: 2 },
      { label: "Yes. I choose to believe that.", value: 3 },
    ],
  },
  {
    id: "c14",
    dim: "A1",
    text: "A random little kid walks up to you on the street and hands you a candy with the biggest grin. Your first thought?",
    options: [
      { label: "Is this some kind of setup? I'm leaving.", value: 1 },
      { label: "Uh... thanks? *confused but okay*", value: 2 },
      { label: "That's the most wholesome thing I've seen all year!", value: 3 },
    ],
  },
  // ── A2: Rule Stance ──
  {
    id: "c15",
    dim: "A2",
    text: "Big exam tomorrow. Mandatory study hall tonight. But your crush just asked you to play games together. What do you do?",
    options: [
      { label: "Skip it. One night won't kill me.", value: 1 },
      { label: "Call in sick. Compromise.", value: 2 },
      { label: "Exam tomorrow. Priorities.", value: 3 },
    ],
  },
  {
    id: "c16",
    dim: "A2",
    text: '"I like breaking rules. Being told what to do isn\'t for me."',
    options: [
      { label: "Agree. Rules are suggestions at best.", value: 1 },
      { label: "Neutral. Depends on the rule.", value: 2 },
      { label: "Disagree. Structure keeps things from falling apart.", value: 3 },
    ],
  },
  // ── A3: Purpose Level ──
  {
    id: "c17",
    dim: "A3",
    text: '"I usually do things with a clear goal in mind."',
    options: [
      { label: "Disagree. I mostly just wing it.", value: 1 },
      { label: "Neutral. Sometimes planned, sometimes vibes.", value: 2 },
      { label: "Agree. I need direction or I feel lost.", value: 3 },
    ],
  },
  {
    id: "c18",
    dim: "A3",
    text: "\"One day it hit me: life is basically meaningless. We're just fancy animals running on hormones. Hungry? Eat. Tired? Sleep. That's the whole game.\"",
    options: [
      { label: "Yeah. That's... pretty accurate actually.", value: 1 },
      { label: "Maybe, maybe not. Too deep for a Tuesday.", value: 2 },
      { label: "That's completely ridiculous. Life has meaning.", value: 3 },
    ],
  },
  // ── Ac1: Motivation Type ──
  {
    id: "c19",
    dim: "Ac1",
    text: '"I do things to achieve results and grow — not just to avoid problems."',
    options: [
      { label: "Disagree. Avoiding disaster IS the goal.", value: 1 },
      { label: "Neutral. Mix of both, honestly.", value: 2 },
      { label: "Agree. Growth is what drives me.", value: 3 },
    ],
  },
  {
    id: "c20",
    dim: "Ac1",
    text: "You've been stuck on the toilet for 30 minutes. Nothing is happening. Your approach?",
    options: [
      { label: "Just... sit here. Maybe another 30 minutes will do it.", value: 1 },
      { label: "Start doing motivational self-talk to your own body. 'COME ON!'", value: 2 },
      { label: "Deploy the nuclear option. Maximum efficiency. Problem solved.", value: 3 },
    ],
  },
  // ── Ac2: Decision Speed ──
  {
    id: "c21",
    dim: "Ac2",
    text: '"I make decisions fast. I hate being indecisive."',
    options: [
      { label: "Disagree. I need time to overthink everything.", value: 1 },
      { label: "Neutral. Normal-level deliberation.", value: 2 },
      { label: "Agree. Pick something and move on.", value: 3 },
    ],
  },
  {
    id: "c22",
    dim: "Ac2",
    text: "This question has no question. Just pick an answer blindly.",
    options: [
      { label: "After 2 minutes of deliberation... A?", value: 1 },
      { label: "Uh, B? Sure, I guess.", value: 2 },
      { label: "C. No hesitation. Next.", value: 3 },
    ],
  },
  // ── Ac3: Execution Power ──
  {
    id: "c23",
    dim: "Ac3",
    text: "When someone says you have \"great execution,\" your inner monologue is closest to:",
    options: [
      { label: "Only when the deadline is breathing down my neck.", value: 1 },
      { label: "Sometimes, when the stars align.", value: 2 },
      { label: "Yes. Things NEED to get done and I make it happen.", value: 3 },
    ],
  },
  {
    id: "c24",
    dim: "Ac3",
    text: '"I always make plans, ____"',
    options: [
      { label: "...and then completely ignore them. Classic me.", value: 1 },
      { label: "...and sometimes actually follow through.", value: 2 },
      { label: "...and I get genuinely annoyed when they get derailed.", value: 3 },
    ],
  },
  // ── So1: Social Battery ──
  {
    id: "c25",
    dim: "So1",
    text: "Your online gaming crew wants to meet up IRL. Your honest reaction?",
    options: [
      { label: "Chatting online is fine but meeting in person? Hard pass.", value: 1 },
      { label: "Sure, if the vibe is right, I'll show up.", value: 2 },
      { label: "I'm already planning the outfit. Let's make this happen.", value: 3 },
    ],
  },
  {
    id: "c26",
    dim: "So1",
    text: "Your friend brings THEIR friend to hang out. Your default vibe?",
    options: [
      { label: "Stranger danger. Polite but distant.", value: 1 },
      { label: "If they're cool, I'll engage. If not, I'm quiet.", value: 2 },
      { label: "Friend of a friend is basically already my friend!", value: 3 },
    ],
  },
  // ── So2: Personal Bubble ──
  {
    id: "c27",
    dim: "So2",
    text: '"My personal space has a motion sensor. Get too close and the alarm goes off."',
    options: [
      { label: "Agree. Stay behind the line, please.", value: 3 },
      { label: "Neutral. Depends who you are.", value: 2 },
      { label: "Disagree. Come closer, I'm a hugger.", value: 1 },
    ],
  },
  {
    id: "c28",
    dim: "So2",
    text: '"I want to be super close with the people I trust. Like, finish-each-other\'s-sentences close."',
    options: [
      { label: "Agree. That's the whole point of having people.", value: 1 },
      { label: "Neutral. Close-ish is fine.", value: 2 },
      { label: "Disagree. Love you, but stay on your side.", value: 3 },
    ],
  },
  // ── So3: Mask Level ──
  {
    id: "c29",
    dim: "So3",
    text: "You have a dark or negative take on something but you hold it back. Usually because:",
    options: [
      { label: "This rarely happens. I say what I think.", value: 1 },
      { label: "Social dynamics. I read the room first.", value: 2 },
      { label: "I don't want people to see the real me.", value: 3 },
    ],
  },
  {
    id: "c30",
    dim: "So3",
    text: '"I act like a completely different person depending on who I\'m around."',
    options: [
      { label: "Disagree. Same me, every room.", value: 1 },
      { label: "Neutral. Minor adjustments.", value: 2 },
      { label: "Agree. Full character swap.", value: 3 },
    ],
  },
];

export const CLASSIC_SPECIAL_QUESTIONS: ClassicQuizQuestion[] = [
  {
    id: "gate_q1",
    dim: "S1",
    special: true,
    kind: "gate",
    text: "What's your go-to hobby when you have free time?",
    options: [
      { label: "Eating, sleeping, doomscrolling.", value: 1 },
      { label: "Creative stuff — art, music, writing.", value: 2 },
      { label: "Drinking.", value: 3 },
      { label: "Working out, sports, touching grass.", value: 4 },
    ],
  },
  {
    id: "gate_q2",
    dim: "S1",
    special: true,
    kind: "gate_trigger",
    text: "How do you feel about alcohol?",
    options: [
      { label: "Social drinks only. I'm a lightweight and I know it.", value: 1 },
      { label: "I carry a flask everywhere. Alcohol is basically a food group at this point.", value: 2 },
    ],
  },
];
