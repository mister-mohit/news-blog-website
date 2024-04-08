import { Navigate } from 'react-router-dom';
import AuthorHome from "../../pages/Author/AuthorHome";

const PrivateAuthorPage = () => {
  const profile = true;

  if (!profile) {
    return <Navigate to='/signin' />
  }

  return (
    <>
      <AuthorHome />
    </>
  );
};

export default PrivateAuthorPage;
