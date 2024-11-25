import { gql, useLazyQuery, useMutation } from "@apollo/client";
import { LoginResult } from "../graphql/schema";

export const WriteAccount_Mutation = gql`
  mutation WriteAccount($input: AccountInput!) {
    writeAccount(input: $input)
  }
`;

export const useWriteAccountMutation = ({
  onCompleted,
}: {
  onCompleted: () => void;
}) => {
  const [writeAccount, { loading, error }] = useMutation(
    WriteAccount_Mutation,
    {
      onCompleted: () => onCompleted(),
    }
  );
  return {
    writeAccount,
    loading,
    error,
  };
};

export const loginQuery = gql`
  query Login($name: String!, $password: String!) {
    login(name: $name, password: $password) {
      email
      password
      id
      accesstoken
      diets
    }
  }
`;

export const accountMutation = gql`
  mutation UpdateAccount($input: AccountInput!, $id: String!) {
    updateAccount(input: $input, id: $id)
  }
`;

export const useLoginQuery = ({
  onCompleted,
  name,
  password,
}: {
  name: string;
  password: string;
  onCompleted: (account: LoginResult) => void;
}) => {
  const [login, { loading, data, error }] = useLazyQuery(loginQuery, {
    onCompleted: (result) => {
      onCompleted(result);
    },
    variables: {
      name: name,
      password: password,
    },
  });
  return { login, loading, data, error };
};

export const useUpdateAccountMutation = ({
  onCompleted,
}: {
  onCompleted: () => void;
}) => {
  const [updateAccount, { loading, error }] = useMutation(accountMutation, {
    onCompleted: () => onCompleted(),
  });
  return {
    updateAccount,
    loading,
    error,
  };
};
