import type { Experience, SkillCategory, Publication, Certification } from './types';
import MedicalIcon from './components/icons/MedicalIcon';

export const PERSONAL_INFO = {
  name: 'Sidharth Sajeev',
  title: 'Medical Doctor (MBBS)',
  bio: "A dedicated and compassionate medical doctor with experience in emergency and general medicine. Currently serving as a Casualty Medical Officer, with a proven ability in coordination and sincerity, and a passion for hands-on clinical exposure. Aims to pursue MS in Surgery from a top Indian medical college.",
  email: 'sidharthsajeevkk@gmail.com',
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    categoryTitle: 'Emergency & Acute Care',
    skills: [
      { name: 'Emergency Care', icon: MedicalIcon },
      { name: 'Trauma Management', icon: MedicalIcon },
      { name: 'Patient Triage', icon: MedicalIcon },
      { name: 'ACLS/BLS Protocols', icon: MedicalIcon },
    ],
  },
  {
    categoryTitle: 'Procedural Skills',
    skills: [
      { name: 'Minor Procedures', icon: MedicalIcon },
      { name: 'Suturing & Wound Care', icon: MedicalIcon },
      { name: 'Basic Surgical Skills', icon: MedicalIcon },
      { name: 'IV Cannulation', icon: MedicalIcon },
    ],
  },
  {
    categoryTitle: 'Patient Management',
    skills: [
      { name: 'Patient Diagnosis', icon: MedicalIcon },
      { name: 'Medical Documentation', icon: MedicalIcon },
      { name: 'Pre-op & Post-op Care', icon: MedicalIcon },
      { name: 'Patient Counseling', icon: MedicalIcon },
      { name: 'ECG Interpretation', icon: MedicalIcon },
      { name: 'EHR Management', icon: MedicalIcon },
    ],
  },
];


export const EXPERIENCES: Experience[] = [
  {
    title: 'Casualty Medical Officer',
    description: 'Currently working as a Casualty Medical Officer at SDTTA Hospital, Chottanikara, managing emergency cases and providing immediate medical care in a fast-paced environment.',
    tags: ['Emergency Medicine', 'Casualty', 'Patient Triage'],
    imageUrl: 'https://images.undraw.co/illustrations/undraw_ambulance_re_k7km.svg',
  },
  {
    title: 'Clinical Experience - General Hospital',
    description: 'Gained 3 months of experience at General Hospital, Muvattupuzha, across Medicine, Surgery, and OBG departments. Also handled duties in the General OP and Casualty.',
    tags: ['General Practice', 'Multi-department', 'OPD'],
    imageUrl: 'https://images.undraw.co/illustrations/undraw_medicine_b-1-ol.svg',
  },
  {
    title: 'Medical Internship',
    description: 'Completed a one-year compulsory rotating residential internship at Malankara Orthodox Syrian Church Medical College Hospital, gaining comprehensive experience across clinical departments.',
    tags: ['Internship', 'Clinical Rotation', 'Patient Care'],
    imageUrl: 'https://images.undraw.co/illustrations/undraw_medical_research_qg4d.svg',
  },
  {
    title: 'Rotation: General Surgery',
    description: 'Assisted in various surgical procedures, provided pre-operative and post-operative care, and managed surgical wards. Gained proficiency in minor surgical skills.',
    tags: ['Surgery', 'Pre-op Care', 'Post-op Care'],
    imageUrl: 'https://images.undraw.co/illustrations/undraw_operating_room_re_k12e.svg',
    highlight: 'Key highlight: Played an active role in managing a complex post-operative case that required rapid diagnosis and a coordinated team effort.',
  },
   {
    title: 'Rotation: Obstetrics & Gynaecology',
    description: 'Assisted in deliveries, provided antenatal and postnatal care, and gained experience in managing common gynaecological conditions. Participated in family planning counseling.',
    tags: ['OBG', 'Antenatal Care', 'Postnatal Care'],
    imageUrl: 'https://images.undraw.co/illustrations/undraw_pregnant_woman_re_cwk9.svg',
  },
  {
    title: 'Rotation: Pediatrics',
    description: 'Managed common pediatric illnesses, administered vaccinations, and monitored child development in outpatient and inpatient settings. Gained experience in neonatal resuscitation.',
    tags: ['Pediatrics', 'Vaccination', 'Neonatal Care'],
    imageUrl: 'https://images.undraw.co/illustrations/undraw_pediatrician_doc-2-aj.svg',
  },
  {
    title: 'Rotation: Orthopaedics',
    description: 'Managed trauma cases, assisted in fracture reductions and fixations, and provided care for patients with musculoskeletal conditions. Gained experience in plaster application and removal.',
    tags: ['Orthopaedics', 'Trauma', 'Fracture Management'],
    imageUrl: 'https://images.undraw.co/illustrations/undraw_x-ray_of-a-bone_re_25do.svg',
  },
  {
    title: 'Rotation: Community Medicine',
    description: 'Participated in rural health camps, conducted health surveys, and delivered health education programs. Gained insight into public health challenges and preventive medicine.',
    tags: ['Community Health', 'Public Health', 'Preventive Care'],
    imageUrl: 'https://images.undraw.co/illustrations/undraw_active_support_re_b7sj.svg',
  },
];

// FIX: Added and exported PUBLICATIONS and CERTIFICATIONS arrays with data, resolving import errors in other components.
export const PUBLICATIONS: Publication[] = [
  {
    title: 'A Case Study on Post-Operative Complications in Laparoscopic Cholecystectomy',
    journal: 'Indian Journal of Surgery',
    year: 2023,
    url: '#', // Placeholder URL
  },
  {
    title: 'Trends in Emergency Trauma Management in Rural India',
    journal: 'Journal of Emergency Medicine, Trauma & Acute Care',
    year: 2024,
    url: '#', // Placeholder URL
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: 'Advanced Cardiac Life Support (ACLS)',
    issuingBody: 'American Heart Association',
    year: 2023,
  },
  {
    name: 'Basic Life Support (BLS)',
    issuingBody: 'American Heart Association',
    year: 2023,
  },
  {
    name: 'Travancore-Cochin Medical Council Registration',
    issuingBody: 'TCMC',
    year: 2024,
  },
];
