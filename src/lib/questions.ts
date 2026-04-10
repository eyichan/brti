import { DimensionKey, DimensionMeta, QuizQuestion } from "./types";

export const DIMENSIONS: Record<DimensionKey, DimensionMeta> = {
  CH: {
    name: "Chaos Energy",
    description: "How unhinged and unpredictable you are",
    low: "You're the responsible friend. Someone has to keep the group chat sane, and it's always you.",
    mid: "You can go feral when the mood is right, but you also know when to act normal around adults.",
    high: "You are a walking natural disaster wrapped in a meme. Structure fears you.",
  },
  RZ: {
    name: "Rizz Factor",
    description: "Your natural charm and social magnetism",
    low: "Your rizz is on airplane mode. You once waved back at someone who wasn't waving at you.",
    mid: "You have situational rizz — it activates randomly like a gacha pull.",
    high: "You could sell ice to a penguin. People are drawn to you like moths to a screen at 3 AM.",
  },
  BR: {
    name: "Brain Mode",
    description: "Strategic thinker or pure instinct creature",
    low: "You operate on pure vibes and impulse. Thinking is for after the consequences.",
    mid: "Sometimes you plan, sometimes you just send it. Depends on the day.",
    high: "You're playing 4D chess while everyone else is eating the pieces.",
  },
  SQ: {
    name: "Squad Energy",
    description: "Lone wolf or pack animal",
    low: "You ghosted the group chat 3 months ago and nobody noticed because you were already just lurking.",
    mid: "You enjoy people in controlled doses, like a social buffet — you pick what you want.",
    high: "You'd form a squad to go to the bathroom. No one gets left behind.",
  },
  VB: {
    name: "Vibe Check",
    description: "Positive sunshine or delightful darkness",
    low: "You find beauty in the absurd and humor in the void. Your memes concern your friends.",
    mid: "You oscillate between motivational poster and existential crisis on a daily basis.",
    high: "You radiate such aggressive positivity that sad songs change genre when you walk in.",
  },
};

