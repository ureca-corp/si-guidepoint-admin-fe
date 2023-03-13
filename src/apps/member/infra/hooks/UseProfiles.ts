import { Profiles, QueryProfilesForAdminArgs } from "@/gql/graphql";
import { gql, useQuery } from "@apollo/client";

type Response = {
  profilesForAdmin: Profiles;
};

const FETCH_PROFILES = gql`
  query Query($params: ProfileParams) {
    profilesForAdmin(params: $params) {
      items {
        id
        memberId
        personalInfo {
          firstName
          middleInitial
          lastName
        }
        contactInfo {
          phoneInfo {
            type
            number
          }
          confirmEmail
        }
        participations
        residenceAddress {
          city
          country
        }
        createdAt
        deletedAt
      }
      metaData {
        totalPageCount
      }
    }
  }
`;

export const useProfiles = (args: QueryProfilesForAdminArgs) => {
  return useQuery<Response>(FETCH_PROFILES, {
    variables: args,
  });
};
