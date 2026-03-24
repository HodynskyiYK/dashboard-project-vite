import { useGetUsersQuery } from '@/entities/user';

export function HomePage() {
  const { data, isError, isLoading } = useGetUsersQuery();

  console.log({ data });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Some error</div>;
  }

  return <div>Home page</div>;
}
