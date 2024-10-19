import { Link, useParams } from "react-router-dom";
import NotAvailable from "../components/NotAvailable";
import { getCategoryById } from "../utils/helper";
import Categories from "../lib/data/categories.json";

const CategoryView = () => {
  let { id } = useParams();
  const categoryFound = getCategoryById(id);

  if (!categoryFound) {
    window.scrollTo(0, 0);
    return <NotAvailable />;
  }
  console.log(categoryFound.title);
  return (
    <div className="_container flex gap-4">
      <div className="w-1/4 p-4 bg-gray-100 ">
        <h3 className="text-xl mb-4">Categories</h3>
        <ul>
          {Categories.map((category) => (
            <li key={category.id} className={`mb-2 p-2 hover:bg-gray-200`}>
              <Link
                to={`/cn/${category.title}/cid/${category.id}`}
                key={category.id}
                className="flex items-center gap-2"
              >
                <img
                  src={category.icon}
                  alt={category.title}
                  className="w-6 h-6"
                />
                <span>{category.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-3/4 p-4">
        <h2 className="text-2xl font-bold mb-4">{categoryFound.title}</h2>
      </div>
    </div>
  );
};

export default CategoryView;
