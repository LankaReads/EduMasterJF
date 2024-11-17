import axiosInstance from "@/api/axiosInstance";

// Register Student
export async function registerService(formData) {
  try {
    const { data } = await axiosInstance.post('/auth/student/signup', {
      ...formData,
      role: 'student',  // Adjust the role to 'student'
    });
    return data;
  } catch (error) {
    console.error('Error during registration:', error);
    throw error;
  }
}

// Student Login
export async function loginService(formData) {
  try {
    const { data } = await axiosInstance.post('/auth/student/login', formData);
    return data;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
}

// Check Auth Status
export const checkAuthService = async () => {
  try {
    const response = await axiosInstance.get('/auth/check-auth');
    return response.data;
  } catch (error) {
    console.error("Error in checkAuthService:", error);
    return { success: false };
  }
};
