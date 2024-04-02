import { gql } from "@apollo/client";

export const CHARACTERS = gql`
  query (
    $speciesC: String
    $nameC: String
    $genderC: String
    $statusC: String
    $pageNum: Int
  ) {
    characters(
      filter: {
        name: $nameC
        species: $speciesC
        gender: $genderC
        status: $statusC
      }
      page: $pageNum
    ) {
      info {
        count
        pages
        next
        prev
      }
      results {
        name
        status
        image
        species
        gender
        origin {
          name
        }
        location {
          name
        }
      }
    }
  }
`;
