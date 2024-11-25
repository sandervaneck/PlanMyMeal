import { gql, useLazyQuery } from "@apollo/client";
import { useSimpleQuery } from "../utils/apollo";
import { MyRecipesResult, Recipe } from "../graphql/schema";

const myRecipesQuery = gql`
  query MyRecipes($accountId: String!) {
    myrecipes(accountId: $accountId) {
      id
      quantity {
        quantity
        unit
      }
      name
      type
      method
      nutrition {
        kcal
        protein
        fats
        carbs
        sugar
        fibres
        salt
        saturedfats
      }
      img
      diets
      foods {
        quantity {
          quantity
          unit
        }
        food {
          name
        }
      }
      likes
      time
    }
  }
`;

export const useMyRecipesQuery = ({
  onCompleted,
  accountId,
}: {
  onCompleted: (recipes: MyRecipesResult) => void;
  accountId: String;
}) => {
  const { data, loading } = useSimpleQuery(myRecipesQuery, {
    variables: {
      accountId: accountId,
    },
    onCompleted: (result) => {
      onCompleted(result);
    },
  });
  return { data, loading };
};
