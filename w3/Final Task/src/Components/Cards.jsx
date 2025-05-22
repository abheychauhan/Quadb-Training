import React from 'react';

const Cards = () => {
  return (
    <div className="min-h-screen px-8 py-16  text-white font-sans">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-light italic">
          driven by{' '}
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
            data.
          </span>{' '}
          fueled by{' '}
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
            passion.
          </span>
        </h2>
                <div className='flex items-center justify-center mt-10'>
          <div className='w-3 h-3 rounded-full bg-white'></div>
          <div className='w-100 h-1 bg-white'></div>
          <div className='w-3 h-3 rounded-full bg-white'></div>
        </div>
        <h3 className="text-3xl font-semibold mt-6">A Powerful Tech Suite</h3>
        <p className="text-gray-300 mt-2">Contact us in case you require any of the below tools</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 px-4">
        
        <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl w-full border border-white/20 shadow-lg">
          <h4 className="text-xl font-bold mb-2">Restaurant POS</h4>
          <p className="text-lg text-gray-200 leading-relaxed">
            A Point of Sale for the Restaurant to ease the process of taking orders. Not just a POS,
            this package contains management of kitchen, inventory as well as an Admin dashboard.
            Along with this, a personalized mobile application for Dine In orders and Take Away
            orders is also available.
          </p>
        </div>

        
        <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl w-full border border-white/20 shadow-lg">
          <h4 className="text-xl font-bold mb-2">HRM</h4>
          <p className="text-lg text-gray-200 leading-relaxed">
            A Human Resource Management system to handle employee-related tasks efficiently. This
            package includes payroll management, attendance tracking, and performance evaluation
            tools. It also offers an employee self-service portal for seamless interaction.
          </p>
        </div>
         <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl w-full border border-white/20 shadow-lg">
          <h4 className="text-xl font-bold mb-2">Restaurant POS</h4>
          <p className="text-lg text-gray-200 leading-relaxed">
            A Point of Sale for the Restaurant to ease the process of taking orders. Not just a POS,
            this package contains management of kitchen, inventory as well as an Admin dashboard.
            Along with this, a personalized mobile application for Dine In orders and Take Away
            orders is also available.
          </p>
        </div>

    
        <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl w-full border border-white/20 shadow-lg">
          <h4 className="text-xl font-bold mb-2">HRM</h4>
          <p className="text-lg text-gray-200 leading-relaxed">
            A Human Resource Management system to handle employee-related tasks efficiently. This
            package includes payroll management, attendance tracking, and performance evaluation
            tools. It also offers an employee self-service portal for seamless interaction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
