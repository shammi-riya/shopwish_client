import { Link } from 'react-router-dom';
import { categoriesData } from '../Api/categoriesData';


const CatogoryItem = () => {
  

  return (
    <div className="list-group list-group d-lg-block d-none d-sm-block fixed">
      {categoriesData.map(({category,icon:Icon}) => (
        <Link
          key={category}
          to={`/shop/${category}`}
          className="list-group-item rounded list-group-item rounded-action py-3 fs-5 fw-semibold"
        >
         <span > <Icon/></span>
        <span className='ps-2'>  {category}</span>
          
        </Link>
      ))}
    </div>
  );
};

export default CatogoryItem;
