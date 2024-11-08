import { gql } from '@apollo/client';

export const TASK_COUNT_QUERY = gql`
  query TaskCount {
    taskCount
  }
`;