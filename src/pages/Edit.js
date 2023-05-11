import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const navigator = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");
  console.log("id : ", id);

  const mode = searchParams.get("mode");
  console.log("mode : ", mode);

  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 일기 수정 페이지 입니다.</p>
      <button onClick={() => setSearchParams({ who: "hey0woo" })}>
        QS 바꾸기
      </button>

      <button
        onClick={() => {
          navigator("/home");
        }}
      >
        HOME으로 가기
      </button>
      <button
        onClick={() => {
          navigator(-1);
        }}
      >
        뒤로가기
      </button>
    </div>
  );
};

export default Edit;