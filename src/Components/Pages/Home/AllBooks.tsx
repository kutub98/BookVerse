const AllBooks = () => {
  return (
    <>
      <div className="max-w-screen-xl p-5 mx-auto dark:bg-gray-800 dark:text-gray-100">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-1">
          <div
            className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
            }}
          >
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-3 py-2 text-xs font-semibold tracki uppercase dark:text-gray-100 bgundefined"
              >
                Politics
              </a>
              <div className="flex flex-col justify-start text-center dark:text-gray-100">
                <span className="text-3xl font-semibold leadi tracki">04</span>
                <span className="leadi uppercase">Aug</span>
              </div>
            </div>
            <h2 className="z-10 p-5">
              <a
                rel="noopener noreferrer"
                href="#"
                className="font-medium text-md hover:underline dark:text-gray-100"
              >
                {' '}
                Autem sunt tempora mollitia magnam non voluptates
              </a>
            </h2>
          </div>
          <div
            className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
            }}
          >
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-3 py-2 text-xs font-semibold tracki uppercase dark:text-gray-100 bgundefined"
              >
                Health
              </a>
              <div className="flex flex-col justify-start text-center dark:text-gray-100">
                <span className="text-3xl font-semibold leadi tracki">01</span>
                <span className="leadi uppercase">Aug</span>
              </div>
            </div>
            <h2 className="z-10 p-5">
              <a
                rel="noopener noreferrer"
                href="#"
                className="font-medium text-md hover:underline dark:text-gray-100"
              >
                Inventore reiciendis aliquam excepturi
              </a>
            </h2>
          </div>
          <div
            className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
            }}
          >
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-3 py-2 text-xs font-semibold tracki uppercase dark:text-gray-100 bgundefined"
              >
                Science
              </a>
              <div className="flex flex-col justify-start text-center dark:text-gray-100">
                <span className="text-3xl font-semibold leadi tracki">28</span>
                <span className="leadi uppercase">Jul</span>
              </div>
            </div>
            <h2 className="z-10 p-5">
              <a
                rel="noopener noreferrer"
                href="#"
                className="font-medium text-md hover:underline dark:text-gray-100"
              >
                Officiis mollitia dignissimos commodi optio vero animi
              </a>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllBooks;
