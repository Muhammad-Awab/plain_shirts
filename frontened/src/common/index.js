const backenedDomain = 'http://localhost:5000';

const SummaryApi={
    SignUp:{
        url:`${backenedDomain}/api/signup`,
        method:'POST',
    },
    signin:{
        url:`${backenedDomain}/api/signin`,
        method:'POST',
    },
    current_user:{
        url:`${backenedDomain}/api/user-details`,
        method:'GET',
    },

    
}
export default SummaryApi;