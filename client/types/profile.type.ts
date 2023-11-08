import type { Notification } from '.'

export enum Gender {
  Male = "Male",
  Female = "Female",
  Other = "Other",
}

export enum CivilStatus {
  Single = "Single",
  Married = "Married",
  Divorced = "Divorced",
  Widowed = "Widowed",
  Other = "Other",
}


export interface ProfileStatus {
  applicationProfile: number;
  resume: number;
  assessmentScore: number;
  videoIntroduction: number;
  profileCompletion: number;
  professionalProfileCompletion: number;
}

export interface ProfessionalProfile {
  profession: string;
  educationalAttainment: string;
  numberOfExperience: number;
  workStart: string;
  preferredSalary: number;
}

export interface PreEmploymentLeave {
  id: number;
  message: string;
  date: Date;
}

export interface ProfessionalStatus {
  recentJobTitle: string;
  interviewAvailability: Date | null;
  currentMonthlySalaryGross: number;
  allowanceNonTaxable: number | null;
  preEmploymentLeaves: PreEmploymentLeave[];
  whereCanYouWork: {
    home: boolean;
    office: boolean;
  };
  estimateTravelTimeToOffice: string;
  connectionType: string;
  portfolio: string | null;
}

export interface Preferences {
  dayShift: boolean | null;
  midShift: boolean | null;
  nightShift: boolean | null;
  englishOnlyPolicy: boolean | null;
  recommendation: string | null;
  marketingPermission: boolean | null;
  referral: string | null;
}

export interface GeneralDetails {
  birthday: Date;
  gender: Gender;
  civilStatus: CivilStatus;
  nationality: string;
}

export interface Profile {
  firstname: string;
  lastname: string;
  middlename: string;
  email: string;
  profilePicture: string;
  notifications: Notification[];
  profileStatus: ProfileStatus;
  professionalProfile: ProfessionalProfile;
  generalDetails: GeneralDetails;
  professionalStatus: ProfessionalStatus;
  preferences: Preferences;
}