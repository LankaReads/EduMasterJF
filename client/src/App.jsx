import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/auth-context'; // Use named import

import Home from './pages/home/Home.jsx';
import About from './pages/about/About.jsx';
import Courses from './pages/courses/Courses.jsx';
import SignIn from './pages/signin/StudentSignIn.jsx';
import OpenCourse from './pages/OpenCourse/OpenCourse.jsx';
import Programs from './pages/Programs/Programs.jsx';
import StudentDashboard from './pages/StudentDashboard/StudentDashboard.jsx';
import StudentUserProfile from './pages/StudentUserProfile/StudentUserProfile.jsx';
import TeacherDashboard from './pages/TeacherDashboard/TeacherDashboard.jsx';
import TeacherUserProfile from './pages/TeacherUserProfile/TeacherUserprofile.jsx';
import TeacherOpenCourse from './pages/TeacherOpenCourse/TeacherOpenCourse.jsx';
import AdminCourse from './pages/AdminCourse/AdminCourse.jsx';
import TeacherSignIn from './pages/signin/TeacherSignIn.jsx';
import AdminDashboard from './pages/AdminDashBoard/AdminDashBoard.jsx'
import Blogs from './pages/Blogs/Blogs';
import AdminBlog from './pages/AdminBlogs/AdminBlogs';
import Researchers from './pages/Researchers/Researchers';
import Projects from './pages/Projects/Projects';
import Posts from './pages/Post/Post';
import AdminPostManagement from './pages/AdminPost/AdminPost';
import AdminPostForm from './pages/AdminPost/AdminPost';
import AdminPosts from './pages/AdminPost/AdminPost';
import ContactForm from './pages/Contact/Contact';
import AdminResearch from './pages/AdminResearch/AdminResearch';
import AdminProject from './pages/AdminProject/AdminProject';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/studentPortal' element={<SignIn />} />
        <Route path='/teacherPortal' element={<TeacherSignIn />} />
        <Route path="/teachersignin" element={<TeacherSignIn />} />
        <Route path='/opencourse/:courseId' element={<OpenCourse />} />
        <Route path='/programs' element={<Programs />} />
        <Route path='/studentdashboard' element={<StudentDashboard />} />
        <Route path='/studentuserprofile' element={<StudentUserProfile />} />
        <Route path='/teacherdashboard' element={<TeacherDashboard />} />
        <Route path='/teacheruserprofile' element={<TeacherUserProfile />} />
        <Route path='/teacheropencourse/:courseId' element={<TeacherOpenCourse />} />
        <Route path='/admincourse' element={<AdminCourse />} />
        <Route path='/admindashboard' element={<AdminDashboard />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/adminblogs' element={<AdminBlog />} />
        <Route path='/researchers' element={<Researchers />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/adminposts' element={<AdminPosts />} />       
        <Route path='/post' element={<Posts />} />
        <Route path='/contact' element={<ContactForm />} />
        <Route path='/adminresearch' element={<AdminResearch />} />
        <Route path='/adminprojects' element={<AdminProject />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
