// import EditProduct from '../EditProduct/EditProduct';
import Pagination from '../Pagination/Pagination';
// import SearchBar from '../SearchBar/SearchBar';
import SideBar from '../SideBar/SideBar';
import Table from '../Table/Table';

const Main = () => {
  return (
    <div className="flex-1">
      <div className="flex">
        <SideBar />
        <div className="flex flex-col justify-between w-full mb-12">
          <Table />
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Main;
