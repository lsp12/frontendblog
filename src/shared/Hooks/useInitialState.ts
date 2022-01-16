import { useAppSelector } from '../Store/Hook';

const useInitialFormState = () => {
  const { post } = useAppSelector(( state ) => state.appSlice );
  return {
    id: post?._id || '',
    title: post?.title || '',
    body: post?.body || '',
  };
};

export default useInitialFormState;
