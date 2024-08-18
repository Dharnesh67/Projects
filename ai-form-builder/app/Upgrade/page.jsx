import React from 'react'

const Upgrade = () => {
  const price = [
    {
      name: 'Yearly',
      link:"https://buy.stripe.com/test_6oEcNc8X0atu87u288"
    },
    {
      name: 'Monthly',
       link:"https://buy.stripe.com/test_00g00qa149pq9byfYZ"
    }
  ]

  return (
    <div className="m-10 flex h-[100vh] justify-center items-center gap-4">
      {price.map((plan, index) => (
        <div
          key={index}
          className="flex h-[50%] flex-col shadow-2xl rounded-xl bg-gray-100 marker:relative p-7 border-2 border-gray-300 transition duration-500 ease-out overflow-visible hover:border-blue-500 hover:shadow-lg"
        >
          <div className="px-6 py-8 sm:p-10 sm:pb-6">
            <div className="grid items-center justify-center w-full grid-cols-1 text-left">
              <div>
                <h2 className="text-5xl font-medium tracking-tighter text-slate-800 lg:text-5xl">
                  {plan.name}
                </h2>
                <p className="mt-2 text-sm text-slate-800">Suitable to grow steadily.</p>
              </div>
              <div className="mt-6">
                <p>
                  <span className="text-5xl font-light tracking-tight text-slate-800">
                    {plan.name === 'Yearly' ? '$15' : '$5'}
                  </span>
                  <span className="text-base font-medium text-slate-800"> /mo </span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex mt-auto px-6 pb-8 sm:px-8">
            <a
              aria-describedby="tier-company"
              className="flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black transition-colors"
              href={plan.link}
            >
              Get started
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Upgrade




// import React from 'react'

// const Upgrade = () => {
//   const price = [
//     {
//       name: 'Yearly',
//       link: "link"
//     },
//     {
//       name: 'Monthly',
//       link: "link"
//     }
//   ]

//   return (
//     <div className="m-10 flex h-[100vh] justify-center items-center gap-4">
//       {price.map((plan, index) => (
//         <div
//           key={index}
//           className="w-48 h-64 rounded-2xl bg-gray-100 relative p-7 border-2 border-gray-300 transition duration-500 ease-out overflow-visible hover:border-blue-500 hover:shadow-lg"
//         >
//           <div className="text-center h-full grid place-content-center gap-2">
//             <p className="text-xl font-bold">{plan.name}</p>
//             <p className="text-gray-600">Suitable to grow steadily.</p>
//           </div>
//           <a href={plan.link}>
//             <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-3/5 rounded-lg border-none bg-blue-600 text-white text-base py-2 opacity-0 transition duration-300 ease-out hover:bg-blue-700 hover:translate-y-1/2">
//               Get started
//             </button>
//           </a>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Upgrade
