
// export const signUpFormControls = [
//     {
//         name : 'userName',
//         label : 'User Name',
//         Placeholder : 'Enter Your User Name',
//         type : 'text',
//         componentType : 'input' 
//     },
//     {
//         name : 'userEmail',
//         label : 'User email',
//         Placeholder : 'Enter Your User Email',
//         type : 'email',
//         componentType : 'input'
//     },{
//         name : 'password',
//         label : 'Password',
//         Placeholder : 'Enter Your Password',
//         type : 'password',
//         componentType : 'input'
//     }
// ];

// export const signInFormControls = [

//     {
//         name : 'userEmail',
//         label : 'User email',
//         Placeholder : 'Enter Your User Email',
//         type : 'email',
//         componentType : 'input'
//     },{
//         name : 'password',
//         label : 'Password',
//         Placeholder : 'Enter Your Password',
//         type : 'password',
//         componentType : 'input'
//     }
// ];

export const signInFormControls = [
    { name: 'userEmail', label: 'Email', placeholder: 'Enter your email', type: 'email', componentType: 'input' },
    { name: 'password', label: 'Password', placeholder: 'Enter your password', type: 'password', componentType: 'input' },
  ];
  
  export const signUpFormControls = [
    { name: 'userName', label: 'Name', placeholder: 'Enter your name', type: 'text', componentType: 'input' },
    { name: 'userEmail', label: 'Email', placeholder: 'Enter your email', type: 'email', componentType: 'input' },
    { name: 'password', label: 'Password', placeholder: 'Enter your password', type: 'password', componentType: 'input' },
  ];

export const initialSignInFormData = {
    userEmail : "",
    password : "",
};

export const initialSignUpFormData = {
    userName : "",
    userEmail : "",
    password : "",
};