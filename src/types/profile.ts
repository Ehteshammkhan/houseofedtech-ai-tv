export type ProfileMenuItem = {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
};

export type UserProfile = {
  id: string;
  name: string;
  email: string;
  plan: string;
  avatar: string;
  learningHours: number;
  completedCourses: number;
  streakDays: number;
  menu: ProfileMenuItem[];
};