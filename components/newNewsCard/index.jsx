import React from "react";

const NewNewsCard = () => {
  const newsArray = [1, 2, 3, 4, 5, 6];

  return (
    <div className="flex mx-4 flex-no-wrap overflow-x-scroll my-5">
      {newsArray.map((item, index) => {
        return (
          <div
            className="w-60 flex-none my-4 mx-2 bg-blue-50 shadow-md shadow-red-500 "
            key={index}
          >
            <div>
              <img
                src="https://res.cloudinary.com/dm8ztqorc/image/upload/v1639237282/yrhrloc9q23wzq15wpcn.webp"
                alt="image"
              />
            </div>
            <div className="p-2">
              <h2 className="font-bold">
                बिलासपुर एसपी पारुल माथुर ने शहर के प्रमुख चौक चौराहों का
                निरीक्षण कर अधिकारियों को आदेश
              </h2>
              <p className="text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatem veniam est cumque itaque distinctio eveniet repellat
                totam eligendi maiores iure?
              </p>
              <div className="flex justify-center mt-2">
                <button className="text-white bg-blue-600 py-1 px-5 rounded-lg">
                  पूरा पढ़ें
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NewNewsCard;
