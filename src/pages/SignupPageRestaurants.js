import Header from "../components/HeaderForRestaurants";
import Signup from "../components/SignupForRestaurants";

export default function SignupPageRestaurants() {
  return (
    <>
      <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <Header
            heading="Signup to create Restaurant account"
            paragraph="Already have an account? "
            linkName="Login"
            linkUrl="/loginForRestaurants"
          />

          <Signup />
        </div>
      </div>
    </>
  );
}
