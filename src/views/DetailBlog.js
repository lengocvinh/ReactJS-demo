import { useParams, useHistory } from "react-router-dom";
import useFetch from "../customize/fetch";
import "./Blog.scss";
const DetailBlog = () => {
  let { id } = useParams();
  let history = useHistory();
  const dataBlogDetail = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    false
  );
  const handleBackData = () => {
    history.push("/blog");
  };
  return (
    <>
      <div>
        <span onClick={handleBackData}> &lt;-- </span>
      </div>
      <div className="blog-detail">
        {dataBlogDetail.dataCovid && (
          <>
            <div className="title">
              Blog ID : {id} --{dataBlogDetail.dataCovid.title}
            </div>
            <div className="content">{dataBlogDetail.dataCovid.body}</div>
          </>
        )}
      </div>
    </>
  );
};
export default DetailBlog;
