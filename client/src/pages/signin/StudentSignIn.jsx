import React, { useContext, useState, useEffect } from 'react';
import '@/pages/signin/StudentSignIn.css';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CommonForm from '@/components/common-form';
import { signInFormControls, signUpFormControls } from '@/config';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AuthContext } from '@/contexts/auth-context';
import { useNavigate } from 'react-router-dom';

function Signin() {
  const [activeTab, setActiveTab] = useState('signin');
  const {
    signInFormData,
    setSignInFormData,
    signUpFormData,
    setSignUpFormData,
    handleRegisterUser,
    handleLoginUser,
    currentUser, // Access current user from AuthContext
  } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      // If a user is logged in, navigate to the dashboard
      navigate('/studentdashboard');
    }
  }, [currentUser, navigate]);

  function handleTabChange(value) {
    setActiveTab(value);
  }

  function checkSignInIsValid() {
    return signInFormData && signInFormData.userEmail && signInFormData.password;
  }

  function checkSignUpIsValid() {
    return signUpFormData && signUpFormData.userName && signUpFormData.userEmail && signUpFormData.password;
  }

  async function handleStudentSignUp(event) {
    event.preventDefault();
    try {
      await handleRegisterUser('student');
    } catch (error) {
      console.error('Error during student sign-up:', error);
    }
  }

  async function handleStudentSignIn(event) {
    event.preventDefault();
    try {
      await handleLoginUser();
    } catch (error) {
      console.error('Error during student sign-in:', error);
    }
  }

  return (
    <div className="d-flex min-vh-100 w-100">
      {/* Left side with background */}
      <div className="d-lg-flex align-items-center w-50">
        <div className="row w-100 m-0">
          <div className="col-lg-12 text-center bgLoginL"></div>
        </div>
      </div>

      {/* Right side with login/sign-up form */}
      <div className="d-flex align-items-center justify-content-center w-50">
        <div className="row w-100">
          <div className="flex items-center justify-center min-h-screen bg-background bgLoginR">
            {currentUser ? (
              <Card className="p-6 space-y-4">
                <CardHeader>
                  <CardTitle>Welcome, {currentUser.userName}!</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>You are now logged in as {currentUser.userEmail}.</p>
                  <button className="btn btn-primary" onClick={() => navigate('/studentdashboard')}>
                    Go to Dashboard
                  </button>
                </CardContent>
              </Card>
            ) : (
              <Tabs value={activeTab} defaultValue="signin" onValueChange={handleTabChange} className="w-full max-w-md">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="signin">Sign In</TabsTrigger>
                  <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>

                {/* Sign In Form */}
                <TabsContent value="signin">
                  <Card className="p-6 space-y-4">
                    <CardHeader>
                      <CardTitle>Sign In to Your Account</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <CommonForm
                        formControls={signInFormControls}
                        buttonText="Sign In"
                        formData={signInFormData}
                        setFormData={setSignInFormData}
                        isButtonDisabled={!checkSignInIsValid()}
                        handleSubmit={handleStudentSignIn}
                      />
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Sign Up Form */}
                <TabsContent value="signup">
                  <Card className="p-6 space-y-4">
                    <CardHeader>
                      <CardTitle>Register to EduMaster</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <CommonForm
                        formControls={signUpFormControls}
                        buttonText="Sign Up"
                        formData={signUpFormData}
                        setFormData={setSignUpFormData}
                        isButtonDisabled={!checkSignUpIsValid()}
                        handleSubmit={handleStudentSignUp}
                      />
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
