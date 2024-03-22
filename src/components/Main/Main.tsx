import EditProduct from '../EditProduct/EditProduct';
import Pagination from '../Pagination/Pagination';
import SearchBar from '../SearchBar/SearchBar';
import SideBar from '../SideBar/SideBar';
import Table from '../Table/Table';

const Main = () => {
  return (
    <div className="flex-1">
      <div className='flex'>
      <SideBar />
      <Table />
      </div>
      <Pagination />
    </div>
  );
};

export default Main;
