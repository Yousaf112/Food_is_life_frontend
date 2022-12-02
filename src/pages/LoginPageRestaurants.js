import Header from "../components/HeaderForRestaurants";
import Login from "../components/LoginForRestaurants";

export default function LoginPageRestaurants() {
  return (
    <>
      <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <Header
            heading="Login to your Restaurant account"
            paragraph="Don't have an account yet? "
            linkName="Signup"
            linkUrl="/SignupforRestaurants"
          />
          <Login />
        </div>
      </div>
    </>
  );
}
