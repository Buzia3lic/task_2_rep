
const temp = () => {
   
       fetch('http://localhost:3000/db')
          .then((res) => res.json())
          .then((data) => {
             console.log(data);
          })

    return 
 };

 export default temp;