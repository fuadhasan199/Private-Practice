import React from 'react';
import { useLoaderData } from 'react-router';

const Home = () => { 
 
    const cards=useLoaderData() 
    console.log(cards)

    return (
        <div>
            <h1 className='text-center text-5xl font-bold mt-5'>This is information </h1>  

          <div className="mt-10 flex gap-5 flex-wrap container mx-auto "> 


         {
             cards.map(card=>( 

            
               

             <div className="card bg-base-100 w-96 shadow-sm ">
  <figure>
    <img src={card.imgUrl}
                     alt="Shoes" className='h-[250px]' />
              </figure>
                     <div className="card-body">
              <h2 className="card-title">{card.title}</h2>
               <p>{card.description}</p>
               <div className="card-actions justify-end">
             <button className="btn btn-primary">Explore now</button> 
                  </div>
                </div>
</div>



               ))
         }





          </div>
            
        </div>
    );
};

export default Home;