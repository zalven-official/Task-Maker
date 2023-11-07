// import type { CivilStatus, Gender, Notification } from ".";
export interface User {
  id: string;
  username: string;
  email: string;
  password: string;

  createdAt: Date;
  updatedAt: Date;
}

// export interface ProfileStatus {
//   applicationProfile: number;
//   resume: number;
//   assessmentScore: number;
//   videoIntroduction: number;
//   profileCompletion: number;
//   professionalProfileCompletion: number;
// }

// export interface ProfessionalProfile {
//   profession: string;
//   educationalAttainment: string;
//   numberOfExperience: number;
//   workStart: string;
//   preferredSalary: number;
// }

// export interface PreEmploymentLeave {
//   id: number;
//   message: string;
//   date: Date;
// }

// export interface ProfessionalStatus {
//   recentJobTitle: string;
//   interviewAvailability: Date | null;
//   currentMonthlySalaryGross: number;
//   allowanceNonTaxable: number | null;
//   preEmploymentLeaves: PreEmploymentLeave[];
//   whereCanYouWork: {
//     home: boolean;
//     office: boolean;
//   };
//   estimateTravelTimeToOffice: string;
//   connectionType: string;
//   portfolio: string | null;
// }

// export interface Preferences {
//   dayShift: boolean | null;
//   midShift: boolean | null;
//   nightShift: boolean | null;
//   englishOnlyPolicy: boolean | null;
//   recommendation: string | null;
//   marketingPermission: boolean | null;
//   referral: string | null;
// }

// export interface GeneralDetails {
//   birthday: Date;
//   gender: Gender;
//   civilStatus: CivilStatus;
//   nationality: string;
// }

// export interface User {
//   firstname: string;
//   lastname: string;
//   middlename: string;
//   email: string;
//   profilePicture: string;
//   notifications: Notification[];
//   profileStatus: ProfileStatus;
//   professionalProfile: ProfessionalProfile;
//   generalDetails: GeneralDetails;
//   professionalStatus: ProfessionalStatus;
//   preferences: Preferences;
// }