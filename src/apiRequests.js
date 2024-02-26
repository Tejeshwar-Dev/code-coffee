// export const getAllProducts = async(successResult) => {
//     try {
//       const response = await fetch(`https://fake-coffee-api.vercel.app/api`);
      
//       if(!response.ok) {
//         throw new Error('Something went wrong');
//       }
  
//       const data = await response.json();
//       return successResult(data);
//     } catch(err) {
//       console.log(err);
//     }
// }

export const GET = async(url, successFn, errorFn) => {
  try {
    const response = await fetch(url);
    
    if(!response.ok) {
      throw new Error('Something went wrong');
    }

    const data = await response.json();
    return successFn(data);
  } catch(err) {
    errorFn(err);
  }
}