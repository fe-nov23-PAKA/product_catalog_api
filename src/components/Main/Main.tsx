// import EditProduct from '../EditProduct/EditProduct';
// import SearchBar from '../SearchBar/SearchBar';
import SideBar from '../SideBar/SideBar';

const Main = () => {
  return (
    <div className="flex-1">
      <div className="flex min-h-[calc(100vh-136px)]">
        <SideBar />
        <div className="flex flex-col min-h-[calc(100vh-140px)] bg-gray-800 border border-gray-700 rounded-lg w-full text-white items-center justify-center text-[100px]">
          <p>Select a table</p>
          <p>from the navbar</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
