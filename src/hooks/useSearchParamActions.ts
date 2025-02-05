import { useAppDispatch } from "@/redux/hooks";
import { searchParamsActions } from "@/redux/slices/searchParamSlice";

export const useSearchParamActions = () => {
  const dispatch = useAppDispatch();

  const updateSearchValue = (value: string) => {
    dispatch(searchParamsActions.updateSearchValue(value));
  };

  const updateFilterCategory = (category: string) => {
    dispatch(searchParamsActions.updateFilterCategory(category));
  };

  return {
    updateSearchValue,
    updateFilterCategory,
  };
};
