/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Admin = {
  __typename?: 'Admin';
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  id: Scalars['Int'];
  updatedAt: Scalars['String'];
};

export type AreaOfExpertise = {
  __typename?: 'AreaOfExpertise';
  id: Scalars['Int'];
  industry: Scalars['String'];
  role: Scalars['String'];
  sector: Scalars['String'];
};

export type AreaOfExpertiseInput = {
  id?: InputMaybe<Scalars['Int']>;
  industry: Scalars['String'];
  role: Scalars['String'];
  sector: Scalars['String'];
};

export type AssistantContactInfo = {
  __typename?: 'AssistantContactInfo';
  email: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
};

export type AssistantContactInfoInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
};

export type ContactInfo = {
  __typename?: 'ContactInfo';
  alternatePhoneInfo?: Maybe<PhoneInfo>;
  confirmEmail: Scalars['String'];
  email: Scalars['String'];
  fax: Scalars['String'];
  instanceMessengerInfo: InstanceMessengerInfo;
  phoneInfo: PhoneInfo;
};

export type ContactInfoInput = {
  alternatePhoneInfo?: InputMaybe<PhoneInfoInput>;
  confirmEmail: Scalars['String'];
  email: Scalars['String'];
  fax: Scalars['String'];
  instanceMessengerInfo: InstanceMessengerInfoInput;
  phoneInfo: PhoneInfoInput;
};

export type CreateAdminInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type CreateMemberInput = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type CreateProfileInput = {
  assistantContactInfos: Array<AssistantContactInfoInput>;
  contactInfo: ContactInfoInput;
  employmentHistory: EmploymentHistoryInput;
  expertiseHistory: ExpertiseHistoryInput;
  misc: MiscInput;
  participations: Array<Participation>;
  personalInfo: PersonalInfoInput;
  residenceAddress: ResidenceAddressInput;
};

export type CreateTermInput = {
  content: Scalars['String'];
  isRequired: Scalars['Boolean'];
  title: Scalars['String'];
};

export type EmploymentHistory = {
  __typename?: 'EmploymentHistory';
  id: Scalars['Int'];
  items?: Maybe<Array<Maybe<EmploymentHistoryItem>>>;
  yearsOfExperience: YearsOfExperience;
};

export type EmploymentHistoryInput = {
  items: Array<EmploymentHistoryItemInput>;
  yearsOfExperience: YearsOfExperience;
};

export type EmploymentHistoryItem = {
  __typename?: 'EmploymentHistoryItem';
  employerName: Scalars['String'];
  endedAt: Scalars['String'];
  id: Scalars['Int'];
  isCurrentlyEmployed: Scalars['Boolean'];
  jobTitle: Scalars['String'];
  startedAt: Scalars['String'];
};

export type EmploymentHistoryItemInput = {
  employerName: Scalars['String'];
  endedAt: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  isCurrentlyEmployed: Scalars['Boolean'];
  jobTitle: Scalars['String'];
  startedAt: Scalars['String'];
};

export type ExpertiseHistory = {
  __typename?: 'ExpertiseHistory';
  areaList: Array<AreaOfExpertise>;
  id: Scalars['Int'];
  keywords: KeywordsOfExpertise;
};

export type ExpertiseHistoryInput = {
  areaList: Array<AreaOfExpertiseInput>;
  keywords: KeywordsOfExpertiseInput;
};

export type InstanceMessengerInfo = {
  __typename?: 'InstanceMessengerInfo';
  address: Scalars['String'];
  type: InstanceMessengerType;
};

export type InstanceMessengerInfoInput = {
  address: Scalars['String'];
  type: InstanceMessengerType;
};

export enum InstanceMessengerType {
  Aol = 'AOL',
  Msn = 'MSN',
  Other = 'Other',
  Skype = 'Skype',
  Yahoo = 'Yahoo'
}

export type KeywordsOfExpertise = {
  __typename?: 'KeywordsOfExpertise';
  boardCertifications: Array<Scalars['String']>;
  companyExperience: Array<Scalars['String']>;
  drugsAndTechnology: Array<Scalars['String']>;
  productExperience: Array<Scalars['String']>;
  researchInterests: Array<Scalars['String']>;
};

