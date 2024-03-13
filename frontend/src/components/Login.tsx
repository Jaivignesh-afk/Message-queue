export default function Login() {
  return (
    <div className="container">
      <div className="row">
        <div className="columns-1">
          <h2>Login</h2>
          <form>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="rounded-xl" />
            </div>
            <div className="form-group">
                <p className="text-blue">Hello</p>
              <label>Password</label>
              <input type="password" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
