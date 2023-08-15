import Card from "./Card";

const page = () => {
  return (
    <div className={` w-full min-h-screen p-12`}>
      <div className="container mx-auto">
        {/* My Connections */}
        <div className="mt-12 mb-20">
          {" "}
          <h1 className="text-5xl font-bold mb-6">My Connections</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        {/* People you can also connect */}
        <div className="mt-12 mb-20">
          {" "}
          <h1 className="text-5xl font-bold mb-6">
            People you can also connect
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
