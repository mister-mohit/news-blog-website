import { Route, Routes } from "react-router-dom";
import PublicAuthorPage from "./components/Author/PublicAuthorPage";
import PrivateAuthorPage from "./components/Author/PrivateAuthorPage";
import Blog from "./pages/Author/Blog";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainLayout from "./pages/User/MainLayout";
import CategoryBlogs from "./components/User/CategoryBlogs";
import Home from "./components/User/Home";
import DisplayBlog from "./components/User/DisplayBlog";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/signin" element={<PublicAuthorPage />} />
        <Route path="/author" element={<PrivateAuthorPage />} />
        <Route path="/blog/:blogId" element={<Blog />} />
        <Route path="/" element={<MainLayout />} >
          <Route index element={<Home />} />
          <Route path="/:category" element={<CategoryBlogs />} />
          <Route path="/:blogId" element={<DisplayBlog />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
