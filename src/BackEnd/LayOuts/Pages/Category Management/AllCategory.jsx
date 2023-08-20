import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncFetchAllCategory } from "../../../../features/category/asynReducers/fetchAllcategory";
import { generateUniqueID } from "../../../../Helper/helper";
import { Link } from "react-router-dom";
import Button from "../../../../components/Button";
import { DeleteButtonStyle } from "../../../../Helper/style";

const AllCategory = () => {

  const dispatch = useDispatch();
  const category = useSelector((state) => state.categoryStore.allCategories);

  const categoryName = category?.map((cat) => console.log(cat.name))


  useEffect(() => {
    dispatch(asyncFetchAllCategory());
  }, [])

  return (
    <div>
      <h3 className="text-center">All Category</h3>
      <table>
        <thead>
          <tr>
            <th><input type="checkbox" name="" id="" /></th>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            category?.map(cat => <tr key={generateUniqueID()}>
              <td><input type="checkbox" name="" id="" /></td>
              <td>{cat._id}</td>
              <td>{cat.name}</td>
              <td>
                <Link to={`/dashboard/categories/categoryedit/${cat._id}`}><button>EDIT</button></Link>
                <Button label="Delete" style={DeleteButtonStyle} />
              </td>
            </tr>)
          }
        </tbody>
      </table>
    </div>
  )
}

export default AllCategory