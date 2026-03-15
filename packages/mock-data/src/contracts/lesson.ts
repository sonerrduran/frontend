/**
 * Lesson API Contracts
 * Ders ile ilgili API interface'leri
 */

export type SubjectType =
  | 'math'
  | 'turkish'
  | 'english'
  | 'science'
  | 'social-studies'
  | 'history'
  | 'geography'
  | 'religion'
  | 'music'
  | 'art'
  | 'physical-education'
  | 'informatics'
  | 'life-science'
  | 'german';

export type ContentType = 'video' | 'text' | 'interactive' | 'quiz' | 'exercise';

export interface Subject {
  id: string;
  name: string;
  description: string;
  type: SubjectType;
  icon: string;
  color: string;
  gradeLevel: number;
  order: number;
}

export interface Topic {
  id: string;
  subjectId: string;
  name: string;
  description: string;
  order: number;
  gradeLevel: number;
  estimatedDuration: number; // dakika
  difficulty: 'easy' | 'medium' | 'hard';
  prerequisites?: string[]; // topic IDs
  learningObjectives: string[];
}

export interface Lesson {
  id: string;
  topicId: string;
  subjectId: string;
  name: string;
  description: string;
  content: LessonContent[];
  order: number;
  gradeLevel: number;
  duration: number; // dakika
  difficulty: 'easy' | 'medium' | 'hard';
  tags: string[];
  isPublished: boolean;
  isFeatured: boolean;
  viewCount: number;
  completionCount: number;
  averageRating: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface LessonContent {
  id: string;
  type: ContentType;
  title: string;
  order: number;
  data: VideoContent | TextContent | InteractiveContent | QuizContent | ExerciseContent;
}

export interface VideoContent {
  url: string;
  duration: number;
  thumbnail?: string;
  subtitles?: string;
}

export interface TextContent {
  html: string;
  markdown?: string;
  images?: string[];
}

export interface InteractiveContent {
  componentType: string;
  props: Record<string, any>;
}

export interface QuizContent {
  questions: QuizQuestion[];
  passingScore: number;
  timeLimit?: number;
}

export interface QuizQuestion {
  id: string;
  text: string;
  type: 'multiple-choice' | 'true-false' | 'fill-in-blank';
  options?: string[];
  correctAnswer: string | boolean;
  explanation?: string;
  points: number;
}

export interface ExerciseContent {
  instructions: string;
  problems: ExerciseProblem[];
  hints?: string[];
}

export interface ExerciseProblem {
  id: string;
  question: string;
  answer: string | number;
  solution?: string;
  points: number;
}

export interface LessonProgress {
  userId: string;
  lessonId: string;
  isStarted: boolean;
  isCompleted: boolean;
  completionPercentage: number;
  currentContentId?: string;
  timeSpent: number;
  score?: number;
  quizResults?: QuizResult[];
  startedAt?: Date;
  completedAt?: Date;
  lastAccessedAt: Date;
}

export interface QuizResult {
  quizId: string;
  score: number;
  totalScore: number;
  percentage: number;
  isPassed: boolean;
  answers: QuizAnswer[];
  completedAt: Date;
}

export interface QuizAnswer {
  questionId: string;
  userAnswer: string | boolean;
  isCorrect: boolean;
  pointsEarned: number;
}

export interface LessonNote {
  id: string;
  userId: string;
  lessonId: string;
  contentId?: string;
  text: string;
  timestamp?: number; // video için
  createdAt: Date;
  updatedAt: Date;
}
