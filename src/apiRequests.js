export const getAllProducts = async(successResult) => {
    try {
      const response = await fetch(`https://fake-coffee-api.vercel.app/api`);
      
      if(!response.ok) {
        throw new Error('Something went wrong');
      }
  
      const data = await response.json();
      return successResult(data);
    } catch(err) {
      console.log(err);
    }
}