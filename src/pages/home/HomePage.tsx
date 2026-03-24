import type { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/providers/store/hooks';
import { useGetUsersQuery } from '@/entities/user';
import { UsersList } from '@/entities/user';
import { setSearch } from '@/features';
import { SearchInput } from '@/shared/ui';

export function HomePage() {
  const dispatch = useAppDispatch();
  const { search } = useAppSelector((state) => state.search);
  const { data, isError, isLoading } = useGetUsersQuery(search);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();

    dispatch(setSearch(value));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Some error</div>;
  }

  return (
    <section>
      <h1>Home page</h1>
      <hr />
      <SearchInput value={search} onInputChange={handleInputChange} />
      <hr />
      {data?.length ? (
        <UsersList users={data} />
      ) : (
        <div>The user list is empty</div>
      )}
    </section>
  );
}