export type KeywordsOfExpertiseInput = {
  boardCertifications: Array<Scalars['String']>;
  companyExperience: Array<Scalars['String']>;
  drugsAndTechnology: Array<Scalars['String']>;
  productExperience: Array<Scalars['String']>;
  researchInterests: Array<Scalars['String']>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
  user: UserModel;
};

export type Member = {
  __typename?: 'Member';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

export type Misc = {
  __typename?: 'Misc';
  biography: Scalars['String'];
  complianceConflicts: Scalars['String'];
  linkedInProfileLink: Scalars['String'];
  resumeLink: Scalars['String'];
  socialMediaProfiles?: Maybe<Array<SocialMediaProfile>>;
};

export type MiscInput = {
  biography: Scalars['String'];
  complianceConflicts: Scalars['String'];
  linkedInProfileLink: Scalars['String'];
  resumeLink: Scalars['String'];
  socialMediaProfiles: Array<SocialMediaProfileInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAdmin: Admin;
  createMember: Member;
  createProfileOwn: Profile;
  createSuperAdmin: Admin;
  createTerm: Term;
  removeAdmin?: Maybe<Admin>;
  removeMemberForAdmin?: Maybe<Member>;
  removeMemberOwn?: Maybe<Member>;
  removeTerm?: Maybe<Term>;
  resetAdminPassword: Admin;
  resetMemberPassword: Member;
  updateAdminPassword: Admin;
  updateMemberOwnPassword: Member;
  updateProfileOwn: Profile;
  updateTerm: Term;
};


export type MutationCreateAdminArgs = {
  createAdminInput: CreateAdminInput;
};


export type MutationCreateMemberArgs = {
  createMemberInput: CreateMemberInput;
};


export type MutationCreateProfileOwnArgs = {
  createProfileInput: CreateProfileInput;
};


export type MutationCreateSuperAdminArgs = {
  createAdminInput: CreateAdminInput;
};


export type MutationCreateTermArgs = {
  createTermInput: CreateTermInput;
};


export type MutationRemoveAdminArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveMemberForAdminArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveTermArgs = {
  id: Scalars['Int'];
};


export type MutationResetAdminPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetMemberPasswordArgs = {
  email: Scalars['String'];
};


export type MutationUpdateAdminPasswordArgs = {
  input?: InputMaybe<UpdateAdminPasswordInput>;
};


export type MutationUpdateMemberOwnPasswordArgs = {
  input?: InputMaybe<UpdateMemberOwnPasswordInput>;
};


export type MutationUpdateProfileOwnArgs = {
  updateProfileInput: UpdateProfileInput;
};


export type MutationUpdateTermArgs = {
  updateTermInput: UpdateTermInput;
};

export type PageMetaData = {
  __typename?: 'PageMetaData';
  isFirst: Scalars['Boolean'];
  isLast: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  offset: Scalars['Int'];
  pageNumber: Scalars['Int'];
  pageSize: Scalars['Int'];
  totalItemCount: Scalars['Int'];
  totalPageCount: Scalars['Int'];
};

export type PageRequest = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};

export enum Participation {
  ExpertWitness = 'ExpertWitness',
  InPersonMeetings = 'InPersonMeetings',
  LongTermEngagement = 'LongTermEngagement',
  PhoneConsultations = 'PhoneConsultations',
  QuickPolls = 'QuickPolls',
  Surveys = 'Surveys'
}

export type PersonalInfo = {
  __typename?: 'PersonalInfo';
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  middleInitial: Scalars['String'];
  prefix: Prefix;
  suffix: Scalars['String'];
};

export type PersonalInfoInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  middleInitial: Scalars['String'];
  prefix: Prefix;
  suffix: Scalars['String'];
};

export type PhoneInfo = {
  __typename?: 'PhoneInfo';
  number: Scalars['String'];
  type: PhoneType;
};

export type PhoneInfoInput = {
  number: Scalars['String'];
  type: PhoneType;
};

export enum PhoneType {
  Business = 'Business',
  Fax = 'Fax',
  Mobile = 'Mobile',
  Personal = 'Personal'
}

export enum Prefix {
  Dr = 'Dr',
  Mr = 'Mr',
  Mrs = 'Mrs',
  Ms = 'Ms'
}

export type Profile = {
  __typename?: 'Profile';
  assistantContactInfos?: Maybe<Array<AssistantContactInfo>>;
  contactInfo: ContactInfo;
  employmentHistory: EmploymentHistory;
  expertiseHistory: ExpertiseHistory;
  id: Scalars['Int'];
  misc: Misc;
  participations?: Maybe<Array<Participation>>;
  personalInfo: PersonalInfo;
  residenceAddress: ResidenceAddress;
};

