import React, { useEffect, useState } from 'react'
import Cards from '../../components/Cards';
import { FaFilter } from 'react-icons/fa';


const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState('all');
  const [sortOption, setSortOption] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/menu.json');
        const data = await response.json();
        // console.log(data);
        setMenu(data);
        setFilteredData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  //  call the function
    fetchData();
  }, []);

  //filtering data based on category
  const filterData = (category) => {
    const filtered = category === 'all' ? menu : menu.filter(item => item.category === category); 
    setFilteredData(filtered);
    setSelectedCategories(category);
    setCurrentPage(1);
  };
//show all data function
const showAllData = () => {
  setFilteredData(menu);
  setSelectedCategories('all');
  setCurrentPage(1);
};

//sort data function
const handleSortChange = (option) => {
  setSortOption(option);
  let sortedItems = [...filteredData];

  //sorted items
  switch (option) {
    case 'A-Z':
      sortedItems.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'Z-A':
      sortedItems.sort((a, b) => b.name.localeCompare(a.name));
      break;
     case 'low-to-high':
      sortedItems.sort((a, b) => a.price - b.price);
      break;
    case 'high-to-low':
      sortedItems.sort((a, b) => b.price - a.price);
      break;
    default:
      break;
}

setFilteredData(sortedItems);
setCurrentPage(1);
  }

  // pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='section-container'>
        <div className='py-40 flex flex-col items-center justify-center gap-4'>
          <h2 className="md:text-5xl text-3xl font-bold md:leading-snug leading-snug">
            For the Love of DelicIOUS {" "}
            <span className="text-[#39DB4A]">Food</span>
          </h2>
          <p className=" text-xl text-[#4A4A4A] md:w-4/5 mx-auto">
            Come with family and feel the love and enjoy the mouthwatering food such as Greek Salad,Lasagna, 
            Butternut, Tokusan Wagyu, Olivas Ranelas and more for a moderate cost.
          </p>
          <button className="btn bg-green px-8 py-2 font-semibold text-white rounded-full">
            Order Now
          </button>
        </div>
        <div>
          {/* //filtering and sorting */}
          <div className='flex flex-col md:flex-row  flex-wrap items-center md:justify-between space-y-3 mb-8'>
            <div className='flex flex-row md:items-center justify-start md:gap-8 gap-4 flex-wrap'>
              <button onClick={showAllData} 
              className={selectedCategories === 'all' ? "active" : ''}>All</button>
              <button onClick={() => filterData('salad')}
                className={selectedCategories === 'salad' ? "active" : ''}>Salad</button>
              <button onClick ={() => filterData('pizza')}
                className={selectedCategories === 'pizza' ? "active" : ''}>Pizza</button>
              <button onClick={() => filterData('soup')}
                className={selectedCategories === 'soup' ? "active" : ''}>Soups</button>
              <button onClick={() => filterData('dessert')}
                className={selectedCategories === 'dessert' ? "active" : ''}>Desserts</button>
              <button onClick={() => filterData('drinks')}
                className={selectedCategories === 'drinks' ? "active" : ''}>Drinks</button>
            </div>
            <div className='flex justify-end mb-4 rounded-sm'>
              <div className='bg-black py-2'>
                <FaFilter className='h-4 w-4 text-white' />
                </div>
                {/* sorting option */}

                <select name='sort' id='sort' onChange={(e) => handleSortChange(e.target.value)}
                  value={sortOption}
                  className='bg-black text-white py-1 px-2 rounded-sm'
                  >
                  <option value='default'>Default</option>
                  <option value='A-Z'>A-Z</option>
                  <option value='Z-A'>Z-A</option>
                  <option value='low-to-high'>Low to High</option>
                  <option value='high-to-low'>High to Low</option>
                </select>
            </div>
          </div>
          {/* products card */}
          <div className='grid  md:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:gap-8'>
            {
              currentItems.map((item, i) => (
                <Cards key={item._id} item={item} />
              ))
            }
          </div>

        </div>
        {/* //pagination section */}
        <div className='flex justify-center my-8'>
          {
            Array .from({ length: Math.ceil(filteredData.length / itemsPerPage) }, (_, index) => (
              <button key={index} onClick={() => paginate(index + 1)}
                className={'mx-1 px-3 py-1 rounded-full ${currentPage === index + 1? "bg-green text-white" : "bg-gray"}'}
                >
                {index + 1}
              </button>
            ))
          }
        </div>
        </div>
  )
}

export default Menu