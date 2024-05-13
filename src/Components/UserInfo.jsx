import propTypes from "prop-types";

function UserInfo({ user, repos, setUser, setInputValue }) {
  return (
    <>
      {user ? (
        <div className="user-info-container">
          <img
            src={user.avatar_url}
            alt="user avatar"
            className="user-avatar"
          />
          <span className="user-name">{user.name ?? "(no name)"}</span>
          <p className="user-bio">
            <b>BIO: </b>
            {user.bio ?? "(no bio)"}
          </p>
          <p className="user-location">
            <b>LOCATION: </b>
            {user.location ?? "(no location)"}
          </p>
          <div className="repos-container">
            <p>
              <b>Repositories:</b>
            </p>

            {repos && (
              <ul>
                {repos.map((repo) => (
                  <li key={repo.id} className="repo">
                    <a href={repo.html_url} target="_blank">
                      {repo.name}
                    </a>
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
      ) : (
        <div className="user-info-container">
          <p>Username not found.</p>
        </div>
      )}
    </>
  );
}

UserInfo.propTypes = {
  user: propTypes.object,
  repos: propTypes.array,
  setUser: propTypes.func,
  setInputValue: propTypes.func,
};

export default UserInfo;
