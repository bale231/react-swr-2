import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function useGithubUser(username) {
  const { data, error, mutate } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher
  );

  function fetchGithubUser() {
    mutate();
  }

  if (username === null) {
    return {
      users: null,
      error: null,
      isLoading: false,
      onFetchUser: fetchGithubUser(),
    };
  }

  return {
    users: data,
    error,
    isLoading: !data && !error,
    onFetchUser: fetchGithubUser(),
  };
}

export default useGithubUser;
