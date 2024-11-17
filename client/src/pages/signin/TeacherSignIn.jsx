import React, { useContext, useState } from 'react';
import './TeacherSignIn.css';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CommonForm from '@/components/common-form';
import { signInFormControls, signUpFormControls } from '@/config';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AuthContext } from '@/contexts/auth-context';
import { useNavigate } from 'react-router-dom';

function TeacherSignIn() {
  const [activeTab, setActiveTab] = useState('signin');
  const {
    signInFormData,
    setSignInFormData,
    signUpFormData,
    setSignUpFormData,
    handleRegisterUser,
    handleLoginUser,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleTabChange(value) {
    setActiveTab(value);
  }

  function checkSignInIsValid() {
    return signInFormData && signInFormData.userEmail && signInFormData.password;
  }

  function checkSignUpIsValid() {
    return signUpFormData && signUpFormData.userName && signUpFormData.userEmail && signUpFormData.password;
  }

  async function handleTeacherSignUp(event) {
    event.preventDefault();
    try {
      await handleRegisterUser('teacher');
    } catch (error) {
      console.error('Error during teacher sign-up:', error);
    }
  }

  async function handleTeacherSignIn(event) {
    event.preventDefault();
    try {
      await handleLoginUser();
      navigate('/teacherdashboard');
    } catch (error) {
      console.error('Error during teacher sign-in:', error);
    }
  }

  return (
    <div className="d-flex min-vh-100 w-100">
      <div className="d-lg-flex align-items-center w-50">
        <div className="row w-100 m-0">
          <div className="col-lg-12 text-center tbgLoginL"></div>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center w-50">
        <div className="row w-100">
          <div className="flex items-center justify-center min-h-screen bg-background bgLoginR">
            <Tabs value={activeTab} defaultValue="signin" onValueChange={handleTabChange} className="w-full max-w-md">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signin">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
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
                      handleSubmit={handleTeacherSignIn}
                    />
                  </CardContent>
                </Card>
              </TabsContent>
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
                      handleSubmit={handleTeacherSignUp}
                    />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherSignIn;
