import { defineStore } from 'pinia'
import { type User, Gender, CivilStatus } from '~/types'

export const useUserStore = defineStore('user', () => {
  const user = ref<User>({
    firstname: "Reyven",
    lastname: "Biloy",
    middlename: "S.",
    email: "reyvenb@gmail.com",
    profilePicture: "https://cdn-icons-png.flaticon.com/512/219/219970.png",
    notifications: [
      { id: 1, date: new Date(), route: "/", message: "This is a notification 1" },
      { id: 2, date: new Date(), route: "/", message: "This is a notification 2" },
    ],
    profileStatus: {
      applicationProfile: 0.75,
      resume: 0.50,
      assessmentScore: 0.0,
      videoIntroduction: 0.0,
      profileCompletion: 1.0,
      professionalProfileCompletion: 0.5,
    },
    professionalProfile: {
      profession: "UI/UX Designer",
      educationalAttainment: "Bachelor of Science in Computer Science",
      numberOfExperience: 12,
      workStart: "immediately",
      preferredSalary: 35_000,
    },
    generalDetails: {
      birthday: new Date(),
      gender: Gender.Male,
      civilStatus: CivilStatus.Married,
      nationality: "Filipino",
    },
    professionalStatus: {
      recentJobTitle: "Web Designer and Developer",
      interviewAvailability: null,
      currentMonthlySalaryGross: 30_000.0,
      allowanceNonTaxable: null,
      preEmploymentLeaves: [
        { id: 1, message: "Birthday", date: new Date() },
        { id: 2, message: "Church activity", date: new Date() },
      ],
      whereCanYouWork: {
        home: true,
        office: true,
      },
      estimateTravelTimeToOffice: '15 mins',
      connectionType: "Globe Broadband",
      portfolio: null,
    },
    preferences: {
      dayShift: null,
      midShift: null,
      nightShift: null,
      englishOnlyPolicy: null,
      recommendation: null,
      marketingPermission: null,
      referral: null,
    },
  })


  return { user }
})
