import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";

export default function Login() {
  const clientId = import.meta.env.VITE_CLIENT_ID;

  const onSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    if ("profileObj" in res) {
      console.log("Login Success! Current user: ", res.profileObj);
    }
  };

  const onFailure = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    console.log("Login Failed! res: ", res);
  };

  return (
    <div className="bg-white">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}
