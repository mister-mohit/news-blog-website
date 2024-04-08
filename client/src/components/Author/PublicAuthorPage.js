import { Navigate } from "react-router-dom";


const PublicAuthorPage = () => {
  const profile = true;
  console.log("here at public");

  if (profile) {
    return <Navigate to='/author' />
  }

  return <div>PublicAuthorPage</div>;
};

export default PublicAuthorPage;
