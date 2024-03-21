import EditProduct from '../EditProduct/EditProduct';
import SearchBar from '../SearchBar/SearchBar';

const Main = () => {
  return (
    <div className="flex-1">
      <SearchBar />
      <EditProduct />
    </div>
  );
};

export default Main;
