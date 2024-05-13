import { useAppContext } from "./context";

function UserInfo() {
  const { user, repos, setUser, setInputValue } = useAppContext()
  
  
  return (
    <>
      {user && (
        <div className="user-info-container">
          <img
            src={user.avatar_url}
            alt="user avatar"
            className="user-avatar"
          />
          <span className="user-name">{user.name}</span>
          <p className="user-bio">
            <b>BIO: </b>
            {user.bio}
          </p>
          <p className="user-location">
            <b>LOCATION: </b>
            {user.location}
          </p>
          <div className="repos-container">
            <p>
              <b>Repositories:</b>
            </p>

            {repos && (
              <ul>
                {repos.map((repo) => (
                  <li key={repo.id} className="repo">
                    {repo.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button
            className="reset"
            onClick={() => {
              setInputValue("");
              setUser(null);
            }}
          >
            Reset
          </button>
        </div>
      )}
    </>
  );
}

export default UserInfo;