export const QUESTIONS: QuizQuestion[] = [
  {
    id: "q1",
    dim: "CH",
    text: "Your alarm goes off. What's your first move?",
    options: [
      { label: "Get up, make the bed, follow the routine like a functional human.", value: 1 },
      { label: "Snooze it twice, then panic-sprint through getting ready.", value: 2 },
      { label: "Throw my phone across the room, then sleep for another hour out of spite.", value: 3 },
    ],
  },
  {
    id: "q2",
    dim: "CH",
    text: "Someone cuts in front of you in line. You:",
    options: [
      { label: "Say nothing but judge them with the intensity of a thousand suns.", value: 1 },
      { label: "Clear your throat loudly and give them THE LOOK.", value: 2 },
      { label: "Start narrating the situation out loud like a nature documentary.", value: 3 },
    ],
  },
  {
    id: "q3",
    dim: "CH",
    text: "Pick a way to enter a room full of strangers:",
    options: [
      { label: "Walk in quietly, find a wall to lean against, observe.", value: 1 },
      { label: "Walk in normally, nod at people, find your spot.", value: 2 },
      { label: "Kick the door open and announce \"YOUR MAIN CHARACTER HAS ARRIVED.\"", value: 3 },
    ],
  },
  {
    id: "q4",
    dim: "RZ",
    text: "You accidentally make eye contact with your crush. What happens?",
    options: [
      { label: "I look away so fast I almost break my neck.", value: 1 },
      { label: "I hold it for a moment, then casually look away like a normal person.", value: 2 },
      { label: "I wink. I don't know why. My body just does it automatically.", value: 3 },
    ],
  },
  {
    id: "q5",
    dim: "RZ",
    text: "How do your friends describe your social presence?",
    options: [
      { label: "\"Wait, you were there?\"", value: 1 },
      { label: "\"Reliable. Always comes through when it matters.\"", value: 2 },
      { label: "\"Could probably talk their way out of prison.\"", value: 3 },
    ],
  },
  {
    id: "q6",
    dim: "RZ",
    text: "A stranger drops their wallet. Your move?",
    options: [
      { label: "Pick it up and awkwardly chase them while whispering \"excuse me\" repeatedly.", value: 1 },
      { label: "Tap their shoulder, return it, small talk, move on.", value: 2 },
      { label: "Return it with such main-character energy they ask for your number.", value: 3 },
    ],
  },
  {
    id: "q7",
    dim: "BR",
    text: "You have a major deadline tomorrow. You:",
    options: [
      { label: "Start it at 11 PM with an energy drink and pure adrenaline.", value: 1 },
      { label: "Started a few days ago but still have some finishing touches.", value: 2 },
      { label: "Finished it last week. I've been reviewing it since.", value: 3 },
    ],
  },
  {
    id: "q8",
    dim: "BR",
    text: "Your friend proposes a completely unhinged plan. Your reaction?",
    options: [
      { label: "\"Say less, I'm already in the car.\"", value: 1 },
      { label: "\"Okay but let me think about this for 5 minutes first.\"", value: 2 },
      { label: "\"I've already identified 7 ways this could go wrong.\"", value: 3 },
    ],
  },
  {
    id: "q9",
    dim: "BR",
    text: "How do you learn a new video game?",
    options: [
      { label: "Just start pressing buttons and figure it out through chaos.", value: 1 },
      { label: "Skim the tutorial, then wing it.", value: 2 },
      { label: "Read every tooltip, watch guides, optimize before playing.", value: 3 },
    ],
  },
  {
    id: "q10",
    dim: "SQ",
    text: "Friday night. What's the move?",
    options: [
      { label: "Solo gaming session, snacks, zero human interaction. Bliss.", value: 1 },
      { label: "Chill with 2-3 close friends. Small talk required: zero.", value: 2 },
      { label: "Call EVERYONE. It's not a party until there's 20+ people.", value: 3 },
    ],
  },
  {
    id: "q11",
    dim: "SQ",
    text: "Your friend is going through it. You:",
    options: [
      { label: "Send them a meme that perfectly captures the situation.", value: 1 },
      { label: "Check in, listen, give advice if they want it.", value: 2 },
      { label: "Show up at their door with food, tissues, and a 3-hour plan.", value: 3 },
    ],
  },
  {
    id: "q12",
    dim: "SQ",
    text: "Group project. Your role?",
    options: [
      { label: "The one who does their part solo and sends it at 3 AM.", value: 1 },
      { label: "The glue. Makes sure people communicate and deadlines are met.", value: 2 },
      { label: "The hype person who rallies the troops and keeps energy up.", value: 3 },
    ],
  },
  {
    id: "q13",
    dim: "VB",
    text: "You see a pigeon eating a whole pizza slice on the sidewalk. Your thought?",
    options: [
      { label: "\"That pigeon is living my dream life.\" *existential sigh*", value: 1 },
      { label: "\"Lol, classic pigeon move.\"", value: 2 },
      { label: "\"GO PIGEON GO!! YOU DESERVE THAT PIZZA!! 🎉\"", value: 3 },
    ],
  },
  {
    id: "q14",
    dim: "VB",
    text: "Pick the quote that hits hardest:",
    options: [
      { label: "\"We're all just NPCs in someone else's speedrun.\"", value: 1 },
      { label: "\"It is what it is, and what it is ain't great.\"", value: 2 },
      { label: "\"Every day above ground is a W.\"", value: 3 },
    ],
  },
  {
    id: "q15",
    dim: "VB",
    text: "You just failed spectacularly at something in public. Your response?",
    options: [
      { label: "\"Add it to the compilation of my L's.\" *dead inside*", value: 1 },
      { label: "Laugh it off, pretend it was on purpose.", value: 2 },
      { label: "Turn it into a victory speech. \"THAT WAS INTENTIONAL AND I'D DO IT AGAIN.\"", value: 3 },
    ],
  },
];