export type ProfileParams = {
  pageRequest?: InputMaybe<PageRequest>;
};

export type Profiles = {
  __typename?: 'Profiles';
  items: Array<Profile>;
  metaData: PageMetaData;
};

export type Query = {
  __typename?: 'Query';
  admin?: Maybe<Admin>;
  adminLogin: LoginResponse;
  admins: Array<Admin>;
  login: LoginResponse;
  memberForAdmin: Member;
  memberOwn: Member;
  membersForAdmin: Array<Member>;
  profileForAdmin: Profile;
  profileOwn: Profile;
  profilesForAdmin: Profiles;
  requestFileUploadSignedUrl: Scalars['String'];
  term?: Maybe<Term>;
  terms: Terms;
};


export type QueryAdminArgs = {
  id: Scalars['Int'];
};


export type QueryAdminLoginArgs = {
  loginInput: LoginInput;
};


export type QueryLoginArgs = {
  loginInput: LoginInput;
};


export type QueryMemberForAdminArgs = {
  id: Scalars['Int'];
};


export type QueryProfileForAdminArgs = {
  id: Scalars['Int'];
};


export type QueryProfilesForAdminArgs = {
  params?: InputMaybe<ProfileParams>;
};


export type QueryRequestFileUploadSignedUrlArgs = {
  fileKey?: InputMaybe<Scalars['String']>;
};


export type QueryTermArgs = {
  id: Scalars['Int'];
};


export type QueryTermsArgs = {
  params?: InputMaybe<TermsParams>;
};

export type ResidenceAddress = {
  __typename?: 'ResidenceAddress';
  city: Scalars['String'];
  country: Scalars['String'];
  postalCode: Scalars['String'];
  street1: Scalars['String'];
  street2: Scalars['String'];
  street3: Scalars['String'];
  timeZone: Scalars['String'];
};

export type ResidenceAddressInput = {
  city: Scalars['String'];
  country: Scalars['String'];
  postalCode: Scalars['String'];
  street1: Scalars['String'];
  street2: Scalars['String'];
  street3: Scalars['String'];
  timeZone: Scalars['String'];
};

export type SocialMediaProfile = {
  __typename?: 'SocialMediaProfile';
  link: Scalars['String'];
  type: SocialMediaType;
};

export type SocialMediaProfileInput = {
  link: Scalars['String'];
  type: SocialMediaType;
};

export enum SocialMediaType {
  Facebook = 'Facebook',
  Instagram = 'Instagram',
  LinkedIn = 'LinkedIn',
  Other = 'Other',
  Twitter = 'Twitter',
  Youtube = 'Youtube'
}

export type Term = {
  __typename?: 'Term';
  content: Scalars['String'];
  createdAt: Scalars['String'];
  deletedAt?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  isRequired: Scalars['Boolean'];
  title: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Terms = {
  __typename?: 'Terms';
  items: Array<Term>;
  metaData: PageMetaData;
};

export type TermsParams = {
  pageRequest?: InputMaybe<PageRequest>;
};

export type UpdateAdminPasswordInput = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};

export type UpdateMemberOwnPasswordInput = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};

export type UpdateProfileInput = {
  assistantContactInfos?: InputMaybe<Array<AssistantContactInfoInput>>;
  contactInfo?: InputMaybe<ContactInfoInput>;
  employmentHistory?: InputMaybe<EmploymentHistoryInput>;
  expertiseHistory?: InputMaybe<ExpertiseHistoryInput>;
  misc?: InputMaybe<MiscInput>;
  participations?: InputMaybe<Array<Participation>>;
  personalInfo?: InputMaybe<PersonalInfoInput>;
  residenceAddress?: InputMaybe<ResidenceAddressInput>;
};

export type UpdateTermInput = {
  content?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  isRequired?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UserModel = {
  __typename?: 'UserModel';
  email: Scalars['String'];
  role: Scalars['String'];
  userId: Scalars['Int'];
};

export enum YearsOfExperience {
  Between1And5 = 'Between1And5',
  Between6And10 = 'Between6And10',
  Between11And15 = 'Between11And15',
  Over16 = 'Over16'
}
