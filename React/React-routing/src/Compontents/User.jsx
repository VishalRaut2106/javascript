import { Link, Outlet } from "react-router-dom";

const User = () => {
  return (
    <>
      <div className=" bg-zinc-500 m-auto w-1/2 mt-10 rounded-2xl p-10 ">
        <h1 className="text-5xl text-white font-bold">User</h1>
        <div className="flex w-1/2 flex-col mt-5 ">
          <Link
            className="p-3 bg-amber-300 text-2xl mb-3 hover:bg-amber-400 rounded-2xl"
            to="/user/vishal"
          >
            Vishal
          </Link>
          <Link
            className="p-3 bg-amber-300 text-2xl mb-3 hover:bg-amber-400 rounded-2xl"
            to="/user/Kiran"
          >
            Kiran
          </Link>
          <Link
            className="p-3 bg-amber-300 text-2xl mb-3 hover:bg-amber-400 rounded-2xl"
            to="/user/Pawan"
          >
            Pawan
          </Link>
        </div>
        <button className="p-3 bg-blue-300 hover:bg-blue-400 rounded-full ml-[40%]">
          Explore more
        </button>
      </div>
<hr />
      {/* Nested route outlet */}
      <Outlet />
    </>
  );
};

export default User;
